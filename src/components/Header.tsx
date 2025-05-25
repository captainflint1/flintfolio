import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black uppercase">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
    FlintVerse
  </span>
</h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-600">
        Elegant solutions for brands that matter
      </p>
      <Navigation />
    </header>
  );
};

export default Header;
