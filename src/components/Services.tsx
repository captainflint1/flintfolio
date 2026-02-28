import React, { useEffect, useRef, useState } from 'react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const services = [
    {
      title: "Brand Identity Design",
      description:
        "We craft powerful brand identities through logos, typography, and visual systems that connect with your audience.",
      icon: "🎨",
      color: "#FF6B6B",
      features: ['Logo Design', 'Typography', 'Visual Systems']
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered interfaces and design systems for websites and mobile apps that are intuitive and engaging.",
      icon: "✨",
      color: "#4ECDC4",
      features: ['Wireframing', 'Prototyping', 'User Testing']
    },
    {
      title: "Web Development",
      description:
        "Fully responsive and optimized websites using modern technologies like React, Tailwind, and more.",
      icon: "⚡",
      color: "#45B7D1",
      features: ['React', 'Tailwind', 'TypeScript']
    },
    {
      title: "Marketing Collateral",
      description:
        "Custom posters, flyers, banners, and brochures designed to stand out and communicate your brand message.",
      icon: "📱",
      color: "#96CEB4",
      features: ['Print Design', 'Digital Assets', 'Brand Materials']
    },
    {
      title: "SOC Analyst",
      description:
        "24/7 security monitoring, threat detection, and incident response to protect your digital assets from cyber threats.",
      icon: "🛡️",
      color: "#FFE194",
      features: ['Threat Detection', 'Incident Response', 'Security Audits']
    },
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements' },
    { step: '02', title: 'Strategy', desc: 'Planning the perfect solution' },
    { step: '03', title: 'Design', desc: 'Creating beautiful, functional designs' },
    { step: '04', title: 'Development', desc: 'Building with cutting-edge technology' },
    { step: '05', title: 'Delivery', desc: 'Launching and ongoing support' },
  ];

  // Parallax effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    
    const { clientX, clientY } = e;
    const { width, height } = sectionRef.current.getBoundingClientRect();
    
    const x = (clientX / width - 0.5) * 10;
    const y = (clientY / height - 0.5) * 10;
    
    sectionRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (sectionRef.current) {
      sectionRef.current.style.transform = 'translate(0px, 0px)';
    }
  };

  return (
    <div 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen bg-[#0a0a0a] text-white font-['Inter'] overflow-hidden"
      style={{ transition: 'transform 0.1s ease-out' }}
    >
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Glowing orbs */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600 rounded-full blur-[150px] opacity-10 animate-pulse"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-pink-600 rounded-full blur-[150px] opacity-10 animate-pulse animation-delay-1000"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-10 animate-pulse animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* Hero Section */}
        <section className="text-center mb-24">
          <span className="inline-block px-4 py-2 border border-white/20 rounded-full text-sm mb-6 backdrop-blur-sm">
            ✦ What We Do
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We combine creativity with technical expertise to deliver outstanding results
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{ backgroundColor: service.color }}
                ></div>
                
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                    {service.icon}
                  </span>
                  <span className="text-sm font-mono text-gray-600 group-hover:text-gray-400 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all"
                    style={{ backgroundImage: `linear-gradient(to right, ${service.color}, ${service.color}dd)` }}>
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: service.color }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Learn more</span>
                  <span className="text-2xl transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
                
                {/* Glow effect */}
                <div 
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500 -z-10"
                  style={{ background: `linear-gradient(to right, ${service.color}, ${service.color}dd)` }}
                ></div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold mb-4 block">✦ Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveTab(index)}
              >
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
                
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Projects', icon: '🚀' },
              { value: '100+', label: 'Clients', icon: '😊' },
              { value: '5+', label: 'Years', icon: '⭐' },
              { value: '98%', label: 'Satisfaction', icon: '📊' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2 transform group-hover:scale-110 group-hover:rotate-3 transition-all">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Let's create something amazing together. Get in touch with us today.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-2xl">
              Contact Us
            </button>
          </div>
        </section>
      </div>

      {/* Floating navigation dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-2 z-50">
        {['Hero', 'Services', 'Process', 'Stats', 'Contact'].map((section, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 hover:opacity-100 hover:scale-150 transition-all duration-300 cursor-pointer"
            title={section}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Services;