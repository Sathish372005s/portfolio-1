import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';
import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-gold font-medium tracking-wide uppercase mb-2 text-sm">Get in Touch</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Contact Me</h1>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-3xl font-bold text-white mb-6">Let's talk about your next project.</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-neutral-900 pt-16">
            
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mb-6">
                <Mail className="text-gold" size={24} />
              </div>
              <h4 className="text-white font-semibold mb-2">Email Me</h4>
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-gray-400 hover:text-gold transition-colors text-sm break-all">
                {RESUME_DATA.contact.email}
              </a>
            </div>

            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mb-6">
                <Phone className="text-gold" size={24} />
              </div>
              <h4 className="text-white font-semibold mb-2">Call Me</h4>
              <p className="text-gray-400 text-sm">{RESUME_DATA.contact.phone}</p>
            </div>

            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-gold" size={24} />
              </div>
              <h4 className="text-white font-semibold mb-2">Location</h4>
              <p className="text-gray-400 text-sm">{RESUME_DATA.contact.location}</p>
            </div>
            
          </div>

          {/* Social Media Links */}
          <div className="mt-16 pt-16 border-t border-neutral-800">
            <div className="text-center mb-8" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-white mb-2">Connect With Me</h3>
              <p className="text-gray-400">Follow me on social media</p>
            </div>
            <div className="flex justify-center items-center gap-8">
              {RESUME_DATA.contact.instagram && (
                <a 
                  href={RESUME_DATA.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-800 hover:border-gold hover:text-gold transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Instagram size={24} />
                </a>
              )}
              {RESUME_DATA.contact.linkedin && (
                <a 
                  href={RESUME_DATA.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-800 hover:border-gold hover:text-gold transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Linkedin size={24} />
                </a>
              )}
              {RESUME_DATA.contact.github && (
                <a 
                  href={RESUME_DATA.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-800 hover:border-gold hover:text-gold transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Github size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
