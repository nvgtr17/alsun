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
        <div className={`min-h-screen transition-colors duration-500 antialiased font-sans pt-20 ${theme === 'dark' ? 'bg-background-dark text-slate-200' : 'bg-background-light text-text-light'}`}>

            {/* Sticky Machine Preview (Side Panel) */}
            <div className={`fixed right-8 top-1/2 -translate-y-1/2 z-[100] transition-all duration-700 hidden lg:block ${isStickyVisible ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-20 opacity-0 pointer-events-none'}`}>
                <div className={`w-52 p-6 rounded-[2.5rem] border backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative group overflow-hidden ${theme === 'dark' ? 'bg-black/80 border-primary/40' : 'bg-white/95 border-primary/20 shadow-primary/10'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl scale-125 opacity-50 group-hover:opacity-80 transition-opacity"></div>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full aspect-square object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="text-center relative z-10">
                        <span className="text-[8px] uppercase font-bold tracking-[0.4em] text-primary mb-2 block">System Online</span>
                        <h4 className={`text-xs font-bold uppercase tracking-tight leading-tight mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {product.title}
                        </h4>

                        <div className="space-y-3">
                            <Link to="/contact" className="w-full py-3 bg-primary hover:bg-white hover:text-black text-white rounded-2xl text-[9px] font-bold uppercase tracking-widest transition-all flex items-center justify-center shadow-lg shadow-primary/30">
                                Configure
                            </Link>
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`w-full py-3 rounded-2xl border text-[9px] font-bold uppercase tracking-widest transition-all ${theme === 'dark' ? 'border-white/10 text-white hover:bg-white/10' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                                Top
                            </button>
                        </div>
                    </div>

                    {/* Industrial Micro-details */}
                    <div className="absolute top-4 right-6 flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
                        <div className="w-1 h-1 rounded-full bg-primary/40"></div>
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]`}></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="relative z-10">
                {/* Navigation Bar */}
                <div className="container-custom py-6 md:py-8">
                    <Link to="/products" className={`group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${theme === 'dark' ? 'text-slate-500 hover:text-primary' : 'text-gray-400 hover:text-primary'}`}>
                        <span className="material-icons text-sm mr-2 transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Back to Inventory
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="container-custom pb-16 lg:pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                        {/* Left: Product Visuals */}
                        <div className="lg:col-span-7 relative group px-2 md:px-0">
                            <div className={`absolute -inset-2 md:-inset-4 rounded-[2rem] blur-2xl opacity-20 bg-gradient-to-br from-primary to-blue-600 transition-opacity group-hover:opacity-30`}></div>
                            <div className={`relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border backdrop-blur-md flex items-center justify-center p-6 md:p-12 ${theme === 'dark' ? 'bg-card-dark/40 border-white/10' : 'bg-white/80 border-gray-100 shadow-2xl'}`}>
                                {/* Tech Markings */}
                                <div className="absolute top-6 left-6 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-primary/40"></div>
                                <div className="absolute top-6 right-6 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-primary/40"></div>
                                <div className="absolute bottom-6 left-6 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-primary/40"></div>
                                <div className="absolute bottom-6 right-6 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-primary/40"></div>

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="max-h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-110"
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
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                                Premium Machinery
                            </div>
                            <h1 className={`text-fluid-h1 font-display font-bold mb-6 tracking-tight leading-none ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {product.title}
                            </h1>
                            <p className={`text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-light ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                                {product.desc}
                            </p>

                            {/* High Level Specs */}
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                {product.specs.map((spec: any, idx: number) => (
                                    <div key={idx} className={`p-4 md:p-6 rounded-2xl border backdrop-blur-sm transition-all hover:border-primary/30 ${theme === 'dark' ? 'bg-card-dark/20 border-white/5' : 'bg-white border-gray-100 shadow-sm'}`}>
                                        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-primary font-bold block mb-2">{spec.label}</span>
                                        <div className={`flex items-center font-display text-sm md:text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                            <span className="material-icons-outlined text-primary mr-2 text-base md:text-lg">{spec.icon}</span>
                                            {spec.val}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="w-full sm:flex-1 bg-primary hover:bg-primary-dark text-white px-8 py-5 rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95">
                                    Request Configuration
                                </Link>
                                <button className={`w-full sm:w-auto px-8 py-5 rounded-2xl border text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${theme === 'dark' ? 'border-white/10 text-white hover:bg-white hover:text-black' : 'border-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white'}`}>
                                    <span className="material-icons-outlined text-base">download</span> Technical Catalog
                                </button>
                            </div>
                        </div>
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
                                <div className={`rounded-[2.5rem] overflow-hidden border backdrop-blur-md ${theme === 'dark' ? 'bg-card-dark/40 border-white/10' : 'bg-white border-gray-100 shadow-xl'}`}>
                                    <div className={`px-8 py-6 border-b flex items-center justify-between ${theme === 'dark' ? 'border-primary/10 bg-primary/5' : 'border-gray-100 bg-gray-50'}`}>
                                        <h3 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] flex items-center text-primary">
                                            <span className="material-icons-outlined mr-2 text-sm md:text-base">precision_manufacturing</span> System Parameters
                                        </h3>
                                        <div className="flex gap-1">
                                            <div className="w-1 h-1 rounded-full bg-primary/40"></div>
                                            <div className="w-1 h-1 rounded-full bg-primary/20"></div>
                                            <div className="w-1 h-1 rounded-full bg-primary/10"></div>
                                        </div>
                                    </div>
                                    <div className="p-6 md:p-10">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {Object.entries(product.details).map(([key, value]: [string, any]) => (
                                                <div key={key} className={`group/spec flex items-center justify-between p-5 rounded-2xl border transition-all hover:border-primary/30 ${theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                                                    <div className="flex flex-col">
                                                        <span className="text-[8px] uppercase tracking-widest text-slate-500 font-bold mb-1.5">
                                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                                        </span>
                                                        <span className={`font-mono text-xs font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                                            {value}
                                                        </span>
                                                    </div>
                                                    <div className="opacity-10 md:opacity-0 group-hover/spec:opacity-100 transition-opacity">
                                                        <span className="material-icons text-primary text-xs">analytics</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Features & Innovation */}
                            <div className="lg:col-span-4 space-y-8 px-2 md:px-0">
                                <div className={`p-8 md:p-10 rounded-[2.5rem] border backdrop-blur-md relative overflow-hidden ${theme === 'dark' ? 'bg-primary/5 border-primary/20' : 'bg-primary/5 border-primary/20'}`}>
                                    <div className="absolute top-0 right-0 p-6 opacity-10">
                                        <span className="material-icons text-7xl">memory</span>
                                    </div>
                                    <h3 className={`text-xl font-display font-bold mb-8 uppercase tracking-wider relative z-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Key Innovations</h3>
                                    <ul className="space-y-6 relative z-10">
                                        {product.features.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-start group/feat">
                                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-4 mt-0.5 shadow-lg shadow-primary/20">
                                                    <span className="material-icons text-white text-[10px]">done</span>
                                                </div>
                                                <span className={`text-xs md:text-sm leading-relaxed font-bold transition-all group-hover/feat:translate-x-1 ${theme === 'dark' ? 'text-slate-200' : 'text-gray-700'}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Support Insight */}
                                <div className={`p-8 md:p-10 rounded-[2.5rem] border ${theme === 'dark' ? 'bg-card-dark/50 border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-primary">Service Protocol</h4>
                                    <p className={`text-xs leading-loose mb-8 font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
                                        Our machines include remote diagnostic capabilities and 24/7 technical relay for production continuity.
                                    </p>
                                    <Link to="/contact" className="w-full text-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:text-white hover:bg-primary px-6 py-4 rounded-xl border border-primary transition-all inline-block active:scale-95">
                                        Consult Engineering
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
