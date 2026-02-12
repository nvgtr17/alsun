import React from 'react';
import { useTheme } from '../components/ThemeContext';

const Services: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`transition-colors duration-300 font-sans pt-20 ${theme === 'dark' ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'}`}>

      {/* Hero Header */}
      <header className="relative h-[60vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
        <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90 ${theme === 'dark' ? 'from-background-dark' : 'from-background-light'}`}></div>

        <div className="relative z-10 max-w-4xl mx-auto mt-16">
          <p className="font-display text-primary tracking-[0.3em] uppercase text-sm mb-4 font-semibold">Smart Engineering Support</p>
          <h1 className={`font-display text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Last</span>
          </h1>
          <div className="h-px w-32 bg-primary mx-auto mb-6"></div>
          <p className={`text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Comprehensive lifecycle support for your PET and HDPE blowing machines. From installation to advanced maintenance, we ensure peak performance.
          </p>
        </div>
      </header>

      {/* Commitment Section */}
      <section className={`py-20 transition-colors ${theme === 'dark' ? 'bg-background-dark' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-display text-gray-500 tracking-[0.2em] uppercase text-sm font-medium">Our Commitment</span>
            <h2 className={`mt-2 text-3xl md:text-4xl font-display font-bold uppercase ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Uninterrupted Production</h2>
            <p className={`mt-4 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Machine downtime is not an option. Alsun's dedicated support network provides rapid response and expert care to keep your lines running at maximum efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className={`py-10 relative overflow-hidden transition-colors ${theme === 'dark' ? 'bg-surface-dark' : 'bg-gray-50'}`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            <ServiceItem
              theme={theme}
              icon="build"
              title="Installation"
              desc="Precision setup and calibration by factory-certified engineers ensuring your machinery operates within optimal parameters from day one."
            />
            <ServiceItem
              theme={theme}
              icon="school"
              title="Operator Training"
              desc="Comprehensive hands-on training for your team to master machine operation, basic troubleshooting, and safety protocols."
            />
            <ServiceItem
              theme={theme}
              icon="settings_suggest"
              title="Maintenance"
              desc="Scheduled preventative maintenance programs designed to extend equipment lifespan and prevent costly unplanned downtime."
            />
            <ServiceItem
              theme={theme}
              icon="map"
              title="Pan-India Support"
              desc="A robust network of service engineers across India, ready to deploy rapidly for on-site assistance wherever your facility is located."
            />

          </div>
        </div>
      </section>

      {/* Feature Section with Image */}
      <section className="py-24 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 z-0">
          <img alt="Industrial Control Panel" className={`w-full h-full object-cover grayscale ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7LBIl2C9mDm4sk_VOr4kG-e7Wh9oxZK_pmrRFnOLlifos9rqb1AGnjhnYVPuXpM_bZu88lfrQnarg7o08ZBF3eDblnPjJaW8dRVAz6xA2zRsa88e52yCJqPT2S-X8rjpk4xiIKRzlUrhRDjLqIFG37kH1qj5Fa762thTqYmw90Ik-fgJvS2EdNhOudy9QlZfLT39Wo0mRLn34eU5s0cZiuNXJwiGN8zeOSWD3vHN_qNoinCW1LFusyLrLkFPE4AnOgwlGp51NaVV4" />
          <div className={`absolute inset-0 bg-gradient-to-r via-background-dark/95 to-background-dark/70 ${theme === 'dark' ? 'from-background-dark' : 'from-white/90'}`}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6">
              <span className="material-icons-outlined text-sm">bolt</span>
              <span className="text-xs font-bold uppercase tracking-wider">Power Safety Integration</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-display font-bold uppercase mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Protection Against <br />Power Fluctuation
            </h2>
            <p className={`text-lg mb-8 font-light ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Modern blowing machines require stable power. We offer integrated UPS solutions and voltage stabilization audits to protect sensitive electronic components from grid irregularities.
            </p>
            <ul className="space-y-4">
              {['Seamless UPS Integration for Logic Controllers', 'Surge Protection & Voltage Monitoring', 'Safe Shutdown Protocols to Minimize Wastage'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="material-icons-outlined text-primary mr-3 mt-1">check_circle</span>
                  <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className={`relative w-full max-w-md aspect-square rounded-xl border flex items-center justify-center p-8 shadow-2xl transition-colors ${theme === 'dark' ? 'bg-gradient-to-tr from-gray-800 to-gray-900 border-white/10' : 'bg-white border-gray-200'}`}>
              <div className="absolute inset-0 bg-primary/5 rounded-xl animate-pulse"></div>
              <div className="text-center">
                <span className={`material-icons-outlined text-9xl mb-4 ${theme === 'dark' ? 'text-white/10' : 'text-primary/10'}`}>electrical_services</span>
                <div className={`font-display text-2xl uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>System Secure</div>
                <div className="text-primary text-sm mt-2 font-mono">STATUS: OPTIMAL</div>
              </div>
              <div className="absolute bottom-4 left-4 h-1 w-16 bg-primary"></div>
              <div className={`absolute top-4 right-4 h-1 w-16 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className={`py-20 transition-colors ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-900'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Need Technical Assistance?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Our engineering team is standing by. Submit a ticket or call our 24/7 hotline for immediate support.
          </p>
          <form className="max-w-md mx-auto mb-12" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input className="w-full bg-transparent border-0 border-b border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:ring-0 focus:border-primary transition-colors text-center text-lg" placeholder="Enter your email for service catalog" type="email" />
            </div>
            <div className="mt-8">
              <button className="bg-white text-black hover:bg-primary hover:text-white px-4 md:px-8 py-2 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors duration-300 transform hover:-translate-y-1">
                <span className="flex flex-col leading-tight items-center">
                  <span>Download</span>
                  <span>Brochure</span>
                </span>
              </button>
            </div>
          </form>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 pt-10 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-icons-outlined text-xl">call</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 uppercase font-semibold">Service Hotline</p>
                <p className="text-white font-display font-bold tracking-wide">+91 83681 25978</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-icons-outlined text-xl">email</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 uppercase font-semibold">Email Support</p>
                <p className="text-white font-display font-bold tracking-wide">support@alsun.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

const ServiceItem = ({ icon, title, desc, theme }: any) => (
  <div className={`group p-5 md:p-8 border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 rounded-sm ${theme === 'dark' ? 'border-white/5 bg-card-dark/40 hover:border-primary/50' : 'border-gray-200 bg-white hover:border-primary/50'}`}>
    <div className={`w-12 h-12 md:w-14 md:h-14 mb-6 flex items-center justify-center rounded-full border group-hover:border-primary group-hover:text-primary transition-colors ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-gray-100 text-gray-700'}`}>
      <span className="material-icons-outlined text-2xl md:text-3xl icon-glow">{icon}</span>
    </div>
    <h3 className={`text-lg md:text-xl font-display font-bold mb-3 uppercase ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
    <p className={`text-xs md:text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
      {desc}
    </p>
  </div>
);

export default Services;