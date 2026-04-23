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
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="app">
      {/* ambient light */}
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
            I build clean, fast, and visually refined web applications with
            strong focus on UX and performance.
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <p>
            2.5+ years building scalable frontend systems and backend APIs.
          </p>
        </Section>

        <Section id="projects" title="Projects">
          <ProjectCard
            title="Design System Core"
            description="Reusable UI system with consistent spacing and motion rules."
          />
          <ProjectCard
            title="Realtime App"
            description="Live collaboration platform with instant sync architecture."
          />
          <ProjectCard
            title="Commerce Engine"
            description="Secure and scalable checkout and product system."
          />
        </Section>

        <Section id="contact" title="Contact">
          <p>Let’s build something meaningful.</p>
          <p className="email">yourname@example.com</p>
        </Section>
      </main>
    </div>
  );
}

export default App;