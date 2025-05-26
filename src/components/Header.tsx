import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
   <header className="relative w-full text-white border-b-4 border-pink-500 mb-10">
      {/* Full image with no cropping */}
      <img
        src="/banner.png"
        alt="FlintVerse Banner"
        className="w-full h-auto object-contain"
      />

      {/* Overlay */}
      

      {/* Banner content */}
     

      {/* Navigation positioned at the bottom of the header */}
      <div className="absolute bottom-0 w-full z-20 bg-white py-3 border-t border-gray-200">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
