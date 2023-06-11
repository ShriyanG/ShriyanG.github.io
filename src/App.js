import React from "react";
import ParticleComponent from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import TestSection from "./components/TestSection";

const App = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      <ParticleComponent />
      <div style={{ position: "absolute", top: "100%", width: "100%" }}>
        <TestSection />
      </div>
    </div>
  );
};
export default App;
