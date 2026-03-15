import React from 'react';
import { motion } from 'motion/react';
import { PERSON_DETAILS } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-[0.3em] mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Crafting robust backends for the next generation of apps.
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {PERSON_DETAILS.bio}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">New Delhi</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Based in</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">Senior</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Expertise Level</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                <img
                  src="https://picsum.photos/seed/developer/800/800"
                  alt="Ankit Khatri"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-indigo-600/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700" />
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 p-6 bg-indigo-600 rounded-2xl shadow-2xl"
            >
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-xs text-indigo-200 uppercase tracking-widest font-semibold">Years of Code</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
