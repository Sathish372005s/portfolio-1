import React from 'react';
import { RESUME_DATA } from '../data/resume';
import { Award, BookOpen, GraduationCap, Download } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-gold font-medium tracking-wide uppercase mb-2 text-sm">About Me</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">My Journey</h1>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        {/* Profile Summary */}
        <div className="mb-16 bg-neutral-900 border border-neutral-800 p-8 md:p-10 rounded-2xl text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex-1">
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              {RESUME_DATA.summary}
            </p>
          </div>
          <div className="flex-shrink-0">
            <a 
              href="/resume.pdf"
              download="Sathish_S_Resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-gold text-black font-semibold rounded hover:bg-gold-light transition-colors duration-300 group whitespace-nowrap"
            >
              <Download className="mr-2 group-hover:-translate-y-1 transition-transform" size={20} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl h-full">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-gold mr-4" size={28} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="border-l-2 border-gold pl-6 py-2">
              <h4 className="text-lg font-semibold text-white">{RESUME_DATA.education.degree}</h4>
              <p className="text-gray-400 mt-1">{RESUME_DATA.education.institution}</p>
              <p className="text-gold text-sm mt-3 font-medium bg-black inline-block px-3 py-1 rounded">{RESUME_DATA.education.period}</p>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl h-full">
            <div className="flex items-center mb-6">
              <Award className="text-gold mr-4" size={28} />
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>
            <ul className="grid grid-cols-1 gap-4">
              {RESUME_DATA.certifications.map((cert, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <BookOpen className="text-gold mr-3 flex-shrink-0" size={16} />
                  <span className="text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
