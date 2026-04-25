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
            {/* Fullstack Developer @ WellDev */}
            <motion.div variants={itemVariants} className="exp-card">
              <div className="exp-header">
                <h3>Fullstack Developer @ WellDev Bangladesh LTD</h3>
                <div className="exp-date">Apr 2024 – Present</div>
              </div>
              <div className="exp-tech">
                <span className="tech-label">Tech:</span> Ruby on Rails, Sidekiq, PostgreSQL, JavaScript, React.js, AWS, Heroku, Datadog
              </div>
              <div className="exp-product">
                <span className="product-label">Product:</span> Pick-E-Bike
              </div>
              <ul>
                <li>Migrated PickBike to new environment, enabling product ownership transition via knowledge transfer with prior team</li>
                <li>Enabled new IoT bike integrations via third-party TCP service, handling protocol communication (speed setup/rental commands) while preserving legacy device support</li>
                <li>Ingested live telemetry from 500+ IoT bikes every 20s via long-polling background service, processing 1,500 updates/min</li>
                <li>Automated OneSignal user data sync via background workers: handled registrations/rentals/suspensions, optimized web server performance, and activated behavioral marketing</li>
                <li>Streamlined user onboarding: reduced registration steps by 60% (email/phone only for base features), deferring OCR/license checks until rental activation</li>
                <li>Led migration of Stripe integration to latest API version, resolving breaking changes across payment workflows without service disruption</li>
                <li>Strengthened test coverage around billing and checkout flows to guarantee stability during and after deployment</li>
              </ul>
            </motion.div>

            {/* Frontend Developer @ WellDev */}
            <motion.div variants={itemVariants} className="exp-card">
              <div className="exp-header">
                <h3>Frontend Developer @ WellDev Bangladesh LTD</h3>
                <div className="exp-date">Mar 2023 – Mar 2024</div>
              </div>
              <div className="exp-tech">
                <span className="tech-label">Tech:</span> JavaScript, React.js, HTML, SASS
              </div>
              <div className="exp-product">
                <span className="product-label">Product:</span> MSM (Competitive Marketplace)
              </div>
              <ul>
                <li>Developed a competitive marketplace enabling sellers to list products and buyers to place real-time bids</li>
                <li>Reduced API calls via RTK Query implementation for response caching</li>
                <li>Automated price discovery through auction-style sales mechanisms</li>
                <li>Developed shared React components maintaining consistent styling per design guidelines</li>
                <li>Included unit test coverage for UI components and state logic using React Testing Library (RTL), ensuring reliability of bidding features and reusable components</li>
              </ul>
            </motion.div>

            {/* Frontend Developer @ Appnap (Amarpet) */}
            <motion.div variants={itemVariants} className="exp-card">
              <div className="exp-header">
                <h3>Frontend Developer @ Appnap LTD</h3>
                <div className="exp-date">Nov 2022 – Feb 2023</div>
              </div>
              <div className="exp-tech">
                <span className="tech-label">Tech:</span> JavaScript, React.js, Next.js, HTML, CSS, Tailwind CSS
              </div>
              <div className="exp-product">
                <span className="product-label">Product:</span> Amarpet
              </div>
              <ul>
                <li>Designed reusable React components (product cards, modals, navigation) with Tailwind styling, reducing development time</li>
                <li>Wrote custom hooks for cart operations, authentication flows, and API error handling, decreasing code duplication</li>
                <li>Implemented hybrid rendering (SSR + CSR) to improve SEO for product pages while maintaining dynamic user experience</li>
              </ul>
            </motion.div>

            {/* Frontend Developer @ Appnap (Majhi) */}
            <motion.div variants={itemVariants} className="exp-card">
              <div className="exp-header">
                <h3>Frontend Developer @ Appnap LTD</h3>
                <div className="exp-date">Oct 2021 – Feb 2023</div>
              </div>
              <div className="exp-tech">
                <span className="tech-label">Tech:</span> JavaScript, Vue.js, Nuxt.js, HTML, CSS, Bootstrap
              </div>
              <div className="exp-product">
                <span className="product-label">Product:</span> Majhi
              </div>
              <ul>
                <li>Enabled retailers to generate custom digital shops with dynamic URLs (e.g., majhi.com/shop-name)</li>
                <li>Developed step-by-step ordering flow with real-time order tracking/cancellation per shop</li>
                <li>Translated design specs into responsive, consistent Vue components</li>
                <li>Implemented Fabric.js to enable canvas customization, enhancing UI flexibility for dynamic content manipulation</li>
              </ul>
            </motion.div>

            {/* Backend Developer @ Evident BD */}
            <motion.div variants={itemVariants} className="exp-card">
              <div className="exp-header">
                <h3>Backend Developer @ Evident BD LTD</h3>
                <div className="exp-date">Jun 2021 – Sep 2021</div>
              </div>
              <div className="exp-tech">
                <span className="tech-label">Tech:</span> Python, FastAPI, Celery, RabbitMQ
              </div>
              <div className="exp-product">
                <span className="product-label">Product:</span> Manage Your E-commerce
              </div>
              <ul>
                <li>Refactored asynchronous backend services using FastAPI, Celery, and RabbitMQ to handle high-volume I/O operations across Amazon, eBay, and WooCommerce integrations</li>
                <li>Designed message-driven architecture using RabbitMQ to ensure reliable communication between distributed services</li>
                <li>Implemented background job processing with Celery to handle heavy I/O tasks efficiently, improving system responsiveness</li>
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