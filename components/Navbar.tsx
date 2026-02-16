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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isHome = location.pathname === '/';

  const navClass = `${isHome
    ? `fixed w-full z-50 transition-all duration-500 ${isScrolled
      ? `${theme === 'dark' ? 'bg-background-dark/95 border-white/10' : 'bg-background-light/95 border-gray-200'} border-b py-4 shadow-lg backdrop-blur-md`
      : `bg-transparent py-6 border-b ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}`
    : `fixed w-full z-50 ${theme === 'dark' ? 'bg-background-dark/95 border-white/10' : 'bg-background-light/95 border-gray-200'} border-b py-4 backdrop-blur-md transition-all duration-500`} 
    ${isVisible ? 'translate-y-0' : '-translate-y-full'}`;

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-active');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-active');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-active');
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
      <div className="container-custom flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 md:space-x-3 group relative z-[60]">
          <img src="/alsun/logomark.png" alt="Alsun Machinery Logo" className={`h-8 w-auto md:h-10 ${theme === 'light' ? 'filter brightness-90' : ''}`} />
          <div className="flex flex-col">
            <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-display font-bold tracking-widest text-base md:text-lg uppercase leading-none`}>Alsun</span>
            <span className="text-[0.5rem] md:text-[0.6rem] tracking-[0.3em] text-gray-400 uppercase leading-none font-semibold">Machinery</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/products" label="Products" />
          <NavLink to="/compare" label="Compare" badge={compareIds.length} />
          <NavLink to="/services" label="Services" />
          <NavLink to="/contact" label="Contact" />

          <div className="flex items-center border-l pl-6 lg:pl-8 border-gray-700">
            <Link to="/contact" className={`border ${theme === 'dark' ? 'border-white/30 text-white hover:bg-white hover:text-black' : 'border-primary text-primary hover:bg-primary hover:text-white'} px-4 lg:px-6 py-2 text-[10px] lg:text-xs font-bold uppercase tracking-wider transition-all rounded-sm`}>
              Get Quote
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden relative z-[60]">
          {compareIds.length > 0 && (
            <Link to="/compare" className="relative group">
              <span className="material-icons text-primary text-xl">layers</span>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-white shadow-lg">
                {compareIds.length}
              </span>
            </Link>
          )}
          <button
            className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} p-1 transition-transform active:scale-90`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-icons text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-50 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/60' : 'bg-white/40'} backdrop-blur-3xl shadow-2xl`}></div>

        <div className={`relative h-full flex flex-col p-8 pt-24 space-y-4 transform transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col space-y-1">
            <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">Navigation</span>
            {[
              { to: "/", label: "Home", icon: "home" },
              { to: "/products", label: "Products", icon: "inventory_2" },
              { to: "/compare", label: "Compare Machines", icon: "analytics", badge: compareIds.length },
              { to: "/services", label: "Our Services", icon: "support_agent" },
              { to: "/contact", label: "Contact Us", icon: "email" },
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all ${theme === 'dark' ? 'bg-black/40 border-white/5 text-gray-300' : 'bg-white/80 border-gray-200 text-gray-700'}`}
              >
                <div className="flex items-center gap-4">
                  <span className="material-icons text-primary opacity-60">{link.icon}</span>
                  <span className="uppercase font-bold text-xs tracking-widest">{link.label}</span>
                </div>
                {link.badge !== undefined && link.badge > 0 && (
                  <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">{link.badge}</span>
                )}
                <span className="material-icons text-xs opacity-30">chevron_right</span>
              </Link>
            ))}
          </div>

          <div className="pt-8">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center gap-3 py-4 uppercase font-bold text-xs tracking-[0.2em] rounded-xl shadow-lg shadow-primary/20"
            >
              <span className="material-icons text-sm">assignment</span>
              Get Technical Quote
            </Link>
          </div>

          <div className="mt-auto pt-8 border-t border-gray-700/20 text-center">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">© 2026 Alsun Machinery</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;