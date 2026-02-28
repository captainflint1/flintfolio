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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-gradient-to-r from-purple-900 via-purple-800 to-pink-800 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo with modern design */}
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                FV
              </span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-300 -z-10"></div>
          </div>
          
          <div className="flex flex-col">
            <span className={`font-bold text-xl tracking-tight ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Flint<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">Verse</span>
            </span>
            <span className={`text-xs tracking-wider ${
              isScrolled ? 'text-gray-500' : 'text-white/70'
            }`}>
              Creative Studio
            </span>
          </div>
        </div>

        {/* Navigation - Integrated */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* Right side actions - Simplified */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-gray-800' : 'bg-white'
            } ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 mt-1.5 ${
              isScrolled ? 'bg-gray-800' : 'bg-white'
            } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 mt-1.5 ${
              isScrolled ? 'bg-gray-800' : 'bg-white'
            } ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute left-0 right-0 bg-white shadow-2xl transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6">
          <Navigation mobile />
        </div>
      </div>
    </header>
  );
};

export default Header;