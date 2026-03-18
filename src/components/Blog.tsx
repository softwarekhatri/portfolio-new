import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BLOGS } from "../constants";

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-indigo-500 uppercase tracking-[0.3em] mb-4"
            >
              Insights
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Latest Articles
            </motion.h3>
          </div>
          <motion.a
            href="https://medium.com/@ankitkhatriofficial"
            target="_blank"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-2 transition-colors"
          >
            View all articles <ArrowUpRight size={20} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {BLOGS.map((blog, idx) => (
            <motion.a
              key={blog.title}
              href={blog.link}
              target="_blank"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 text-gray-500 text-sm mb-6">
                <Calendar size={14} />
                <span>{blog.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span className="text-indigo-400 font-medium">
                  Backend Engineering
                </span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                {blog.title}
              </h4>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {blog.excerpt}
              </p>
              <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                Read Article{" "}
                <ArrowUpRight size={18} className="text-indigo-500" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
