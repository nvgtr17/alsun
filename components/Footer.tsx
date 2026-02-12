import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`transition-colors duration-300 py-16 border-t ${theme === 'dark' ? 'bg-background-dark text-white border-white/10' : 'bg-gray-100 text-gray-900 border-gray-200'}`}>
      <div className="container mx-auto px-6 text-center">
        <div className="mb-10 flex flex-col items-center">
          <img src="/logomark.png" alt="Alsun Machinery Logo" className={`h-16 w-auto mb-4 opacity-80 ${theme === 'light' ? 'filter brightness-90' : ''}`} />
          <h3 className={`font-display font-bold tracking-[0.2em] text-sm uppercase ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Built to Outperform</h3>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all ${theme === 'dark' ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-600'}`}>
            <span className="material-icons text-sm">close</span>
          </a>
          <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all ${theme === 'dark' ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-600'}`}>
            <span className="material-icons text-sm">play_arrow</span>
          </a>
          <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all ${theme === 'dark' ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-600'}`}>
            <span className="material-icons text-sm">info</span>
          </a>
        </div>

        <div className={`flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-xs font-medium tracking-wide uppercase mb-12 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
          <div className="flex items-center gap-2">
            <span className="material-icons text-sm">call</span> +91 83681 25978
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons text-sm">call</span> +91 78274 34392
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons text-sm">call</span> +91 84483 36468
          </div>
        </div>

        <div className={`text-[10px] md:text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-gray-700' : 'text-gray-500'}`}>
          © 2024 Alsun Machinery. All rights reserved.
          <Link to="/" className={`ml-2 hover:text-primary transition-colors ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>www.alsunmachines.com</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;