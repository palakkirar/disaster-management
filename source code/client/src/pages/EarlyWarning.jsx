
import "../App.css";
import { Link } from "react-router-dom";

function EarlyWarning() {
  const warnings = [
    {
      icon: "🌊",
      title: "Flood Warning",
      level: "Flood Risk",
      advice:
        "Follow official flood alerts. Move to higher ground when advised and avoid walking or driving through floodwater.",
    },
    {
      icon: "🌍",
      title: "Earthquake Safety",
      level: "Earthquake Risk",
      advice:
        "Earthquakes can occur without advance warning. Secure heavy objects and remember: Drop, Cover and Hold On during shaking.",
    },
    {
      icon: "🌀",
      title: "Cyclone Warning",
      level: "Cyclone Risk",
      advice:
        "Monitor official weather bulletins. Follow evacuation instructions and stay indoors in a safe location when advised.",
    },
    {
      icon: "🔥",
      title: "Fire Alert",
      level: "Fire Emergency",
      advice:
        "There is no single warning system for every fire. Follow local fire alerts, evacuate safely and call emergency services when needed.",
    },
  ];

  return (
    <div className="previous-disasters-page">
      <section className="programmes-hero">
        <div className="programme-label">
          DISASTER AWARENESS
        </div>

        <h1>Early Warning Information</h1>

        <p>
          Understand disaster risks, follow official alerts
          and take safety precautions.
        </p>
      </section>

      <section className="programmes-content">
        <h2>Disaster Warnings and Safety Advice</h2>

        <div className="programme-grid">
          {warnings.map((warning) => (
            <div className="programme-card" key={warning.title}>
              <div className="programme-icon">
                {warning.icon}
              </div>

              <h3>{warning.title}</h3>

              <p>
                <strong>Risk:</strong> {warning.level}
              </p>

              <p>{warning.advice}</p>
            </div>
          ))}
        </div>

        <div className="programme-note">
          <h3>Important Safety Information</h3>
          <p>
            This page provides general safety advice. It does
            not display live warnings. Check official alerts
            from the India Meteorological Department (IMD),
            National Disaster Management Authority (NDMA)
            and relevant local authorities.
          </p>

          <p>
            <a
              href="https://mausam.imd.gov.in/"
              target="_blank"
              rel="noreferrer"
            >
              India Meteorological Department (IMD)
            </a>
          </p>

          <p>
            <a
              href="https://ndma.gov.in/"
              target="_blank"
              rel="noreferrer"
            >
              National Disaster Management Authority (NDMA)
            </a>
          </p>
        </div>

        <Link to="/home" className="view-btn">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
}

export default EarlyWarning;
