
import "../App.css";
import { Link } from "react-router-dom";

function Authorities() {
  const authorities = [
    {
      name: "National Disaster Management Authority (NDMA)",
      description:
        "Provides national-level disaster management policies, guidelines and preparedness information.",
      website: "https://ndma.gov.in/",
    },
    {
      name: "National Disaster Response Force (NDRF)",
      description:
        "Specialised force for disaster response, rescue operations and emergency preparedness.",
      website: "https://ndrf.gov.in/",
    },
    {
      name: "India Meteorological Department (IMD)",
      description:
        "Provides weather forecasts, cyclone bulletins and meteorological warnings.",
      website: "https://mausam.imd.gov.in/",
    },
    {
      name: "Madhya Pradesh State Disaster Management Authority",
      description:
        "Refer to the official Madhya Pradesh government portal for state disaster management information and services.",
      website: "https://mp.gov.in/",
    },
  ];

  return (
    <div className="previous-disasters-page">
      <section className="programmes-hero">
        <div className="programme-label">
          OFFICIAL SUPPORT
        </div>

        <h1>Disaster Management Authorities</h1>

        <p>
          Find official sources for disaster preparedness,
          rescue information and weather warnings.
        </p>
      </section>

      <section className="programmes-content">
        <h2>Important Authorities</h2>

        <div className="programme-grid">
          {authorities.map((authority) => (
            <div className="programme-card" key={authority.name}>
              <div className="programme-icon">🏛️</div>

              <h3>{authority.name}</h3>

              <p>{authority.description}</p>

              <a
                href={authority.website}
                target="_blank"
                rel="noreferrer"
                className="view-btn"
              >
                Visit Official Website ↗
              </a>
            </div>
          ))}
        </div>

        <div className="programme-note">
          <h3>Emergency Helpline</h3>
          <p>
            For immediate emergencies in India, call 112.
            Follow instructions from official authorities.
          </p>
        </div>

        <Link to="/home" className="view-btn">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
}

export default Authorities;
