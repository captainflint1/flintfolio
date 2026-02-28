import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
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
      className="min-h-screen bg-midnight text-white font-sans overflow-hidden"
      style={{ transition: 'transform 0.1s ease-out' }}
    >
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(229,213,179,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,213,179,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Elegant glowing orbs */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-champagne rounded-full blur-[150px] opacity-[0.02] animate-pulse"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] opacity-[0.01] animate-pulse animation-delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        {/* Header Section */}
        <section className="text-center mb-32">
          <span className="inline-block px-5 py-2 border border-champagne/20 rounded-full text-[10px] font-mono tracking-[0.3em] uppercase mb-8 backdrop-blur-sm text-champagne/80">
            ✦ Expertise
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-medium mb-8 tracking-tighter">
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              Elevated
            </span>
            <br />
            <span className="text-champagne italic font-light">Services.</span>
          </h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-display font-light">
            Bringing technical precision and creative elegance to every digital touchpoint.
          </p>
        </section>

        {/* Services Cards */}
        <section className="mb-48">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-midnight-lighter/50 backdrop-blur-sm p-10 rounded-2xl border border-white/5 hover:border-champagne/20 transition-all duration-700 hover:-translate-y-2 cursor-pointer"
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-3xl group-hover:bg-champagne group-hover:text-midnight transition-colors duration-500">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-medium mb-4 text-white group-hover:text-champagne transition-colors">
                  {service.title}
                </h3>

                <p className="text-white/40 mb-8 text-sm leading-relaxed font-light">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-white/30 text-xs flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-champagne/30" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-white/20 group-hover:text-champagne transition-colors">Documentation</span>
                  <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-500">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-48">
          <div className="text-center mb-24">
            <span className="text-champagne font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">✦ Flow</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-10 tracking-tight">Our Process</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-champagne/20 transition-all duration-700 text-center scale-95 hover:scale-100">
                  <div className="text-2xl font-display font-medium text-champagne mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                    {step.step}
                  </div>
                  <h3 className="font-display font-medium text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-white/20 text-xs leading-relaxed font-light group-hover:text-white/40 transition-colors">{step.desc}</p>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-white/10 group-hover:bg-champagne/40 transition-colors"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Sophisticated CTA */}
        <section className="text-center py-24 relative overflow-hidden rounded-[3rem] bg-midnight-lighter border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-8 tracking-tight">
              Ready to create <br />something <span className="text-champagne italic font-light">iconic?</span>
            </h2>
            <p className="text-lg text-white/40 mb-12 font-display font-light">
              Let's collaborate to build something that stands out in the digital landscape.
            </p>
            <Link to="/projects" className="px-12 py-5 bg-white text-midnight rounded-full font-bold hover:bg-champagne transition-all hover:scale-105 shadow-2xl inline-block">
              Start Project
            </Link>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.02; }
          50% { opacity: 0.04; }
        }
        
        .animate-pulse {
          animation: pulse 6s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default Services;