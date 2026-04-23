import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import "./index.css";

type MousePosition = {
  x: number;
  y: number;
};

function App() {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="app">
      {/* 🌟 Cursor spotlight */}
      <div
        className="cursor-light"
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      />

      <Sidebar />

      <main className="content">
        <Section id="about" title="About">
          <p>
            I’m a full-stack developer focused on building clean, scalable, and
            interactive web experiences with modern UI systems.
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <p>
            2.5+ years building production-grade applications using React,
            Node.js, TypeScript, and cloud platforms.
          </p>
        </Section>

        <Section id="projects" title="Projects">
          <ProjectCard
            title="Aurora Portfolio System"
            description="A modern UI system with ambient lighting, glass surfaces, and smooth motion design."
          />

          <ProjectCard
            title="Realtime Collaboration App"
            description="Live syncing task manager with scalable architecture."
          />

          <ProjectCard
            title="E-commerce Engine"
            description="Full-stack commerce system with secure checkout flow."
          />
        </Section>

        <Section id="contact" title="Contact">
          <p>Let’s build something meaningful together.</p>
          <p className="email">yourname@example.com</p>
        </Section>
      </main>
    </div>
  );
}

export default App;