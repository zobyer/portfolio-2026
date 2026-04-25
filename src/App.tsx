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
      <button onClick={toggleTheme} className="theme-toggle-fixed">
        {theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}
      </button>

      <div className="app">
        <div className="cursor-light" style={{ left: mouse.x, top: mouse.y }} />
        <Sidebar />
        <main className="content">
          <Section id="about" title="About">
            <div className="about-content">
              <p>
  I'm a Full‑Stack Developer with 4+ years of experience building fast web apps and real‑time systems. My main tools are Ruby on Rails, React, and Vue, but I'm also comfortable on the backend — designing solid system architectures, improving database queries, and managing background jobs with Sidekiq or Celery to keep services running smoothly under moderate to heavy load.
</p>
<p>
  I really enjoy working at the intersection of product needs and clean engineering. At WellDev, I was part of the team that migrated Pick‑E‑Bike to a new environment, helping the company take full ownership of the product. I integrated new IoT bike models alongside older ones, processing an average of 2,000 telemetry updates per minute from the live fleet. I also automated OneSignal user sync to enable behavioral marketing — all while cutting user registration steps by 60%, so riders could start faster. I handled Stripe payment upgrades, tuned background workers, and wrote solid tests (RSpec, Minitest, RTL) as part of my daily routine.
</p>
<p>
  On the frontend, I've built accessible, responsive UIs for auction marketplaces, custom digital shop builders, and pet e‑commerce sites — using React, Next.js, Vue, and Nuxt to create fast, SEO‑friendly experiences. I like building reusable components and custom hooks that help the team move faster without cutting corners.
</p>
<p>
  I'm always learning and care about clean code, solving problems with others, and building systems that just work. When I'm not shipping features, I explore new tools, share knowledge with my team, or think about better ways to design cloud infrastructure and system architecture.
</p>
            </div>
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