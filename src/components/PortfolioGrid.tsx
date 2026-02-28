import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioGrid: React.FC = () => {
  const [activeSection, setActiveSection] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');

  const portfolioItems = [
    {
      id: 1,
      image: "/11.jpg",
      title: "FlintVerse Poster Series",
      alt: "FlintVerse Poster Design",
      category: "poster",
      size: "large",
      height: "tall",
      date: "2024",
      client: "FlintVerse"
    },
    {
      id: 2,
      image: "/9.jpg",
      title: "Nivea Product Campaign",
      alt: "Nivea product design",
      category: "product",
      size: "medium",
      height: "medium",
      date: "2024",
      client: "Nivea"
    },
    {
      id: 3,
      image: "/443.jpg",
      title: "Abstract Series 221",
      alt: "Poster 221",
      category: "poster",
      size: "small",
      height: "short",
      date: "2023",
      client: "Gallery 221"
    },
    {
      id: 4,
      image: "/2.jpg",
      title: "Minimalist Study",
      alt: "Poster 22",
      category: "artwork",
      size: "medium",
      height: "tall",
      date: "2024",
      client: "Studio 22"
    },
    {
      id: 5,
      image: "/4.jpg",
      title: "Digital Identity",
      alt: "Digital logo on purple background",
      category: "logo",
      size: "small",
      height: "short",
      date: "2024",
      client: "TechStart"
    },
    {
      id: 6,
      image: "/121.jpg",
      title: "Brand Marks Vol.1",
      alt: "Digital logo variation 1",
      category: "logo",
      size: "small",
      height: "short",
      date: "2023",
      client: "BrandCo"
    },
    {
      id: 7,
      image: "/231.jpg",
      title: "Brand Marks Vol.2",
      alt: "Digital logo variation 2",
      category: "logo",
      size: "small",
      height: "short",
      date: "2023",
      client: "BrandCo"
    },
    {
      id: 8,
      image: "/333.jpg",
      title: "Geometric Explorations",
      alt: "Digital logo variation 4",
      category: "artwork",
      size: "medium",
      height: "medium",
      date: "2024",
      client: "Geometry Lab"
    },
    {
      id: 9,
      image: "/Fund-Rasing.jpg",
      title: "Charity Fundraiser",
      alt: "Fund Raising Campaign",
      category: "campaign",
      size: "large",
      height: "medium",
      date: "2024",
      client: "Hope Foundation"
    },
    {
      id: 10,
      image: "/4322.png",
      title: "Digital Compositions",
      alt: "Digital artwork",
      category: "digital",
      size: "medium",
      height: "tall",
      date: "2024",
      client: "Digital Arts"
    },
    {
      id: 11,
      image: "/1233.png",
      title: "Abstract Realms",
      alt: "Digital artwork",
      category: "digital",
      size: "small",
      height: "medium",
      date: "2023",
      client: "Virtual Gallery"
    },
    {
      id: 12,
      image: "/3.jpg",
      title: "Mixed Media Study",
      alt: "Creative composition",
      category: "artwork",
      size: "medium",
      height: "medium",
      date: "2024",
      client: "Art Studio"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Work', count: portfolioItems.length },
    { id: 'featured', name: 'Featured', count: 4 },
    { id: 'poster', name: 'Posters', count: portfolioItems.filter(i => i.category === 'poster').length },
    { id: 'logo', name: 'Logos', count: portfolioItems.filter(i => i.category === 'logo').length },
    { id: 'product', name: 'Product', count: portfolioItems.filter(i => i.category === 'product').length },
    { id: 'campaign', name: 'Campaigns', count: portfolioItems.filter(i => i.category === 'campaign').length },
    { id: 'digital', name: 'Digital Art', count: portfolioItems.filter(i => i.category === 'digital').length },
  ];

  const featuredItems = portfolioItems.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Background Elements */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Magazine Header - Compact */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-white/40 tracking-widest">VOL. 01</span>
                <div className="w-8 h-[1px] bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <span className="text-xs text-white/40">2024 EDITION</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                <span className="text-white">PORT</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">FOLIO</span>
              </h1>
            </div>
            
            {/* Magazine Stats - Smaller */}
            <div className="flex gap-6 text-right">
              <div>
                <div className="text-xl font-light text-white/80">{portfolioItems.length}</div>
                <div className="text-xs text-white/40 tracking-wider">PROJECTS</div>
              </div>
              <div>
                <div className="text-xl font-light text-white/80">12+</div>
                <div className="text-xs text-white/40 tracking-wider">CLIENTS</div>
              </div>
              <div>
                <div className="text-xl font-light text-white/80">2024</div>
                <div className="text-xs text-white/40 tracking-wider">CURRENT</div>
              </div>
            </div>
          </div>
        </div>

        {/* Magazine Navigation - Smaller */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveSection(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium transition-all relative group ${
                  activeSection === cat.id ? 'text-white' : 'text-white/40 hover:text-white/60'
                }`}
              >
                {cat.name}
                <span className="ml-1 text-xs opacity-40">({cat.count})</span>
                {activeSection === cat.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-purple-400 to-pink-400"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* View Controls - Smaller */}
          <div className="flex gap-1">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded transition-colors text-xs ${
                viewMode === 'grid' ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              ⊞
            </button>
            <button 
              onClick={() => setViewMode('masonry')}
              className={`p-1.5 rounded transition-colors text-xs ${
                viewMode === 'masonry' ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              ⬚
            </button>
          </div>
        </div>

        {/* Featured Section - Compact Grid */}
        {activeSection === 'all' && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xs font-mono text-white/40 tracking-widest">FEATURED</h2>
              <div className="flex-1 h-[1px] bg-white/10"></div>
              <span className="text-xs text-white/20">4 projects</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {featuredItems.map((item) => (
                <div key={item.id} className="h-36">
                  <PortfolioItem
                    {...item}
                    variant="featured"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Magazine Grid - Smaller Images */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs font-mono text-white/40 tracking-widest">GALLERY</h2>
            <div className="flex-1 h-[1px] bg-white/10"></div>
            <span className="text-xs text-white/20">{portfolioItems.length} projects</span>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 auto-rows-auto">
            {portfolioItems.map((item, index) => {
              // Adjusted column spans for smaller images
              let colSpan = "col-span-1";
              
              // Only a few items span multiple columns for visual interest
              if (index === 0) colSpan = "col-span-2"; // Feature piece
              else if (index === 8) colSpan = "col-span-2"; // Another feature
              else if (index === 3) colSpan = "col-span-2"; // Horizontal feature
              
              return (
                <div 
                  key={item.id} 
                  className={`${colSpan} h-32 md:h-36`}
                >
                  <PortfolioItem 
                    {...item} 
                    variant="gallery"
                    size="small"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Magazine Spread - Compact */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs font-mono text-white/40 tracking-widest">EDITORIAL SPREAD</h2>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <div className="text-4xl mb-2 opacity-30">✧</div>
              <h3 className="text-lg font-light mb-1">Design Philosophy</h3>
              <p className="text-white/40 text-xs leading-relaxed">
                Every project tells a story. We believe in creating work that resonates, 
                communicates, and stands the test of time.
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs">
                <span className="text-white/20">→ Read more</span>
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="text-xs">📖</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xl mb-1">🎯</div>
                <div className="text-base font-light">24</div>
                <div className="text-xs text-white/40">Projects</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xl mb-1">✨</div>
                <div className="text-base font-light">12</div>
                <div className="text-xs text-white/40">Clients</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xl mb-1">⚡</div>
                <div className="text-base font-light">5</div>
                <div className="text-xs text-white/40">Years</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-xl mb-1">🌍</div>
                <div className="text-base font-light">8</div>
                <div className="text-xs text-white/40">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Magazine Footer - Compact */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-lg font-light mb-1">Stay inspired</div>
              <p className="text-white/40 text-xs">Get the latest issues delivered to your inbox</p>
            </div>
            
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs focus:outline-none focus:border-white/20 transition-colors w-48"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-semibold hover:opacity-90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
          
          {/* Magazine Info - Compact */}
          <div className="flex justify-between items-center mt-6 text-xs text-white/20">
            <span>© 2024 FLINTVERSE</span>
            <div className="flex gap-4">
              <span>ISSUE 01</span>
              <span>VOL. 1</span>
              <span>24 PGS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Page Number - Smaller */}
      <div className="fixed left-4 bottom-4 text-xs text-white/20 font-mono hidden lg:block">
        01 — 12
      </div>
      
      <div className="fixed right-4 bottom-4 text-xs text-white/20 font-mono hidden lg:block">
        VOL. 01
      </div>
    </div>
  );
};

export default PortfolioGrid;