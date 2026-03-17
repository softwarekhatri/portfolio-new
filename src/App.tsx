import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CodingProfile from "./components/CodingProfile";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background3D from "./components/Background3D";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        try {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        } catch (err) {
          console.error("Invalid selector:", targetId);
        }
      });
    });

    // GSAP reveal animations for sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  return (
    <div className="bg-black text-white selection:bg-indigo-500 selection:text-white">
      <Background3D />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <CodingProfile />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
