'use client';

import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Web Applications',
    description: 'High-performance web apps with Next.js, React, and modern architecture.',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile Apps',
    description: 'Native iOS & Android apps with React Native and Flutter.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI & Automation',
    description: 'Smart chatbots, GPT integration, and workflow automation.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'SaaS Products',
    description: 'End-to-end SaaS development with multi-tenant architecture.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'Beautiful interfaces with Figma, design systems, and prototyping.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'DevOps & Scaling',
    description: 'Cloud infrastructure, CI/CD, monitoring, and performance.',
    gradient: 'from-amber-500 to-orange-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide bg-gradient-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-500/30 text-indigo-300 mb-6">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Everything you need to{' '}
            <span className="gradient-text">build & scale</span>
          </h2>
          <p className="text-lg text-zinc-400">
            From concept to launch and beyond—comprehensive solutions for modern startups.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div 
              key={service.title}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group hover:-translate-y-1"
            >
              <div 
                className={`
                  w-14 h-14 rounded-xl mb-6 flex items-center justify-center
                  bg-gradient-to-br ${service.gradient}
                  group-hover:scale-110 transition-transform duration-300
                `}
              >
                <div className="text-white">{service.icon}</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-transparent border border-white/20 rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            Explore All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
