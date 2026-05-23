import React, { useEffect } from 'react';
import { RESUME_DATA } from '../data/resume';
import AOS from 'aos';

const Internships = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-gold font-medium tracking-wide uppercase mb-2 text-sm">Experience</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Internships & Skills</h1>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Work Experience */}
          <div className="lg:col-span-2 space-y-8" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">Work Experience</h3>
            
            {RESUME_DATA.experience.map((exp, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg relative" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <div className="absolute top-0 left-0 w-1 h-full bg-gold rounded-l-lg"></div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <p className="text-gold">{exp.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 font-medium mt-2 sm:mt-0 uppercase tracking-wider bg-neutral-950 px-3 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3 mt-6">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start">
                      <span className="text-gold mr-3">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills Sidebar */}
          <div className="space-y-8" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">Technical Skills</h3>
            
            <div className="space-y-6">
              {Object.entries(RESUME_DATA.skills).map(([category, skills]) => (
                <div key={category} className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
                  <h4 className="text-white text-sm uppercase tracking-wider font-semibold mb-4 capitalize">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span key={index} className="bg-black border border-neutral-800 text-gray-300 text-xs px-3 py-1.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Internships;
