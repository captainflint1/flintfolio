import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/projects' },
  ];

  return (
    <nav className={mobile ? "flex flex-col space-y-6" : "flex items-center space-x-10"}>
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`group relative text-sm font-medium tracking-widest uppercase transition-all duration-300 ${mobile ? 'text-xl text-white' : 'text-white/60 hover:text-champagne'
            }`}
        >
          {item.name}
          {!mobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-champagne transition-all duration-300 group-hover:w-full" />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
