import React, { useEffect, useRef, useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const [counter, setCounter] = useState({ years: 0, projects: 0, clients: 0, countries: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Counter animation
  useEffect(() => {
    const targets = { years: 5, projects: 150, clients: 100, countries: 12 };
    const duration = 2000;
    const steps = 60;
    const increment = {};
    
    Object.keys(targets).forEach(key => {
      increment[key] = targets[key] / steps;
    });
    
    let current = { years: 0, projects: 0, clients: 0, countries: 0 };
    let step = 0;
    
    const timer = setInterval(() => {
      if (step < steps) {
        setCounter({
          years: Math.min(Math.floor(current.years + increment.years), targets.years),
          projects: Math.min(Math.floor(current.projects + increment.projects), targets.projects),
          clients: Math.min(Math.floor(current.clients + increment.clients), targets.clients),
          countries: Math.min(Math.floor(current.countries + increment.countries), targets.countries)
        });
        
        current.years += increment.years;
        current.projects += increment.projects;
        current.clients += increment.clients;
        current.countries += increment.countries;
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
    <div ref={sectionRef} className="min-h-screen bg-[#0a0a0a] text-white font-['Inter']">
      
      {/* Hero Section - Modern Minimalist */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600 rounded-full blur-[100px] opacity-20 animate-pulse animation-delay-1000"></div>
        
        <div className="relative z-10 text-center px-4">
          <span className="inline-block px-4 py-2 border border-white/20 rounded-full text-sm mb-6 backdrop-blur-sm">
            ✦ Welcome to FlintVerse
          </span>
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              About
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FlintVerse
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            We don't just build websites — we craft digital experiences that leave lasting impressions.
          </p>
          <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all hover:scale-105">
            Explore Our Journey →
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - Dark Theme */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: counter.years, label: 'Years of Excellence', icon: '⭐', suffix: '+' },
              { value: counter.projects, label: 'Projects Completed', icon: '🚀', suffix: '+' },
              { value: counter.clients, label: 'Happy Clients', icon: '😊', suffix: '+' },
              { value: counter.countries, label: 'Countries Served', icon: '🌍', suffix: '' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2 transform group-hover:scale-110 group-hover:rotate-3 transition-all">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Split Layout */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-purple-400 font-semibold mb-4 block">✦ Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Crafting Digital Excellence Since 2020
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                What started as a passion project in a small Accra office has grown into a 
                full-service digital agency serving clients worldwide. We believe in the power 
                of design to transform businesses and create meaningful connections.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our team of creative minds and technical experts work together to deliver 
                solutions that not only look beautiful but also perform exceptionally.
              </p>
              
              {/* Features list */}
              <div className="space-y-4">
                {['100% Client Satisfaction', '24/7 Support', 'Agile Development', 'Creative Excellence'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs">
                      ✓
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Interactive timeline */}
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold mb-6">Our Journey</h3>
                <div className="space-y-6">
                  {timelineEvents.map((event, index) => (
                    <div 
                      key={index}
                      className="relative pl-8 border-l-2 border-white/10 hover:border-purple-500 transition-colors cursor-pointer group"
                      onMouseEnter={() => setActiveTab(index)}
                    >
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white/10 group-hover:bg-purple-500 transition-colors"></div>
                      <span className="text-purple-400 font-mono text-sm">{event.year}</span>
                      <h4 className="font-semibold mb-1">{event.event}</h4>
                      <p className="text-gray-500 text-sm">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600 rounded-full blur-[80px] opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Card Based */}
      <section className="py-24 px-4 border-t border-white/10 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold mb-4 block">✦ What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine creativity with technical expertise to deliver outstanding results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2"
              >
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{ backgroundColor: service.color }}
                ></div>
                
                <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-purple-500"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-2xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Let's create something amazing together. Get in touch with us today.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer Contact */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold">
              Flint<span className="text-purple-400">Verse</span>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Work</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="flex gap-4">
              {['📱', '💬', '✉️', '🔗'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                >
                  <span className="text-sm">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center text-gray-600 text-sm mt-8">
            © 2024 FlintVerse. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          75% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}