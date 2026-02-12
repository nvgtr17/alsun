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
      <section className={`py-16 text-center transition-colors ${theme === 'dark' ? 'bg-surface-dark' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <span className="text-primary font-medium tracking-widest text-xs uppercase mb-4 block">Smart Engineering</span>
          <h2 className={`text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact Us</h2>
          <p className={`max-w-2xl mx-auto text-lg font-light ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Precision PET and HDPE Blowing Machines built to outperform industry standards. Reach out to our engineering team today.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Send us a message</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Fill out the form below and we will get back to you within 24 hours.</p>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2" htmlFor="name">Full Name</label>
                  <input className={`w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${theme === 'dark' ? 'bg-card-dark border border-zinc-700 text-white placeholder-zinc-600' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                    }`} id="name" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2" htmlFor="phone">Phone Number</label>
                  <input className={`w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${theme === 'dark' ? 'bg-card-dark border border-zinc-700 text-white placeholder-zinc-600' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                    }`} id="phone" placeholder="+91 98765 43210" type="tel" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2" htmlFor="email">Email Address</label>
                <input className={`w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${theme === 'dark' ? 'bg-card-dark border border-zinc-700 text-white placeholder-zinc-600' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                  }`} id="email" placeholder="john@company.com" type="email" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2" htmlFor="inquiry">Interest</label>
                <select className={`w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${theme === 'dark' ? 'bg-card-dark border border-zinc-700 text-white' : 'bg-white border border-gray-300 text-gray-900'
                  }`} id="inquiry">
                  <option>General Inquiry</option>
                  <option>Semi Automatic Machines</option>
                  <option>Automatic HDPE Units</option>
                  <option>Maintenance & Service</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2" htmlFor="message">Message</label>
                <textarea className={`w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${theme === 'dark' ? 'bg-card-dark border border-zinc-700 text-white placeholder-zinc-600' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                  }`} id="message" placeholder="Tell us about your production requirements..." rows={5}></textarea>
              </div>
              <button className={`w-full md:w-auto font-bold uppercase tracking-widest text-[10px] md:text-sm px-6 md:px-10 py-3 md:py-4 rounded transition-colors ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'
                }`} type="submit">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col space-y-12 h-full">
            <div className={`p-8 rounded border transition-colors ${theme === 'dark' ? 'bg-card-dark border-white/5' : 'bg-white border-gray-200 shadow-sm'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center text-sm font-bold uppercase tracking-widest text-primary mb-4">
                    <span className="material-icons-outlined mr-2 text-lg">business</span>
                    Head Office
                  </h4>
                  <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    A-123, Industrial Area Phase I,<br />
                    Okhla, New Delhi,<br />
                    Delhi 110020, India
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center text-sm font-bold uppercase tracking-widest text-primary mb-4">
                    <span className="material-icons-outlined mr-2 text-lg">factory</span>
                    Factory Unit
                  </h4>
                  <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Plot No. 45, Ecotech III,<br />
                    Greater Noida,<br />
                    Uttar Pradesh 201306, India
                  </p>
                </div>
              </div>
              <hr className={`my-6 ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`} />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h5 className="text-xs font-bold uppercase text-gray-500 mb-2">Direct Line</h5>
                  <a className={`text-lg font-medium hover:text-primary transition-colors block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} href="tel:+918368125978">+91 83681 25978</a>
                  <a className={`text-lg font-medium hover:text-primary transition-colors block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} href="tel:+917827434392">+91 78274 34392</a>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-gray-500 mb-2">Support</h5>
                  <a className={`text-lg font-medium hover:text-primary transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} href="mailto:info@alsunmachines.com">info@alsunmachines.com</a>
                </div>
              </div>
            </div>

            <div className={`relative w-full h-80 rounded overflow-hidden shadow-lg border transition-colors ${theme === 'dark' ? 'border-white/5' : 'border-gray-200'}`}>
              <iframe
                className={`w-full h-full block`}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1625638428423!5m2!1sen!2sin"
                style={{ border: 0 }}
                title="Alsun Machinery Location"
              />
            </div>

            <div className={`p-6 rounded text-center border transition-colors ${theme === 'dark' ? 'bg-background-dark border-white/5' : 'bg-gray-900 border-none'}`}>
              <h4 className="text-white font-medium mb-3">Need detailed specifications?</h4>
              <button className={`inline-flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-2 border rounded-full text-[10px] md:text-xs font-medium transition-all duration-300 ${theme === 'dark' ? 'border-gray-600 text-white hover:bg-white hover:text-black' : 'border-gray-500 text-white hover:bg-white hover:text-black'
                }`}>
                <span className="material-icons-outlined text-xs md:text-sm">download</span>
                <span className="flex flex-col leading-tight">
                  <span>Download</span>
                  <span>Brochure</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;