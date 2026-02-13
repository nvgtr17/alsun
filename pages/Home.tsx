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
            className={`w-full h-full object-cover ${theme === 'dark' ? 'opacity-30' : 'opacity-20'}`}
            src="bg 1.jpg"
          />
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${theme === 'dark' ? 'via-background-dark/80 to-background-dark' : 'via-background-light/80 to-background-light'}`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-4 flex justify-center">
            <img src="logomark.png" alt="Alsun Machinery Logo" className={`h-16 md:h-24 w-auto animate-float ${theme === 'light' ? 'filter brightness-90' : ''}`} />
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDff3FKlQqvBwLXghUFsm7UuCMMc_Pn-kerNz8PGOxr1ggBzjNPllYnw7DV-2BzNTLG7e5q5dk1m63-ljyCfj-rmarXdG7vQoysZdXMXJGSEwpQHyD7aChLTkuWE8WMKYHtskRuUKZTWDdItlvwOzbu5clDauvkVpoogAazDZgbcqhNWs71V_3lforRD2STHD-ba-Z_q3NXmgt5TLEH1ZQH4hNmQjfCWq4hR_JFi1Gn86vdwBmpmPuesTM_CjET_YVGaEtpL0DOpD8"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwHj_YEXLgEHUCQFptc7XsHqgdhRXH05eOGOHnQfKDQ-OQlt7a0Pay3suwaJiNkqxAhWYGnETzz5fSrF8vn6zFzn9RD9UMU3odAWLGM7nn1ahZlb6jWMMSh6vDA-84WC_pIiPJBFdQ4rBWjN47M4fgQOGd0m6R7yr4tNDSWkuQZpU3vynajGGk5JEA1dsZjD3vRIIlADIB-9bq4Nsb8b4rjV7pMRpWDsCfdBrxpM_TbK_BJkKfKOAxswBxm-U6FJaOqYO46yv49Iw6"
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

      {/* Subscribe Section */}
      <section className={`py-fluid-section relative overflow-hidden border-t transition-colors ${theme === 'dark' ? 'bg-background-dark border-white/5' : 'bg-gray-900 border-none'}`}>
        <div className="container-custom">
          <div className="w-24 h-0.5 bg-primary/30 mx-auto mb-12"></div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-fluid-h2 font-display font-medium text-white mb-4">
              Ready to Upgrade?
            </h2>
            <p className="text-gray-400 text-sm mb-12 max-w-md mx-auto px-6">
              Sign up to receive our full technical catalog and latest machine updates.
            </p>
            <form className="flex flex-col items-center max-w-lg mx-auto px-6" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full bg-transparent border-b border-gray-600 px-4 py-3 text-center text-lg focus:outline-none focus:border-primary placeholder-gray-600 text-white transition-colors"
                placeholder="Enter Email Address"
                type="email"
              />
              <button className="mt-10 bg-white text-black px-12 py-4 text-xs tracking-widest uppercase font-bold hover:bg-primary hover:text-white transition-all duration-300 rounded-xl shadow-xl active:scale-95" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;