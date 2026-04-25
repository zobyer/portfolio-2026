import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          A.H.M. Zobyer
        </motion.h1>
        <p>Software Engineer · Full‑Stack Developer</p>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="sidebar-bottom">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}
        </button>
      </div>
    </aside>
  );
}