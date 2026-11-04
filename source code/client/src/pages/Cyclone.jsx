import "../App.css";

function Cyclone() {
  return (
    <div className="disaster-detail-page">

      <div className="detail-hero cyclone-hero">

        <span className="detail-icon">🌀</span>

        <h1>Cyclone</h1>

        <p>
          Learn how to understand, prepare for and stay safe
          during a cyclone.
        </p>

      </div>


      <div className="detail-content">

        {/* WHAT IS A CYCLONE */}

        <section className="info-section">

          <h2>🌀 What is a Cyclone?</h2>

          <p>
            A cyclone is a large rotating storm system that
            can bring strong winds, heavy rainfall and
            flooding. Cyclones can affect coastal and
            nearby areas.
          </p>

        </section>


        {/* CAUSES */}

        <section className="info-section">

          <h2>⚠️ Cyclone Characteristics</h2>

          <div className="info-grid">

            <div className="info-card">

              <h3>💨 Strong Winds</h3>

              <p>
                Cyclones can produce strong winds that may
                damage buildings and infrastructure.
              </p>

            </div>


            <div className="info-card">

              <h3>🌧️ Heavy Rainfall</h3>

              <p>
                Heavy rainfall can cause flooding and
                waterlogging in affected areas.
              </p>

            </div>


            <div className="info-card">

              <h3>🌊 Storm Surge</h3>

              <p>
                Coastal areas may experience rising
                seawater during severe cyclonic storms.
              </p>

            </div>


            <div className="info-card">

              <h3>🌪️ Severe Weather</h3>

              <p>
                Cyclones can create dangerous weather
                conditions over a large area.
              </p>

            </div>

          </div>

        </section>


        {/* BEFORE */}

        <section className="info-section">

          <h2>🚨 Before a Cyclone</h2>

          <div className="safety-list">

            <p>
              ✔️ Follow official cyclone warnings and alerts.
            </p>

            <p>
              ✔️ Prepare an emergency kit.
            </p>

            <p>
              ✔️ Secure loose objects around your home.
            </p>

            <p>
              ✔️ Keep important documents protected.
            </p>

            <p>
              ✔️ Know the nearest safe shelter or evacuation
              location.
            </p>

          </div>

        </section>


        {/* DURING */}

        <section className="info-section">

          <h2>🛡️ During a Cyclone</h2>

          <div className="safety-list">

            <p>
              ✔️ Stay indoors and away from windows.
            </p>

            <p>
              ✔️ Keep listening to official updates.
            </p>

            <p>
              ✔️ Follow evacuation instructions from
              authorities.
            </p>

            <p>
              ✔️ Avoid travelling unless necessary.
            </p>

            <p>
              ✔️ Keep your emergency kit accessible.
            </p>

          </div>

        </section>


        {/* AFTER */}

        <section className="info-section">

          <h2>🏠 After a Cyclone</h2>

          <div className="safety-list">

            <p>
              ✔️ Avoid fallen electrical wires.
            </p>

            <p>
              ✔️ Stay away from flooded areas.
            </p>

            <p>
              ✔️ Avoid damaged buildings.
            </p>

            <p>
              ✔️ Follow instructions from local authorities.
            </p>

            <p>
              ✔️ Return home only when authorities say it is
              safe.
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

export default Cyclone;