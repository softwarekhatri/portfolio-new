import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Code2, Target, Zap } from 'lucide-react';
import { PERSON_DETAILS } from '../constants';

const stats = [
  { label: 'Problems Solved', value: '1300+', icon: Code2, color: 'text-yellow-500' },
  { label: 'Global Rank', value: 'Top 5%', icon: Trophy, color: 'text-indigo-500' },
  { label: 'Contest Rating', value: '1850+', icon: Zap, color: 'text-orange-500' },
  { label: 'Accuracy', value: '85%', icon: Target, color: 'text-emerald-500' },
];

export default function CodingProfile() {
  return (
    <section id="coding" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-indigo-500 uppercase tracking-[0.3em] mb-4"
          >
            Competitive Programming
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Coding Profile
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center group hover:border-indigo-500/30 transition-all"
            >
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 rounded-3xl bg-indigo-600/10 border border-indigo-600/20 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500">
              <img src="https://picsum.photos/seed/leetcode/200/200" alt="LeetCode" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Active on LeetCode</h4>
              <p className="text-gray-400">Consistently solving complex algorithmic challenges.</p>
            </div>
          </div>
          <a
            href={PERSON_DETAILS.leetcode}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
          >
            View LeetCode Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
