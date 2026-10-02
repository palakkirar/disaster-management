
import "./App.css";

function App() {
  return (
    <div>
      <h1>DisasterReady website</h1>
      <h2>Awareness and Preparedness Towards Disaster Management</h2>

      <nav>
        <a href="#home">Home</a> |{" "}
        <a href="#disasters">Disasters</a> |{" "}
        <a href="#safety">Safety Guidelines</a> |{" "}
        <a href="#contacts">Emergency Contacts</a>
      </nav>

      <section id="home">
        <h2>Be Aware. Be Prepared. Be Safe.</h2>
        <p>
          Learn about disasters and prepare yourself
          and your community for emergencies.
        </p>
        <a href="#disasters">Explore Disasters</a>
      </section>

      
<section id="disasters" className="disasters">
  <h2>Disaster Information</h2>

  <p className="section-intro">
    Learn about different disasters and how to stay safe.
  </p>

  <div className="disaster-container">

    <div className="disaster-card">
      <div className="disaster-icon">🌊</div>
      <h3>Flood</h3>
      <p>
        Learn about flood causes, safety measures
        and evacuation procedures.
      </p>
      <a href="#safety">View Safety Tips</a>
    </div>

    <div className="disaster-card">
      <div className="disaster-icon">🌍</div>
      <h3>Earthquake</h3>
      <p>
        Understand earthquake risks and learn
        how to protect yourself.
      </p>
      <a href="#safety">View Safety Tips</a>
    </div>

    <div className="disaster-card">
      <div className="disaster-icon">🌀</div>
      <h3>Cyclone</h3>
      <p>
        Learn about cyclone warnings, emergency
        kits and evacuation safety.
      </p>
      <a href="#safety">View Safety Tips</a>
    </div>

    <div className="disaster-card">
      <div className="disaster-icon">🔥</div>
      <h3>Fire</h3>
      <p>
        Understand fire prevention and learn
        emergency response measures.
      </p>
      <a href="#safety">View Safety Tips</a>
    </div>

  </div>
</section>

      <footer>
        <p>Major Project BTCS707N | Group G-21</p>
      </footer>
    </div>
  );
}

export default App;