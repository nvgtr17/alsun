import React from 'react';
import { useTheme } from '../components/ThemeContext';

const Services: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`transition-colors duration-500 antialiased overflow-x-hidden pt-16 font-sans ${theme === 'dark' ? 'bg-background-dark text-slate-200' : 'bg-background-light text-text-light'}`}>

      {/* Hero Header */}
      <header className="relative min-h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
          <div className={`absolute inset-0 bg-gradient-to-b via-transparent to-transparent opacity-90 ${theme === 'dark' ? 'from-background-dark via-background-dark' : 'from-background-light via-background-light'}`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="font-display text-primary tracking-[0.3em] uppercase text-[10px] md:text-sm mb-6 font-bold">LIFECYCLE SUPPORT</p>
          <h1 className={`font-display text-fluid-h1 font-bold mb-8 uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 font-sans italic">Thrive</span>
          </h1>
          <div className={`h-px w-48 mx-auto mb-8 bg-gradient-to-r from-transparent via-primary to-transparent`}></div>
          <p className={`text-fluid-body font-light max-w-2xl mx-auto leading-relaxed px-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Comprehensive lifecycle support for your PET and HDPE blowing machines. From installation to advanced maintenance, we ensure peak performance.
          </p>
        </div>
      </header>

      {/* Commitment Section */}
      <section className={`py-fluid-section transition-colors ${theme === 'dark' ? 'bg-background-dark' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-display text-gray-500 tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold">Our Commitment</span>
            <h2 className={`mt-3 text-fluid-h2 font-display font-bold uppercase leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Industrial Continuity</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
            <p className={`max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Machine downtime is not an option. Alsun's dedicated support network provides rapid response and expert care to keep your lines running at maximum efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className={`py-fluid-section relative overflow-hidden transition-colors ${theme === 'dark' ? 'bg-surface-dark' : 'bg-gray-50'}`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 md:px-0">

            <ServiceItem
              theme={theme}
              icon="build"
              title="Installation"
              desc="Precision setup and calibration by certified engineers ensuring optimal operational parameters."
            />
            <ServiceItem
              theme={theme}
              icon="school"
              title="Training"
              desc="Comprehensive hands-on training for master operation, troubleshooting, and safety protocols."
            />
            <ServiceItem
              theme={theme}
              icon="settings_suggest"
              title="Maintenance"
              desc="Scheduled preventative programs designed to extend equipment lifespan and prevent downtime."
            />
            <ServiceItem
              theme={theme}
              icon="map"
              title="Support"
              desc="Robust network of engineers across India, ready for rapid on-site assistance nationwide."
            />

          </div>
        </div>
      </section>

      {/* Feature Section with Image */}
      <section className="py-fluid-section relative overflow-hidden transition-colors">
        <div className="absolute inset-0 z-0">
          <img alt="Industrial Control Panel" className={`w-full h-full object-cover grayscale ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7LBIl2C9mDm4sk_VOr4kG-e7Wh9oxZK_pmrRFnOLlifos9rqb1AGnjhnYVPuXpM_bZu88lfrQnarg7o08ZBF3eDblnPjJaW8dRVAz6xA2zRsa88e52yCJqPT2S-X8rjpk4xiIKRzlUrhRDjLqIFG37kH1qj5Fa762thTqYmw90Ik-fgJvS2EdNhOudy9QlZfLT39Wo0mRLn34eU5s0cZiuNXJwiGN8zeOSWD3vHN_qNoinCW1LFusyLrLkFPE4AnOgwlGp51NaVV4" />
          <div className={`absolute inset-0 bg-gradient-to-r via-background-dark/95 to-background-dark/70 ${theme === 'dark' ? 'from-background-dark' : 'from-white/90'}`}></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 px-4 lg:px-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary/20 border border-primary/30 text-primary mb-8">
                <span className="material-icons-outlined text-sm">bolt</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Power Guard Tech</span>
              </div>
              <h2 className={`text-fluid-h2 font-display font-bold uppercase mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Grid Fluctuation <br className="hidden md:block" /> Protection
              </h2>
              <p className={`text-fluid-body mb-8 font-light ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Modern blowing machines require stable power. We offer integrated UPS solutions and voltage stabilization audits to protect sensitive electronic components.
              </p>
              <ul className="space-y-4">
                {['Seamless UPS Integration for Logic Controllers', 'Surge Protection & Voltage Monitoring', 'Safe Shutdown Protocols to Minimize Wastage'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="material-icons-outlined text-primary mr-4 text-xl">verified</span>
                    <span className={`text-sm md:text-base font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 px-4 md:px-0">
              <div className={`relative w-full max-w-lg aspect-square rounded-[3rem] border flex items-center justify-center p-12 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-colors ${theme === 'dark' ? 'bg-gradient-to-tr from-gray-800 to-gray-900 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="absolute inset-0 bg-primary/5 rounded-[3rem] animate-pulse"></div>
                <div className="text-center relative z-10">
                  <span className={`material-icons-outlined text-[10rem] md:text-[14rem] mb-6 ${theme === 'dark' ? 'text-white/5' : 'text-primary/10'}`}>electrical_services</span>
                  <div className={`font-display text-2xl md:text-3xl font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>System Secure</div>
                  <div className="text-primary text-xs md:text-sm mt-4 font-mono font-bold tracking-[0.3em]">STATUS: OPTIMAL_READY</div>
                </div>
                <div className="absolute bottom-12 left-12 h-1.5 w-24 bg-primary rounded-full"></div>
                <div className={`absolute top-12 right-12 h-1.5 w-24 rounded-full ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className={`py-fluid-section transition-colors ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-900'}`}>
        <div className="container-custom text-center">
          <h2 className="text-fluid-h2 font-display font-bold text-white mb-6">Need Technical Relay?</h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto px-6 text-sm md:text-base">
            Our engineering team is standing by. Submit a ticket or call our 24/7 hotline for immediate industrial support.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <div className="flex items-center gap-4 group p-6 rounded-3xl border border-white/10 bg-white/5 hover:border-primary/50 transition-all cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-icons-outlined text-2xl">call</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Service Hotline</p>
                <p className="text-white font-display text-xl font-bold tracking-wide">+91 83681 25978</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group p-6 rounded-3xl border border-white/10 bg-white/5 hover:border-primary/50 transition-all cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-icons-outlined text-2xl">email</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Support Channel</p>
                <p className="text-white font-display text-xl font-bold tracking-wide">support@alsun.com</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10">
            <button className="bg-white text-black hover:bg-primary hover:text-white px-10 py-5 rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] transition-all shadow-xl shadow-black/20 active:scale-95">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceItem = ({ icon, title, desc, theme }: any) => (
  <div className={`group p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 ${theme === 'dark' ? 'border-white/5 bg-card-dark/40 hover:border-primary/50' : 'border-gray-100 bg-white hover:border-primary/50 shadow-xl shadow-gray-200/50'}`}>
    <div className={`w-16 h-16 md:w-20 md:h-20 mb-8 flex items-center justify-center rounded-3xl border group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all ${theme === 'dark' ? 'bg-white/5 border-white/10 text-primary' : 'bg-primary/5 border-primary/10 text-primary'}`}>
      <span className="material-icons-outlined text-3xl md:text-4xl">{icon}</span>
    </div>
    <h3 className={`text-xl md:text-2xl font-display font-bold mb-4 uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
    <p className={`text-sm md:text-base leading-relaxed font-light ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
      {desc}
    </p>
  </div>
);

export default Services;