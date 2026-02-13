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
        <div className="fixed bottom-6 md:bottom-12 left-0 w-full px-4 z-[100] animate-slide-up">
          <div className={`max-w-xl mx-auto flex items-center justify-between md:justify-center gap-4 md:gap-8 px-5 md:px-10 py-4 rounded-3xl border backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${theme === 'dark' ? 'bg-primary/20 border-primary/40' : 'bg-white/90 border-primary/20 shadow-primary/20'}`}>
            <div className="flex flex-col">
              <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-[0.3em] text-primary">Comparator</span>
              <span className={`text-[10px] md:text-xs font-mono font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{compareIds.length} / 4 ACTIVE</span>
            </div>
            <div className="h-8 w-px bg-primary/20 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <Link to="/compare" className="bg-primary hover:bg-white hover:text-black text-white px-5 md:px-8 py-3 rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-primary/30 active:scale-95">
                Analyze <span className="hidden md:inline">Matrix</span>
              </Link>
              <button
                onClick={clearCompare}
                className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl border transition-all ${theme === 'dark' ? 'border-white/10 hover:bg-white/10 text-white' : 'border-gray-200 hover:bg-gray-100 text-gray-600'}`}
                title="Reset Queue"
              >
                <span className="material-icons text-lg md:text-xl">layers_clear</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]`}></div>
        <div className="absolute top-[20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/5 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>

      {/* Hero */}
      <header className="relative pt-24 pb-12 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="relative z-10 container-custom text-center">
          <div className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-8 animate-fade-in">
            Engineering Precision
          </div>
          <h1 className={`text-fluid-h1 font-display font-bold mb-8 tracking-tighter leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Industrial Molding <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-500 font-sans">Ecosystem</span>
          </h1>
          <p className={`mt-6 max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed px-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
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
        <section className="container-custom py-fluid-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">Level 01</span>
              <h2 className={`text-fluid-h2 font-display font-bold uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Automatic Production</h2>
              <div className="w-20 h-1 bg-primary mt-4"></div>
            </div>
            <p className={`max-w-md text-sm md:text-base leading-relaxed ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>
              Fully autonomous molding solutions for high-volume consistent output and optimized power consumption.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-2 md:px-0">
            <ProductCard
              theme={theme}
              id="2-cav-automatic"
              image="machine/MACHINE.png"
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
              image="machine/MACHINE.png"
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
        <section className={`py-fluid-section border-y ${theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-gray-50/50 border-gray-100'}`}>
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
              <div>
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">Level 02</span>
                <h2 className={`text-fluid-h2 font-display font-bold uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Semi-Automatic Systems</h2>
                <div className="w-20 h-1 bg-primary mt-4"></div>
              </div>
              <p className={`max-w-md text-sm md:text-base leading-relaxed ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>
                Flexible production units for specialized container formats and artisanal runs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-0">
              <SemiAutoCard
                theme={theme}
                id="semi-2-cav-auto-drop"
                image="machine/SUMO_ALSUN_MACHINE-removebg-preview.png"
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
                image="machine/SUMO_ALSUN_MACHINE-removebg-preview.png"
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
                image="machine/SUMO_ALSUN_MACHINE-removebg-preview.png"
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
        <section className="py-fluid-section container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-8 md:p-10 rounded-3xl border transition-all hover:border-primary/40 ${theme === 'dark' ? 'bg-card-dark/40 border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
              <span className="material-icons-outlined text-primary text-4xl mb-6">precision_manufacturing</span>
              <h4 className={`text-lg font-bold uppercase tracking-wide mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Heavy Engineering</h4>
              <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Ultra-rigid square pipe architecture minimizes harmonic vibration for flawless molding precision.</p>
            </div>
            <div className={`p-8 md:p-10 rounded-3xl border transition-all hover:border-primary/40 ${theme === 'dark' ? 'bg-card-dark/40 border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
              <span className="material-icons-outlined text-primary text-4xl mb-6">shield</span>
              <h4 className={`text-lg font-bold uppercase tracking-wide mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Operational Guard</h4>
              <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Comprehensive 2-year industrial warranty with guaranteed parts availability and technical support.</p>
            </div>
            <div className={`p-8 md:p-10 rounded-3xl border transition-all hover:border-primary/40 ${theme === 'dark' ? 'bg-card-dark/40 border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
              <span className="material-icons-outlined text-primary text-4xl mb-6">bolt</span>
              <h4 className={`text-lg font-bold uppercase tracking-wide mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>High Flux Rate</h4>
              <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Advanced cycle optimization delivering peak units-per-hour without compromising container integrity.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Floating CTA */}
      <a className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-3 md:gap-4 bg-primary hover:bg-black text-white px-5 md:px-6 py-3 md:py-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group animate-slide-in-right transform hover:-translate-y-2 hover:shadow-primary/40" href="#">
        <span className="material-icons-outlined text-xl group-hover:rotate-12 transition-transform">description</span>
        <div className="flex flex-col text-left">
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Catalog</span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Download</span>
        </div>
      </a>

    </div>
  );
};

// Sub-components

const ProductCard = ({ id, image, title, desc, specs, theme, addToCompare, removeFromCompare, isInCompare }: any) => {
  return (
    <div className="group block relative">
      <div className={`absolute -inset-1 rounded-[2rem] blur-xl opacity-0 transition-opacity duration-700 group-hover:opacity-10 bg-gradient-to-r from-primary to-blue-500`}></div>
      <div className={`relative h-full rounded-[2rem] overflow-hidden border transition-all duration-500 ${theme === 'dark' ? 'bg-card-dark/40 border-white/5 group-hover:border-primary/30' : 'bg-white border-gray-100 shadow-xl shadow-gray-200/50 group-hover:border-primary/30'}`}>

        {/* Compare Bar Top */}
        <button
          onClick={() => isInCompare ? removeFromCompare(id) : addToCompare(id)}
          className={`w-full py-3.5 px-6 border-b text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-between transition-all ${isInCompare
            ? 'bg-primary border-primary text-white'
            : `${theme === 'dark' ? 'bg-white/5 border-white/5 text-slate-400 hover:bg-primary/20 hover:text-white' : 'bg-gray-50 border-gray-100 text-gray-500 hover:bg-primary/5 hover:text-primary'}`
            }`}
        >
          <span className="flex items-center gap-2">
            <span className="material-icons text-sm">{isInCompare ? 'check_circle' : 'add_circle_outline'}</span>
            {isInCompare ? 'ACTIVE IN MATRIX' : 'ADD TO COMPARE'}
          </span>
          {isInCompare && <span className="material-icons text-sm hover:rotate-90 transition-transform">close</span>}
        </button>

        <div className={`h-56 md:h-72 relative overflow-hidden flex items-center justify-center p-6 md:p-12 ${theme === 'dark' ? 'bg-black/20' : 'bg-gray-50/50'}`}>
          <img alt={title} className="max-h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110" src={image} />
          <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-primary/10 text-primary text-[8px] md:text-[10px] font-bold px-3 py-1.5 rounded-xl border border-primary/20 tracking-widest uppercase backdrop-blur-sm">Series A</div>
        </div>

        <div className="p-6 md:p-10">
          <h3 className={`text-xl md:text-3xl font-display font-bold mb-4 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
          <p className={`text-xs md:text-sm mb-8 font-light leading-relaxed line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>{desc}</p>
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8">
            {specs.map((s: any, i: number) => (
              <div key={i} className="flex flex-col">
                <span className="text-[8px] md:text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-1.5">{s.label}</span>
                <div className={`flex items-center font-display text-xs md:text-base ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                  <span className="material-icons-outlined text-primary text-sm md:text-lg mr-2">{s.icon}</span>
                  {s.val}
                </div>
              </div>
            ))}
          </div>
          <Link to={`/products/${id}`} className={`w-full py-4.5 rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-2 border shadow-lg active:scale-95 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white hover:bg-white hover:text-black shadow-black/20' : 'bg-gray-900 border-gray-900 text-white hover:bg-primary hover:border-primary shadow-primary/10'}`}>
            Explore Machine Matrix <span className="material-icons text-sm md:text-base">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const SemiAutoCard = ({ id, image, title, desc, specs, theme, addToCompare, removeFromCompare, isInCompare }: any) => {
  return (
    <div className="group block relative">
      <div className={`relative h-full rounded-[2rem] overflow-hidden border transition-all duration-500 ${theme === 'dark' ? 'bg-card-dark/40 border-white/5 hover:border-primary/20' : 'bg-white border-gray-100 shadow-xl shadow-gray-200/50 group-hover:border-primary/20'}`}>

        {/* Compare Bar Top */}
        <button
          onClick={() => isInCompare ? removeFromCompare(id) : addToCompare(id)}
          className={`w-full py-3 px-5 border-b text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] flex items-center justify-between transition-all ${isInCompare
            ? 'bg-primary border-primary text-white'
            : `${theme === 'dark' ? 'bg-white/5 border-white/5 text-slate-500 hover:bg-primary/20 hover:text-white' : 'bg-gray-50 border-gray-100 text-gray-400 hover:bg-primary/5 hover:text-primary'}`
            }`}
        >
          <span className="flex items-center gap-2">
            <span className="material-icons text-[14px]">{isInCompare ? 'check' : 'add'}</span>
            {isInCompare ? 'IN COMPARE' : 'ADD TO COMPARE'}
          </span>
        </button>

        <div className={`h-48 md:h-56 relative overflow-hidden flex items-center justify-center p-6 md:p-8 ${theme === 'dark' ? 'bg-black/20' : 'bg-gray-50/50'}`}>
          <img alt={title} className="max-h-full object-contain drop-shadow-lg transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110" src={image} />
          <div className="absolute bottom-4 left-4 text-[8px] md:text-[10px] font-bold px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg uppercase tracking-widest backdrop-blur-sm">S-System</div>
        </div>
        <div className="p-6 md:p-8">
          <h3 className={`text-lg md:text-xl font-display font-bold mb-2.5 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
          <p className={`text-[11px] md:text-xs mb-6 font-light line-clamp-2 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>{desc}</p>
          <div className="grid grid-cols-2 gap-4 md:gap-6 pt-5 border-t border-white/5">
            {specs.map(([label, val]: string[], i: number) => (
              <div key={i} className="flex flex-col">
                <span className="text-[8px] text-slate-500 uppercase font-bold tracking-[0.2em] mb-1.5">{label}</span>
                <span className={`font-mono text-[10px] md:text-xs font-bold ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>{val}</span>
              </div>
            ))}
          </div>
          <Link to={`/products/${id}`} className="mt-6 inline-flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-primary hover:gap-4 transition-all">
            View Matrix <span className="material-icons text-sm">east</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;