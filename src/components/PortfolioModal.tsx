import React, { useEffect, useState } from 'react';
import type { PortfolioItemData } from '../types/portfolio';

interface PortfolioModalProps {
    item: PortfolioItemData | null;
    onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (item) {
            setShouldRender(true);
            // Small delay for the entry animation
            const timer = setTimeout(() => setIsVisible(true), 10);
            document.body.style.overflow = 'hidden';
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
            const timer = setTimeout(() => setShouldRender(false), 500);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [item]);

    if (!shouldRender || !item) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-all duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className={`relative w-full max-w-5xl max-h-[90vh] bg-midnight border border-white/10 rounded-[2rem] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col ${isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-95 opacity-0'
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 w-10 h-10 bg-midnight-subtle/80 hover:bg-midnight border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-champagne hover:border-champagne/30 transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <div className="flex-1 overflow-y-auto custom-scrollbar rounded-[2rem]">
                    {/* Media Header */}
                    <div className={`relative w-full bg-black/30 overflow-hidden ${item.category === 'Graphic Design' ? 'min-h-[60vh] flex items-center justify-center' : 'aspect-video md:aspect-[21/9]'
                        }`}>
                        {item.video ? (
                            <video
                                src={item.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <img
                                src={item.image}
                                alt={item.title}
                                className={`w-full h-full object-contain ${item.category === 'Graphic Design' ? 'max-h-[85vh]' : ''}`}
                            />
                        )}
                        {item.category !== 'Graphic Design' && (
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
                        )}
                    </div>

                    {/* Details Content */}
                    {item.category !== 'Graphic Design' && (
                        <div className="px-8 md:px-12 py-10 pb-20 font-sans">
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <span className="px-4 py-1 text-[10px] font-bold tracking-[0.2em] bg-champagne/5 text-champagne border border-champagne/20 rounded-full uppercase">
                                    {item.category}
                                </span>
                                <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">
                                    {item.date} — {item.client || 'Internal Project'}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white mb-8">
                                {item.title}
                            </h2>

                            <div className="grid md:grid-cols-3 gap-16">
                                <div className="md:col-span-2">
                                    <p className="text-xl md:text-2xl text-white/90 font-display font-light leading-relaxed mb-10">
                                        {item.description}
                                    </p>
                                    <div className="h-px w-24 bg-gradient-to-r from-champagne/30 to-transparent mb-10" />
                                    <p className="text-white/50 leading-relaxed text-base md:text-lg">
                                        {item.longDescription}
                                    </p>
                                </div>

                                <div className="space-y-12">
                                    <div>
                                        <h4 className="text-[10px] font-mono tracking-widest text-champagne/40 uppercase mb-6">Technical Focus</h4>
                                        <ul className="space-y-4">
                                            {['Advanced Operations', 'Security Engineering', 'Data Visualization'].map(skill => (
                                                <li key={skill} className="flex items-center gap-3 text-xs text-white/60">
                                                    <div className="w-1 h-1 rounded-full bg-champagne/40" />
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {item.client && (
                                        <div>
                                            <h4 className="text-[10px] font-mono tracking-widest text-white/20 uppercase mb-6">Context</h4>
                                            <p className="text-xs text-white/40 leading-relaxed italic border-l border-champagne/20 pl-5">
                                                {item.client} engagement centered on delivering high-fidelity observability and automated response workflows.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal;
