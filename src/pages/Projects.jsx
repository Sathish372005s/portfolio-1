import React from 'react';
import { Server, Smartphone, Database, Globe, Github, ShoppingCart } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

const Projects = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-gold font-medium tracking-wide uppercase mb-2 text-sm">Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Featured Projects</h1>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {RESUME_DATA.projects.map((project, index) => (
            <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex flex-col hover:border-neutral-700 transition-colors duration-300">
              
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                  {/* Using icons as placeholders instead of generic images for a cleaner look */}
                  {index % 5 === 0 && <ShoppingCart size={48} className="text-neutral-600" />}
                  {index % 5 === 1 && <Smartphone size={48} className="text-neutral-600" />}
                  {index % 5 === 2 && <Database size={48} className="text-neutral-600" />}
                  {index % 5 === 3 && <Globe size={48} className="text-neutral-600" />}
                  {index % 5 === 4 && <Server size={48} className="text-neutral-600" />}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                    {project.period}
                  </span>
                </div>
                
                <p className="text-sm text-gold mb-6 font-mono">{project.stack}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start">
                      <span className="text-gold mr-3 inline-block mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                {project.github && (
                  <div className="mt-auto pt-4 border-t border-neutral-800">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-white hover:text-gold transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      View Codes
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
