// src/components/Education/Education.tsx
import './index.css';  // optional – you can also keep styles in index.css

export default function Education() {
  return (
    <div className="edu-card">
      <div className="edu-header">
        <h3>Military Institute of Science & Technology (MIST)</h3>
        <div className="edu-date">2017 – 2021</div>
      </div>
      <p className="edu-degree">B.Sc. in Computer Science and Engineering</p>
      <p className="edu-cgpa">CGPA: 3.25 / 4.00</p>
      <div className="edu-achievement">
        <span className="achievement-badge">🏆 Key Achievement</span>
        <p>
          Developed a <strong>mess management system</strong> for the student dormitory at MIST, which was 
          later adopted and used daily by office staff to manage billing, meal tracking. 
          Received a <strong>$200 award</strong> for this software.
        </p>
        {/* NEW: Official University Announcement Link */}
        <a 
          href="https://mist.ac.bd/blog/cse/post/osmany_hall_mess_management_system-180" 
          target="_blank" 
          rel="noopener noreferrer"
          className="achievement-link"
        >
          🔗 Official University Announcement
        </a>
      </div>
    </div>
  );
}
