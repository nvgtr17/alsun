import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`font-sans antialiased transition-colors duration-300 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <img
            alt="Industrial Machinery Background"
            className={`w-full h-full object-cover ${theme === 'dark' ? 'opacity-50' : 'opacity-40'}`}
            src="/alsun/bg-1.jpg"
          />
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${theme === 'dark' ? 'via-background-dark/20' : 'via-background-light/10'} to-transparent`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-4 flex justify-center">
            <img src="/alsun/logomark.png" alt="Alsun Machinery Logo" className={`h-16 md:h-24 w-auto ${theme === 'light' ? 'filter brightness-90' : ''}`} />
          </div>

          <p className="text-[10px] md:text-xs tracking-[0.3em] font-semibold text-gray-500 uppercase mb-2 font-display">Alsun Machinery</p>
          <p className="text-[10px] md:text-sm tracking-[0.2em] font-medium text-gray-400 uppercase mb-6">Smart Engineering Experts</p>

          <h1 className={`font-display text-fluid-h1 font-bold mb-6 tracking-wide px-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            ENGINEERING <br className="hidden sm:block" /> THE FUTURE
          </h1>

          <div className={`h-px w-full max-w-sm md:max-w-2xl mx-auto bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-gray-600' : 'via-gray-300'} to-transparent mb-8`}></div>

          <p className={`text-fluid-body max-w-2xl mx-auto mb-10 font-light leading-relaxed px-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Pioneering the next generation of PET & HDPE blow molding technology. We engineer competitive advantages for the global manufacturing industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-6 sm:px-0">
            <Link to="/products" className="w-full sm:w-auto inline-block bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary-dark transition-all duration-300 text-[10px] md:text-sm tracking-widest uppercase font-bold shadow-lg shadow-primary/20">
              View Products
            </Link>
            <Link to="/contact" className={`w-full sm:w-auto inline-block border px-8 py-4 rounded-xl transition-all duration-300 text-[10px] md:text-sm tracking-widest uppercase ${theme === 'dark' ? 'border-gray-500 text-white hover:bg-white hover:text-black' : 'border-gray-400 text-gray-800 hover:bg-gray-800 hover:text-white'}`}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About / Precision Section */}
      <section className={`py-fluid-section relative overflow-hidden transition-colors ${theme === 'dark' ? 'bg-surface-dark' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-primary/20 hidden lg:block"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  alt="Engineers inspecting machine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgJTt9e2GS8cW_zGqbT6D5PQnpTnqXwxPf0u-vEmolFJvLBAvpFO2zP0muTh0PUk42M4bZLupTuvF6TYmRFE3M8k20d_YNcxWz2a0M9MlZ8SZlFmUgELVSq_5H3yq7XR-ZGNlgXBblVzau8aINQXrb0xbZzv4g5AkDALflKGmryOcHH-9WWwB8rZ4PAvtYX2KB21-TT3bBwsh2dMGjHUyXKnXteBH_ucRRPwRzlTVXwmu0KjxOU7UnVtxiVKgHhOkHuWdle06hisls"
                />
              </div>
              <div className={`absolute -bottom-4 -right-4 p-4 md:p-6 max-w-[200px] md:max-w-xs z-20 shadow-2xl border-l-4 border-primary ${theme === 'dark' ? 'bg-background-dark text-white' : 'bg-white text-gray-900'}`}>
                <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">20+</p>
                <p className={`text-[10px] md:text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Years of Excellence</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-3 block">Who We Are</span>
              <h2 className={`text-fluid-h2 font-display font-bold mb-6 uppercase leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Precision in Every Cycle</h2>
              <p className={`mb-6 text-sm md:text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Founded with a relentless pursuit of perfection, Alsun Machinery has evolved into a global leader in blow molding solutions. We bridge the gap between complex engineering and user-friendly operation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <span className="material-icons text-primary text-2xl">settings_suggest</span>
                  <div>
                    <h4 className={`font-bold uppercase text-xs ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Custom Solutions</h4>
                    <p className={`text-[10px] mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Tailored to your specific mold requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <span className="material-icons text-primary text-2xl">speed</span>
                  <div>
                    <h4 className={`font-bold uppercase text-xs ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>High Throughput</h4>
                    <p className={`text-[10px] mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Maximized output with minimized downtime.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Products Section */}
      <section className={`py-fluid-section border-t transition-colors ${theme === 'dark' ? 'bg-background-dark border-white/5' : 'bg-gray-50 border-gray-200'}`}>
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[10px] tracking-[0.2em] font-semibold text-gray-500 uppercase">Major Products</span>
            <h2 className={`mt-3 text-fluid-h2 font-display font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Precision PET & HDPE
            </h2>
            <p className={`mt-4 max-w-2xl mx-auto text-sm md:text-base px-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Purpose-built blow molding machinery engineered for consistency, uptime, and effortless servicing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1 */}
            <Link to="/products" className={`group rounded-3xl overflow-hidden shadow-xl border transition-all hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 ${theme === 'dark' ? 'bg-surface-dark border-white/5' : 'bg-white border-gray-100'}`}>
              <div className={`h-56 md:h-80 flex items-center justify-center relative overflow-hidden ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-100'}`}>
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-200/50'}`}></div>
                <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]`}></div>

                <img
                  alt="Semi Automatic Machine Wireframe"
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`}
                  src="/alsun/machine/SUMO_ALSUN_MACHINE-removebg-preview.png"
                />
                <div className={`absolute z-10 bottom-6 left-6 px-4 py-2 border backdrop-blur-md rounded-xl ${theme === 'dark' ? 'border-white/20 bg-background-dark/60 text-white' : 'border-gray-200 bg-white/60 text-gray-900'}`}>
                  <span className="font-display text-sm tracking-wider uppercase font-bold">Semi-Auto Series</span>
                </div>
              </div>
              <div className={`p-6 md:p-8 ${theme === 'dark' ? 'bg-card-dark text-white' : 'bg-white text-gray-900'}`}>
                <h3 className="text-xl font-bold mb-2">Semi Automatic</h3>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  High-output PET blow molding system delivering uniform wall thickness and rapid cycle times.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/products" className={`group rounded-3xl overflow-hidden shadow-xl border transition-all hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 ${theme === 'dark' ? 'bg-surface-dark border-white/5' : 'bg-white border-gray-100'}`}>
              <div className={`h-56 md:h-80 flex items-center justify-center relative overflow-hidden ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-100'}`}>
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-200/50'}`}></div>
                <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]`}></div>

                <img
                  alt="Automatic Machine Wireframe"
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`}
                  src="/alsun/machine/MACHINE.png"
                />
                <div className={`absolute z-10 bottom-6 left-6 px-4 py-2 border backdrop-blur-md rounded-xl ${theme === 'dark' ? 'border-white/20 bg-background-dark/60 text-white' : 'border-gray-200 bg-white/60 text-gray-900'}`}>
                  <span className="font-display text-sm tracking-wider uppercase font-bold">Fully-Auto Series</span>
                </div>
              </div>
              <div className={`p-6 md:p-8 ${theme === 'dark' ? 'bg-card-dark text-white' : 'bg-white text-gray-900'}`}>
                <h3 className="text-xl font-bold mb-2">Automatic</h3>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Space-efficient HDPE unit with auto mold changeovers that shortens downtime.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-fluid-section transition-colors ${theme === 'dark' ? 'bg-surface-dark' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">

            <div className="flex flex-col items-center group">
              <div className={`mb-6 text-primary p-6 rounded-3xl border shadow-sm group-hover:border-primary/50 transition-all group-hover:-translate-y-2 ${theme === 'dark' ? 'border-gray-800 bg-background-dark' : 'border-gray-100 bg-gray-50'}`}>
                <span className="material-icons-outlined text-4xl md:text-5xl">anchor</span>
              </div>
              <h3 className={`text-xs md:text-sm font-bold uppercase tracking-wider mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Robust Build</h3>
              <p className={`text-[10px] md:text-xs max-w-xs leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Heavy square pipe structure ensures industrial-grade stability.
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className={`mb-6 text-primary p-6 rounded-3xl border shadow-sm group-hover:border-primary/50 transition-all group-hover:-translate-y-2 ${theme === 'dark' ? 'border-gray-800 bg-background-dark' : 'border-gray-100 bg-gray-50'}`}>
                <span className="material-icons-outlined text-4xl md:text-5xl">schedule</span>
              </div>
              <h3 className={`text-xs md:text-sm font-bold uppercase tracking-wider mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Service Ready</h3>
              <p className={`text-[10px] md:text-xs max-w-xs leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                We offer a full 2-year warranty covering all major components.
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className={`mb-6 text-primary p-6 rounded-3xl border shadow-sm group-hover:border-primary/50 transition-all group-hover:-translate-y-2 ${theme === 'dark' ? 'border-gray-800 bg-background-dark' : 'border-gray-100 bg-gray-50'}`}>
                <span className="material-icons-outlined text-4xl md:text-5xl">bolt</span>
              </div>
              <h3 className={`text-xs md:text-sm font-bold uppercase tracking-wider mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>High Output</h3>
              <p className={`text-[10px] md:text-xs max-w-xs leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Advanced cycle optimization for peak production units-per-hour.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact & Enquiry Portal */}
      <section className={`py-fluid-section relative overflow-hidden transition-all border-t ${theme === 'dark' ? 'bg-[#030303] border-white/5' : 'bg-gray-50 border-gray-200'}`}>

        {/* Background Decor: Blueprint style lines */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <div className={`absolute top-0 right-0 w-1/2 h-full opacity-10 ${theme === 'dark' ? 'invert' : ''}`}>
            <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100H400M0 200H400M0 300H400M100 0V400M200 0V400M300 0V400" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" />
              <rect x="150" y="150" width="100" height="100" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

            {/* Left: Formal Contact Info */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className={`text-fluid-h2 font-display font-bold mb-8 uppercase tracking-tight leading-none ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Scale Your <br /> Operations
              </h2>
              <p className={`text-sm md:text-base mb-12 max-w-xl leading-relaxed font-light ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Whether you're establishing a new production line or upgrading existing capacity,
                our engineering consultants are available for site audits and technical feasibility studies.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-icons-outlined text-xl">corporate_fare</span>
                  </div>
                  <div>
                    <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>Headquarters</h4>
                    <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Noida, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-icons-outlined text-xl">headset_mic</span>
                    </div>
                    <div>
                      <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>Sales Support</h4>
                      <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>+91 83681 25978</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-icons-outlined text-xl">alternate_email</span>
                    </div>
                    <div>
                      <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>Digital Enquiries</h4>
                      <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>sales@alsun.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Premium Action Card */}
            <div className="lg:col-span-5">
              <div className={`p-8 md:p-12 h-full flex flex-col justify-center rounded-[3rem] border backdrop-blur-md relative overflow-hidden ${theme === 'dark' ? 'bg-white/[0.03] border-white/10' : 'bg-gray-900 border-none'}`}>
                {/* Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-[60px]"></div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6 uppercase tracking-wider">Technical Resources</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-10 leading-relaxed font-light">
                  Direct access to equipment manuals, cycle time analysis, and layout specifications.
                </p>

                <div className="space-y-4">
                  <Link to="/contact" className="w-full bg-primary hover:bg-white hover:text-black text-white px-8 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 active:scale-95">
                    Contact Engineering
                    <span className="material-icons text-sm">arrow_forward</span>
                  </Link>
                  <button className="w-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black px-8 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3">
                    Download Brochure
                    <span className="material-icons text-sm">download</span>
                  </button>
                </div>

                <div className="mt-12 flex items-center gap-4 text-primary opacity-60">
                  <div className="h-px flex-grow bg-primary/20"></div>
                  <span className="material-icons text-lg">verified</span>
                  <div className="h-px flex-grow bg-primary/20"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;