'use client';

import Link from 'next/link';

const capabilities = [
  { title: 'Smart Automation', description: 'Automate workflows and eliminate repetitive tasks.', stat: '80%', statLabel: 'Time Saved' },
  { title: 'AI Chatbots', description: 'Intelligent support that handles queries 24/7.', stat: '24/7', statLabel: 'Availability' },
  { title: 'Predictive Analytics', description: 'Data-driven insights for smarter decisions.', stat: '3x', statLabel: 'Better Insights' },
  { title: 'Process Optimization', description: 'AI that learns and improves your operations.', stat: '40%', statLabel: 'Cost Reduction' },
];

export default function AIFocus() {
  return (
    <section id="ai-focus" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-[#030305]" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[150px]" style={{ animationDelay: '500ms' }} />
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide bg-white/10 border border-white/20 text-white/80 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            AI-Powered Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Supercharge with{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h2>
          <p className="text-lg text-white/60">
            Integrate cutting-edge AI to automate, optimize, and create exceptional experiences.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {capabilities.map((item) => (
            <div 
              key={item.title}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{item.stat}</span>
                <span className="text-sm text-white/40 ml-2">{item.statLabel}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/50">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/services#ai" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#09090b] font-semibold rounded-full hover:bg-white/90 transition-all hover:-translate-y-0.5"
          >
            Explore AI Solutions
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
