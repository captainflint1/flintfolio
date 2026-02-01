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
    // { image: "/12.png", alt: "Creative graphic banner" },
    { image: "/333.jpg", alt: "Digital logo variation 4" },
    { image: "/Fund-Rasing.jpg", alt: "Digital logo variation 4" },
    { image: "/4322.png", alt: "Digital logo variation 4" },
    { image: "/1233.png", alt: "Digital logo variation 4" },
    { image: "/3.jpg", alt: "Digital logo variation 4" },
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
     
    </div>
  );
};

export default PortfolioGrid;
