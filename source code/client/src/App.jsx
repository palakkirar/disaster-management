
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EarlyWarning from "./pages/EarlyWarning";
import PreviousDisasters from "./pages/PreviousDisasters";
import Login from "./pages/Login";
import Flood from "./pages/Flood";
import Earthquake from "./pages/Earthquake";
import Cyclone from "./pages/Cyclone";
import Fire from "./pages/Fire";
import Programmes from "./pages/Programmes";
import ProgrammeRegistration from "./pages/ProgrammeRegistration";
import ProgrammeDetails from "./pages/ProgrammeDetails";
import Authorities from "./pages/Authorities";
import ProgrammeSchedule from "./pages/ProgrammeSchedule";
// =========================================
// HOMEPAGE
// =========================================

function Home() {
  return (
    <div>
      {/* HEADER */}
      <header>
        <h1>DisasterReady</h1>
        <h2>
          Awareness and Preparedness Towards Disaster Management
        </h2>
      </header>

      {/* NAVIGATION */}
      <nav>
        <a href="#home">Home</a>
        <a href="#disasters">Disasters</a>
        <Link to="/programmes">Programmes</Link>
        <a href="#safety">Safety Guidelines</a>
        <a href="#contacts">Emergency Contacts</a>

        <Link to="/" className="login-nav-button">
          LOGOUT
        </Link>
        <Link to="/previous-disasters"> Previous Disasters</Link>
        <Link to="/early-warning">Early Warning</Link>
        <Link to="/authorities">Authorities</Link>
        <Link to="/programme-schedule">Programme Schedule</Link>
      </nav>

      {/* HERO SECTION */}
      <section id="home">
        <h2>Be Aware. Be Prepared. Be Safe!</h2>
        <p>
          Learn about disasters, understand safety measures
          and prepare yourself and your community for emergencies.
        </p>
        <a href="#disasters">Explore Disasters</a>
      </section>

      {/* DISASTER INFORMATION */}
      <section id="disasters" className="disasters">
        <h2>Disaster Information</h2>

        <p className="section-intro">
          Learn about different types of disasters and how to stay safe.
        </p>

        <div className="disaster-container">
          {/* FLOOD */}
          <div className="disaster-card">
            <div className="disaster-icon">🌊</div>
            <h3>Flood</h3>
            <p>
              Learn about flood causes, safety measures
              and evacuation procedures.
            </p>
            <Link to="/flood">View Safety Tips</Link>
          </div>

          {/* EARTHQUAKE */}
          <div className="disaster-card">
            <div className="disaster-icon">🌍</div>
            <h3>Earthquake</h3>
            <p>
              Understand earthquake risks and learn
              how to protect yourself.
            </p>
            <Link to="/earthquake">View Safety Tips</Link>
          </div>

          {/* CYCLONE */}
          <div className="disaster-card">
            <div className="disaster-icon">🌀</div>
            <h3>Cyclone</h3>
            <p>
              Learn about cyclone warnings, emergency
              preparation and safety.
            </p>
            <Link to="/cyclone">View Safety Tips</Link>
          </div>

          {/* FIRE */}
          <div className="disaster-card">
            <div className="disaster-icon">🔥</div>
            <h3>Fire</h3>
            <p>
              Understand fire prevention and emergency
              response measures.
            </p>
            <Link to="/fire">View Safety Tips</Link>
          </div>
        </div>
      </section>

      {/* SAFETY GUIDELINES */}
      <section id="safety" className="safety-section">
        <div className="section-heading">
          <span>SAFETY & PREPAREDNESS</span>

          <h2>Safety Guidelines</h2>

          <p>
            Follow these basic safety measures before, during and after
            a disaster. Always follow instructions issued by official
            authorities.
          </p>
        </div>

        <div className="safety-grid">
          {/* BEFORE A DISASTER */}
          <div className="safety-card">
            <div className="safety-icon">🧰</div>
            <h3>Before a Disaster</h3>

            <ul>
              <li>Prepare an emergency kit.</li>
              <li>Keep important documents safely stored.</li>
              <li>Know important emergency contact numbers.</li>
              <li>Identify safe areas and evacuation routes.</li>
              <li>Follow official warnings and advisories.</li>
            </ul>
          </div>

          {/* DURING A DISASTER */}
          <div className="safety-card">
            <div className="safety-icon">🛡️</div>
            <h3>During a Disaster</h3>

            <ul>
              <li>Stay calm and follow official instructions.</li>
              <li>Move to a safe location when advised.</li>
              <li>Avoid damaged buildings and hazardous areas.</li>
              <li>Keep communication devices available.</li>
              <li>Help people who need assistance when it is safe to do so.</li>
            </ul>
          </div>

          {/* AFTER A DISASTER */}
          <div className="safety-card">
            <div className="safety-icon">🏠</div>
            <h3>After a Disaster</h3>

            <ul>
              <li>Return to affected areas only when authorities say it is safe.</li>
              <li>Avoid damaged buildings and electrical hazards.</li>
              <li>Use safe drinking water and food.</li>
              <li>Report hazards to appropriate authorities.</li>
              <li>Continue following official updates.</li>
            </ul>
          </div>
        </div>

        {/* SAFETY REMINDER */}
        <div className="safety-reminder">
          <strong>⚠️ Important:</strong>{" "}
          In an emergency, follow instructions from local authorities
          and use official emergency services.
        </div>
      </section>

      {/* EMERGENCY CONTACTS - ONLY FOUR */}
      <section id="contacts" className="contacts-section">
        <div className="section-heading">
          <span>EMERGENCY SUPPORT</span>

          <h2>Emergency Contacts - India</h2>

          <p>
            Important emergency numbers for disaster and emergency situations.
          </p>
        </div>

        <div className="emergency-grid">
          {/* 112 - NATIONAL EMERGENCY */}
          <div className="emergency-card primary-emergency">
            <div className="emergency-icon">🚨</div>

            <div className="emergency-content">
              <h3>National Emergency</h3>
              <strong>112</strong>
              <p>Integrated emergency assistance.</p>
            </div>
          </div>

          {/* 101 - FIRE SERVICES */}
          <div className="emergency-card">
            <div className="emergency-icon">🔥</div>

            <div className="emergency-content">
              <h3>Fire Services</h3>
              <strong>101</strong>
              <p>Fire emergency assistance.</p>
            </div>
          </div>

          {/* 108 - AMBULANCE */}
          <div className="emergency-card">
            <div className="emergency-icon">🚑</div>

            <div className="emergency-content">
              <h3>Ambulance</h3>
              <strong>108</strong>
              <p>Medical emergency assistance.</p>
            </div>
          </div>

          {/* 1078 - DISASTER MANAGEMENT */}
          <div className="emergency-card">
            <div className="emergency-icon">🌐</div>

            <div className="emergency-content">
              <h3>Disaster Management</h3>
              <strong>1078</strong>
              <p>Disaster management assistance.</p>
            </div>
          </div>
        </div>

        {/* EMERGENCY REMINDER */}
        <div className="emergency-note">
          <h3>⚠️ Emergency Reminder</h3>

          <p>
            In an immediate emergency, call <strong>112</strong> or
            the appropriate official emergency service. Do not rely
            only on information displayed on this website.
          </p>
        </div>
      </section>

      </div>
  );
}

// =========================================
// MAIN APP AND ROUTES
// =========================================

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN - FIRST PAGE */}
        <Route path="/" element={<Login />} />

        <Route path="/previous-disasters"element={<PreviousDisasters />}/>

        {/* HOMEPAGE AFTER LOGIN */}
        <Route path="/home" element={<Home />} />

        {/* DISASTER DETAIL PAGES */}
        <Route path="/flood" element={<Flood />} />
        <Route path="/earthquake" element={<Earthquake />} />
        <Route path="/cyclone" element={<Cyclone />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/early-warning"element={<EarlyWarning />}/>
        <Route path="/authorities"element={<Authorities />}/>
        <Route path="/programme-schedule"element={<ProgrammeSchedule />}/>
        {/* PROGRAMMES */}
        <Route path="/programmes" element={<Programmes />} />

        {/* PROGRAMME DETAILS */}
        <Route
          path="/programmes/:programme"
          element={<ProgrammeDetails />}
        />

        {/* PROGRAMME REGISTRATION */}
        <Route
          path="/register/:programme"
          element={<ProgrammeRegistration />}
        />
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
