import { NextRequest, NextResponse } from 'next/server';
import { CAL_COM_URL } from '../../config/constants';

// Project and pricing information
const PROJECT_INFO = `
Our Projects and Services:
1. Johar 11 - Fantasy Sports App for team building
2. Gyan Sarovar Library - Library management system
3. Hostel Easy - Hostel management platform
4. Sayas Cooperative - Cooperative management system
5. LensCraft - Photography portfolio platform
6. Traveze - Travel booking app

Our Services:
- MVP Development: Starting from ₹5,000 - ₹15,000
- SaaS Platform Development: ₹15,000 - ₹50,000+
- Mobile App Development: ₹10,000 - ₹40,000+
- AI Integration: ₹5,000 - ₹25,000+
- E-commerce Solutions: ₹8,000 - ₹30,000+
- Custom Web Development: ₹5,000 - ₹50,000+

Typical project timelines:
- MVP: 4-8 weeks
- Full Platform: 8-16 weeks
- Enterprise Solutions: 12-24 weeks

We offer flexible payment plans and can work within various budgets.
`;

// Static API key - move to env for production
const GEMINI_API_KEY = "AIzaSyBMdDUaJmfC5tIPN8h1wNZgM1jbuslP6AI";

// Use REST API directly - gemini-2.0-flash is the only available model for free tier
async function callGeminiAPI(prompt: string): Promise<string> {
  const model = 'gemini-2.0-flash';
  const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${GEMINI_API_KEY}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: prompt
        }]
      }]
    }),
  });

  if (response.ok) {
    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (text) {
      return text;
    }
    throw new Error('No response text from AI');
  }

  // Handle errors
  const errorData = await response.json().catch(() => ({}));
  const errorMessage = errorData.error?.message || 'Unknown error';

  if (response.status === 429) {
    // Rate limit - extract wait time if available
    const waitMatch = errorMessage.match(/retry in (\d+\.?\d*)/i);
    const waitTime = waitMatch ? Math.ceil(parseFloat(waitMatch[1])) : 30;
    throw new Error(`Rate limit exceeded. Please wait ${waitTime} seconds and try again.`);
  }

  throw new Error(errorMessage);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, userInfo, conversationHistory } = body;

    // Validate request
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Build context with user info and project information
    const userContext = userInfo
      ? `User Information:
- Name: ${userInfo.name || 'Not provided'}
- Email: ${userInfo.email || 'Not provided'}
- Company: ${userInfo.company || 'Not provided'}
- Budget: ${userInfo.budget || 'Not provided'}
- Project Type: ${userInfo.projectType || 'Not provided'}

`
      : '';

    const conversationContext = conversationHistory && Array.isArray(conversationHistory) && conversationHistory.length > 0
      ? `Previous conversation context:\n${conversationHistory.map((msg: { role: string; content: string }) => `${msg.role}: ${msg.content}`).join('\n')}\n\n`
      : '';

    const systemPrompt = `You are a helpful AI assistant for Webumul, a web development company. 
${PROJECT_INFO}

${userContext}

Your role:
- Answer questions about our projects, services, and pricing
- Help users understand what we can build for them
- Be friendly, professional, and helpful
- If asked about scheduling a meeting, direct them to use the "Schedule a Meeting" button in the chat interface, or provide this link: ${CAL_COM_URL}
- Keep responses concise but informative
- If you don't know something, be honest about it

${conversationContext}Current user message: ${message}

Respond naturally and helpfully:`;

    const text = await callGeminiAPI(systemPrompt);

    return NextResponse.json({ message: text });
  } catch (error: any) {
    console.error('Chat API error:', error);
    
    return NextResponse.json(
      { 
        error: error?.message || 'Failed to generate response.',
      },
      { status: 500 }
    );
  }
}
