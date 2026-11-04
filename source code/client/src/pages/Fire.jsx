import "../App.css";

function Fire() {
  return (
    <div className="disaster-detail-page">

      <div className="detail-hero fire-hero">

        <span className="detail-icon">🔥</span>

        <h1>Fire</h1>

        <p>
          Learn how to prevent fires, respond safely and
          protect yourself during a fire emergency.
        </p>

      </div>


      <div className="detail-content">

        {/* WHAT IS FIRE */}

        <section className="info-section">

          <h2>🔥 What is a Fire Emergency?</h2>

          <p>
            A fire emergency occurs when fire spreads
            unexpectedly and creates a risk to people,
            buildings or property. Quick and safe action
            is important during a fire emergency.
          </p>

        </section>


        {/* COMMON CAUSES */}

        <section className="info-section">

          <h2>⚠️ Common Causes of Fire</h2>

          <div className="info-grid">

            <div className="info-card">

              <h3>⚡ Electrical Faults</h3>

              <p>
                Electrical faults, damaged wiring and
                overloaded sockets can create fire risks.
              </p>

            </div>


            <div className="info-card">

              <h3>🔥 Open Flames</h3>

              <p>
                Unattended flames and unsafe use of
                fire can cause accidental fires.
              </p>

            </div>


            <div className="info-card">

              <h3>💨 Gas Leaks</h3>

              <p>
                Gas leaks can create serious fire and
                safety hazards.
              </p>

            </div>


            <div className="info-card">

              <h3>🏠 Household Accidents</h3>

              <p>
                Unsafe use of appliances and other
                household equipment can increase fire risk.
              </p>

            </div>

          </div>

        </section>


        {/* BEFORE */}

        <section className="info-section">

          <h2>🚨 Before a Fire</h2>

          <div className="safety-list">

            <p>
              ✔️ Keep electrical connections and appliances
              in safe condition.
            </p>

            <p>
              ✔️ Keep fire exits clear.
            </p>

            <p>
              ✔️ Keep flammable materials away from flames.
            </p>

            <p>
              ✔️ Know the emergency exit routes.
            </p>

            <p>
              ✔️ Keep important emergency numbers accessible.
            </p>

          </div>

        </section>


        {/* DURING */}

        <section className="info-section">

          <h2>🛡️ During a Fire</h2>

          <div className="safety-list">

            <p>
              ✔️ Raise the alarm and leave the building
              safely.
            </p>

            <p>
              ✔️ Use stairs instead of elevators.
            </p>

            <p>
              ✔️ Stay away from smoke and fire.
            </p>

            <p>
              ✔️ Follow the designated evacuation route.
            </p>

            <p>
              ✔️ Call the appropriate emergency service.
            </p>

          </div>

        </section>


        {/* AFTER */}

        <section className="info-section">

          <h2>🏠 After a Fire</h2>

          <div className="safety-list">

            <p>
              ✔️ Do not enter a damaged building until it is
              declared safe.
            </p>

            <p>
              ✔️ Follow instructions from emergency authorities.
            </p>

            <p>
              ✔️ Stay away from damaged electrical equipment.
            </p>

            <p>
              ✔️ Report hazards to the appropriate authorities.
            </p>

            <p>
              ✔️ Seek assistance if you or others need help.
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

export default Fire;