import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

const Contact = () => {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-gold font-medium tracking-wide uppercase mb-2 text-sm">Get in Touch</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Contact Me</h1>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-6">Let's talk about your next project.</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-neutral-900 pt-16">
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mb-6">
                <Mail className="text-gold" size={24} />
              </div>
              <h4 className="text-white font-semibold mb-2">Email Me</h4>
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-gray-400 hover:text-gold transition-colors text-sm break-all">
                {RESUME_DATA.contact.email}
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mb-6">
                <Phone className="text-gold" size={24} />
              </div>
              <h4 className="text-white font-semibold mb-2">Call Me</h4>
              <p className="text-gray-400 text-sm">{RESUME_DATA.contact.phone}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-gold" size={24} />
              </div>
              <h4 className="text-white font-semibold mb-2">Location</h4>
              <p className="text-gray-400 text-sm">{RESUME_DATA.contact.location}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
