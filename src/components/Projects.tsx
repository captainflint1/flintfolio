import React from 'react';
import { FiPhone, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

const Contact: React.FC = () => {
  const contactDetails = [
    {
      label: 'Call',
      value: '0542177021',
      href: 'tel:0542177021',
      icon: <FiPhone size={24} />
    },
    {
      label: 'WhatsApp',
      value: '0542177021',
      href: 'https://wa.me/233542177021',
      icon: <FaWhatsapp size={24} />
    },
    {
      label: 'LinkedIn',
      value: 'mensah-samuel',
      href: 'https://www.linkedin.com/in/mensah-samuel',
      icon: <FaLinkedinIn size={24} />
    },
    {
      label: 'Email',
      value: 'samuelmensah5521@gmail.com',
      href: 'mailto:samuelmensah5521@gmail.com',
      icon: <FiMail size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-midnight text-white selection:bg-champagne/30 font-sans flex items-center justify-center py-32 px-6">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0A0A0B]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,213,179,0.03),transparent)]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <div className="text-center mb-20 animate-fade-in">
          <span className="inline-block px-5 py-2 border border-champagne/20 rounded-full text-[10px] font-mono tracking-[0.3em] uppercase mb-8 backdrop-blur-sm text-champagne/80">
            ✦ Get In Touch
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-medium tracking-tighter mb-8">
            Let's <span className="text-champagne italic font-light">Connect.</span>
          </h1>
          <p className="text-white/40 max-w-xl mx-auto font-display font-light text-lg leading-relaxed">
            I'm always open to discussing new projects, creative ideas or original security solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactDetails.map((detail, index) => (
            <a
              key={index}
              href={detail.href}
              target={detail.label === 'LinkedIn' ? '_blank' : undefined}
              rel={detail.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              className="group relative bg-midnight-lighter/40 border border-white/5 p-10 rounded-[2.5rem] flex items-center gap-8 hover:border-champagne/20 transition-all duration-700 hover:-translate-y-1 block"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 group-hover:bg-champagne group-hover:text-midnight transition-colors duration-500 shrink-0">
                {detail.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-mono tracking-[0.3em] text-white/20 uppercase mb-1 group-hover:text-champagne/60 transition-colors">
                  {detail.label}
                </div>
                <div className="text-lg md:text-xl font-display font-medium text-white/80 group-hover:text-white transition-colors truncate">
                  {detail.value}
                </div>
              </div>
              <div className="absolute top-8 right-8 text-white/10 group-hover:text-champagne/40 transition-colors">
                <FiArrowUpRight size={20} />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-32 text-center">
          <p className="text-[10px] font-mono tracking-[0.4em] text-white/10 uppercase">
            EST. 2025 — FLINTFOLIO
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

