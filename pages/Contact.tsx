import React from 'react';
import { useTheme } from '../components/ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`transition-colors duration-300 font-sans pt-20 ${theme === 'dark' ? 'bg-background-dark text-gray-100' : 'bg-background-light text-text-light'}`}>

      {/* Header */}
      <header className={`w-full py-8 border-b transition-colors ${theme === 'dark' ? 'border-gray-800 bg-background-dark' : 'border-gray-200 bg-white'}`}>
        <div className="container mx-auto px-6 flex justify-center">
          <div className="text-center">
            <img src="/logomark.png" alt="Alsun Machinery Logo" className={`w-16 h-16 mx-auto mb-3 object-contain ${theme === 'light' ? 'filter brightness-90' : ''}`} />
            <h1 className={`text-sm font-bold tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Alsun Machinery</h1>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className={`py-fluid-section text-center transition-colors pt-32 ${theme === 'dark' ? 'bg-surface-dark' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <span className="text-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-4 block">Smart Engineering</span>
          <h2 className={`text-fluid-h2 font-display font-bold uppercase tracking-tight mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact Us</h2>
          <p className={`max-w-2xl mx-auto text-fluid-body font-light px-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Precision PET and HDPE Blowing Machines built to outperform industry standards. Reach out to our engineering team today.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-fluid-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Form */}
            <div className="space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="px-2">
                <h3 className={`text-fluid-h3 font-display font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Send us a message</h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-xs md:text-sm`}>Fill out the form below and we will get back to you within 24 hours.</p>
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="px-2 md:px-0">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3 ml-1" htmlFor="name">Full Name</label>
                    <input className={`w-full px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all ${theme === 'dark' ? 'bg-card-dark border border-white/5 text-white placeholder-zinc-600' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 shadow-sm'
                      }`} id="name" placeholder="E.g. John Doe" type="text" />
                  </div>
                  <div className="px-2 md:px-0">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3 ml-1" htmlFor="phone">Phone Number</label>
                    <input className={`w-full px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all ${theme === 'dark' ? 'bg-card-dark border border-white/5 text-white placeholder-zinc-600' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 shadow-sm'
                      }`} id="phone" placeholder="E.g. +91 98765 43210" type="tel" />
                  </div>
                </div>
                <div className="px-2 md:px-0">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3 ml-1" htmlFor="email">Email Address</label>
                  <input className={`w-full px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all ${theme === 'dark' ? 'bg-card-dark border border-white/5 text-white placeholder-zinc-600' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 shadow-sm'
                    }`} id="email" placeholder="E.g. john@company.com" type="email" />
                </div>
                <div className="px-2 md:px-0">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3 ml-1" htmlFor="inquiry">Product Interest</label>
                  <select className={`w-full px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all appearance-none cursor-pointer ${theme === 'dark' ? 'bg-card-dark border border-white/5 text-white' : 'bg-white border border-gray-200 text-gray-900 shadow-sm'
                    }`} id="inquiry">
                    <option>General Inquiry</option>
                    <option>Semi Automatic Machines</option>
                    <option>Automatic HDPE Units</option>
                    <option>Maintenance & Service</option>
                  </select>
                </div>
                <div className="px-2 md:px-0">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3 ml-1" htmlFor="message">Message</label>
                  <textarea className={`w-full px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none ${theme === 'dark' ? 'bg-card-dark border border-white/5 text-white placeholder-zinc-600' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 shadow-sm'
                    }`} id="message" placeholder="Tell us about your production requirements..." rows={5}></textarea>
                </div>
                <div className="px-2 md:px-0">
                  <button className={`w-full md:w-auto font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs px-10 py-5 rounded-2xl transition-all shadow-xl active:scale-95 ${theme === 'dark' ? 'bg-white text-black hover:bg-primary hover:text-white' : 'bg-gray-900 text-white hover:bg-primary shadow-primary/20'
                    }`} type="submit">
                    Deploy Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="flex flex-col space-y-8 md:space-y-12 h-full order-1 lg:order-2 px-2 md:px-0">
              <div className={`p-8 md:p-10 rounded-3xl border transition-all ${theme === 'dark' ? 'bg-card-dark/50 border-white/5' : 'bg-white border-gray-100 shadow-xl'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <h4 className="flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                      <span className="material-icons-outlined mr-3 text-xl">business</span>
                      Head Office
                    </h4>
                    <p className={`text-xs md:text-sm leading-loose font-mono ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      A-123, INDUSTRIAL AREA PHASE I,<br />
                      OKHLA, NEW DELHI,<br />
                      DELHI 110020, INDIA
                    </p>
                  </div>
                  <div>
                    <h4 className="flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                      <span className="material-icons-outlined mr-3 text-xl">factory</span>
                      Factory Unit
                    </h4>
                    <p className={`text-xs md:text-sm leading-loose font-mono ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      PLOT NO. 45, ECOTECH III,<br />
                      GREATER NOIDA,<br />
                      UTTAR PRADESH 201306, INDIA
                    </p>
                  </div>
                </div>
                <hr className={`my-8 md:my-10 ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-3">Direct Relay</h5>
                    <div className="space-y-2">
                      <a className={`text-base md:text-lg font-display font-medium hover:text-primary transition-colors block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} href="tel:+918368125978">+91 83681 25978</a>
                      <a className={`text-base md:text-lg font-display font-medium hover:text-primary transition-colors block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} href="tel:+917827434392">+91 78274 34392</a>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-3">Support Channel</h5>
                    <a className={`text-base md:text-lg font-display font-medium hover:text-primary transition-colors break-all md:break-normal ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} href="mailto:info@alsunmachines.com">info@alsunmachines.com</a>
                  </div>
                </div>
              </div>

              <div className={`relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl border transition-all hover:border-primary/30 ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
                <iframe
                  className={`w-full h-full block filter contrast-125 ${theme === 'dark' ? 'invert hue-rotate-180 brightness-75 grayscale' : 'grayscale-[20%]'}`}
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1625638428423!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  title="Alsun Machinery Location"
                />
              </div>

              <div className={`p-8 md:p-10 rounded-3xl text-center border transition-all ${theme === 'dark' ? 'bg-primary/5 border-primary/20' : 'bg-gray-900 border-none shadow-2xl shadow-primary/20'}`}>
                <h4 className="text-white font-display text-lg font-bold mb-6">Need technical specifications?</h4>
                <button className={`inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all hover:bg-primary hover:text-white active:scale-95 shadow-xl`}>
                  <span className="material-icons-outlined text-xl">download</span>
                  SYSTEM BROCHURE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;