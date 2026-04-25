import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { experiences } from "../../constants/experience";
import "./index.css";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {experiences.map((exp, idx) => (
        <motion.div key={idx} variants={itemVariants} className="exp-card">
          <div className="exp-header">
            <h3>{exp.role} @ {exp.company}</h3>
            <div className="exp-date">{exp.date}</div>
          </div>
          <div className="exp-tech">
            <span className="tech-label">Tech:</span> {exp.tech}
          </div>
          <div className="exp-product">
            <span className="product-label">Product:</span> {exp.product}
          </div>
          <ul>
            {exp.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}