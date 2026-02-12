import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { useCompare } from './CompareContext';

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const { compareIds } = useCompare();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = location.pathname === '/';

  const navClass = isHome
    ? `fixed w-full z-50 transition-all duration-300 ${isScrolled
      ? `${theme === 'dark' ? 'bg-background-dark/95 border-white/10' : 'bg-background-light/95 border-gray-200'} border-b py-4 shadow-lg backdrop-blur-md`
      : `bg-transparent py-6 border-b ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}`
    : `fixed w-full z-50 ${theme === 'dark' ? 'bg-background-dark/95 border-white/10' : 'bg-background-light/95 border-gray-200'} border-b py-4 backdrop-blur-md transition-all duration-300`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ to, label, badge }: { to: string; label: string; badge?: number }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`text-sm font-medium tracking-wide uppercase transition-colors relative flex items-center gap-1 ${isActive ? 'text-primary' : `${theme === 'dark' ? 'text-gray-300 hover:text-primary' : 'text-gray-600 hover:text-primary'}`
          }`}
      >
        {label}
        {badge !== undefined && badge > 0 && (
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-white">
            {badge}
          </span>
        )}
      </Link>
    );
  };

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img src="logomark.png" alt="Alsun Machinery Logo" className={`h-10 w-auto group-hover:opacity-80 transition-opacity ${theme === 'light' ? 'filter brightness-90' : ''}`} />
          <div className="flex flex-col">
            <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-display font-bold tracking-widest text-lg uppercase leading-none`}>Alsun</span>
            <span className="text-[0.6rem] tracking-[0.3em] text-gray-400 uppercase leading-none font-semibold">Machinery</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/products" label="Products" />
          <NavLink to="/compare" label="Compare" badge={compareIds.length} />
          <NavLink to="/services" label="Services" />
          <NavLink to="/contact" label="Contact" />

          <div className="flex items-center border-l pl-8 border-gray-700">
            <Link to="/contact" className={`border ${theme === 'dark' ? 'border-white/30 text-white hover:bg-white hover:text-black' : 'border-primary text-primary hover:bg-primary hover:text-white'} px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-sm`}>
              Get Quote
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} p-2`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-icons">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full ${theme === 'dark' ? 'bg-background-dark border-white/10' : 'bg-background-light border-gray-200'} border-b p-6 flex flex-col space-y-4 shadow-2xl`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-primary uppercase font-bold text-sm`}>Home</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-primary uppercase font-bold text-sm`}>Products</Link>
          <Link to="/compare" onClick={() => setIsMobileMenuOpen(false)} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-primary uppercase font-bold text-sm flex items-center gap-2`}>
            Compare {compareIds.length > 0 && <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">{compareIds.length}</span>}
          </Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-primary uppercase font-bold text-sm`}>Services</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-primary uppercase font-bold text-sm`}>Contact</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white text-center py-3 uppercase font-bold text-sm rounded-sm">Get Quote</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;