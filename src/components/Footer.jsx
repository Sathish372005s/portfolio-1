import React from 'react';
import { Github, Linkedin, Mail, Instagram, Code2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">SATHISH S</h3>
            <p className="text-sm mb-4 max-w-xs leading-relaxed">
              Full Stack Developer specializing in scalable React and Node.js applications. Building the future one commit at a time.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <Github size={20} />
              </a>
              <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              {RESUME_DATA.contact.instagram && (
                <a href={RESUME_DATA.contact.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                  <Instagram size={20} />
                </a>
              )}
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-gray-400 hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/projects" className="hover:text-gold transition-colors">Projects</a></li>
              <li><a href="/internships" className="hover:text-gold transition-colors">Experience</a></li>
              <li><a href="/about" className="hover:text-gold transition-colors">About Me</a></li>
              <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>{RESUME_DATA.contact.email}</li>
              <li>{RESUME_DATA.contact.phone}</li>
              <li>{RESUME_DATA.contact.location}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Sathish S. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision & simplicity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
