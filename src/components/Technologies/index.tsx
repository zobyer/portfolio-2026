import {
  SiRuby,
  SiRubyonrails,
  SiPostgresql,
  SiRedis,
  SiSidekiq,
  SiRabbitmq,
  SiJest,
  SiTestinglibrary,
  SiRubygems,
  SiReact,
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiCss,
  SiTailwindcss,
  SiDatadog,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import './index.css';

const technologies = [
  // Backend
  { name: "Ruby", icon: SiRuby },
  { name: "Ruby on Rails", icon: SiRubyonrails },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: SiRedis },
  { name: "Sidekiq", icon: SiSidekiq },
  { name: "RabbitMQ", icon: SiRabbitmq },
  // Testing
  { name: "Jest", icon: SiJest },
  { name: "React Testing Library", icon: SiTestinglibrary },
  { name: "RSpec", icon: SiRubygems },
  { name: "Minitest", icon: SiRubygems },
  // Frontend
  { name: "React", icon: SiReact },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "CSS", icon: SiCss },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  // Cloud & Monitoring
  { name: "AWS", icon: FaAws, learning: true },
  { name: "Datadog", icon: SiDatadog },
];

export default function Technologies() {
  return (
    <div className="tech-grid">
      {technologies.map((tech, idx) => {
        const Icon = tech.icon;
        return (
          <div key={idx} className={`tech-item ${tech.learning ? 'learning' : ''}`}>
            {tech.learning && <span className="learning-badge">Learning</span>}
            <Icon className="tech-icon" />
            <span className="tech-name">{tech.name}</span>
          </div>
        );
      })}
    </div>
  );
}