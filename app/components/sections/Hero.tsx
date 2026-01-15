'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const stats = [
  { value: '50+', label: 'Projects Shipped' },
  { value: '98%', label: 'Client Retention' },
  { value: '3x', label: 'Faster Delivery' },
];

const logos = ['Johar11', 'Hostel Easy', 'Sayas', 'TribalShadi', 'Panpal+', 'Boongg', "DOC247", "RentHunt", "WebCraft", "Inland World", "TRAVEZE"];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="aurora-bg opacity-60" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '500ms' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[200px]" />

      <div className="container relative z-10">
        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`
              inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide
              bg-gradient-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-500/30 text-indigo-300
              transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Now with AI-Powered Development
          </div>

          {/* Headline */}
          <h1
            className={`
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold
              leading-[0.95] tracking-tight mb-8
              transition-all duration-700 delay-100
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            We Build{' '}
            <span className="gradient-text">Digital Products</span>
            <br />
            That Scale
          </h1>

          {/* Subheadline */}
          <p
            className={`
              text-lg sm:text-xl text-zinc-400
              max-w-2xl mx-auto mb-10 leading-relaxed
              transition-all duration-700 delay-200
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            From MVP to enterprise—we design and develop AI-powered web & mobile
            applications that help startups move faster and scale smarter.
          </p>

          {/* CTA Buttons */}
          <div
            className={`
              flex flex-col sm:flex-row gap-4 justify-center mb-16
              transition-all duration-700 delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-transparent border border-white/20 rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            >
              View Our Work
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`
              flex flex-wrap justify-center gap-8 sm:gap-16 mb-16
              transition-all duration-700 delay-400
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid Preview */}
        <div
          className={`
            max-w-6xl mx-auto
            transition-all duration-700 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <div className="grid grid-cols-12 gap-4">
            {/* Large Feature Card */}
            <div className="col-span-12 md:col-span-8 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-zinc-500">AI-Powered</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Intelligent Solutions</h3>
              <p className="text-zinc-400 max-w-md">
                We integrate cutting-edge AI to automate, optimize, and supercharge your product.
              </p>
            </div>

            {/* Stats Card */}
            <div className="col-span-12 md:col-span-4 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 flex flex-col justify-between">
              <div className="text-sm text-zinc-500 mb-4">Client Satisfaction</div>
              <div>
                <div className="text-5xl font-bold gradient-text mb-2">98%</div>
                <div className="flex items-center gap-2 text-emerald-500 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  +12% this quarter
                </div>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="col-span-12 sm:col-span-6 md:col-span-4 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
              <div className="text-sm text-zinc-500 mb-4">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'AI/ML', 'Node.js'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-lg text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="col-span-12 sm:col-span-6 md:col-span-4 p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available Now</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Ready to start your project this week. Book a free consultation.
              </p>
            </div>

            {/* CTA Card */}
            <div className="col-span-12 md:col-span-4 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h4 className="font-semibold mb-2">Ready to build?</h4>
                <p className="text-sm text-zinc-400 mb-4">
                  Let&apos;s turn your idea into reality.
                </p>
                <Link href="/contact" className="text-sm font-medium gradient-text flex items-center gap-2 group">
                  Get Started
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By - Marquee */}
        <div
          className={`
            mt-20 transition-all duration-700 delay-600
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <p className="text-center text-sm text-zinc-500 mb-6">
            Trusted by innovative teams worldwide
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-12 animate-marquee">
              {[...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className="text-2xl font-semibold text-zinc-700 hover:text-zinc-500 transition-colors cursor-default whitespace-nowrap"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
