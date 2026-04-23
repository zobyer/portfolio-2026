import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Your Name
      </motion.h1>

      <p>Frontend Developer</p>

      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </aside>
  );
}