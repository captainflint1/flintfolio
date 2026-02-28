import React, { useMemo, useState } from 'react';
import PortfolioItem from './PortfolioItem';
import PortfolioModal from './PortfolioModal';
import { PORTFOLIO_ITEMS } from '../constants/portfolio';
import { EXTERNAL_PROJECTS, CERTIFICATES } from '../constants/externalWork';
import type { PortfolioItemData } from '../types/portfolio';

const PortfolioGrid: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItemData | null>(null);

  const groupedItems = useMemo(() => {
    return PORTFOLIO_ITEMS.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, PortfolioItemData[]>);
  }, []);

  const categoryOrder: string[] = ['SOC', 'Graphic Design'];

  const sortedCategories = useMemo(() => {
    return Object.keys(groupedItems).sort((a, b) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });
  }, [groupedItems]);

  return (
    <div className="min-h-screen bg-midnight text-white selection:bg-champagne/30 font-sans">
      {/* Elegant Midnight Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0A0A0B]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(229,213,179,0.05),transparent)]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 py-20">

        {/* Categorized Sections */}
        <div className="space-y-40">
          {sortedCategories.map((category) => {
            const items = groupedItems[category];

            return (
              <section key={category} className="group/section">
                <div className="flex items-baseline gap-6 mb-12">
                  <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white/90">
                    {category === 'SOC' ? (
                      <>SOC <span className="text-champagne italic font-light">Projects</span></>
                    ) : (
                      <>Graphic <span className="text-champagne italic font-light">Designs</span></>
                    )}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-champagne/20 to-transparent"></div>
                  <span className="text-[10px] font-mono tracking-widest text-champagne/40 uppercase">
                    {items.length} Projects
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {items.map((item) => (
                    <PortfolioItem
                      key={item.id}
                      {...item}
                      onClick={() => setSelectedItem(item)}
                    />
                  ))}
                </div>
              </section>
            );
          })}

          {/* Client Projects Section */}
          <section className="group/section">
            <div className="flex items-baseline gap-6 mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white/90">
                Client <span className="text-champagne italic font-light">Projects</span>
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-champagne/20 to-transparent"></div>
              <span className="text-[10px] font-mono tracking-widest text-champagne/40 uppercase">
                {EXTERNAL_PROJECTS.length} External
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {EXTERNAL_PROJECTS.map((project, index) => (
                <PortfolioItem
                  key={`external-${index}`}
                  id={`external-${index}`}
                  image={project.image}
                  title={project.name}
                  description={project.description}
                  category="Freelance"
                  onClick={() => window.open(project.url, '_blank')}
                />
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <div className="flex items-baseline gap-6 mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white/90">
                Professional <span className="text-champagne italic font-light">Certifications</span>
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {CERTIFICATES.map((cert, index) => (
                <PortfolioItem
                  key={`cert-${index}`}
                  id={`cert-${index}`}
                  image={cert.image}
                  title={cert.title}
                  client={cert.issuer}
                  category="Certification"
                  onClick={() => { }} // or open a larger image view
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Decorative Footer Info */}
      <footer className="relative z-10 px-12 py-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 mt-32 text-[10px] font-mono tracking-widest text-white/20 uppercase">
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          AVAILABLE FOR NEW PROJECTS
        </div>
        <div>© 2025 FLINTFOLIO — ALL RIGHTS RESERVED</div>
        <div className="flex gap-8">
          <span>VOL. 01</span>
          <span>CURATED COLLECTION</span>
        </div>
      </footer>

      {/* Global Modal */}
      <PortfolioModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default PortfolioGrid;