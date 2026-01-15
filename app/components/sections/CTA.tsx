'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" style={{ animationDelay: '500ms' }} />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to build your{' '}
            <span className="relative inline-block">
              next big idea?
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-white/40" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your project and explore how we can help you build 
            something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-white/90 shadow-xl transition-all hover:-translate-y-1"
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
            <Link 
              href="/projects" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all"
            >
              View Our Work
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free Consultation
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No Hidden Costs
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              24h Response Time
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
