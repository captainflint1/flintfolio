import React, { useState, useRef, useEffect } from 'react';
import type { PortfolioItemData } from '../types/portfolio';

const PortfolioItem: React.FC<PortfolioItemData & { onClick?: () => void }> = ({
  image,
  video,
  title,
  category,
  description,
  client,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (video && videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => { });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, video]);

  return (
    <div
      className="group bg-midnight-lighter/50 border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl hover:border-champagne/20 transition-all duration-700 hover:-translate-y-2 cursor-pointer h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Media Layer */}
      <div className="aspect-video overflow-hidden relative bg-midnight shrink-0">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-midnight-lighter animate-pulse flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white/5 border-t-champagne/40 rounded-full animate-spin"></div>
          </div>
        )}
        {video ? (
          <>
            <img
              src={image}
              alt=""
              className={`w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setIsImageLoaded(true)}
            />
            <video
              ref={videoRef}
              src={video}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          </>
        ) : (
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.23,1,0.32,1)] ${isHovered ? 'scale-110' : 'scale-100'} ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setIsImageLoaded(true)}
          />
        )}

        {/* Category Tag on Image (Optional, for extra flair) */}
        <div className="absolute top-6 left-6">
          <span className="px-3 py-1 bg-midnight/60 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-mono tracking-[0.2em] text-champagne/80 uppercase">
            {category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-4 group-hover:text-champagne transition-colors leading-tight">
          {title}
        </h3>

        {description && (
          <p className="text-white/40 text-sm leading-relaxed font-light mb-8 line-clamp-2">
            {description}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center text-[10px] font-mono tracking-widest text-champagne/60 group-hover:text-champagne transition-colors uppercase">
            {category === 'SOC' ? 'View Details' : 'View Work'}
            <span className="ml-3 transform group-hover:translate-x-2 transition-transform duration-500">→</span>
          </div>
          {client && (
            <span className="text-[9px] text-white/20 font-mono tracking-widest uppercase">
              @{client}
            </span>
          )}
        </div>
      </div>

      {/* Subtle Glow Accent */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-champagne/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl pointer-events-none" />
    </div>
  );
};

export default PortfolioItem;