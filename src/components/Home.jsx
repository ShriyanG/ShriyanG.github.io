import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import backgroundImage from "./pictures/background.png";
import "../globals.css";
import Navbar from "./Navbar";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="particle-container">
      <Navbar></Navbar>
      <h1 className="title">Shriyan Gosavi</h1>
      <h1 className="position">Software Engineer</h1>
      <div className="button-container">
        <a
          href="https://www.linkedin.com/in/shriyan-gosavi-1968411a7/"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ShriyanG"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          GitHub
        </a>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            image: `url(${backgroundImage})`, // Use the imported image
            position: "50% 50%", // Adjust the position of the background image
            repeat: "no-repeat", // Set the repeat behavior of the background image
            size: "cover", // Adjust the size of the background image
          },
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            reduceDuplicates: true,
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Home;
