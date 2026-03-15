import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-indigo-500 uppercase tracking-[0.3em] mb-4"
          >
            Career Path
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Professional Experience
          </motion.h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative mb-12 md:w-1/2 ${
                idx % 2 === 0 ? 'md:ml-0 md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              } text-left`}
            >
              {/* Dot */}
              <div className={`absolute top-0 w-10 h-10 bg-black border-4 border-indigo-600 rounded-full flex items-center justify-center z-10 transform 
                ${idx % 2 === 0 
                  ? 'left-4 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2' 
                  : 'left-4 -translate-x-1/2 md:left-0 md:-translate-x-1/2'
                }`}
              >
                <Briefcase size={16} className="text-indigo-500" />
              </div>

              <div className="ml-12 md:ml-0 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all group">
                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-indigo-400 font-mono text-sm flex items-center gap-2 justify-start">
                    <Calendar size={14} /> {exp.duration}
                  </span>
                  <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                  <div className="flex items-center gap-2 text-gray-400 font-medium justify-start">
                    <span className="text-indigo-500">@</span> {exp.company}
                    {exp.location && (
                      <span className="flex items-center gap-1 text-xs text-gray-500 ml-2">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3 text-gray-400 text-sm list-none text-left">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 justify-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className="mt-6 flex flex-wrap gap-2 justify-start">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
