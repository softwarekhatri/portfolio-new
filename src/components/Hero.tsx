import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, ChevronRight } from "lucide-react";
import { PERSON_DETAILS } from "../constants";

// const skills = ["Spring Boot", "Microservices", "Kafka", "Distributed Systems", "Java", "System Design"];
const skills = [
  "Large Language Models (LLMs)",
  "Generative AI",
  "AI Agents & Tooling",
  "Spring Boot",
  "Prompt Engineering",
  "LLM Evaluation & Benchmarking",
  "Java",
  "Microservices",
  "Apache Kafka",
  "System Design",
  "Docker",
  "Redis",
];

export default function Hero() {
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              Open to impactful AI opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Hi, I'm{" "}
              <span className="text-indigo-500">
                {PERSON_DETAILS.name.split(" ")[0]}
              </span>
              <br />
              <span className="text-gray-400">{PERSON_DETAILS.role}</span>
            </h1>

            <div className="h-12 flex items-center mb-8">
              <span className="text-xl md:text-2xl text-gray-300 mr-3">
                Expert in
              </span>
              <motion.span
                key={skillIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xl md:text-2xl font-mono text-indigo-400"
              >
                {skills[skillIndex]}
              </motion.span>
            </div>

            <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
              {PERSON_DETAILS.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
              >
                View Projects <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-[500px] h-[500px] mx-auto"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">
                  Years Experience
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-2xl font-bold text-indigo-400 mb-1">
                    1300+
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">
                    LeetCode Solved
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">
          Scroll to explore
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
      </motion.div>
    </section>
  );
}
