import React from "react";
import Home from "./components/Home";
import AboutSection from "./components/About";

const App = () => {
  return (
    <div>
        <Home/>
      <div className = "About">
        <AboutSection/>
        <AboutSection/>
      </div>
    </div>
  );
};
export default App;