// src/components/ResearchPaper/ResearchPaper.tsx
import './index.css';

export default function ResearchPaper() {
  return (
    <div className="paper-card">
      <div className="paper-header">
        <h3>Towards Developing an Automated Attendance Management System using Fingerprint Sensor</h3>
        <span className="paper-badge">IEEE Xplore</span>
      </div>
      <p className="paper-authors">
        <strong>Role:</strong> 4th Author (Team of 7)
      </p>
      <p className="paper-citation">
        N. I. Khan, S. N. Mustafina, F. F. Jhumu, <strong>A. H. M. Zobyer</strong>, M. H. Mahin, M. A. I. Tarek, R. Rahman, M. N. Islam,
        "Towards Developing an Automated Attendance Management System using Fingerprint Sensor," 
        <em> 2020 Emerging Technology in Computing, Communication and Electronics (ETCCE)</em>, 2020, pp. 1-5.
        <br />
        DOI:{" "}
        <a
          href="https://doi.org/10.1109/ETCCE51779.2020.9350882"
          target="_blank"
          rel="noopener noreferrer"
        >
          10.1109/ETCCE51779.2020.9350882
        </a>
      </p>
      <div className="paper-achievement">
        <span className="paper-badge-light">🏆 My Contribution</span>
        <ul>
          <li>Developed the embedded system integration between the fingerprint sensor and the microcontroller (Arduino).</li>
          <li>Designed the real-time data transmission protocol to send attendance logs to the cloud.</li>
          <li>Assisted in authoring the methodology and results sections of the paper.</li>
        </ul>
      </div>
    </div>
  );
}