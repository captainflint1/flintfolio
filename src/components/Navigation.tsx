import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navItems = [
    { name: 'MyWorks', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <nav className="flex justify-center mt-12 space-x-4">
      {navItems.map((item, index) => (
        <Link 
          key={index} 
          to={item.path} 
          className="text-gray-700 hover:text-black font-medium transition"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
