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
                I’m a Full‑Stack Developer with 4+ years of experience crafting performant
                web applications and real‑time systems. My core stack revolves around
                Ruby on Rails, React, and Vue, but I’m equally at home on the backend—
                designing scalable architectures, optimizing database queries, and
                orchestrating background jobs with Sidekiq or Celery to keep services
                humming under heavy load.
              </p>
              <p>
                I thrive at the intersection of product thinking and engineering. At
                WellDev, I was a core member of the team that executed the technical
                migration of Pick‑E‑Bike, enabling the company to take full product
                ownership. I integrated new IoT bike models alongside legacy devices,
                ingested live telemetry from 500+ bikes every 20 seconds, and automated
                OneSignal user data sync to unlock behavioural marketing—all while slashing
                user registration steps by 60% so riders could get on the road faster.
                Stripe payment upgrades, background worker tuning, and rigorous test
                coverage (RSpec, Minitest, RTL) are part of my daily discipline.
              </p>
              <p>
                On the frontend, I’ve built responsive, accessible UIs for auction‑style
                marketplaces, custom digital shop builders, and pet e‑commerce platforms—
                using React, Next.js, Vue, and Nuxt to deliver fast, SEO‑friendly
                experiences. I enjoy creating shared component libraries and hooks that
                speed up development without sacrificing quality.
              </p>
              <p>
                I’m a continuous learner who values clean code, collaborative
                problem‑solving, and systems that just work. When I’m not shipping
                features, you’ll find me exploring new tools, contributing to internal
                knowledge‑sharing, or refining the developer experience for my team.
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