import React from "react";
import Home from "./components/Home";
import AboutSection from "./components/About";

const App = () => {
  return (
    <div className="app-container">
      <div className="home-section">
        <Home />
      </div>
      <div className="about-section">
        <AboutSection />
      </div>
    </div>
  );
};
export default App;