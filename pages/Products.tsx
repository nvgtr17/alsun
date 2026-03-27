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
        <div className="fixed bottom-4 left-4 right-4 md:bottom-10 md:left-auto md:right-10 z-[100] animate-slide-in-right">
          <div className={`relative border rounded-xl md:rounded-none ${theme === 'dark' ? 'bg-background-dark/95 border-primary/40' : 'bg-white/95 border-primary/40'} backdrop-blur-xl shadow-[0_0_50px_rgba(139,92,246,0.2)]`}>
            <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t-2 border-l-2 border-primary hidden md:block"></div>
            <div className="flex items-center justify-between gap-3 px-4 py-3 md:gap-6 md:px-6 md:py-4">
              <div className="flex flex-col border-r pr-3 md:pr-6 border-primary/20 text-left">
                <span className="text-[8px] md:text-[9px] font-display font-black text-primary uppercase tracking-[0.2em]">Comparison</span>
                <span className={`text-[9px] md:text-[10px] font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{compareIds.length} MACHINE{compareIds.length > 1 ? 'S' : ''} SELECTED</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Link to="/compare" className="bg-primary hover:bg-white hover:text-black text-white px-4 py-2 md:px-6 md:py-2.5 border border-primary text-[9px] md:text-[10px] font-display font-bold uppercase tracking-[0.15em] md:tracking-[0.3em] transition-all rounded-lg md:rounded-none">
                  Compare
                </Link>
                <button
                  onClick={clearCompare}
                  className={`p-1.5 md:p-2 border transition-all rounded-lg md:rounded-none ${theme === 'dark' ? 'border-white/10 hover:bg-red-500/20 text-gray-500 hover:text-red-400' : 'border-gray-200 hover:bg-gray-100 text-gray-500 hover:text-red-500'}`}
                  title="Clear Selection"
                >
                  <span className="material-icons text-base md:text-lg">close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <header className="relative pt-20 pb-6 md:pt-32 md:pb-16 overflow-hidden">
        <div className="relative z-10 container-custom text-center">
          <span className="text-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-3 md:mb-4 block">Our Products</span>
          <h1 className={`text-fluid-h1 font-display font-bold mb-4 md:mb-6 tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            PET & HDPE <br className="hidden md:block" />
            Blow Molding Machines
          </h1>
          <p className={`mt-3 md:mt-4 max-w-2xl mx-auto text-xs md:text-base font-light leading-relaxed px-2 md:px-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
            Fully automatic and semi-automatic blow molding machines for bottles, jars and containers — purpose-built for specific production needs.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-12 md:pb-24">

        {/* ── AUTOMATIC SERIES ── */}
        <section className={`py-10 md:py-24 border-t ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
          <div className="container-custom">

            {/* Section Header with Shared Machine Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center mb-10 md:mb-20">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-2 md:mb-3 block">Fully Automatic Series</span>
                <h2 className={`text-xl md:text-4xl font-display font-bold uppercase tracking-tight mb-3 md:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Automatic Blow Molding Machines
                </h2>
                <p className={`text-xs md:text-base leading-relaxed mb-4 md:mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  Designed for high-volume production with minimal operator intervention.
                  These machines feature PLC-controlled operation, dual-zone heating, and automated preform handling for continuous output.
                </p>
                <div className={`grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl border ${theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                  <div className="text-center p-2 md:p-3">
                    <span className={`block text-xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>2</span>
                    <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-500 font-bold">Models Available</span>
                  </div>
                  <div className="text-center p-2 md:p-3">
                    <span className={`block text-xl md:text-3xl font-display font-bold text-primary`}>4800</span>
                    <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-500 font-bold">Max BPH</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className={`relative aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden border flex items-center justify-center p-4 md:p-8 ${theme === 'dark' ? 'bg-white/[0.03] border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                  <img
                    alt="Automatic Blow Molding Machine"
                    className="max-h-full w-auto object-contain drop-shadow-2xl"
                    src="/alsun/machine/MACHINE.png"
                  />
                  <div className={`absolute bottom-3 right-3 md:bottom-4 md:right-4 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border text-[8px] md:text-[9px] font-bold uppercase tracking-widest ${theme === 'dark' ? 'bg-black/40 border-white/10 text-white' : 'bg-white/80 border-gray-200 text-gray-700'}`}>
                    Fully Automatic
                  </div>
                </div>
              </div>
            </div>

            {/* Product Cards — Automatic */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <ProductCard
                theme={theme}
                id="2-cav-automatic"
                title="2 Cavity Automatic"
                desc="Dual cavity automatic machine for mid-scale production. Ideal for water, juice, and carbonated soft drink bottles up to 1 litre."
                specs={[
                  { label: 'Output', val: '2000–2200 BPH' },
                  { label: 'Bottle Capacity', val: 'Up to 1000 ML' },
                  { label: 'Cavities', val: '2' },
                  { label: 'Heating Load', val: '25 kW' },
                  { label: 'Heating Zones', val: 'Dual Zone' },
                  { label: 'Machine Size', val: '2 × 3.5 MTR' },
                ]}
                highlights={['Dual zone heating for uniform preform temperature', 'Compact footprint suitable for smaller production floors', 'PLC-controlled automatic operation']}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                isInCompare={isInCompare("2-cav-automatic")}
              />
              <ProductCard
                theme={theme}
                id="4-cav-automatic"
                title="4 Cavity Automatic"
                desc="Quad cavity system built for large-scale industrial production. Doubles the throughput of the 2-cavity model with the same operational simplicity."
                specs={[
                  { label: 'Output', val: '4400–4800 BPH' },
                  { label: 'Bottle Capacity', val: '50–1000 ML' },
                  { label: 'Cavities', val: '4' },
                  { label: 'Heating Load', val: '25 kW' },
                  { label: 'Heating Zones', val: 'Dual Zone' },
                  { label: 'Machine Size', val: '2 × 4 MTR' },
                ]}
                highlights={['Highest output in the automatic range', 'Supports bottles from 50 ML to 1000 ML', 'Automated preform feeding and bottle ejection']}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                isInCompare={isInCompare("4-cav-automatic")}
              />
            </div>
          </div>
        </section>

        {/* ── SEMI-AUTOMATIC SERIES ── */}
        <section className={`py-10 md:py-24 border-t ${theme === 'dark' ? 'bg-white/[0.015] border-white/5' : 'bg-gray-50/50 border-gray-100'}`}>
          <div className="container-custom">

            {/* Section Header with Shared Machine Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center mb-10 md:mb-20">
              <div className="lg:col-span-7">
                <div className={`relative aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden border flex items-center justify-center p-4 md:p-8 ${theme === 'dark' ? 'bg-white/[0.03] border-white/5' : 'bg-white border-gray-100'}`}>
                  <img
                    alt="Semi Automatic Blow Molding Machine"
                    className="max-h-full w-auto object-contain drop-shadow-2xl"
                    src="/alsun/machine/SUMO_ALSUN_MACHINE-removebg-preview.png"
                  />
                  <div className={`absolute bottom-3 right-3 md:bottom-4 md:right-4 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border text-[8px] md:text-[9px] font-bold uppercase tracking-widest ${theme === 'dark' ? 'bg-black/40 border-white/10 text-white' : 'bg-white/80 border-gray-200 text-gray-700'}`}>
                    Semi-Automatic
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-2 md:mb-3 block">Semi-Automatic Series</span>
                <h2 className={`text-xl md:text-4xl font-display font-bold uppercase tracking-tight mb-3 md:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Semi-Automatic Blow Molding Machines
                </h2>
                <p className={`text-xs md:text-base leading-relaxed mb-4 md:mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  Cost-effective solutions offering flexibility for varied container sizes and shapes.
                  Manual preform loading with auto-drop bottle ejection — ideal for small to medium production runs.
                </p>
                <div className={`grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl border ${theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-white border-gray-100'}`}>
                  <div className="text-center p-2 md:p-3">
                    <span className={`block text-xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>3</span>
                    <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-500 font-bold">Models Available</span>
                  </div>
                  <div className="text-center p-2 md:p-3">
                    <span className={`block text-xl md:text-3xl font-display font-bold text-primary`}>7000</span>
                    <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-500 font-bold">Max ML Capacity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Cards — Semi-Automatic */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <ProductCard
                theme={theme}
                id="semi-2-cav-auto-drop"
                title="Semi 2 Cav Auto Drop"
                desc="Entry-level 2-cavity machine with automatic bottle drop. Suitable for small-scale production of PET bottles up to 1 litre."
                specs={[
                  { label: 'Output', val: '1000–1200 BPH' },
                  { label: 'Bottle Capacity', val: '50–1000 ML' },
                  { label: 'Cavities', val: '2' },
                  { label: 'Heating Load', val: '12 kW' },
                  { label: 'Neck Size', val: '18–30 MM' },
                  { label: 'Machine Size', val: '2 × 3 MTR' },
                ]}
                highlights={['Auto drop for faster cycle times', 'Low power consumption', 'Easy mould changeover']}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                isInCompare={isInCompare("semi-2-cav-auto-drop")}
              />
              <ProductCard
                theme={theme}
                id="semi-4-cav-auto-drop"
                title="Semi 4 Cav Auto Drop"
                desc="Higher output 4-cavity variant with auto drop. Bridges the gap between semi-auto flexibility and automatic-level throughput."
                specs={[
                  { label: 'Output', val: '2200–2400 BPH' },
                  { label: 'Bottle Capacity', val: '50–2000 ML' },
                  { label: 'Cavities', val: '4' },
                  { label: 'Heating Load', val: '12 kW' },
                  { label: 'Neck Size', val: '18–30 MM' },
                  { label: 'Machine Size', val: '2 × 3 MTR' },
                ]}
                highlights={['Extended bottle range up to 2 litres', '4-cavity efficiency at semi-auto cost', 'Versatile for water, oil, and beverage bottles']}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                isInCompare={isInCompare("semi-4-cav-auto-drop")}
              />
              <ProductCard
                theme={theme}
                id="semi-auto-jar"
                title="Semi Auto Jar Machine"
                desc="Specialized machine for wide-mouth jars and large containers. Handles neck diameters up to 120 MM and volumes up to 7 litres."
                specs={[
                  { label: 'Output', val: '800–1000 BPH' },
                  { label: 'Jar Capacity', val: '50–7000 ML' },
                  { label: 'Cavities', val: '2' },
                  { label: 'Heating Load', val: '16 kW' },
                  { label: 'Neck Size', val: '18–120 MM' },
                  { label: 'Machine Size', val: '2 × 3 MTR' },
                ]}
                highlights={['Wide mouth capability up to 120 MM', 'Handles jars up to 7 litres', 'Reinforced moulding pressure for thick containers']}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                isInCompare={isInCompare("semi-auto-jar")}
              />
            </div>
          </div>
        </section>

        {/* Standard Features — from brochure */}
        <section className={`py-10 md:py-24 border-t ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
          <div className="container-custom">
            <div className="text-center mb-8 md:mb-16">
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-2 md:mb-3 block">Across All Models</span>
              <h2 className={`text-lg md:text-3xl font-display font-bold uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Built With The Best</h2>
              <p className={`mt-3 md:mt-4 max-w-2xl mx-auto text-xs md:text-base ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>Premium components and engineering standards across every Alsun machine.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
              <div className={`p-4 md:p-10 rounded-xl md:rounded-2xl border transition-all hover:border-primary/30 ${theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-white border-gray-100 shadow-lg'}`}>
                <span className="material-icons-outlined text-primary text-2xl md:text-3xl mb-3 md:mb-5">view_in_ar</span>
                <h4 className={`text-xs md:text-base font-bold uppercase tracking-wide mb-1 md:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Heavy Structure</h4>
                <p className={`text-[11px] md:text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  Heavy square pipe frames for unmatched rigidity and zero vibration during high-speed production.
                </p>
              </div>
              <div className={`p-4 md:p-10 rounded-xl md:rounded-2xl border transition-all hover:border-primary/30 ${theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-white border-gray-100 shadow-lg'}`}>
                <span className="material-icons-outlined text-primary text-2xl md:text-3xl mb-3 md:mb-5">precision_manufacturing</span>
                <h4 className={`text-xs md:text-base font-bold uppercase tracking-wide mb-1 md:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>CNC Components</h4>
                <p className={`text-[11px] md:text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  Advanced CNC & VMC machining for perfect fits and reliable, long-term industrial performance.
                </p>
              </div>
              <div className={`p-4 md:p-10 rounded-xl md:rounded-2xl border transition-all hover:border-primary/30 ${theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-white border-gray-100 shadow-lg'}`}>
                <span className="material-icons-outlined text-primary text-2xl md:text-3xl mb-3 md:mb-5">air</span>
                <h4 className={`text-xs md:text-base font-bold uppercase tracking-wide mb-1 md:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Festo Pneumatics</h4>
                <p className={`text-[11px] md:text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  Equipped with world-standard Festo cylinders for smooth, fast, and highly reliable motion control.
                </p>
              </div>
              <div className={`p-4 md:p-10 rounded-xl md:rounded-2xl border transition-all hover:border-primary/30 ${theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-white border-gray-100 shadow-lg'}`}>
                <span className="material-icons-outlined text-primary text-2xl md:text-3xl mb-3 md:mb-5">construction</span>
                <h4 className={`text-xs md:text-base font-bold uppercase tracking-wide mb-1 md:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>1-Year Warranty</h4>
                <p className={`text-[11px] md:text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  Full 12-month coverage on all major components with guaranteed spare parts availability nationwide.
                </p>
              </div>
              <div className={`p-4 md:p-10 rounded-xl md:rounded-2xl border transition-all hover:border-primary/30 ${theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-white border-gray-100 shadow-lg'}`}>
                <span className="material-icons-outlined text-primary text-2xl md:text-3xl mb-3 md:mb-5">linear_scale</span>
                <h4 className={`text-xs md:text-base font-bold uppercase tracking-wide mb-1 md:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>HIWIN Rails</h4>
                <p className={`text-[11px] md:text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  High-accuracy linear motion guides that reduce friction and prevent mechanical wear.
                </p>
              </div>
              <div className={`p-4 md:p-10 rounded-xl md:rounded-2xl border transition-all hover:border-primary/30 ${theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-white border-gray-100 shadow-lg'}`}>
                <span className="material-icons-outlined text-primary text-2xl md:text-3xl mb-3 md:mb-5">build_circle</span>
                <h4 className={`text-xs md:text-base font-bold uppercase tracking-wide mb-1 md:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Easy Mould setup</h4>
                <p className={`text-[11px] md:text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  Designed for rapid changeovers without special tools, maximizing uptime and production agility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`py-10 md:py-20 border-t ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
          <div className="container-custom text-center">
            <h2 className={`text-lg md:text-3xl font-display font-bold uppercase tracking-tight mb-3 md:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Need Help Choosing?
            </h2>
            <p className={`text-xs md:text-base max-w-xl mx-auto mb-6 md:mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
              Our team can recommend the right machine based on your production volume, bottle size, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2 md:px-0">
              <Link to="/compare" className={`inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-xl border text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${theme === 'dark' ? 'border-white/20 text-white hover:bg-white hover:text-black' : 'border-gray-300 text-gray-800 hover:bg-gray-800 hover:text-white'}`}>
                <span className="material-icons text-sm">analytics</span>
                Compare Machines
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                <span className="material-icons text-sm">mail</span>
                Contact Sales Team
              </Link>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
};

// ─── Product Card Component ───
// Content-focused card that emphasises specs and descriptions over imagery.

const ProductCard = ({ id, title, desc, specs, highlights, theme, addToCompare, removeFromCompare, isInCompare }: any) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${id}`)}
      className="group relative h-full cursor-pointer"
    >
      <div className={`relative h-full border rounded-2xl flex flex-col transition-all duration-300 overflow-hidden ${theme === 'dark' ? 'bg-white/[0.02] border-white/10 group-hover:border-primary/50' : 'bg-white border-gray-200 group-hover:border-primary/40 group-hover:shadow-xl'}`}>

        {/* Header Bar */}
        <div className={`px-4 py-3 md:px-6 md:py-5 border-b flex items-center justify-between ${theme === 'dark' ? 'border-white/5 bg-white/[0.03]' : 'border-gray-100 bg-gray-50/50'}`}>
          <div>
            <h3 className={`text-sm md:text-lg font-display font-bold uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
          </div>

          {/* Compare Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              isInCompare ? removeFromCompare(id) : addToCompare(id);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[9px] font-bold uppercase tracking-widest transition-all ${isInCompare
              ? 'border-primary/40 bg-primary/10 text-primary'
              : `${theme === 'dark' ? 'border-white/10 text-gray-500 hover:text-primary hover:border-primary/30' : 'border-gray-200 text-gray-400 hover:text-primary hover:border-primary/30'}`
              }`}
          >
            <span className="material-icons text-sm">{isInCompare ? 'check_circle' : 'add_circle_outline'}</span>
            {isInCompare ? 'Added' : 'Compare'}
          </button>
        </div>

        {/* Body */}
        <div className="p-4 md:p-6 flex flex-col flex-grow">

          {/* Description */}
          <p className={`text-[11px] md:text-sm leading-relaxed mb-4 md:mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>{desc}</p>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-4 md:mb-6">
            {specs.map((s: any, i: number) => (
              <div key={i} className={`p-2 md:p-3 rounded-lg md:rounded-xl border ${theme === 'dark' ? 'border-white/5 bg-white/[0.02]' : 'border-gray-100 bg-gray-50'}`}>
                <span className="block text-[7px] md:text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-0.5 md:mb-1">{s.label}</span>
                <span className={`text-[11px] md:text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{s.val}</span>
              </div>
            ))}
          </div>

          {/* Key Highlights */}
          {highlights && (
            <div className="mt-auto mb-3 md:mb-5">
              <span className="block text-[7px] md:text-[9px] text-primary uppercase tracking-widest font-bold mb-2 md:mb-3">Key Highlights</span>
              <ul className="space-y-1.5 md:space-y-2">
                {highlights.map((h: string, i: number) => (
                  <li key={i} className="flex items-start gap-1.5 md:gap-2">
                    <span className="material-icons text-primary text-[10px] md:text-xs mt-0.5">check</span>
                    <span className={`text-[10px] md:text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'}`}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className={`w-full py-2.5 md:py-3 mt-auto rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.15em] transition-all flex items-center justify-center gap-1.5 md:gap-2 ${theme === 'dark' ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' : 'bg-gray-900 text-white group-hover:bg-primary'}`}>
            View Specs <span className="material-icons text-[10px] md:text-xs">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;