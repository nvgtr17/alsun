import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import { useCompare } from '../components/CompareContext';

const Products: React.FC = () => {
  const { theme } = useTheme();
  const { compareIds, addToCompare, removeFromCompare, isInCompare, clearCompare } = useCompare();

  return (
    <div className={`transition-colors duration-500 antialiased overflow-x-hidden pt-20 font-sans ${theme === 'dark' ? 'bg-background-dark text-slate-200' : 'bg-background-light text-text-light'}`}>

      {/* Floating Comparison Bar */}
      {compareIds.length > 0 && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] animate-slide-up">
          <div className={`flex items-center gap-6 px-8 py-4 rounded-full border backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${theme === 'dark' ? 'bg-primary/20 border-primary/40' : 'bg-white/90 border-primary/20 shadow-primary/20'}`}>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-primary">System Comparator</span>
              <span className={`text-xs font-mono font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{compareIds.length} / 4 NODES ACTIVE</span>
            </div>
            <div className="h-8 w-px bg-primary/20"></div>
            <div className="flex gap-3">
              <Link to="/compare" className="bg-primary hover:bg-white hover:text-black text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg shadow-primary/30 active:scale-95">
                Analyze Matrix
              </Link>
              <button
                onClick={clearCompare}
                className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all ${theme === 'dark' ? 'border-white/10 hover:bg-white/10 text-white' : 'border-gray-200 hover:bg-gray-100 text-gray-600'}`}
                title="Reset Queue"
              >
                <span className="material-icons text-lg">layers_clear</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]`}></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero */}
      <header className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-8 animate-fade-in">
            Engineering Precision
          </div>
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tighter leading-none ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Industrial Molding <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-500 font-sans">Ecosystem</span>
          </h1>
          <p className={`mt-6 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
            Browse our catalog of high-capacity machinery systems. Select multiple units to compare technical parameters and production throughput.
          </p>
        </div>

        {/* Floating Tech Markings */}
        <div className="absolute bottom-10 left-10 text-[10px] font-mono opacity-20 hidden lg:block">ALSN_UNIT_INDEX: v4.0.2</div>
        <div className="absolute bottom-10 right-10 text-[10px] font-mono opacity-20 hidden lg:block">GRID_COORDS: 28.6139N / 77.2090E</div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-24">

        {/* Fully Automatic Series */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">Level 01</span>
              <h2 className={`text-3xl font-display font-bold uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Automatic Production</h2>
              <div className="w-20 h-1 bg-primary mt-4"></div>
            </div>
            <p className={`max-w-md text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>
              Fully autonomous molding solutions for high-volume consistent output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <ProductCard
              theme={theme}
              id="2-cav-automatic"
              image="../machine/MACHINE.png"
              title="2 CAV AUTOMATIC"
              desc="High-performance dual cavity automatic blow molding machine engineered for peak reliability."
              specs={[
                { label: 'Output', val: '2000-2200 BPH', icon: 'speed' },
                { label: 'Max Volume', val: '1000 ML', icon: 'water_drop' },
                { label: 'Cavity', val: '2 Cavity', icon: 'grid_view' },
                { label: 'Heating', val: '25 kW', icon: 'bolt' },
              ]}
              addToCompare={addToCompare}
              removeFromCompare={removeFromCompare}
              isInCompare={isInCompare("2-cav-automatic")}
            />

            <ProductCard
              theme={theme}
              id="4-cav-automatic"
              image="../machine/MACHINE.png"
              title="4 CAV AUTOMATIC"
              desc="Quad cavity system optimized for massive industrial production demands."
              specs={[
                { label: 'Output', val: '4400-4800 BPH', icon: 'speed' },
                { label: 'Max Volume', val: '1000 ML', icon: 'water_drop' },
                { label: 'Cavity', val: '4 Cavity', icon: 'grid_view' },
                { label: 'Heating', val: '25 kW', icon: 'bolt' },
              ]}
              addToCompare={addToCompare}
              removeFromCompare={removeFromCompare}
              isInCompare={isInCompare("4-cav-automatic")}
            />
          </div>
        </section>

        {/* Semi-Automatic Series */}
        <section className={`py-24 border-y ${theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-gray-50/50 border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-right md:text-left">
              <div className="order-1 md:order-2">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">Level 02</span>
                <h2 className={`text-3xl font-display font-bold uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Semi-Automatic Systems</h2>
                <div className="w-20 h-1 bg-primary mt-4 ml-auto md:ml-0"></div>
              </div>
              <p className={`max-w-md text-sm leading-relaxed order-2 md:order-1 ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>
                Flexible production units for specialized container formats and artisanal runs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SemiAutoCard
                theme={theme}
                id="semi-2-cav-auto-drop"
                image="../machine/SUMO_ALSUN_MACHINE-removebg-preview.png"
                title="SEMI 2 CAV AUTO DROP"
                desc="Dual-cavity system with integrated auto-eject mechanism."
                specs={[
                  ['Output', '1200 BPH'],
                  ['Volume', '1000 ML'],
                  ['Cavity', '2 Cavity'],
                  ['Neck', '30 MM']
                ]}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                isInCompare={isInCompare("semi-2-cav-auto-drop")}
              />
              <SemiAutoCard
                theme={theme}
                id="semi-4-cav-auto-drop"
                image="../machine/SUMO_ALSUN_MACHINE-removebg-preview.png"
                title="SEMI 4 CAV AUTO DROP"
                desc="Quad-cavity semi-auto unit for enhanced operational speed."
                specs={[
                  ['Output', '2400 BPH'],
                  ['Volume', '1000 ML'],
                  ['Cavity', '4 Cavity'],
                  ['Neck', '30 MM']
                ]}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                isInCompare={isInCompare("semi-4-cav-auto-drop")}
              />
              <SemiAutoCard
                theme={theme}
                id="semi-auto-jar"
                image="../machine/SUMO_ALSUN_MACHINE-removebg-preview.png"
                title="SEMI AUTO JAR"
                desc="Wide-mouth jar specialist with reinforced molding pressure."
                specs={[
                  ['Output', '1000 BPH'],
                  ['Volume', '7000 ML'],
                  ['Cavity', '2 Cavity'],
                  ['Neck', '120 MM']
                ]}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                isInCompare={isInCompare("semi-auto-jar")}
              />
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-10 rounded-3xl border transition-all hover:border-primary/40 ${theme === 'dark' ? 'bg-card-dark/40 border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
              <span className="material-icons-outlined text-primary text-4xl mb-6">precision_manufacturing</span>
              <h4 className={`text-lg font-bold uppercase tracking-wide mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Heavy Engineering</h4>
              <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Ultra-rigid square pipe architecture minimizes harmonic vibration for flawless molding precision.</p>
            </div>
            <div className={`p-10 rounded-3xl border transition-all hover:border-primary/40 ${theme === 'dark' ? 'bg-card-dark/40 border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
              <span className="material-icons-outlined text-primary text-4xl mb-6">shield</span>
              <h4 className={`text-lg font-bold uppercase tracking-wide mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Operational Guard</h4>
              <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Comprehensive 2-year industrial warranty with guaranteed parts availability and 24/7 technical relay.</p>
            </div>
            <div className={`p-10 rounded-3xl border transition-all hover:border-primary/40 ${theme === 'dark' ? 'bg-card-dark/40 border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
              <span className="material-icons-outlined text-primary text-4xl mb-6">bolt</span>
              <h4 className={`text-lg font-bold uppercase tracking-wide mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>High Flux Rate</h4>
              <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Advanced cycle optimization delivering peak units-per-hour without compromising container integrity.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Floating CTA */}
      <a className="fixed bottom-8 right-8 z-50 flex items-center gap-4 bg-primary hover:bg-black text-white px-6 py-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group transform hover:-translate-y-2 hover:shadow-primary/40" href="#">
        <span className="material-icons-outlined text-xl group-hover:rotate-12 transition-transform">description</span>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Full Catalog</span>
          <span className="text-xs font-bold uppercase tracking-wider">Download PDF</span>
        </div>
      </a>

    </div>
  );
};

// Sub-components

const ProductCard = ({ id, image, title, desc, specs, theme, addToCompare, removeFromCompare, isInCompare }: any) => {
  return (
    <div className="group block relative">
      <div className={`absolute -inset-1 rounded-3xl blur-xl opacity-0 transition-opacity duration-700 group-hover:opacity-10 bg-gradient-to-r from-primary to-blue-500`}></div>
      <div className={`relative h-full rounded-2xl overflow-hidden border transition-all duration-500 ${theme === 'dark' ? 'bg-card-dark/40 border-white/5 group-hover:border-primary/30' : 'bg-white border-gray-100 shadow-xl'}`}>

        {/* Compare Bar Top */}
        <button
          onClick={() => isInCompare ? removeFromCompare(id) : addToCompare(id)}
          className={`w-full py-3 px-4 border-b text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-between transition-all ${isInCompare
            ? 'bg-primary border-primary text-white'
            : `${theme === 'dark' ? 'bg-white/5 border-white/5 text-slate-400 hover:bg-primary/20 hover:text-white' : 'bg-gray-50 border-gray-100 text-gray-500 hover:bg-primary/5 hover:text-primary'}`
            }`}
        >
          <span className="flex items-center gap-2">
            <span className="material-icons text-sm">{isInCompare ? 'check_circle' : 'add_circle_outline'}</span>
            {isInCompare ? 'ACTIVE IN ANALYSIS QUEUE' : 'COMPARE PRODUCT'}
          </span>
          {isInCompare && <span className="material-icons text-sm hover:rotate-90 transition-transform">close</span>}
        </button>

        <div className={`h-64 relative overflow-hidden flex items-center justify-center p-8 ${theme === 'dark' ? 'bg-black/20' : 'bg-gray-50/50'}`}>
          <img alt={title} className="max-h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" src={image} />
          <div className="absolute top-6 right-6 bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 tracking-widest uppercase">Series A</div>
        </div>

        <div className="p-8">
          <h3 className={`text-2xl font-display font-bold mb-3 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
          <p className={`text-sm mb-8 font-light leading-relaxed line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>{desc}</p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {specs.map((s: any, i: number) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-1">{s.label}</span>
                <div className={`flex items-center font-display text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                  <span className="material-icons-outlined text-primary text-base mr-2">{s.icon}</span>
                  {s.val}
                </div>
              </div>
            ))}
          </div>
          <Link to={`/products/${id}`} className={`w-full py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-2 border ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white hover:bg-primary hover:border-primary' : 'bg-gray-900 border-gray-900 text-white hover:bg-primary hover:border-primary'}`}>
            Explore Machine Matrix <span className="material-icons text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const SemiAutoCard = ({ id, image, title, desc, specs, theme, addToCompare, removeFromCompare, isInCompare }: any) => {
  return (
    <div className="group block relative">
      <div className={`relative h-full rounded-2xl overflow-hidden border transition-all duration-500 ${theme === 'dark' ? 'bg-card-dark/40 border-white/5 hover:border-primary/20' : 'bg-white border-gray-100 shadow-lg'}`}>

        {/* Compare Bar Top */}
        <button
          onClick={() => isInCompare ? removeFromCompare(id) : addToCompare(id)}
          className={`w-full py-2.5 px-4 border-b text-[9px] font-bold uppercase tracking-[0.2em] flex items-center justify-between transition-all ${isInCompare
            ? 'bg-primary border-primary text-white'
            : `${theme === 'dark' ? 'bg-white/5 border-white/5 text-slate-500 hover:bg-primary/20 hover:text-white' : 'bg-gray-50 border-gray-100 text-gray-400 hover:bg-primary/5 hover:text-primary'}`
            }`}
        >
          <span className="flex items-center gap-2">
            <span className="material-icons text-[12px]">{isInCompare ? 'check' : 'add'}</span>
            {isInCompare ? 'QUEUED' : 'COMPARE PRODUCT'}
          </span>
        </button>

        <div className={`h-48 relative overflow-hidden flex items-center justify-center p-6 ${theme === 'dark' ? 'bg-black/20' : 'bg-gray-50'}`}>
          <img alt={title} className="max-h-full object-contain drop-shadow-lg transition-transform duration-700 group-hover:scale-105" src={image} />
          <div className="absolute bottom-4 left-4 text-[9px] font-bold px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded uppercase tracking-widest">S-System</div>
        </div>
        <div className="p-6">
          <h3 className={`text-lg font-bold mb-2 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
          <p className={`text-xs mb-6 font-light line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>{desc}</p>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
            {specs.map(([label, val]: string[], i: number) => (
              <div key={i}>
                <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest block mb-1">{label}</span>
                <span className={`font-mono text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>{val}</span>
              </div>
            ))}
          </div>
          <Link to={`/products/${id}`} className="mt-4 block text-[9px] font-bold uppercase tracking-widest text-primary hover:underline">View Matrix</Link>
        </div>
      </div>
    </div>
  );
};

export default Products;