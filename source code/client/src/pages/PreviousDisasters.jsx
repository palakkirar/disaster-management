
import "../App.css";
import { Link } from "react-router-dom";

function PreviousDisasters() {
  const disasters = [
    {
      name: "Gujarat Earthquake",
      year: "2001",
      location: "Gujarat, India",
      type: "Earthquake",
      impact:
        "Caused widespread damage to buildings and infrastructure.",
    },
    {
      name: "Indian Ocean Tsunami",
      year: "2004",
      location: "Indian coastal regions",
      type: "Tsunami",
      impact:
        "Affected coastal communities and damaged homes and infrastructure.",
    },
    {
      name: "Uttarakhand Floods",
      year: "2013",
      location: "Uttarakhand, India",
      type: "Flood and Landslide",
      impact:
        "Severe flooding and landslides affected settlements and transport.",
    },
    {
      name: "Kerala Floods",
      year: "2018",
      location: "Kerala, India",
      type: "Flood",
      impact:
        "Heavy rainfall and flooding affected many communities and homes.",
    },
  ];

  return (
    <div className="previous-disasters-page">
      <section className="programmes-hero">
        <div className="programme-label">
          DISASTER MANAGEMENT
        </div>

        <h1>Previous Disasters Data Sheet</h1>

        <p>
          Learn from past disasters and understand their
          effects on people, communities and infrastructure.
        </p>
      </section>

      <section className="programmes-content">
        <h2>Historical Disasters in India</h2>

        <div className="programme-grid">
          {disasters.map((disaster, index) => (
            <div className="programme-card" key={index}>
              <div className="programme-icon">📊</div>

              <h3>{disaster.name}</h3>

              <p><strong>Year:</strong> {disaster.year}</p>
              <p><strong>Location:</strong> {disaster.location}</p>
              <p><strong>Type:</strong> {disaster.type}</p>

              <p>
                <strong>Impact:</strong> {disaster.impact}
              </p>
            </div>
          ))}
        </div>

        <p className="programmes-intro">
          This is an introductory dataset. Verified sources
          should be consulted before adding exact casualty,
          damage or economic-loss figures.
        </p>

        <Link to="/home" className="view-btn">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
}

export default PreviousDisasters;
