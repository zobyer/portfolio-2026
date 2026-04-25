// App.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";

type MousePosition = {
  x: number;
  y: number;
};

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const projectVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function AppContent() {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
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

        <Section id="experience" title="Experience">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={itemVariants} className="exp-card">
              <h3>Fullstack Developer @ WellDev Bangladesh LTD</h3>
              <div className="exp-date">Apr 2024 – Present</div>
              <ul>
                <li>Migrated PickBike to new environment, enabling product ownership transition via knowledge transfer</li>
                <li>Enabled IoT bike integrations via third-party TCP service, handling protocol communication while preserving legacy device support</li>
                <li>Ingested live telemetry from 500+ IoT bikes every 20s via long-polling background service – 1,500 updates/min</li>
                <li>Automated OneSignal user data sync via background workers (registrations/rentals/suspensions) for behavioral marketing</li>
                <li>Streamlined user onboarding: reduced registration steps by 60% (email/phone only for base features), deferring OCR/license checks</li>
                <li>Led Stripe API migration to latest version without service disruption</li>
                <li>Strengthened test coverage around billing and checkout flows</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="exp-card">
              <h3>Frontend Developer @ WellDev Bangladesh LTD</h3>
              <div className="exp-date">Mar 2023 – Mar 2024</div>
              <ul>
                <li>Developed competitive marketplace for sellers to list products and buyers to place real-time bids</li>
                <li>Reduced API calls via RTK Query implementation for response caching</li>
                <li>Automated price discovery through auction-style sales mechanisms</li>
                <li>Built shared React components with consistent styling per design guidelines</li>
                <li>Added unit test coverage for UI components using React Testing Library</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="exp-card">
              <h3>Frontend Developer @ Appnap LTD</h3>
              <div className="exp-date">2022 – 2023</div>
              <ul>
                <li>Designed reusable React components (product cards, modals, navigation) with Tailwind, reducing dev time</li>
                <li>Wrote custom hooks for cart, authentication, and API error handling – decreased code duplication</li>
                <li>Implemented hybrid rendering (SSR + CSR) to improve SEO for product pages</li>
                <li>Enabled retailers to generate custom digital shops with dynamic URLs (Vue.js / Nuxt.js)</li>
                <li>Developed step-by-step ordering flow with real-time tracking/cancellation per shop</li>
                <li>Implemented Fabric.js for canvas customization, enhancing UI flexibility</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="exp-card">
              <h3>Backend Developer @ Evident BD LTD</h3>
              <div className="exp-date">Jun 2021 – Sep 2021</div>
              <ul>
                <li>Refactored async backend services using FastAPI, Celery, and RabbitMQ for high-volume I/O across Amazon, eBay, and WooCommerce</li>
                <li>Designed message-driven architecture with RabbitMQ for reliable distributed communication</li>
                <li>Implemented background job processing with Celery to handle heavy I/O tasks efficiently</li>
              </ul>
            </motion.div>
          </motion.div>
        </Section>

        <Section id="projects" title="Projects">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={projectVariants}>
              <ProjectCard
                title="Pick-E-Bike IoT Platform"
                description="IoT bike rental system with real-time telemetry ingestion (500+ bikes, 1,500 updates/min), Stripe integration, and automated user sync for behavioral marketing."
              />
            </motion.div>
            <motion.div variants={projectVariants}>
              <ProjectCard
                title="Competitive Marketplace (MSM)"
                description="Real-time bidding marketplace with RTK Query caching, auction-style price discovery, and shared component library with full test coverage."
              />
            </motion.div>
            <motion.div variants={projectVariants}>
              <ProjectCard
                title="Multi-Channel E‑commerce Sync"
                description="FastAPI + Celery + RabbitMQ backend that synchronizes inventory/orders across Amazon, eBay, and WooCommerce with message-driven architecture."
              />
            </motion.div>
          </motion.div>
        </Section>

        <Section id="contact" title="Contact">
          <p>Let's build something meaningful together.</p>
          <p className="email">zobyer.ahm@gmail.com</p>
          <p className="phone">📞 (+880) 1879022872</p>
          <div className="social-links">
            <a href="https://github.com/zobyer" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/a-h-m-zobyer" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}