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



            <div className="relative z-10">
                <div className="container-custom py-4">
                    <Link to="/products" className={`group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${theme === 'dark' ? 'text-slate-500 hover:text-primary' : 'text-gray-400 hover:text-primary'}`}>
                        <span className="material-icons text-sm mr-2 transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Back to Inventory
                    </Link>
                </div>

                <header className="container-custom py-8 text-center">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
                        Technical Comparison
                    </span>
                    <h1 className={`text-fluid-h1 font-display font-bold mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Machine Comparison Table
                    </h1>
                    <p className={`max-w-xl mx-auto text-sm md:text-base font-light mb-12 px-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
                        Detailed technical analysis of production throughput, thermal load, and mechanical parameters.
                    </p>

                    {/* Quick Add Machines Bar */}
                    {availableProducts.length > 0 && (
                        <div className="mb-12">
                            <h3 className={`text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 px-4`}>Add Machine to Comparison</h3>
                            <div className="flex flex-wrap justify-center gap-4 px-4">
                                {availableProducts.map(p => (
                                    <button
                                        key={p.id}
                                        onClick={() => compareIds.length < MAX_MACHINES && addToCompare(p.id)}
                                        disabled={compareIds.length >= MAX_MACHINES}
                                        className={`group relative flex items-center gap-4 p-4 rounded-2xl border transition-all hover:scale-105 ${compareIds.length >= MAX_MACHINES ? 'opacity-50 cursor-not-allowed' : ''} ${theme === 'dark' ? 'bg-card-dark/40 border-white/5 hover:border-primary/40' : 'bg-white border-gray-100 shadow-xl hover:shadow-primary/10 hover:border-primary/20'}`}
                                    >
                                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center p-2 ${theme === 'dark' ? 'bg-black/20' : 'bg-gray-50'}`}>
                                            <img src={p.image} className="w-full h-full object-contain drop-shadow-md" alt={p.title} />
                                        </div>
                                        <div className="text-left hidden sm:block">
                                            <span className="text-[7px] uppercase font-bold tracking-widest text-slate-500 block mb-0.5">{p.type}</span>
                                            <span className={`text-[9px] font-bold uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{p.title}</span>
                                        </div>
                                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <span className="material-icons text-primary text-xs group-hover:text-white">add</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            {compareIds.length >= MAX_MACHINES && (
                                <p className="text-[10px] uppercase font-bold tracking-widest text-primary mt-6">Maximum machine limit reached ({MAX_MACHINES}/{MAX_MACHINES})</p>
                            )}
                        </div>
                    )}
                </header>

                {selectedProducts.length === 0 ? (
                    <div className="container-custom py-24 text-center">
                        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-[2.5rem] mb-8 border rotate-45 hover:rotate-0 transition-transform duration-500 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-primary' : 'bg-gray-50 border-gray-100 text-primary shadow-xl shadow-primary/5'}`}>
                            <span className="material-icons text-4xl -rotate-45">analytics</span>
                        </div>
                        <h2 className={`text-2xl font-display font-bold mb-4 uppercase ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Comparison Empty</h2>
                        <p className={`mb-10 text-sm md:text-base max-w-md mx-auto ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>Select up to {MAX_MACHINES} machines from the list above to start the technical comparison.</p>
                        <Link to="/products" className="inline-block bg-primary text-white px-10 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl shadow-primary/20 active:scale-95">
                            Browse Inventory
                        </Link>
                    </div>
                ) : (
                    <div className="container-custom pb-24">
                        {/* Control Bar */}
                        <div className="flex justify-between items-center mb-8 px-2 md:px-0">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Live Comparison ({selectedProducts.length}/{MAX_MACHINES})</span>
                            <button onClick={clearCompare} className={`flex items-center gap-2 px-6 py-3 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 ${theme === 'dark' ? 'border-primary/20 text-primary hover:bg-primary/5' : 'border-gray-200 text-gray-500 hover:bg-gray-50 shadow-sm'}`}>
                                <span className="material-icons text-sm">delete_sweep</span>
                                Reset Comparison
                            </button>
                        </div>

                        {/* Comparison Table */}
                        <div className={`rounded-[2.5rem] border overflow-hidden backdrop-blur-md transition-all ${theme === 'dark' ? 'bg-card-dark/40 border-white/5' : 'bg-white border-gray-100 shadow-2xl'}`}>
                            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-primary/20">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className={`${theme === 'dark' ? 'bg-black/60' : 'bg-gray-50'}`}>
                                            <th className={`py-6 px-8 text-left w-1/5 min-w-[220px] border-r ${theme === 'dark' ? 'bg-black/80 border-white/5' : 'bg-gray-100 border-gray-100'}`}>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary mb-1">Specification</span>
                                                    <span className={`text-[12px] font-bold uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Technical Key</span>
                                                </div>
                                            </th>
                                            {selectedProducts.map(p => (
                                                <th key={p.id} className={`py-6 px-8 text-left min-w-[280px] border-r last:border-r-0 ${theme === 'dark' ? 'border-white/5 bg-white/5' : 'border-gray-100 bg-white/50'}`}>
                                                    <div className="relative group flex items-center gap-4">
                                                        <button onClick={() => removeFromCompare(p.id)} className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 z-10 shadow-lg">
                                                            <span className="material-icons text-[12px]">close</span>
                                                        </button>
                                                        <Link
                                                            to={`/products/${p.id}`}
                                                            target="_blank"
                                                            className="flex items-center gap-4 group/link transition-all"
                                                        >
                                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center p-2.5 flex-shrink-0 border transition-all group-hover/link:border-primary/50 ${theme === 'dark' ? 'bg-black/40 border-white/5' : 'bg-gray-100 border-gray-200 shadow-inner'}`}>
                                                                <img src={p.image} alt={p.title} className="max-h-full max-w-full object-contain drop-shadow-md" />
                                                            </div>
                                                            <div className="flex flex-col min-w-0">
                                                                <h4 className={`text-[11px] font-bold uppercase tracking-tight leading-none mb-1.5 truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{p.title}</h4>
                                                                <span className="text-[8px] font-bold text-primary uppercase tracking-[0.3em] group-hover/link:underline">View Product</span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </th>
                                            ))}
                                            {selectedProducts.length < MAX_MACHINES && (
                                                <th className={`py-6 px-8 text-left min-w-[280px] last:border-r-0 ${theme === 'dark' ? 'bg-primary/5' : 'bg-primary/5'}`}>
                                                    <div className="relative w-full">
                                                        <button
                                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                            className={`w-full flex items-center justify-between gap-4 px-6 py-4 rounded-2xl border text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50 shadow-sm'}`}
                                                        >
                                                            Add Machine
                                                            <span className={`material-icons text-lg transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                                        </button>

                                                        {isDropdownOpen && (
                                                            <div className={`absolute top-full left-0 w-full z-50 rounded-[2rem] border mt-4 max-h-64 overflow-y-auto overflow-x-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${theme === 'dark' ? 'bg-card-dark border-white/10' : 'bg-white border-gray-100'}`}>
                                                                {availableProducts.length > 0 ? availableProducts.map(p => (
                                                                    <button
                                                                        key={p.id}
                                                                        onClick={() => { addToCompare(p.id); setIsDropdownOpen(false); }}
                                                                        className={`w-full text-left p-4 flex items-center gap-4 transition-all border-b last:border-0 hover:pl-6 ${theme === 'dark' ? 'hover:bg-primary/20 border-white/5' : 'hover:bg-primary/5 border-gray-50'}`}
                                                                    >
                                                                        <img src={p.image} className="h-10 w-10 object-contain drop-shadow-sm" alt={p.title} />
                                                                        <div className="flex flex-col min-w-0">
                                                                            <span className={`text-[10px] font-bold uppercase tracking-widest truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{p.title}</span>
                                                                            <span className="text-[8px] uppercase font-bold text-slate-500 tracking-widest">{p.type}</span>
                                                                        </div>
                                                                    </button>
                                                                )) : (
                                                                    <div className="p-6 text-[10px] uppercase font-bold text-slate-500 text-center">Empty Inventory</div>
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
                                            <tr key={key} className={`group/row transition-colors ${idx % 2 === 0 ? '' : (theme === 'dark' ? 'bg-white/[0.02]' : 'bg-gray-50/30')}`}>
                                                <td className={`py-6 px-8 border-r text-xs uppercase tracking-[0.2em] font-bold border-l-4 border-l-transparent group-hover/row:border-l-primary group-hover/row:bg-primary/5 transition-all ${theme === 'dark' ? 'border-r-white/5 text-gray-400 group-hover/row:text-white' : 'border-r-gray-100 text-gray-500 group-hover/row:text-gray-900'}`}>
                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                </td>
                                                {selectedProducts.map(p => (
                                                    <td key={p.id} className={`py-6 px-8 border-r last:border-r-0 text-sm md:text-base font-bold leading-relaxed transition-all group-hover/row:bg-primary/5 ${theme === 'dark' ? 'border-white/5 text-white' : 'border-gray-100 text-gray-900'}`}>
                                                        {(p.details as any)[key] || "—"}
                                                    </td>
                                                ))}
                                                {selectedProducts.length < MAX_MACHINES && <td className="p-6 bg-primary/5 border-b border-white/5"></td>}
                                            </tr>
                                        ))}

                                        {/* Features Row */}
                                        <tr className={`${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'} border-t border-primary/30`}>
                                            <td className={`p-8 border-r font-display text-[11px] uppercase tracking-[0.4em] font-bold text-primary ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
                                                Technical <br />Advantages
                                            </td>
                                            {selectedProducts.map(p => (
                                                <td key={p.id} className={`p-8 border-r last:border-r-0 ${theme === 'dark' ? 'border-white/5' : 'border-gray-200'}`}>
                                                    <ul className="space-y-4">
                                                        {p.features.map((f, i) => (
                                                            <li key={i} className="flex items-start gap-4">
                                                                <span className="material-icons text-primary text-sm mt-0.5">verified</span>
                                                                <span className={`text-[10px] font-bold uppercase tracking-widest leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>{f}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </td>
                                            ))}
                                            {selectedProducts.length < MAX_MACHINES && <td className="p-8 bg-primary/10"></td>}
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
