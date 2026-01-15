'use client';

import { useState, useRef, useEffect } from 'react';
import { CAL_COM_URL } from '../../config/constants';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface UserInfo {
  name: string;
  email: string;
  company: string;
  budget: string;
  projectType: string;
}

export default function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm your AI assistant. I can help you learn about our projects, services, and pricing. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
  });
  const [userInfoSubmitted, setUserInfoSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          userInfo: userInfoSubmitted ? userInfo : null,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: `Sorry, I encountered an error: ${data.error}. ${data.error.includes('API key') ? 'Please check the API configuration.' : 'Please try again.'}`,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.message },
        ]);
      }
    } catch (error: any) {
      console.error('Error:', error);
      const errorMessage = error?.message || 'Sorry, I encountered an error. Please try again.';
      
      let displayMessage = '';
      if (errorMessage.includes('Rate limit') || errorMessage.includes('wait')) {
        displayMessage = `⏳ ${errorMessage}`;
      } else if (errorMessage.includes('API key') || errorMessage.includes('API_KEY')) {
        displayMessage = '⚠️ API key not configured. Please add GEMINI_API_KEY to your .env.local file.';
      } else {
        displayMessage = `Sorry, I encountered an error: ${errorMessage}. Please try again.`;
      }
      
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: displayMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserInfoSubmitted(true);
    setShowUserInfo(false);
    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        content: `Thanks for providing your information, ${userInfo.name || 'there'}! How can I help you today?`,
      },
    ]);
  };

  return (
    <div className="flex flex-col h-full bg-[var(--background)] overflow-hidden">
      {/* User Info Toggle Button - shown in header area */}
      {!userInfoSubmitted && (
        <div className="p-3 border-b border-[var(--border)] bg-[var(--background)] flex-shrink-0">
          <button
            onClick={() => setShowUserInfo(!showUserInfo)}
            className="w-full px-4 py-2 text-sm bg-[var(--primary)]/20 text-[var(--primary)] rounded-lg hover:bg-[var(--primary)]/30 transition-colors"
          >
            {showUserInfo ? 'Hide Info Form' : '+ Add Your Information'}
          </button>
        </div>
      )}

      {/* User Info Form */}
      {showUserInfo && !userInfoSubmitted && (
        <div className="p-4 bg-[var(--background)] border-b border-[var(--border)] flex-shrink-0">
          <form onSubmit={handleUserInfoSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Name"
                value={userInfo.name}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
                }
                className="px-3 py-2 text-sm rounded-lg bg-white/5 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
              />
              <input
                type="email"
                placeholder="Email"
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
                className="px-3 py-2 text-sm rounded-lg bg-white/5 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Company (optional)"
                value={userInfo.company}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, company: e.target.value })
                }
                className="px-3 py-2 text-sm rounded-lg bg-white/5 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
              />
              <select
                value={userInfo.budget}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, budget: e.target.value })
                }
                className="px-3 py-2 text-sm rounded-lg bg-white/5 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
              >
                <option value="">Budget</option>
                <option value="<10k">&lt; $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Project Type (e.g., MVP, SaaS, Mobile App)"
              value={userInfo.projectType}
              onChange={(e) =>
                setUserInfo({ ...userInfo, projectType: e.target.value })
              }
              className="w-full px-3 py-2 text-sm rounded-lg bg-white/5 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm bg-[var(--primary)] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Save Info
            </button>
          </form>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-[var(--primary)]/20 text-white'
                  : 'bg-white/5 border border-[var(--border)]'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-[var(--border)] rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce" />
                <span
                  className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                />
                <span
                  className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-[var(--border)] bg-[var(--background)] flex-shrink-0 space-y-3">
        {/* Schedule Meeting Button */}
        <a
          href={CAL_COM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 rounded-xl hover:from-emerald-500/30 hover:to-teal-500/30 transition-all"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Schedule a Meeting
        </a>

        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about projects, pricing, or services..."
            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-3 bg-[var(--primary)] text-white rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
