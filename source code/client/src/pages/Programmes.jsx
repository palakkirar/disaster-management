import "../App.css";
import { Link } from "react-router-dom";

function Programmes() {
  return (
    <div className="programmes-page">

      {/* HERO SECTION */}
      <section className="programmes-hero">

        <div className="programme-label">
          DISASTER PREPAREDNESS PROGRAMMES
        </div>

        <h1>Awareness & Preparedness Programmes</h1>

        <p>
          Participate in disaster preparedness programmes and
          improve your awareness, preparedness and emergency
          response capabilities.
        </p>

      </section>


      {/* PROGRAMMES SECTION */}
      <section className="programmes-content">

        <h2>Available Programmes</h2>

        <p className="programmes-intro">
          Explore disaster management programmes conducted by
          various stakeholders to improve preparedness and
          community response.
        </p>


        <div className="programme-grid">


          {/* MOCK EXERCISE */}
          <div className="programme-card">

            <div className="programme-icon">
              🚨
            </div>

            <h3>Mock Exercise</h3>

            <p>
              Mock exercises simulate emergency situations and
              help participants understand how to respond
              safely during disasters.
            </p>

            <div className="programme-info">
              <span>📅 Emergency Preparedness</span>
              <span>📍 Community / Institution</span>
            </div>

            <div className="programme-buttons">

              <Link
                to="/programmes/mock-exercise"
                className="view-btn"
              >
                View Details
              </Link>

              <Link
                to="/register/mock-exercise"
                className="programme-btn"
              >
                Register
              </Link>

            </div>

          </div>


          {/* SCHOOL SAFETY PROGRAMME */}
          <div className="programme-card">

            <div className="programme-icon">
              🏫
            </div>

            <h3>School Safety Programme</h3>

            <p>
              School Safety Programmes help students and school
              communities understand disaster risks and improve
              emergency preparedness.
            </p>

            <div className="programme-info">
              <span>📚 School Awareness</span>
              <span>🛡️ Safety Preparedness</span>
            </div>

            <div className="programme-buttons">

              <Link
                to="/programmes/school-safety"
                className="view-btn"
              >
                View Details
              </Link>

              <Link
                to="/register/school-safety"
                className="programme-btn"
              >
                Register
              </Link>

            </div>

          </div>


          {/* COMMUNITY AWARENESS */}
          <div className="programme-card">

            <div className="programme-icon">
              👥
            </div>

            <h3>Community Awareness Programme</h3>

            <p>
              Community Awareness Programmes improve public
              awareness about disaster risks, preparedness
              measures and emergency response.
            </p>

            <div className="programme-info">
              <span>👥 Community Participation</span>
              <span>📢 Awareness</span>
            </div>

            <div className="programme-buttons">

              <Link
                to="/programmes/community-awareness"
                className="view-btn"
              >
                View Details
              </Link>

              <Link
                to="/register/community-awareness"
                className="programme-btn"
              >
                Register
              </Link>

            </div>

          </div>

        </div>


        {/* WHY PARTICIPATE */}
        <div className="programme-note">

          <h3>💡 Why Participate?</h3>

          <p>
            These programmes help individuals, students and
            communities understand disaster risks, improve
            preparedness and develop better emergency response
            capabilities.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Programmes;