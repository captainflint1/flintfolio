import React from 'react';

interface PortfolioItemProps {
  image: string;
  alt: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, alt }) => {
  return (
    <div className="portfolio-item">
      <img 
        src={image} 
        alt={alt} 
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default PortfolioItem;