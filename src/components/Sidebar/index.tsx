import { motion } from "framer-motion";
import { navLinks, socialLinks } from "../../constants/sidebar";
import "./index.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          A.H.M. Zobyer
        </motion.h1>
        <p>Software Engineer · Full‑Stack Developer</p>
        <nav>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={link.name === "Resume" ? "resume-link" : ""}
              >
                {link.name}
                {Icon && <Icon className="resume-icon" />}
              </a>
            );
          })}
        </nav>
      </div>
      <div className="sidebar-bottom">
        <div className="social-icons">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.ariaLabel}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}