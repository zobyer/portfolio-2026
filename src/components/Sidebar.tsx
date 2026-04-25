import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Sidebar() {
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
        <div className="social-icons">
          <a
            href="https://github.com/zobyer"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/a-h-m-zobyer"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/your-profile"   // replace with your real Facebook URL
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </aside>
  );
}