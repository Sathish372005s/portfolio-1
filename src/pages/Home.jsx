import React, { useEffect } from 'react';
import { ArrowRight, Terminal, Download, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RESUME_DATA } from '../data/resume';
import profileImg from '../assets/profile.png';
import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const navLinks = [
    { name: 'Projects', path: '/projects', description: 'View my work' },
    { name: 'Experience', path: '/internships', description: 'My journey' },
    { name: 'About', path: '/about', description: 'Know me better' },
    { name: 'Contact', path: '/contact', description: 'Get in touch' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1 text-center lg:text-left" data-aos="fade-right">
              <h2 className="text-gold font-medium tracking-wide uppercase mb-4 text-sm" data-aos="fade-down" data-aos-delay="100">
                Full Stack Developer
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tighter" data-aos="fade-up" data-aos-delay="200">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
                  {RESUME_DATA.name}
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                I specialize in building scalable web and mobile applications using React.js, Node.js, and AWS. Passionate about creating seamless user experiences and robust backend architectures.
              </p>
              
              <div className="flex flex-col items-center lg:items-start space-y-4 w-full sm:w-max mx-auto lg:mx-0 mt-8 lg:mt-0" data-aos="fade-up" data-aos-delay="400">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                  <Link 
                    to="/projects" 
                    className="w-full sm:w-auto px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-gold-light transition-colors duration-300 flex items-center justify-center group"
                  >
                    View My Work
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="w-full sm:w-auto px-8 py-3 bg-transparent border border-neutral-700 text-white font-semibold rounded hover:border-gold hover:text-gold transition-colors duration-300 flex items-center justify-center"
                  >
                    Contact Me
                  </Link>
                </div>
                <div className="w-full flex sm:justify-center pt-2">
                  <a 
                    href="/resume.pdf"
                    download="Sathish_S_Resume.pdf"
                    className="w-full sm:w-auto px-8 py-3 bg-neutral-800 border border-neutral-700 text-white font-semibold rounded hover:bg-neutral-700 hover:text-gold transition-colors duration-300 flex items-center justify-center group"
                  >
                    <Download className="mr-2 group-hover:-translate-y-1 transition-transform" size={20} />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col items-center lg:justify-end lg:items-end w-full" data-aos="fade-left">
              
              {/* Custom Slow Floating Animations style block */}
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes float-slow-1 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-8px); }
                }
                @keyframes float-slow-2 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-12px); }
                }
                @keyframes float-slow-3 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-6px); }
                }
                @keyframes float-slow-4 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                }
              `}} />

              <div className="relative w-72 h-72 md:w-80 md:h-[420px] lg:w-[420px] lg:h-[500px] flex items-end justify-center">
                
                {/* Floating Badges - Absolute positioning on desktop (lg and up), hidden on mobile */}
                <div 
                  className="hidden lg:block absolute top-[12%] -left-[16%] z-20"
                  style={{ animation: 'float-slow-1 6s ease-in-out infinite' }}
                >
                  <div className="px-5 py-3 rounded-2xl bg-neutral-950/70 backdrop-blur-lg border border-gold/15 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col items-start min-w-[150px]">
                    <span className="text-2xl font-black text-gold tracking-tight">6+</span>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Projects Completed</span>
                  </div>
                </div>

                <div 
                  className="hidden lg:block absolute top-[25%] -right-[14%] z-20"
                  style={{ animation: 'float-slow-2 8s ease-in-out infinite' }}
                >
                  <div className="px-5 py-3 rounded-2xl bg-neutral-950/70 backdrop-blur-lg border border-gold/15 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col items-start min-w-[150px]">
                    <span className="text-2xl font-black text-gold tracking-tight">2</span>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Internships Done</span>
                  </div>
                </div>

                <div 
                  className="hidden lg:block absolute bottom-[22%] -left-[10%] z-20"
                  style={{ animation: 'float-slow-3 7s ease-in-out infinite' }}
                >
                  <div className="px-5 py-3 rounded-2xl bg-neutral-950/70 backdrop-blur-lg border border-gold/15 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col items-start min-w-[150px]">
                    <span className="text-2xl font-black text-gold tracking-tight flex items-center gap-1.5">
                      <Phone size={18} className="text-gold" />
                      Contact
                    </span>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">+91 72001 17106</span>
                  </div>
                </div>

                <div 
                  className="hidden lg:block absolute bottom-[10%] -right-[10%] z-20"
                  style={{ animation: 'float-slow-4 9s ease-in-out infinite' }}
                >
                  <div className="px-5 py-3 rounded-2xl bg-neutral-950/70 backdrop-blur-lg border border-gold/15 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col items-start min-w-[150px]">
                    <span className="text-2xl font-black text-gold tracking-tight">Freelancing</span>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Active freelancer</span>
                  </div>
                </div>

                {/* Profile Image - Displayed statically in its original shape */}
                <div className="relative h-full w-full flex items-end justify-center z-10">
                  <img 
                    src={profileImg} 
                    alt={RESUME_DATA.name} 
                    className="w-auto h-full max-h-full object-contain object-bottom select-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        if(e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    
                    {/* Fallback */}
                    <div className="hidden absolute inset-0 flex-col items-center justify-center text-center p-8 bg-neutral-900 border border-neutral-800 rounded-xl">
                      <Terminal size={60} className="text-neutral-700 mb-4" />
                      <p className="text-gold font-mono text-xs mb-2">Save image to src/assets/profile.png</p>
                    </div>
                  </div>

              </div>

              {/* Mobile Stats Grid - Responsive display below portrait on screens under lg */}
              <div className="grid grid-cols-2 gap-3 mt-8 w-full max-w-md lg:hidden px-4">
                <div className="px-4 py-3 rounded-xl bg-neutral-950/50 backdrop-blur-md border border-neutral-800/80 shadow flex flex-col items-center text-center">
                  <span className="text-xl font-bold text-gold">10+</span>
                  <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Projects Completed</span>
                </div>
                <div className="px-4 py-3 rounded-xl bg-neutral-950/50 backdrop-blur-md border border-neutral-800/80 shadow flex flex-col items-center text-center">
                  <span className="text-xl font-bold text-gold">2</span>
                  <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Internships Done</span>
                </div>
                <div className="px-4 py-3 rounded-xl bg-neutral-950/50 backdrop-blur-md border border-neutral-800/80 shadow flex flex-col items-center text-center col-span-2">
                  <span className="text-base font-bold text-gold flex items-center gap-1.5 justify-center">
                    <Phone size={14} className="text-gold" />
                    +91 72001 17106
                  </span>
                  <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Direct Mobile Contact</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Links Section */}
      <div className="md:hidden bg-neutral-950/50 border-y border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-white mb-2">Explore More</h2>
            <p className="text-gray-400">Quick access to all sections</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className="p-4 border border-neutral-700 rounded-lg bg-neutral-900/50 hover:bg-neutral-800 hover:border-gold transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={`${100 * (index + 1)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <h3 className="text-gold font-semibold text-lg group-hover:text-gold-light transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{link.description}</p>
                  </div>
                  <ArrowRight size={20} className="text-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
