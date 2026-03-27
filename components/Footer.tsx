import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`transition-colors duration-500 py-8 md:py-12 border-t ${theme === 'dark' ? 'bg-background-dark text-white border-white/5' : 'bg-gray-50 text-gray-900 border-gray-200'}`}>
      <div className="container-custom text-center px-4">

        {/* Logo + tagline */}
        <div className="mb-5 md:mb-8 flex flex-col items-center">
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-110"></div>
            <img src="/alsun/logomark.png" alt="Alsun Machinery Logo" className={`relative h-10 md:h-14 w-auto ${theme === 'light' ? 'filter grayscale brightness-50' : ''}`} />
          </div>
          <h3 className={`font-display font-bold tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-sm uppercase text-primary`}>
            Built to Outperform
          </h3>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-3 mb-6 md:mb-10">
          {[
            { icon: 'close', hover: 'hover:bg-black', label: 'X' },
            { icon: 'play_arrow', hover: 'hover:bg-red-600', label: 'YouTube' },
            { icon: 'info', hover: 'hover:bg-blue-600', label: 'LinkedIn' }
          ].map((social, i) => (
            <a key={i} href="#" aria-label={social.label} className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.hover} hover:text-white ${theme === 'dark' ? 'bg-white/5 text-gray-400' : 'bg-white text-gray-400 shadow-md'}`}>
              <span className="material-icons text-base md:text-lg">{social.icon}</span>
            </a>
          ))}
        </div>

        {/* Contact info — horizontal on mobile, 3-col on desktop */}
        <div className={`flex flex-wrap justify-center gap-3 md:gap-0 md:grid md:grid-cols-3 text-[9px] md:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase mb-6 md:mb-10 max-w-4xl mx-auto ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
          <div className="flex items-center gap-2 px-3 py-2 md:flex-col md:p-4 rounded-xl md:rounded-2xl border border-transparent hover:border-primary/20 transition-all">
            <span className="material-icons text-primary text-sm md:text-lg">call</span>
            <span>+91 83681 25978</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 md:flex-col md:p-4 rounded-xl md:rounded-2xl border border-transparent hover:border-primary/20 transition-all">
            <span className="material-icons text-primary text-sm md:text-lg">call</span>
            <span>+91 78274 34392</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 md:flex-col md:p-4 rounded-xl md:rounded-2xl border border-transparent hover:border-primary/20 transition-all">
            <span className="material-icons text-primary text-sm md:text-lg">email</span>
            <span className="text-primary truncate">info@alsunmachines.com</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`pt-5 md:pt-8 border-t text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em] md:tracking-[0.3em] ${theme === 'dark' ? 'border-white/5 text-gray-600' : 'border-gray-200 text-gray-500'}`}>
          © 2024 ALSUN MACHINERY.
          <div className="mt-2 flex justify-center gap-4 md:gap-6">
            <Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-primary transition-colors">Service Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;