import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navItems = [
  { name: 'MyWorks', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
];


  return (
    <nav className="flex justify-center space-x-6 text-lg py-4">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="text-black hover:text-pink-500 font-semibold transition duration-300"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
