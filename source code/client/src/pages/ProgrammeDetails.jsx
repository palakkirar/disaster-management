import "../App.css";
import { Link, useParams } from "react-router-dom";

function ProgrammeDetails() {
  const { programme } = useParams();

  const programmeData = {
    "mock-exercise": {
      icon: "🚨",
      title: "Mock Exercise",
      subtitle:
        "Practical disaster preparedness and emergency response exercise.",
      objective:
        "Mock exercises are designed to simulate emergency or disaster situations so that participants and concerned agencies can understand their roles and improve preparedness and response capabilities.",
      activities: [
        "Simulation of an emergency or disaster situation",
        "Practice of emergency response procedures",
        "Coordination among participating agencies and stakeholders",
        "Identification of gaps in preparedness and response",
        "Improvement of emergency communication and coordination",
      ],
      participants:
        "Students, community members, institutions, volunteers and other concerned stakeholders may participate depending on the programme.",
      benefits: [
        "Improves disaster preparedness",
        "Develops awareness about emergency response",
        "Helps identify preparedness gaps",
        "Improves coordination among stakeholders",
        "Provides practical exposure to emergency situations",
      ],
    },

    "school-safety": {
      icon: "🏫",
      title: "School Safety Programme",
      subtitle:
        "Building disaster awareness and preparedness among school communities.",
      objective:
        "The School Safety Programme focuses on improving disaster awareness, preparedness and safety practices among students, teachers and the school community.",
      activities: [
        "Disaster awareness sessions",
        "Discussion of emergency preparedness measures",
        "Understanding safe evacuation practices",
        "Awareness about emergency communication",
        "Participation in school-level preparedness activities",
      ],
      participants:
        "Students, teachers, school staff and other members of the school community can participate in the programme.",
      benefits: [
        "Improves disaster awareness among students",
        "Promotes a culture of preparedness",
        "Helps schools understand emergency procedures",
        "Encourages safe behaviour during emergencies",
        "Strengthens school-level preparedness",
      ],
    },

    "community-awareness": {
      icon: "👥",
      title: "Community Awareness Programme",
      subtitle:
        "Strengthening disaster awareness and preparedness at the community level.",
      objective:
        "Community Awareness Programmes aim to provide people with information about disaster risks, preparedness measures and appropriate emergency response.",
      activities: [
        "Community awareness sessions",
        "Information about disaster risks",
        "Discussion of preparedness measures",
        "Awareness about emergency communication",
        "Interaction with disaster management stakeholders",
      ],
      participants:
        "Community members, volunteers, local institutions and other concerned stakeholders can participate in the programme.",
      benefits: [
        "Improves community awareness",
        "Encourages preparedness before disasters",
        "Promotes community participation",
        "Improves understanding of emergency response",
        "Helps communities become better prepared",
      ],
    },
  };

  const data = programmeData[programme];

  if (!data) {
    return (
      <div className="programme-detail-page">
        <div className="detail-not-found">
          <h1>Programme Not Found</h1>

          <p>
            The requested programme information is not available.
          </p>

          <Link to="/programmes" className="programme-btn">
            Back to Programmes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="programme-detail-page">

      {/* HERO */}
      <section className="programme-detail-hero">

        <div className="programme-detail-icon">
          {data.icon}
        </div>

        <p className="detail-label">
          DISASTER PREPAREDNESS PROGRAMME
        </p>

        <h1>{data.title}</h1>

        <p>{data.subtitle}</p>

      </section>


      {/* CONTENT */}
      <section className="programme-detail-content">

        {/* OBJECTIVE */}
        <div className="detail-section">

          <h2>🎯 Programme Objective</h2>

          <p>{data.objective}</p>

        </div>


        {/* ACTIVITIES */}
        <div className="detail-section">

          <h2>📋 Programme Activities</h2>

          <div className="detail-list">

            {data.activities.map((activity, index) => (
              <div className="detail-list-item" key={index}>
                <span>✓</span>
                <p>{activity}</p>
              </div>
            ))}

          </div>

        </div>


        {/* PARTICIPANTS */}
        <div className="detail-section">

          <h2>👥 Who Can Participate?</h2>

          <p>{data.participants}</p>

        </div>


        {/* BENEFITS */}
        <div className="detail-section">

          <h2>🌟 Benefits</h2>

          <div className="benefits-grid">

            {data.benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <span>✓</span>
                <p>{benefit}</p>
              </div>
            ))}

          </div>

        </div>


        {/* IMPORTANT NOTE */}
        <div className="detail-note">

          <h3>⚠️ Important Information</h3>

          <p>
            Programme schedules, venues and participation requirements
            may vary depending on the organising authority or institution.
            Participants should follow the official information and
            instructions provided for the programme.
          </p>

        </div>


        {/* BUTTONS */}
        <div className="detail-actions">

          <Link
            to={`/register/${programme}`}
            className="programme-btn detail-register-btn"
          >
            Register Now
          </Link>

          <Link
            to="/programmes"
            className="view-btn"
          >
            ← Back to Programmes
          </Link>

        </div>

      </section>

    </div>
  );
}

export default ProgrammeDetails;