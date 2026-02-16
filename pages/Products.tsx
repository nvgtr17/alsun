import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import { useCompare } from '../components/CompareContext';

const Products: React.FC = () => {
  const { theme } = useTheme();
  const { compareIds, addToCompare, removeFromCompare, isInCompare, clearCompare } = useCompare();

  return (
    <div className={`transition-colors duration-500 antialiased overflow-x-hidden pt-16 font-sans ${theme === 'dark' ? 'bg-background-dark text-slate-200' : 'bg-background-light text-text-light'}`}>

      {/* Floating Comparison Notification */}
      {compareIds.length > 0 && (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] animate-slide-in-right">
          <div className={`relative border ${theme === 'dark' ? 'bg-background-dark/90 border-primary/40' : 'bg-white/95 border-primary/40'} backdrop-blur-xl shadow-[0_0_50px_rgba(139,92,246,0.2)]`}>
            {/* Industrial corner accent */}
            <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t-2 border-l-2 border-primary"></div>

            <div className="flex items-center gap-6 px-6 py-4">
              <div className="flex flex-col border-r pr-6 border-primary/20 text-left">
                <span className="text-[9px] font-display font-black text-primary uppercase tracking-[0.2em]">Specification Analysis</span>
                <span className={`text-[10px] font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{compareIds.length} TECHNICAL PROFILE{compareIds.length > 1 ? 'S' : ''} LOADED</span>
              </div>

              <div className="flex items-center gap-3">
                <Link to="/compare" className="bg-primary hover:bg-white hover:text-black text-white px-6 py-2.5 border border-primary text-[10px] font-display font-bold uppercase tracking-[0.3em] transition-all">
                  View Comparison
                </Link>
                <button
                  onClick={clearCompare}
                  className={`p-2 border transition-all ${theme === 'dark' ? 'border-white/10 hover:bg-red-500/20 text-gray-500 hover:text-red-400' : 'border-gray-200 hover:bg-gray-100 text-gray-500 hover:text-red-500'}`}
                  title="Clear Selection"
                >
                  <span className="material-icons text-lg">close</span>
                </button>
              </div>
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
      <header className="relative pt-20 pb-8 md:pt-32 md:pb-20 overflow-hidden border-b border-white/5">
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


      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-24">

        {/* Fully Automatic Series */}
        <section className={`py-16 md:py-24 border-b ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
          <div className="container-custom">
            <div className="mb-8 md:mb-12 max-w-none">
              <h2 className={`text-2xl md:text-3xl font-display font-bold uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Automatic Production</h2>
              <p className={`text-sm md:text-base leading-relaxed font-medium mt-4 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'} whitespace-nowrap`}>
                Fully autonomous molding solutions for high-volume consistent output and optimized power consumption.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-2 md:px-0">
              <ProductCard
                theme={theme}
                id="2-cav-automatic"
                image="machine/MACHINE.png"
                title="2 CAV AUTOMATIC"
                desc="High-performance dual cavity automatic blow molding machine."
                specs={[
                  { label: 'Output', val: '2200 BPH' },
                  { label: 'Volume', val: '1000 ML' },
                  { label: 'Cavity', val: '2 Cavity' },
                  { label: 'Heating', val: '25 kW' },
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
                desc="Quad cavity system optimized for massive industrial production."
                specs={[
                  { label: 'Output', val: '4800 BPH' },
                  { label: 'Volume', val: '1000 ML' },
                  { label: 'Cavity', val: '4 Cavity' },
                  { label: 'Heating', val: '45 kW' },
                ]}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                isInCompare={isInCompare("4-cav-automatic")}
              />
            </div>
          </div>
        </section>

        {/* Semi-Automatic Series */}
        <section className={`py-12 md:py-16 border-y ${theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-gray-50/50 border-gray-100'}`}>
          <div className="container-custom">
            <div className="mb-8 md:mb-12 max-w-none">
              <h2 className={`text-2xl md:text-3xl font-display font-bold uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Semi-Automatic Systems</h2>
              <p className={`text-sm md:text-base leading-relaxed font-medium mt-4 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'} whitespace-nowrap`}>
                Flexible production units for specialized containers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-2 md:px-0">
              <ProductCard
                theme={theme}
                id="semi-2-cav-auto-drop"
                image="machine/SUMO_ALSUN_MACHINE-removebg-preview.png"
                title="SEMI 2 CAV AUTO DROP"
                desc="Dual-cavity system with integrated auto-eject mechanism."
                badge="S-SPEC"
                specs={[
                  { label: 'Output', val: '1200 BPH' },
                  { label: 'Volume', val: '1000 ML' },
                  { label: 'Cavity', val: '2 Cavity' },
                  { label: 'Neck', val: '30 MM' }
                ]}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                isInCompare={isInCompare("semi-2-cav-auto-drop")}
              />
              <ProductCard
                theme={theme}
                id="semi-4-cav-auto-drop"
                image="machine/SUMO_ALSUN_MACHINE-removebg-preview.png"
                title="SEMI 4 CAV AUTO DROP"
                desc="Quad-cavity semi-auto unit for enhanced operational speed."
                badge="S-SPEC"
                specs={[
                  { label: 'Output', val: '2400 BPH' },
                  { label: 'Volume', val: '1000 ML' },
                  { label: 'Cavity', val: '4 Cavity' },
                  { label: 'Neck', val: '30 MM' }
                ]}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                isInCompare={isInCompare("semi-4-cav-auto-drop")}
              />
              <ProductCard
                theme={theme}
                id="semi-auto-jar"
                image="machine/SUMO_ALSUN_MACHINE-removebg-preview.png"
                title="SEMI AUTO JAR"
                desc="Wide-mouth jar specialist with reinforced molding pressure."
                badge="S-SPEC"
                specs={[
                  { label: 'Output', val: '1000 BPH' },
                  { label: 'Volume', val: '7000 ML' },
                  { label: 'Cavity', val: '2 Cavity' },
                  { label: 'Neck', val: '120 MM' }
                ]}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                isInCompare={isInCompare("semi-auto-jar")}
              />
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className={`py-fluid-section border-t ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`p-8 md:p-10 border transition-all hover:border-primary/40 ${theme === 'dark' ? 'bg-background-dark/40 border-white/10' : 'bg-white border-gray-200 shadow-xl'}`}>
                <span className="material-icons-outlined text-primary text-4xl mb-6">precision_manufacturing</span>
                <h4 className={`text-lg font-bold uppercase tracking-wide mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Heavy Engineering</h4>
                <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Ultra-rigid square pipe architecture minimizes harmonic vibration for flawless molding precision.</p>
              </div>
              <div className={`p-8 md:p-10 border transition-all hover:border-primary/40 ${theme === 'dark' ? 'bg-background-dark/40 border-white/10' : 'bg-white border-gray-200 shadow-xl'}`}>
                <span className="material-icons-outlined text-primary text-4xl mb-6">shield</span>
                <h4 className={`text-lg font-bold uppercase tracking-wide mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Operational Guard</h4>
                <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Comprehensive 2-year industrial warranty with guaranteed parts availability and technical support.</p>
              </div>
              <div className={`p-8 md:p-10 border transition-all hover:border-primary/40 ${theme === 'dark' ? 'bg-background-dark/40 border-white/10' : 'bg-white border-gray-200 shadow-xl'}`}>
                <span className="material-icons-outlined text-primary text-4xl mb-6">bolt</span>
                <h4 className={`text-lg font-bold uppercase tracking-wide mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>High Flux Rate</h4>
                <p className={`text-sm leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Advanced cycle optimization delivering peak units-per-hour without compromising container integrity.</p>
              </div>
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

const ProductCard = ({ id, image, title, desc, specs, theme, addToCompare, removeFromCompare, isInCompare, badge = "A-SPEC" }: any) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${id}`)}
      className="group relative h-full cursor-pointer"
    >
      <div className={`relative h-full border flex flex-col transition-all duration-300 ${theme === 'dark' ? 'bg-background-dark/60 border-white/10 group-hover:border-primary/50' : 'bg-white border-gray-200 group-hover:border-primary/50 group-hover:shadow-lg'}`}>

        {/* Technical Accent Line */}
        <div className="absolute top-0 left-0 w-4 h-[1px] bg-primary"></div>
        <div className="absolute top-0 left-0 w-[1px] h-4 bg-primary"></div>

        {/* Compare Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            isInCompare ? removeFromCompare(id) : addToCompare(id);
          }}
          className={`absolute top-0 right-0 p-3 z-20 transition-all flex items-center gap-2 group/btn ${isInCompare ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}
        >
          <span className={`text-[10px] font-display uppercase font-black tracking-widest ${isInCompare ? 'text-primary' : 'text-gray-500 group-hover/btn:text-primary'}`}>
            {isInCompare ? 'In Comparison' : 'Compare'}
          </span>
          <span className="material-icons text-xl">{isInCompare ? 'check_box' : 'add_box'}</span>
        </button>

        <div className={`h-48 relative overflow-hidden flex items-center justify-center p-4 border-b ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
          <img alt={title} className="max-h-full object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-110" src={image} />
          <div className="absolute top-2 left-2 bg-primary/20 text-primary text-[8px] font-bold px-2 py-0.5 border border-primary/30 uppercase tracking-widest">{badge}</div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className={`text-base font-display font-bold mb-2 uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
          <p className={`text-[10px] md:text-xs mb-4 font-light leading-relaxed line-clamp-2 min-h-[2.5rem] ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>{desc}</p>

          <div className="grid grid-cols-2 gap-3 mb-5 mt-auto">
            {specs.map((s: any, i: number) => (
              <div key={i} className={`p-2.5 border ${theme === 'dark' ? 'border-white/5 bg-white/[0.02]' : 'border-gray-100 bg-gray-50/50'}`}>
                <span className="block text-[8px] text-gray-500 uppercase font-display mb-1">{s.label}</span>
                <div className={`flex items-center font-display text-[11px] font-bold ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                  {s.val}
                </div>
              </div>
            ))}
          </div>

          <div className={`w-full py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 border ${theme === 'dark' ? 'bg-primary/10 border-primary/30 text-primary group-hover:bg-primary group-hover:text-white' : 'bg-gray-900 border-gray-900 text-white group-hover:bg-primary group-hover:border-primary'}`}>
            More Details <span className="material-icons text-xs">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;