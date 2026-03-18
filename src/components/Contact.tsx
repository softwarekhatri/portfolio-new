import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MapPin,
  Code2,
  Calendar,
} from "lucide-react";
import { PERSON_DETAILS } from "../constants";

export default function Contact() {
  const [status, setStatus] = React.useState("");

  React.useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    try {
      const response = await fetch("https://formspree.io/f/xeolpgga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white/[0.02] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-[0.3em] mb-4">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Let's build something{" "}
              <span className="text-indigo-500">extraordinary</span> together.
            </h3>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              {/* I'm always open to discussing backend architecture, distributed
              systems, or potential collaborations. Feel free to reach out! */}
              Connect with me for AI-driven products, LLM integrations, and
              scalable backend architectures. Open to high-impact AI roles,
              consulting, mentoring, and meaningful collaborations in Generative
              AI.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">
                    Email Me
                  </div>
                  <a
                    href={`mailto:${PERSON_DETAILS.email}`}
                    className="text-lg md:text-xl font-bold text-white hover:text-indigo-400 transition-colors break-all"
                  >
                    {PERSON_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">
                    Location
                  </div>
                  <div className="text-xl font-bold text-white">
                    {PERSON_DETAILS.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { icon: Linkedin, href: PERSON_DETAILS.linkedin },
                {
                  icon: Calendar,
                  href: "https://calendly.com/softwarekhatri",
                },
                {
                  icon: Github,
                  href: PERSON_DETAILS.github,
                },
                { icon: Code2, href: PERSON_DETAILS.leetcode },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/50 transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="What should I call you?"
                    className="w-full px-4 md:px-6 py-4 bg-black/50 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Where can I reach you?"
                    className="w-full px-4 md:px-6 py-4 bg-black/50 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Summary of your message"
                  className="w-full px-4 md:px-6 py-4 bg-black/50 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Explain how we can collaborate or any questions you have"
                  className="w-full px-4 md:px-6 py-4 bg-black/50 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>
              <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 group cursor-pointer">
                Send Message{" "}
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
              {status && (
                <div className="mt-4 text-center text-sm font-semibold text-indigo-400">
                  {status}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
