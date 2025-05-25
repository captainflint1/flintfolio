import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioGrid: React.FC = () => {
  const portfolioItems = [
    {
      image: "/11.jpg",
      alt: "FlintVerse Poster Design"
    },
    {
      image: "/9.jpg",
      alt: "Nivea product design"
    },
    {
      image: "/443.jpg",
      alt: "Poster 221"
    },
    {
      image: "/2.jpg",
      alt: "Poster 22"
    },
    {
      image: "/4.jpg",
      alt: "Digital logo display on purple background"
    },
    {
      image: "/121.jpg",
      alt: "Digital logo display on purple background"
    },
    {
      image: "/231.jpg",
      alt: "Digital logo display on purple background"
    },
    {
      image: "/745.jpg",
      alt: "Digital logo display on purple background"
    },
    {
      image: "/333.jpg",
      alt: "Digital logo display on purple background"
    },
    {
      image: "/12.png",
      alt: "Digital logo display on jhjhjmnnm background"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {portfolioItems.map((item, index) => (
        <PortfolioItem 
          key={index}
          image={item.image}
          alt={item.alt}
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;