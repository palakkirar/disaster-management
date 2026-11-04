
import "../App.css";
import { Link } from "react-router-dom";

function ProgrammeSchedule() {
  const programmes = [
    {
      name: "Mock Exercise",
      organiser: "NDRF / SDRF / Concerned Authority",
      venue: "To be announced by the organiser",
      date: "To be announced",
      description:
        "A simulated emergency exercise to practise disaster response and coordination.",
    },
    {
      name: "School Safety Programme (SSP)",
      organiser: "School / Education Department / Concerned Authority",
      venue: "Participating school",
      date: "To be announced",
      description:
        "Activities to improve disaster awareness and emergency preparedness in schools.",
    },
    {
      name: "Community Awareness Programme (CAP)",
      organiser: "Local Administration / Concerned Authority",
      venue: "To be announced by the organiser",
      date: "To be announced",
      description:
        "Community sessions about disaster risks, preparedness and emergency response.",
    },
  ];

  return (
    <div className="previous-disasters-page">
      <section className="programmes-hero">
        <div className="programme-label">
          EVENTS AND ACTIVITIES
        </div>

        <h1>Programme Schedule</h1>

        <p>
          Check the schedule information for disaster preparedness
          programmes and follow the organiser's official updates.
        </p>
      </section>

      <section className="programmes-content">
        <h2>Upcoming Programmes</h2>

        <div className="programme-grid">
          {programmes.map((item) => (
            <div className="programme-card" key={item.name}>
              <div className="programme-icon">📅</div>

              <h3>{item.name}</h3>

              <p>
                <strong>Date:</strong> {item.date}
              </p>

              <p>
                <strong>Venue:</strong> {item.venue}
              </p>

              <p>
                <strong>Organiser:</strong> {item.organiser}
              </p>

              <p>{item.description}</p>

              <Link
                to={
                  item.name === "Mock Exercise"
                    ? "/register/mock-exercise"
                    : item.name === "School Safety Programme (SSP)"
                    ? "/register/school-safety"
                    : "/register/community-awareness"
                }
                className="programme-btn"
              >
                Register Interest
              </Link>
            </div>
          ))}
        </div>

        <div className="programme-note">
          <h3>Important Note</h3>
          <p>
            These entries are placeholders, not confirmed events.
            Dates, venues and organisers must be verified through
            official announcements before participation.
          </p>
        </div>

        <Link to="/programmes" className="view-btn">
          ← Back to Programmes
        </Link>
      </section>
    </div>
  );
}

export default ProgrammeSchedule;
