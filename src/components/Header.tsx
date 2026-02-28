import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
        ? 'bg-midnight/80 backdrop-blur-md border-b border-white/5 py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo - Elegant & Minimal */}
        <div className="flex items-center space-x-4 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 bg-midnight-lighter border border-white/10 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl">
              <span className="text-xl font-display font-bold text-champagne">
                F
              </span>
            </div>
            <div className="absolute -inset-2 bg-champagne/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 -z-10"></div>
          </div>

          <div className="flex flex-col">
            <span className="font-display font-medium text-lg tracking-tight text-white">
              Flint<span className="text-champagne font-light italic">folio</span>
            </span>
            <span className="text-[9px] font-mono tracking-[0.3em] text-white/30 uppercase">
              Security & Design
            </span>
          </div>
        </div>

        {/* Navigation - Integrated */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center text-white"
        >
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
          <span className={`block w-5 h-px bg-current transition-all duration-300 mt-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-px bg-current transition-all duration-300 mt-1.5 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-midnight/95 backdrop-blur-2xl border-b border-white/5 transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-8 py-10">
          <Navigation mobile />
        </div>
      </div>
    </header>
  );
};

export default Header;