import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import { useEffect } from 'react';

import { ThemeProvider, useTheme } from './components/ThemeContext';
import { CompareProvider } from './components/CompareContext';
import Compare from './pages/Compare';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 relative ${theme === 'dark' ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'}`}>

      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Grid */}
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-grid-pattern opacity-40' : 'bg-grid-pattern-light opacity-60'}`}></div>

        {/* Dynamic Spotlights */}
        <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] animate-float opacity-30 ${theme === 'dark' ? 'bg-primary' : 'bg-primary/20'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] animate-float opacity-20 delay-1000 ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-200'}`} style={{ animationDirection: 'reverse' }}></div>

        {/* Noise Texture */}
        <div className="absolute inset-0 noise-overlay opacity-[0.03]"></div>

        {/* Shadow Overlay for depth */}
        <div className={`absolute inset-0 ${theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)]'
          : 'bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(255,255,255,0.2)_100%)]'}`}></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CompareProvider>
        <HashRouter>
          <ScrollToTop />
          <AppContent />
        </HashRouter>
      </CompareProvider>
    </ThemeProvider>
  );
};

export default App;