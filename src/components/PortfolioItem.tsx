import React, { useState } from 'react';

interface PortfolioItemProps {
  image: string;
  title: string;
  alt: string;
  category: string;
  date?: string;
  client?: string;
  variant?: 'featured' | 'gallery' | 'minimal';
  size?: 'small' | 'medium' | 'large';
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ 
  image, 
  title,
  alt, 
  category,
  date,
  client,
  variant = 'gallery',
  size = 'small'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const categoryColors = {
    poster: 'from-purple-500 to-pink-500',
    logo: 'from-blue-500 to-cyan-500',
    product: 'from-green-500 to-emerald-500',
    campaign: 'from-orange-500 to-red-500',
    digital: 'from-indigo-500 to-purple-500',
    artwork: 'from-pink-500 to-rose-500',
    default: 'from-purple-400 to-pink-400',
  };

  const categoryColor = categoryColors[category as keyof typeof categoryColors] || categoryColors.default;

  // Smaller overlay content
  const renderOverlay = () => {
    switch(variant) {
      case 'featured':
        return (
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent p-3 flex flex-col justify-end">
            <div className="transform transition-all duration-500">
              <span className={`inline-block px-1.5 py-0.5 text-[10px] font-medium bg-gradient-to-r ${categoryColor} text-white rounded mb-1`}>
                {category.toUpperCase()}
              </span>
              <h3 className="text-xs font-semibold text-white mb-0.5 truncate">{title}</h3>
              <p className="text-white/40 text-[10px] truncate">{client}</p>
            </div>
          </div>
        );
      
      case 'gallery':
        return (
          <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent p-2 flex flex-col justify-end transform transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex items-end justify-between">
              <div>
                <span className={`inline-block px-1.5 py-0.5 text-[10px] font-medium bg-gradient-to-r ${categoryColor} text-white rounded mb-1`}>
                  {category}
                </span>
                <h3 className="text-[11px] font-medium text-white truncate max-w-[80px]">{title}</h3>
              </div>
              <button className="w-5 h-5 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-[10px]">+</span>
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div 
      className="group relative w-full h-full overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Loading State */}
      {!isImageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white/10 border-t-white/30 rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Image */}
      <img 
        src={image} 
        alt={alt} 
        className={`w-full h-full object-cover transition-all duration-700 ${
          isHovered ? 'scale-110' : 'scale-100'
        } ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoad={() => setIsImageLoaded(true)}
      />

      {/* Magazine-style overlay */}
      {renderOverlay()}

      {/* Corner Fold Effect - Smaller */}
      <div className={`absolute top-0 right-0 w-6 h-6 bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
           style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}>
      </div>
    </div>
  );
};

export default PortfolioItem;