import "../App.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProgrammeRegistration() {
  const { programme } = useParams();

  const programmeNames = {
    "mock-exercise": "Mock Exercise",
    "school-safety": "School Safety Programme",
    "community-awareness": "Community Awareness Programme",
  };

  const selectedProgramme =
    programmeNames[programme] || "Disaster Management Programme";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    organisation: "",
    city: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  
function handleSubmit(event) {
  event.preventDefault();

  const registration = {
    ...formData,
    programme: selectedProgramme,
    registeredAt: new Date().toISOString(),
  };

  try {
    const existingRegistrations = JSON.parse(
      localStorage.getItem("disasterReadyRegistrations") || "[]"
    );

    existingRegistrations.push(registration);

    localStorage.setItem(
      "disasterReadyRegistrations",
      JSON.stringify(existingRegistrations)
    );

    setSubmitted(true);
  } catch (error) {
    alert("Registration could not be saved. Please try again.");
  }
}


  if (submitted) {
    return (
      <div className="registration-page">

        <div className="success-box">

          <div className="success-icon">✓</div>

          <h1>Registration Successful!</h1>

          <p>
            Thank you for registering for the{" "}
            <strong>{selectedProgramme}</strong>.
          </p>

          <p>
            Your registration details have been submitted successfully.
          </p>

          <Link to="/programmes" className="back-programmes-btn">
            Back to Programmes
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="registration-page">

      <div className="registration-container">

        <div className="registration-header">

          <span>DISASTERREADY</span>

          <h1>Programme Registration</h1>

          <p>
            Register for a disaster preparedness and awareness programme.
          </p>

        </div>


        <div className="selected-programme">

          <span>Selected Programme</span>

          <h2>{selectedProgramme}</h2>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

          </div>


          <div className="form-row">

            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>


            <div className="form-group">

              <label>Mobile Number</label>

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                required
              />

            </div>

          </div>


          <div className="form-row">

            <div className="form-group">

              <label>School / Organisation</label>

              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="Enter school or organisation"
                required
              />

            </div>


            <div className="form-group">

              <label>City</label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                required
              />

            </div>

          </div>


          <button type="submit" className="submit-registration">
            Submit Registration
          </button>

        </form>


        <Link to="/programmes" className="cancel-registration">
          ← Back to Programmes
        </Link>

      </div>

    </div>
  );
}

export default ProgrammeRegistration;