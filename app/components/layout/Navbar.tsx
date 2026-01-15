'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${isScrolled 
          ? 'py-3 bg-[#09090b]/90 backdrop-blur-xl border-b border-white/10' 
          : 'py-5 bg-transparent'
        }
      `}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-xl transition-transform duration-500 group-hover:rotate-180" />
              <div className="absolute inset-[2px] bg-[#09090b] rounded-[10px] flex items-center justify-center">
                <span className="text-lg font-bold gradient-text">W</span>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Webumul
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/5 border border-white/10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white rounded-full hover:bg-white/10 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all duration-300 ease-out
            ${isMobileMenuOpen ? 'max-h-[400px] mt-4' : 'max-h-0'}
          `}
        >
          <div className="p-4 rounded-2xl bg-[#09090b]/95 backdrop-blur-xl border border-white/10 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white font-medium rounded-xl hover:bg-white/5 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-white/10">
              <Link 
                href="/contact" 
                className="block w-full text-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full"
              >
                Start Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
