import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioGrid: React.FC = () => {
  const graphicDesignItems = [
    { image: "/11.jpg", alt: "FlintVerse Poster Design" },
    { image: "/9.jpg", alt: "Nivea product design" },
    { image: "/443.jpg", alt: "Poster 221" },
    { image: "/2.jpg", alt: "Poster 22" },
    { image: "/4.jpg", alt: "Digital logo on purple background" },
    { image: "/121.jpg", alt: "Digital logo variation 1" },
    { image: "/231.jpg", alt: "Digital logo variation 2" },
    
    { image: "/333.jpg", alt: "Digital logo variation 4" },
    { image: "/12.png", alt: "Creative graphic banner" },
  ];

  const webDesignItems = [
    { image: "/web1.jpg", alt: "Web design project 1" },
    { image: "/web2.jpg", alt: "Web design project 2" },
    { image: "/web3.jpg", alt: "Web design project 3" },
    { image: "/web4.jpg", alt: "Web design project 4" },
    // Add more as needed
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-16">
      
      {/* Graphic Design Section */}
      <section>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6 text-center">
  Graphic Design Works
</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {graphicDesignItems.map((item, index) => (
            <PortfolioItem key={index} image={item.image} alt={item.alt} />
          ))}
        </div>
      </section>

      {/* Web Design Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Web Design Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {webDesignItems.map((item, index) => (
            <PortfolioItem key={index} image={item.image} alt={item.alt} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default PortfolioGrid;
