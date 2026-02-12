import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import { useCompare } from '../components/CompareContext';
import { productsData } from '../data/products';

const Compare: React.FC = () => {
    const { theme } = useTheme();
    const { compareIds, removeFromCompare, clearCompare, addToCompare } = useCompare();
    const [searchQuery, setSearchQuery] = useState('');

    // Sanitize comparison state: remove IDs that don't exist in productsData
    React.useEffect(() => {
        compareIds.forEach(id => {
            if (!productsData[id] || !productsData[id].title) {
                removeFromCompare(id);
            }
        });
    }, [compareIds, removeFromCompare]);

    const MAX_MACHINES = 6;
    const selectedProducts = compareIds.map(id => ({ ...productsData[id], id })).filter(p => p.title);

    // Get all unique parameters (keys in details object) across selected products
    const allDetailKeys = Array.from(
        new Set(selectedProducts.flatMap(p => Object.keys(p.details || {})))
    );

    const availableProducts = Object.entries(productsData)
        .filter(([id]) => !compareIds.includes(id))
        .map(([id, data]) => ({ ...data, id }))
        .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className={`min-h-screen transition-colors duration-500 antialiased font-sans pt-20 ${theme === 'dark' ? 'bg-background-dark text-slate-200' : 'bg-background-light text-text-light'}`}>

            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]`}></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-4">
                    <Link to="/products" className={`group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${theme === 'dark' ? 'text-slate-500 hover:text-primary' : 'text-gray-400 hover:text-primary'}`}>
                        <span className="material-icons text-sm mr-2 transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Back to Inventory
                    </Link>
                </div>

                <header className="py-8 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
                        Technical Benchmarking
                    </span>
                    <h1 className={`text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        System Comparison Matrix
                    </h1>
                    <p className={`max-w-xl mx-auto text-sm font-light mb-12 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
                        Side-by-side engineering analysis of production throughput, thermal load, and mechanical parameters.
                    </p>

                    {/* Quick Add Machines Bar */}
                    {availableProducts.length > 0 && (
                        <div className="mb-12">
                            <h3 className={`text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 animate-pulse`}>Inject Additional Node to Matrix</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {availableProducts.map(p => (
                                    <button
                                        key={p.id}
                                        onClick={() => compareIds.length < MAX_MACHINES && addToCompare(p.id)}
                                        disabled={compareIds.length >= MAX_MACHINES}
                                        className={`group relative flex items-center gap-4 p-4 rounded-2xl border transition-all hover:-translate-y-1 ${compareIds.length >= MAX_MACHINES ? 'opacity-50 cursor-not-allowed' : ''} ${theme === 'dark' ? 'bg-card-dark/40 border-white/5 hover:border-primary/40' : 'bg-white border-gray-100 shadow-lg hover:shadow-primary/10 hover:border-primary/20'}`}
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center p-2 ${theme === 'dark' ? 'bg-black/20' : 'bg-gray-50'}`}>
                                            <img src={p.image} className="w-full h-full object-contain drop-shadow-md" alt={p.title} />
                                        </div>
                                        <div className="text-left">
                                            <span className="text-[8px] uppercase font-bold tracking-widest text-slate-500 block mb-0.5">{p.type}</span>
                                            <span className={`text-[10px] font-bold uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{p.title}</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <span className="material-icons text-primary text-sm group-hover:text-white">add</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            {compareIds.length >= MAX_MACHINES && (
                                <p className="text-[10px] uppercase font-bold tracking-widest text-red-500/60 mt-4">Matrix capacity reached ({MAX_MACHINES}/{MAX_MACHINES})</p>
                            )}
                        </div>
                    )}
                </header>

                {selectedProducts.length === 0 ? (
                    <div className="py-24 text-center">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 border ${theme === 'dark' ? 'bg-white/5 border-white/10 text-slate-500' : 'bg-gray-50 border-gray-100 text-gray-300'}`}>
                            <span className="material-icons text-4xl">analytics</span>
                        </div>
                        <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>No Units Selected</h2>
                        <p className={`mb-8 text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>Select up to {MAX_MACHINES} machines from the selection above to initialize technical comparison.</p>
                        <Link to="/products" className="bg-primary text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-all">
                            Browse Inventory
                        </Link>
                    </div>
                ) : (
                    <div className="pb-24">
                        {/* Control Bar */}
                        <div className="flex justify-end mb-8">
                            <button onClick={clearCompare} className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-[10px] font-bold uppercase tracking-widest transition-all ${theme === 'dark' ? 'border-white/10 text-slate-400 hover:bg-white/5' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                                <span className="material-icons text-sm">delete_sweep</span>
                                Clear Matrix
                            </button>
                        </div>

                        {/* Comparison Table */}
                        <div className={`rounded-3xl border overflow-hidden backdrop-blur-md ${theme === 'dark' ? 'bg-card-dark/40 border-white/5' : 'bg-white border-gray-100 shadow-2xl'}`}>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className={`${theme === 'dark' ? 'bg-black/60' : 'bg-gray-100'}`}>
                                            <th className={`py-2 px-6 text-left w-1/5 min-w-[200px] border-r ${theme === 'dark' ? 'bg-black/80 border-white/5' : 'bg-gray-200 border-gray-200'}`}>
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-primary">Row Detail</span>
                                                    <span className={`text-[11px] font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Comparison Key</span>
                                                </div>
                                            </th>
                                            {selectedProducts.map(p => (
                                                <th key={p.id} className={`py-2 px-6 text-left min-w-[250px] border-r last:border-r-0 ${theme === 'dark' ? 'border-white/5 bg-white/5' : 'border-gray-200 bg-white/50'}`}>
                                                    <div className="relative group flex items-center gap-3">
                                                        <button onClick={() => removeFromCompare(p.id)} className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white z-10">
                                                            <span className="material-icons text-[8px]">close</span>
                                                        </button>
                                                        <Link
                                                            to={`/products/${p.id}`}
                                                            target="_blank"
                                                            className="flex items-center gap-3 group/link transition-all hover:opacity-70"
                                                        >
                                                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center p-1.5 flex-shrink-0 ${theme === 'dark' ? 'bg-black/40' : 'bg-gray-100'}`}>
                                                                <img src={p.image} alt={p.title} className="max-h-full max-w-full object-contain" />
                                                            </div>
                                                            <div className="flex flex-col min-w-0">
                                                                <h4 className={`text-[9px] font-bold uppercase tracking-tight leading-none mb-1 line-clamp-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{p.title}</h4>
                                                                <span className="text-[7px] font-bold text-primary uppercase tracking-[0.2em] group-hover/link:underline whitespace-nowrap">Explore System</span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </th>
                                            ))}
                                            {selectedProducts.length < MAX_MACHINES && (
                                                <th className={`py-2 px-6 text-left min-w-[250px] last:border-r-0 ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'}`}>
                                                    <div className="relative w-full">
                                                        <button
                                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                            className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg border text-[8px] font-bold uppercase tracking-widest transition-all ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50'}`}
                                                        >
                                                            Add Unit
                                                            <span className={`material-icons text-[10px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                                        </button>

                                                        {isDropdownOpen && (
                                                            <div className={`absolute top-full left-0 w-full z-100 rounded-xl border mt-2 max-h-48 overflow-y-auto overflow-x-hidden shadow-2xl ${theme === 'dark' ? 'bg-[#1a1a1a] border-white/10 shadow-black' : 'bg-white border-gray-100 shadow-xl'}`}>
                                                                {availableProducts.length > 0 ? availableProducts.map(p => (
                                                                    <button
                                                                        key={p.id}
                                                                        onClick={() => { addToCompare(p.id); setIsDropdownOpen(false); }}
                                                                        className={`w-full text-left p-3 flex items-center gap-3 transition-colors border-b last:border-0 ${theme === 'dark' ? 'hover:bg-primary/20 border-white/5' : 'hover:bg-primary/5 border-gray-50'}`}
                                                                    >
                                                                        <img src={p.image} className="h-8 w-8 object-contain" alt={p.title} />
                                                                        <div className="flex flex-col min-w-0">
                                                                            <span className={`text-[10px] font-bold uppercase tracking-widest truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{p.title}</span>
                                                                            <span className="text-[8px] uppercase font-bold text-slate-500 tracking-tighter">{p.type}</span>
                                                                        </div>
                                                                    </button>
                                                                )) : (
                                                                    <div className="p-4 text-[10px] uppercase font-bold text-slate-500 text-center">Empty Inventory</div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                </th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Dynamic Rows based on details */}
                                        {(allDetailKeys as string[]).map((key, idx) => (
                                            <tr key={key} className={idx % 2 === 0 ? '' : (theme === 'dark' ? 'bg-white/[0.02]' : 'bg-gray-50/50')}>
                                                <td className={`py-4 px-6 border-r font-mono text-sm uppercase tracking-widest font-bold border-l-4 border-l-primary ${theme === 'dark' ? 'bg-black/40 border-r-white/5 text-white' : 'bg-gray-50 border-r-gray-100 text-gray-900'}`}>
                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                </td>
                                                {selectedProducts.map(p => (
                                                    <td key={p.id} className={`py-3 px-6 border-r last:border-r-0 font-mono text-base font-bold leading-relaxed ${theme === 'dark' ? 'border-white/5 text-white' : 'border-gray-100 text-gray-900'}`}>
                                                        {(p.details as any)[key] || "—"}
                                                    </td>
                                                ))}
                                                {selectedProducts.length < MAX_MACHINES && <td className="p-6 bg-primary/5 shadow-inner"></td>}
                                            </tr>
                                        ))}

                                        {/* Features Row */}
                                        <tr className={`${theme === 'dark' ? 'bg-primary/5' : 'bg-primary/5'} border-t border-primary/20`}>
                                            <td className={`p-6 border-r font-mono text-[10px] uppercase tracking-widest font-bold text-primary ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
                                                System Advancements
                                            </td>
                                            {selectedProducts.map(p => (
                                                <td key={p.id} className={`p-6 border-r last:border-r-0 ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
                                                    <ul className="space-y-3">
                                                        {p.features.map((f, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <span className="material-icons text-primary text-[10px] mt-0.5">verified</span>
                                                                <span className={`text-[9px] font-bold uppercase tracking-tight ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'}`}>{f}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </td>
                                            ))}
                                            {selectedProducts.length < MAX_MACHINES && <td className="p-6 bg-primary/5"></td>}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Compare;
