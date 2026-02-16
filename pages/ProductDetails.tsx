import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';

import { productsData } from '../data/products';


const ProductDetails: React.FC = () => {
    const { theme } = useTheme();
    const { id } = useParams<{ id: string }>();
    const product = id ? productsData[id] : null;
    const [isStickyVisible, setIsStickyVisible] = React.useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const scrollThreshold = 400;
            setIsStickyVisible(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!product) {
        return (
            <div className={`min-h-screen pt-32 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-background-dark text-white' : 'bg-background-light text-gray-900'}`}>
                <h2 className="text-2xl font-bold mb-4 font-display">Product Not Found</h2>
                <Link to="/products" className="text-primary hover:underline">Return to Products</Link>
            </div>
        );
    }

    return (
        <div className={`min-h-screen transition-colors duration-500 antialiased font-sans pt-24 ${theme === 'dark' ? 'bg-background-dark text-slate-200' : 'bg-background-light text-text-light'}`}>





            <div className="relative z-10">
                {/* Navigation Bar */}
                <div className="container-custom pt-0 pb-2 md:pb-4">
                    <Link to="/products" className={`group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${theme === 'dark' ? 'text-slate-500 hover:text-primary' : 'text-gray-400 hover:text-primary'}`}>
                        <span className="material-icons text-sm mr-2 transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Back to Inventory
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="container-custom pb-16 lg:pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

                        {/* Left: Product Visuals */}
                        <div className="lg:col-span-7 relative group px-2 md:px-0 mt-8 md:mt-16">
                            <div className={`absolute -inset-2 md:-inset-4 rounded-[2rem] blur-2xl opacity-20 bg-gradient-to-br from-primary to-blue-600 transition-opacity group-hover:opacity-30`}></div>
                            <div className={`relative aspect-[1.5] md:aspect-[2] rounded-3xl overflow-hidden border backdrop-blur-md flex items-center justify-center p-2 md:p-4 ${theme === 'dark' ? 'bg-card-dark/40 border-white/10' : 'bg-white/80 border-gray-100 shadow-2xl'}`}>
                                {/* Tech Markings */}
                                <div className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-primary/40"></div>
                                <div className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-primary/40"></div>
                                <div className="absolute bottom-4 left-4 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-primary/40"></div>
                                <div className="absolute bottom-4 right-4 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-primary/40"></div>

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="max-h-[150%] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-105 transform -translate-y-20"
                                />

                                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
                                    <div className={`px-3 md:px-4 py-1.5 md:py-2 rounded-xl border text-[8px] md:text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm ${theme === 'dark' ? 'bg-black/40 border-white/10' : 'bg-white/40 border-gray-200'}`}>
                                        {product.type}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Product Info */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32 px-4 lg:px-0">
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                                Premium Machinery
                            </div>
                            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight leading-none ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {product.title}
                            </h1>
                            <p className={`text-sm md:text-base leading-relaxed mb-6 font-light ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                                {product.desc}
                            </p>

                            {/* High Level Specs */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {product.specs.map((spec: any, idx: number) => (
                                    <div key={idx} className={`p-3 md:p-4 rounded-2xl border backdrop-blur-sm transition-all hover:border-primary/30 ${theme === 'dark' ? 'bg-card-dark/20 border-white/5' : 'bg-white border-gray-100 shadow-sm'}`}>
                                        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-primary font-bold block mb-2">{spec.label}</span>
                                        <div className={`flex items-center font-display text-sm md:text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                            <span className="material-icons-outlined text-primary mr-2 text-base md:text-lg">{spec.icon}</span>
                                            {spec.val}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="w-full sm:flex-1 bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95">
                                    Request Configuration
                                </Link>
                                <button className={`w-full sm:w-auto px-6 py-4 rounded-2xl border text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${theme === 'dark' ? 'border-white/10 text-white hover:bg-white hover:text-black' : 'border-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white'}`}>
                                    <span className="material-icons-outlined text-base">download</span> Technical Catalog
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="mt-12 flex flex-col items-center justify-center gap-3 animate-bounce opacity-50">
                        <span className={`text-[9px] font-bold uppercase tracking-[0.3em] ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>
                            Scroll down to see technical specifications
                        </span>
                        <span className="material-icons text-primary animate-pulse">keyboard_double_arrow_down</span>
                    </div>
                </section>

                {/* Technical Deep Dive */}
                <section className={`py-fluid-section border-t transition-colors ${theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-gray-50/50 border-gray-100'}`}>
                    <div className="container-custom">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
                            <div className="px-4 md:px-0">
                                <h2 className={`text-fluid-h2 font-display font-bold mb-4 uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                    Technical Engineering
                                </h2>
                                <div className="w-20 h-1 bg-primary"></div>
                            </div>
                            <p className={`max-w-md text-sm leading-relaxed px-4 md:px-0 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
                                Every machine is engineered for maximum uptime, precision moulding, and effortless maintenance.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                            {/* Technical Specifications Shell */}
                            <div className="lg:col-span-8 px-2 md:px-0">
                                <div className={`relative border backdrop-blur-md overflow-hidden ${theme === 'dark' ? 'bg-card-dark/40 border-white/10' : 'bg-white border-gray-100 shadow-2xl'}`}>
                                    {/* Industrial Corner Accents */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 z-20"></div>
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 z-20"></div>
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 z-20"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 z-20"></div>

                                    <div className={`px-6 md:px-10 py-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 ${theme === 'dark' ? 'border-primary/10 bg-primary/5' : 'border-gray-100 bg-gray-50'}`}>
                                        <div className="flex items-center gap-6">
                                            <div className="relative h-14 w-14 md:h-16 md:w-16 flex items-center justify-center bg-white/5 rounded-xl border border-primary/10">
                                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-75 opacity-50"></div>
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="h-[80%] w-auto object-contain relative z-10 transition-transform hover:scale-110"
                                                />
                                            </div>
                                            <div>
                                                <span className="text-[8px] uppercase font-bold tracking-[0.4em] text-primary mb-1 block">Specifications For</span>
                                                <h3 className={`text-sm md:text-base font-bold uppercase tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                                    {product.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-primary/10 pt-4 md:pt-0 md:pl-8">
                                            <h3 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] flex items-center text-primary font-display">
                                                Technical Specifications
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="p-4 md:p-8 relative z-10">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-primary/5 border border-primary/5">
                                            {Object.entries(product.details).map(([key, value]: [string, any]) => (
                                                <div key={key} className={`group/spec flex flex-col p-4 transition-all relative overflow-hidden ${theme === 'dark' ? 'bg-black/40 hover:bg-primary/5' : 'bg-white hover:bg-gray-50'}`}>
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <span className="text-[9px] uppercase tracking-[0.25em] text-slate-500 font-bold">
                                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                                        </span>
                                                    </div>

                                                    <div className={`text-sm md:text-base font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                                        <span>{value}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Features & Innovation */}
                            <div className="lg:col-span-4 space-y-8 px-2 md:px-0">
                                <div className={`p-8 md:p-10 relative overflow-hidden`}>
                                    <h3 className={`text-xl font-display font-bold mb-8 uppercase tracking-wider relative z-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Key Capabilities</h3>
                                    <ul className="space-y-6 relative z-10">
                                        {product.features.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-center group/feat">
                                                <div className="w-1.5 h-1.5 bg-primary mr-4"></div>
                                                <span className={`text-xs md:text-sm leading-relaxed font-bold transition-all group-hover/feat:translate-x-1 ${theme === 'dark' ? 'text-slate-200' : 'text-gray-700'}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Support Insight */}
                                <div className={`p-8 md:p-10 border relative overflow-hidden ${theme === 'dark' ? 'bg-card-dark/50 border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
                                    <div className="absolute top-0 left-0 w-2 h-full bg-primary/20"></div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-primary font-display flex items-center gap-2">
                                        Support Overview
                                    </h4>
                                    <p className={`text-xs leading-loose mb-8 font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
                                        Our machines include remote diagnostic capabilities and 24/7 technical relay for production continuity.
                                    </p>
                                    <Link to="/contact" className="w-full text-center text-[10px] font-bold uppercase tracking-[0.2em] bg-primary text-white hover:bg-black px-6 py-4 transition-all block active:scale-95 shadow-lg shadow-primary/20">
                                        Contact for Full Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductDetails;
