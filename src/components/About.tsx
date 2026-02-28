import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const [counter, setCounter] = useState({ years: 0, projects: 0, clients: 0, countries: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  // Counter animation
  useEffect(() => {
    const targets: Record<string, number> = { years: 5, projects: 150, clients: 100, countries: 12 };
    const duration = 2000;
    const steps = 60;
    const increment: Record<string, number> = {};

    Object.keys(targets).forEach(key => {
      increment[key] = targets[key] / steps;
    });

    let current: Record<string, number> = { years: 0, projects: 0, clients: 0, countries: 0 };
    let step = 0;

    const timer = setInterval(() => {
      if (step < steps) {
        setCounter({
          years: Math.min(Math.floor(current['years'] + increment['years']), targets['years']),
          projects: Math.min(Math.floor(current['projects'] + increment['projects']), targets['projects']),
          clients: Math.min(Math.floor(current['clients'] + increment['clients']), targets['clients']),
          countries: Math.min(Math.floor(current['countries'] + increment['countries']), targets['countries'])
        });

        current['years'] += increment['years'];
        current['projects'] += increment['projects'];
        current['clients'] += increment['clients'];
        current['countries'] += increment['countries'];
        step++;
      } else {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const timelineEvents = [
    { year: '2020', event: 'FlintVerse Founded', description: 'Started as a small design studio in Accra' },
    { year: '2021', event: 'First Major Client', description: 'Partnered with leading tech companies in West Africa' },
    { year: '2022', event: 'Expanded Team', description: 'Grew to 10+ creative professionals' },
    { year: '2023', event: 'International Projects', description: 'Started serving clients across 3 continents' },
    { year: '2024', event: 'Innovation Award', description: 'Recognized for excellence in web development' },
  ];

  const services = [
    {
      title: 'Brand Strategy',
      icon: '🎯',
      color: '#FF6B6B',
      features: ['Identity Design', 'Brand Guidelines', 'Visual Strategy']
    },
    {
      title: 'UI/UX Design',
      icon: '✨',
      color: '#4ECDC4',
      features: ['User Research', 'Wireframing', 'Prototyping']
    },
    {
      title: 'Development',
      icon: '⚡',
      color: '#45B7D1',
      features: ['Frontend', 'Backend', 'CMS Integration']
    },
    {
      title: 'Security',
      icon: '🛡️',
      color: '#96CEB4',
      features: ['SOC Analysis', 'Threat Detection', 'Security Audits']
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-midnight text-white font-sans selection:bg-champagne/30">

      {/* Hero Section - Elegant & Refined */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(229,213,179,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,213,179,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Elegant glowing orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne rounded-full blur-[120px] opacity-[0.03] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] opacity-[0.02] animate-pulse animation-delay-1000"></div>

        <div className="relative z-10 text-center px-4">
          <span className="inline-block px-5 py-2 border border-champagne/20 rounded-full text-[10px] font-mono tracking-[0.3em] uppercase mb-8 backdrop-blur-sm text-champagne/80">
            ✦ The Flintfolio Story
          </span>
          <h1 className="text-7xl md:text-9xl font-display font-medium mb-8 tracking-tighter">
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              Elevated
            </span>
            <br />
            <span className="text-champagne italic font-light">Experiences.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 font-display font-light leading-relaxed">
            Crafting high-fidelity digital interfaces and robust security operations with a focus on precision and elegance.
          </p>
          <Link to="/portfolio" className="px-10 py-4 bg-champagne text-midnight rounded-full font-bold hover:bg-white transition-all hover:scale-105 shadow-xl shadow-champagne/10 inline-block">
            Our Journey
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-champagne/60 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - High Density */}
      <section className="py-24 px-4 border-y border-white/5 bg-midnight-lighter/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: counter.years, label: 'Years of Experience', suffix: '+' },
              { value: counter.projects, label: 'Projects Completed', suffix: '+' },
              { value: counter.clients, label: 'Global Clients', suffix: '+' },
              { value: counter.countries, label: 'Countries Served', suffix: '' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-display font-medium mb-3 text-white group-hover:text-champagne transition-colors duration-500">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-[10px] text-white/30 font-mono uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Split Layout */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-champagne font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">✦ Heritage</span>
              <h2 className="text-4xl md:text-6xl font-display font-medium mb-8 tracking-tight">
                Engineering Digital <span className="text-white/40 italic font-light">Elegance</span>
              </h2>
              <p className="text-white/60 mb-6 text-lg leading-relaxed font-light">
                What began in 2020 as a quest for technical perfection has evolved into a multi-disciplinary studio. We bridge the gap between creative design and rigorous security intelligence.
              </p>
              <p className="text-white/40 mb-10 text-base leading-relaxed font-light">
                Our approach is rooted in the "SOC-to-Pixel" philosophy: every interface must be as secure as it is stunning, and every security dashboard must be as intuitive as it is powerful.
              </p>

              {/* Features list */}
              <div className="grid grid-cols-2 gap-6">
                {['Creative Excellence', 'SOAR Automation', 'Technical Precision', 'Strategic Design'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-champagne/40" />
                    <span className="text-sm text-white/70 font-display uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Refined timeline */}
              <div className="bg-midnight-subtle border border-white/5 p-10 rounded-[2rem] shadow-2xl relative z-10">
                <h3 className="text-xl font-display font-medium mb-8 text-white">Milestones</h3>
                <div className="space-y-8">
                  {timelineEvents.map((event, index) => (
                    <div
                      key={index}
                      className="relative pl-10 border-l border-white/10 hover:border-champagne/40 transition-all cursor-pointer group"
                    >
                      <div className="absolute left-[-4.5px] top-0 w-2 h-2 rounded-full bg-white/10 group-hover:bg-champagne group-hover:scale-150 transition-all shadow-[0_0_15px_rgba(229,213,179,0)] group-hover:shadow-[0_0_15px_rgba(229,213,179,0.5)]"></div>
                      <span className="text-champagne font-mono text-[10px] tracking-widest uppercase mb-1 block opacity-60 group-hover:opacity-100 transition-opacity">{event.year}</span>
                      <h4 className="font-display font-medium text-white group-hover:text-champagne transition-colors">{event.event}</h4>
                      <p className="text-white/30 text-sm mt-1 leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-500">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-champagne/20 to-transparent blur-3xl opacity-20 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Minimalist Cards */}
      <section className="py-32 px-4 bg-midnight-lighter/50 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-champagne font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">✦ Services</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-8 tracking-tight">Core Competencies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-midnight border border-white/5 p-8 rounded-2xl hover:border-champagne/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-champagne group-hover:text-midnight transition-colors duration-500">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-display font-medium mb-4 text-white group-hover:text-champagne transition-colors">{service.title}</h3>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-white/40 text-xs flex items-center gap-2 group-hover:text-white/60 transition-colors">
                        <span className="w-1 h-1 rounded-full bg-champagne/40"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-champagne/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Sophisticated */}
      <section className="py-40 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display font-medium mb-10 tracking-tight leading-tight">
            Ready to <span className="text-champagne italic font-light">innovate?</span>
          </h2>
          <p className="text-xl text-white/50 mb-12 font-display font-light leading-relaxed">
            Whether it's securing your infrastructure or crafting your visual identity, we bring precision and passion to every project.
          </p>
          <Link to="/projects" className="px-12 py-5 bg-white text-midnight rounded-full font-bold hover:bg-champagne transition-all hover:scale-105 shadow-2xl inline-block">
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* Footer Contact - Minimalist */}
      <footer className="py-20 px-4 border-t border-white/5 bg-midnight-lighter/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-2xl font-display font-medium mb-2">
                Flint<span className="text-champagne italic font-light">folio</span>
              </div>
              <div className="text-[10px] font-mono tracking-widest text-white/20 uppercase">
                © 2025 Creative Intelligence
              </div>
            </div>

            <div className="flex gap-12">
              {['Home', 'Portfolio', 'Services', 'Contact'].map(link => (
                <a key={link} href={link === 'Home' ? '/' : link === 'Portfolio' ? '/portfolio' : link === 'Services' ? '/services' : '/projects'} className="text-sm font-display text-white/40 hover:text-champagne transition-colors tracking-widest uppercase">{link}</a>
              ))}
            </div>

            <div className="flex gap-6">
              {['📱', '💬', '✉️', '🔗'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-champagne hover:text-midnight hover:border-transparent transition-all hover:scale-110 shadow-xl"
                >
                  <span className="text-sm">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          75% { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
        
        .animate-scroll {
          animation: scroll 2s cubic-bezier(0.23, 1, 0.32, 1) infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}