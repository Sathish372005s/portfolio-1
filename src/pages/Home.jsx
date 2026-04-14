import React from 'react';
import { ArrowRight, Terminal, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RESUME_DATA } from '../data/resume';
import profileImg from '../assets/profile.png';
const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-gold font-medium tracking-wide uppercase mb-4 text-sm">
              Full Stack Developer
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tighter">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
                {RESUME_DATA.name}
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I specialize in building scalable web and mobile applications using React.js, Node.js, and AWS. Passionate about creating seamless user experiences and robust backend architectures.
            </p>
            
            <div className="flex flex-col items-center lg:items-start space-y-4 w-full sm:w-max mx-auto lg:mx-0 mt-8 lg:mt-0">
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

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group w-72 h-72 md:w-80 md:h-96 lg:w-[400px] lg:h-[480px]">
              
              {/* Elegant Accent Shadow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-gold/40 to-black rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700"></div>
              
              {/* Clean Image Container */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-neutral-950/50 flex items-center justify-center">
                <img 
                  src={profileImg} 
                  alt={RESUME_DATA.name} 
                  className="w-full h-full object-cover lg:object-center transition-transform duration-700 hover:scale-105"
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
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
