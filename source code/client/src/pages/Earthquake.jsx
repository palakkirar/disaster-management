import "../App.css";

function Earthquake() {
  return (
    <div className="disaster-detail-page">

      <div className="detail-hero earthquake-hero">
        <span className="detail-icon">🌍</span>

        <h1>Earthquake</h1>

        <p>
          Learn how to understand, prepare for and stay safe
          during an earthquake.
        </p>
      </div>


      <div className="detail-content">

        {/* WHAT IS AN EARTHQUAKE */}

        <section className="info-section">

          <h2>🌍 What is an Earthquake?</h2>

          <p>
            An earthquake is the sudden shaking of the ground
            caused by movement within the Earth's crust.
            Earthquakes can damage buildings, roads and other
            infrastructure.
          </p>

        </section>


        {/* CAUSES */}

        <section className="info-section">

          <h2>⚠️ Causes of Earthquake</h2>

          <div className="info-grid">

            <div className="info-card">
              <h3>🌎 Tectonic Movement</h3>

              <p>
                Movement of tectonic plates can release energy
                and cause the ground to shake.
              </p>
            </div>


            <div className="info-card">
              <h3>📍 Fault Movement</h3>

              <p>
                Sudden movement along geological faults can
                produce earthquakes.
              </p>
            </div>


            <div className="info-card">
              <h3>🌋 Volcanic Activity</h3>

              <p>
                Volcanic activity can sometimes cause
                earthquake-like ground shaking.
              </p>
            </div>


            <div className="info-card">
              <h3>🏗️ Human Activities</h3>

              <p>
                Certain large-scale human activities may
                sometimes contribute to ground vibrations.
              </p>
            </div>

          </div>

        </section>


        {/* BEFORE */}

        <section className="info-section">

          <h2>🚨 Before an Earthquake</h2>

          <div className="safety-list">

            <p>✔️ Prepare an emergency kit.</p>

            <p>
              ✔️ Identify safe places inside your building.
            </p>

            <p>
              ✔️ Secure heavy furniture and objects.
            </p>

            <p>
              ✔️ Keep important documents in a safe place.
            </p>

            <p>
              ✔️ Learn the emergency procedures for your area.
            </p>

          </div>

        </section>


        {/* DURING */}

        <section className="info-section">

          <h2>🛡️ During an Earthquake</h2>

          <div className="safety-list">

            <p>
              ✔️ Drop, cover and hold on.
            </p>

            <p>
              ✔️ Stay away from windows and glass.
            </p>

            <p>
              ✔️ Protect your head and neck.
            </p>

            <p>
              ✔️ Stay indoors until the shaking stops.
            </p>

            <p>
              ✔️ Follow official emergency instructions.
            </p>

          </div>

        </section>


        {/* AFTER */}

        <section className="info-section">

          <h2>🏠 After an Earthquake</h2>

          <div className="safety-list">

            <p>
              ✔️ Check yourself and others for injuries.
            </p>

            <p>
              ✔️ Stay away from damaged buildings.
            </p>

            <p>
              ✔️ Be careful around damaged electrical wires.
            </p>

            <p>
              ✔️ Follow information from local authorities.
            </p>

            <p>
              ✔️ Return to affected areas only when authorities
              say it is safe.
            </p>

          </div>

        </section>


        {/* EMERGENCY */}

        <div className="emergency-box">

          <h2>🚨 Emergency Reminder</h2>

          <p>
            In an emergency in India, call{" "}
            <strong>112</strong> for emergency assistance.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Earthquake;