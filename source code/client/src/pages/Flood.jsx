import "../App.css";

function Flood() {
  return (
    <div className="disaster-detail-page">

      <div className="detail-hero flood-hero">
        <span className="detail-icon">🌊</span>
        <h1>Flood</h1>
        <p>
          Learn how to understand, prepare for and stay safe during floods.
        </p>
      </div>

      <div className="detail-content">

        <section className="info-section">
          <h2>🌊 What is a Flood?</h2>
          <p>
            A flood occurs when water covers land that is normally dry.
            Floods may happen because of heavy rainfall, overflowing rivers,
            poor drainage, storm surges or dam failures.
          </p>
        </section>

        <section className="info-section">
          <h2>⚠️ Causes of Flood</h2>

          <div className="info-grid">
            <div className="info-card">
              <h3>🌧️ Heavy Rainfall</h3>
              <p>
                Continuous or intense rainfall can cause water levels to rise
                rapidly.
              </p>
            </div>

            <div className="info-card">
              <h3>🏞️ River Overflow</h3>
              <p>
                Rivers may overflow when their water level rises beyond
                their capacity.
              </p>
            </div>

            <div className="info-card">
              <h3>🏙️ Poor Drainage</h3>
              <p>
                Blocked or inadequate drainage systems can cause urban flooding.
              </p>
            </div>

            <div className="info-card">
              <h3>🌊 Storm Surge</h3>
              <p>
                Coastal storms can push seawater inland and cause flooding.
              </p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>🚨 Before a Flood</h2>

          <div className="safety-list">
            <p>✔️ Prepare an emergency kit.</p>
            <p>✔️ Keep important documents in a waterproof container.</p>
            <p>✔️ Follow official weather and flood warnings.</p>
            <p>✔️ Know the safest evacuation route.</p>
            <p>✔️ Keep emergency phone numbers easily accessible.</p>
          </div>
        </section>

        <section className="info-section">
          <h2>🛡️ During a Flood</h2>

          <div className="safety-list">
            <p>✔️ Move to higher ground if instructed.</p>
            <p>✔️ Avoid walking or driving through floodwater.</p>
            <p>✔️ Stay away from electrical wires and damaged areas.</p>
            <p>✔️ Follow instructions from local authorities.</p>
            <p>✔️ Keep listening to official emergency updates.</p>
          </div>
        </section>

        <section className="info-section">
          <h2>🏠 After a Flood</h2>

          <div className="safety-list">
            <p>✔️ Return home only when authorities say it is safe.</p>
            <p>✔️ Avoid damaged buildings and electrical equipment.</p>
            <p>✔️ Use clean and safe drinking water.</p>
            <p>✔️ Report damaged infrastructure to authorities.</p>
          </div>
        </section>

        <div className="emergency-box">
          <h2>🚨 Emergency Reminder</h2>
          <p>
            In an emergency in India, call <strong>112</strong> for
            emergency assistance.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Flood;