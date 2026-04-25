import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ResearchPaper from "./components/ResearchPaper";
import Contact from "./components/Contact";

import { ThemeProvider, useTheme } from "./context/ThemeContext";

import "./index.css";

type MousePosition = { x: number; y: number };

// Explicitly type the variant objects
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AppContent() {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Fixed theme toggle button */}
      <button onClick={toggleTheme} className="theme-toggle-fixed">
        {theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}
      </button>

      <div className="app">
        <div className="cursor-light" style={{ left: mouse.x, top: mouse.y }} />
        <Sidebar />
        <main className="content">
          <Section id="about" title="About">
            <p>
              Full-Stack Developer with 4+ years of experience in Ruby on Rails, React, and Vue. 
              Focused on backend scalability, real-time IoT systems, and performance-driven frontends. 
              Reduced user onboarding friction by 60% and automated multi-service sync at scale.
            </p>
          </Section>

          <Section id="tech" title="Technologies">
            <Technologies />
          </Section>

          <Section id="experience" title="Experience">
            <Experience />
          </Section>

          <Section id="education" title="Education">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={itemVariants}>
                <Education />
              </motion.div>
            </motion.div>
          </Section>

          <Section id="research" title="Research & Publication">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={itemVariants}>
                <ResearchPaper />
              </motion.div>
            </motion.div>
          </Section>

          <Section id="contact" title="Contact">
            <Contact />
          </Section>
        </main>
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}