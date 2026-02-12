import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`font-sans antialiased transition-colors duration-300 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Industrial Machinery Background"
            className={`w-full h-full object-cover ${theme === 'dark' ? 'opacity-40' : 'opacity-40'}`}
            src="/bg 1.jpg"
          />
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${theme === 'dark' ? 'via-background-dark/80 to-background-dark' : 'via-background-light/80 to-background-light'}`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto pt-20">
          <div className="mb-6 flex justify-center">
            <img src="/logomark.png" alt="Alsun Machinery Logo" className={`h-24 w-auto ${theme === 'light' ? 'filter brightness-90' : ''}`} />
          </div>

          <p className="text-xs tracking-[0.3em] font-semibold text-gray-500 uppercase mb-2 font-display">Alsun Machinery</p>
          <p className="text-sm tracking-[0.2em] font-medium text-gray-400 uppercase mb-6">Smart Engineering</p>

          <h1 className={`font-display text-5xl md:text-8xl font-bold mb-6 tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            ENGINEERING <br /> THE FUTURE
          </h1>

          <div className={`h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-gray-600' : 'via-gray-300'} to-transparent mb-8`}></div>

          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Pioneering the next generation of PET & HDPE blow molding technology. We don't just build machines; we engineer competitive advantages for the plastic manufacturing industry.
          </p>

          <div className="flex gap-4 justify-center">
            <Link to="/products" className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-all duration-300 text-sm tracking-widest uppercase font-bold shadow-lg shadow-primary/20">
              View Products
            </Link>
            <Link to="/contact" className={`inline-block border px-8 py-3 rounded-full transition-all duration-300 text-sm tracking-widest uppercase ${theme === 'dark' ? 'border-gray-500 text-white hover:bg-white hover:text-black' : 'border-gray-400 text-gray-800 hover:bg-gray-800 hover:text-white'}`}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About / Precision Section */}
      <section className={`py-24 relative overflow-hidden transition-colors ${theme === 'dark' ? 'bg-surface-dark' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t-4 border-l-4 border-primary/30 hidden lg:block"></div>
              <img
                alt="Engineers inspecting machine"
                className="relative z-10 w-full rounded-sm shadow-2xl group-hover:filter-none transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgJTt9e2GS8cW_zGqbT6D5PQnpTnqXwxPf0u-vEmolFJvLBAvpFO2zP0muTh0PUk42M4bZLupTuvF6TYmRFE3M8k20d_YNcxWz2a0M9MlZ8SZlFmUgELVSq_5H3yq7XR-ZGNlgXBblVzau8aINQXrb0xbZzv4g5AkDALflKGmryOcHH-9WWwB8rZ4PAvtYX2KB21-TT3bBwsh2dMGjHUyXKnXteBH_ucRRPwRzlTVXwmu0KjxOU7UnVtxiVKgHhOkHuWdle06hisls"
              />
              <div className={`absolute -bottom-6 -right-6 p-6 max-w-xs z-20 shadow-xl border-l-4 border-primary ${theme === 'dark' ? 'bg-background-dark text-white' : 'bg-white text-gray-900'}`}>
                <p className="font-display text-4xl font-bold text-primary mb-1">20+</p>
                <p className={`text-sm uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Years of Engineering Excellence</p>
              </div>
            </div>

            <div>
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Who We Are</span>
              <h2 className={`text-3xl md:text-4xl font-display font-bold mb-6 uppercase ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Precision in Every Cycle</h2>
              <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Founded with a relentless pursuit of perfection, Alsun Machinery has evolved into a global leader in blow molding solutions. We bridge the gap between complex engineering and user-friendly operation.
              </p>
              <p className={`mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Our facilities operate at the intersection of craftsmanship and automation. Every machine that leaves our floor is rigorously tested to ensure it meets not just industry standards, but the Alsun Standard—where durability meets digital intelligence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <span className="material-icons text-primary text-2xl">settings_suggest</span>
                  <div>
                    <h4 className={`font-bold uppercase text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Custom Solutions</h4>
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Tailored to your specific mold requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="material-icons text-primary text-2xl">speed</span>
                  <div>
                    <h4 className={`font-bold uppercase text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>High Throughput</h4>
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Maximized output with minimized downtime.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Products Section */}
      <section className={`py-24 border-t transition-colors ${theme === 'dark' ? 'bg-background-dark border-white/5' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] font-semibold text-gray-500 uppercase">Major Products</span>
            <h2 className={`mt-3 text-3xl md:text-4xl font-display font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Precision PET & HDPE Machines
            </h2>
            <p className={`mt-4 max-w-2xl mx-auto text-sm md:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Purpose-built blow molding machinery engineered for consistency, uptime, and effortless servicing. Explore the core models that power Alsun's manufacturing lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Card 1 */}
            <Link to="/products" className={`group rounded-2xl overflow-hidden shadow-lg border transition-all hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 ${theme === 'dark' ? 'bg-surface-dark border-white/5' : 'bg-white border-gray-100'}`}>
              <div className={`h-48 sm:h-56 md:h-80 flex items-center justify-center relative overflow-hidden ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-100'}`}>
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-200/50'}`}></div>
                {/* Grid overlay */}
                <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]`}></div>

                <img
                  alt="Semi Automatic Machine Wireframe"
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDff3FKlQqvBwLXghUFsm7UuCMMc_Pn-kerNz8PGOxr1ggBzjNPllYnw7DV-2BzNTLG7e5q5dk1m63-ljyCfj-rmarXdG7vQoysZdXMXJGSEwpQHyD7aChLTkuWE8WMKYHtskRuUKZTWDdItlvwOzbu5qclDauvkVpoogAazDZgbcqhNWs71V_3lforRD2STHD-ba-Z_q3NXmgt5TLEH1ZQH4hNmQjfCWq4hR_JFi1Gn86vdwBmpmPuesTM_CjET_YVGaEtpL0DOpD8"
                />
                <div className={`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 border backdrop-blur-sm rounded-sm ${theme === 'dark' ? 'border-white/20 bg-background-dark/60 text-white' : 'border-gray-200 bg-white/60 text-gray-900'}`}>
                  <span className="font-display text-lg tracking-wider uppercase">Semi-Auto Series</span>
                </div>
              </div>
              <div className={`p-6 md:p-8 ${theme === 'dark' ? 'bg-card-dark text-white' : 'bg-white text-gray-900'}`}>
                <h3 className="text-lg md:text-xl font-bold mb-2">Semi Automatic</h3>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  High-output PET blow molding system delivering uniform wall thickness and rapid cycle times for flagship SKUs.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/products" className={`group rounded-2xl overflow-hidden shadow-lg border transition-all hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 ${theme === 'dark' ? 'bg-surface-dark border-white/5' : 'bg-white border-gray-100'}`}>
              <div className={`h-48 sm:h-56 md:h-80 flex items-center justify-center relative overflow-hidden ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-100'}`}>
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-200/50'}`}></div>
                {/* Grid overlay */}
                <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]`}></div>

                <img
                  alt="Automatic Machine Wireframe"
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwHj_YEXLgEHUCQFptc7XsHqgdhRXH05eOGOHnQfKDQ-OQlt7a0Pay3suwaJiNkqxAhWYGnETzz5fSrF8vn6zFzn9RD9UMU3odAWLGM7nn1ahZlb6jWMMSh6vDA-84WC_pIiPJBFdQ4rBWjN47M4fgQOGd0m6R7yr4tNDSWkuQZpU3vynajGGk5JEA1dsZjD3vRIIlADIB-9bq4Nsb8b4rjV7pMRpWDsCfdBrxpM_TbK_BJkKfKOAxswBxm-U6FJaOqYO46yv49Iw6"
                />
                <div className={`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 border backdrop-blur-sm rounded-sm ${theme === 'dark' ? 'border-white/20 bg-background-dark/60 text-white' : 'border-gray-200 bg-white/60 text-gray-900'}`}>
                  <span className="font-display text-lg tracking-wider uppercase">Fully-Auto Series</span>
                </div>
              </div>
              <div className={`p-6 md:p-8 ${theme === 'dark' ? 'bg-card-dark text-white' : 'bg-white text-gray-900'}`}>
                <h3 className="text-lg md:text-xl font-bold mb-2">Automatic</h3>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Space-efficient HDPE unit with auto mold changeovers that shortens downtime while preserving precision.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-24 transition-colors ${theme === 'dark' ? 'bg-surface-dark' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

            <div className="flex flex-col items-center group">
              <div className={`mb-6 text-primary p-4 rounded-full border shadow-sm group-hover:border-primary/50 transition-colors ${theme === 'dark' ? 'border-gray-800 bg-background-dark' : 'border-gray-100 bg-gray-50'}`}>
                <span className="material-icons-outlined text-4xl">anchor</span>
              </div>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Robust Build</h3>
              <p className={`text-xs max-w-xs leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Heavy square pipe structure ensures stability and minimal vibration.
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className={`mb-6 text-primary p-4 rounded-full border shadow-sm group-hover:border-primary/50 transition-colors ${theme === 'dark' ? 'border-gray-800 bg-background-dark' : 'border-gray-100 bg-gray-50'}`}>
                <span className="material-icons-outlined text-4xl">schedule</span>
              </div>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Service Ready</h3>
              <p className={`text-xs max-w-xs leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                We offer a full 2-year warranty covering major components and defects.
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className={`mb-6 text-primary p-4 rounded-full border shadow-sm group-hover:border-primary/50 transition-colors ${theme === 'dark' ? 'border-gray-800 bg-background-dark' : 'border-gray-100 bg-gray-50'}`}>
                <span className="material-icons-outlined text-4xl">bolt</span>
              </div>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>High Output</h3>
              <p className={`text-xs max-w-xs leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Automatic machines delivering high-speed, high-precision bottle production.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className={`py-24 relative overflow-hidden border-t transition-colors ${theme === 'dark' ? 'bg-background-dark border-white/5' : 'bg-gray-900 border-none'}`}>
        <div className="w-24 h-0.5 bg-gray-700 mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">
            Ready to upgrade?
          </h2>
          <p className="text-gray-400 text-sm mb-12 max-w-md mx-auto">
            Sign up to receive the full technical catalog and launch notification.
          </p>
          <form className="flex flex-col items-center max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-full bg-transparent border-b border-gray-600 px-4 py-3 text-center text-lg focus:outline-none focus:border-primary placeholder-gray-600 text-white transition-colors"
              placeholder="Enter Email Address"
              type="email"
            />
            <button className="mt-8 bg-white text-black px-10 py-3 text-xs tracking-widest uppercase font-bold hover:bg-primary hover:text-white transition-colors duration-300" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;