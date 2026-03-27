import React from 'react';
import { useTheme } from '../components/ThemeContext';

const Services: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`transition-colors duration-500 antialiased overflow-x-hidden pt-16 font-sans ${theme === 'dark' ? 'bg-background-dark text-slate-200' : 'bg-background-light text-text-light'}`}>

      {/* Hero Header */}
      <header className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
          <div className={`absolute inset-0 bg-gradient-to-b via-transparent to-transparent opacity-90 ${theme === 'dark' ? 'from-background-dark via-background-dark' : 'from-background-light via-background-light'}`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="font-display text-primary tracking-[0.3em] uppercase text-[10px] md:text-sm mb-4 md:mb-6 font-bold">LIFECYCLE SUPPORT</p>
          <h1 className={`font-display text-fluid-h1 font-bold mb-5 md:mb-8 uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 font-sans italic">Thrive</span>
          </h1>
          <div className={`h-px w-32 md:w-48 mx-auto mb-5 md:mb-8 bg-gradient-to-r from-transparent via-primary to-transparent`}></div>
          <p className={`text-xs md:text-base font-light max-w-2xl mx-auto leading-relaxed px-2 md:px-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Comprehensive lifecycle support for your PET and HDPE blowing machines. From installation to advanced maintenance, we ensure peak performance.
          </p>
        </div>
      </header>

      {/* Commitment Section */}
      <section className={`py-10 md:py-fluid-section transition-colors ${theme === 'dark' ? 'bg-background-dark' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-16">
            <span className="font-display text-gray-500 tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold">Our Commitment</span>
            <h2 className={`mt-2 md:mt-3 text-fluid-h2 font-display font-bold uppercase leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Nationwide Service</h2>
            <div className="w-16 md:w-20 h-1 bg-primary mx-auto mt-3 md:mt-4 mb-4 md:mb-6"></div>
            <p className={`max-w-2xl mx-auto text-xs md:text-base leading-relaxed px-2 md:px-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Our relationship with clients extends far beyond the sale. With a nationwide support network and skilled technicians, expert assistance is always nearby.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className={`py-10 md:py-fluid-section relative overflow-hidden transition-colors ${theme === 'dark' ? 'bg-surface-dark' : 'bg-gray-50'}`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 px-0">

            <ServiceItem
              theme={theme}
              icon="build"
              title="Installation"
              desc="Precision setup and calibration by our engineering team for optimal performance from day one."
            />
            <ServiceItem
              theme={theme}
              icon="school"
              title="Operator Training"
              desc="Hands-on training covering operation, troubleshooting, mould changeover, and safety."
            />
            <ServiceItem
              theme={theme}
              icon="settings_suggest"
              title="Maintenance"
              desc="Scheduled programs to extend equipment life, maintain quality, and prevent downtime."
            />
            <ServiceItem
              theme={theme}
              icon="verified"
              title="1-Year Warranty"
              desc="Full 12-month coverage on major components with guaranteed spare parts availability."
            />

          </div>
        </div>
      </section>

      {/* Feature Section with Image */}
      <section className="py-10 md:py-fluid-section relative overflow-hidden transition-colors">
        <div className="absolute inset-0 z-0">
          <img alt="Industrial Control Panel" className={`w-full h-full object-cover grayscale ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7LBIl2C9mDm4sk_VOr4kG-e7Wh9oxZK_pmrRFnOLlifos9rqb1AGnjhnYVPuXpM_bZu88lfrQnarg7o08ZBF3eDblnPjJaW8dRVAz6xA2zRsa88e52yCJqPT2S-X8rjpk4xiIKRzlUrhRDjLqIFG37kH1qj5Fa762thTqYmw90Ik-fgJvS2EdNhOudy9QlZfLT39Wo0mRLn34eU5s0cZiuNXJwiGN8zeOSWD3vHN_qNoinCW1LFusyLrLkFPE4AnOgwlGp51NaVV4" />
          <div className={`absolute inset-0 bg-gradient-to-r via-background-dark/95 to-background-dark/70 ${theme === 'dark' ? 'from-background-dark' : 'from-white/90'}`}></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 px-2 lg:px-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl bg-primary/20 border border-primary/30 text-primary mb-5 md:mb-8">
                <span className="material-icons-outlined text-xs md:text-sm">bolt</span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">UPS Compatible</span>
              </div>
              <h2 className={`text-fluid-h2 font-display font-bold uppercase mb-4 md:mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                UPS System <br className="hidden md:block" /> Protection
              </h2>
              <p className={`text-xs md:text-base mb-5 md:mb-8 font-light ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Operate without interruption even in unstable voltage conditions. Our integrated UPS system safeguards electronics from fluctuations, allowing machines to complete cycles safely.
              </p>
              <ul className="space-y-2.5 md:space-y-4">
                {['No risk of damaged moulds during power failure', 'Continuous performance in unstable power conditions', 'Safe automated cycle completion'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="material-icons-outlined text-primary mr-2.5 md:mr-4 text-base md:text-xl">verified</span>
                    <span className={`text-xs md:text-base font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 px-2 md:px-0">
              <div className={`relative w-full max-w-xs md:max-w-lg overflow-hidden rounded-[2rem] md:rounded-[3rem] border shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-colors ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                <img 
                  src="/alsun/contn/ups-system.png" 
                  alt="Industrial UPS System for PET Blowing Machines" 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`}></div>
                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10">
                  <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                    <span className="material-icons-outlined text-primary text-sm md:text-base">bolt</span>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary">UPS Protected</span>
                  </div>
                  <div className="text-white font-display text-sm md:text-xl font-bold uppercase tracking-wide">Continuous Power</div>
                </div>
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 h-1 md:h-1.5 w-12 md:w-20 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className={`py-10 md:py-fluid-section transition-colors ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-900'}`}>
        <div className="container-custom text-center">
          <h2 className="text-fluid-h2 font-display font-bold text-white mb-4 md:mb-6">Need Assistance?</h2>
          <p className="text-gray-400 mb-8 md:mb-12 max-w-xl mx-auto px-4 md:px-6 text-xs md:text-base">
            You never face downtime alone. Your production is protected by a service team that genuinely cares about your success.
          </p>

          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-8 mb-10 md:mb-16 px-2 md:px-0">
            <div className="flex items-center gap-3 md:gap-4 group p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 hover:border-primary/50 transition-all cursor-pointer">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                <span className="material-icons-outlined text-lg md:text-2xl">call</span>
              </div>
              <div className="text-left">
                <p className="text-[9px] md:text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-0.5 md:mb-1">Service Hotline</p>
                <p className="text-white font-display text-base md:text-xl font-bold tracking-wide">+91 83681 25978</p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4 group p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 hover:border-primary/50 transition-all cursor-pointer">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                <span className="material-icons-outlined text-lg md:text-2xl">email</span>
              </div>
              <div className="text-left">
                <p className="text-[9px] md:text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-0.5 md:mb-1">Support Channel</p>
                <p className="text-white font-display text-base md:text-xl font-bold tracking-wide">support@alsun.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 md:pt-12 border-t border-white/10">
            <a href="/Alsun brochure.pdf" download="Alsun_Machinery_Brochure.pdf" className="inline-block bg-white text-black hover:bg-primary hover:text-white px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all shadow-xl shadow-black/20 active:scale-95">
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceItem = ({ icon, title, desc, theme }: any) => (
  <div className={`group p-4 md:p-10 rounded-2xl md:rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 ${theme === 'dark' ? 'border-white/5 bg-card-dark/40 hover:border-primary/50' : 'border-gray-100 bg-white hover:border-primary/50 shadow-lg md:shadow-xl shadow-gray-200/50'}`}>
    <div className={`w-10 h-10 md:w-20 md:h-20 mb-3 md:mb-8 flex items-center justify-center rounded-xl md:rounded-3xl border group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all ${theme === 'dark' ? 'bg-white/5 border-white/10 text-primary' : 'bg-primary/5 border-primary/10 text-primary'}`}>
      <span className="material-icons-outlined text-xl md:text-4xl">{icon}</span>
    </div>
    <h3 className={`text-sm md:text-2xl font-display font-bold mb-1.5 md:mb-4 uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
    <p className={`text-[11px] md:text-base leading-relaxed font-light ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
      {desc}
    </p>
  </div>
);

export default Services;