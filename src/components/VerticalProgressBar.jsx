import React, { useState, useEffect } from "react";

const VerticalProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const currentScrollPosition = window.scrollY;
      const progress = (currentScrollPosition / totalScrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        width: "5px",
        backgroundColor: "lightgray",
        height: "100%",
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#008080",
          height: `${scrollProgress}%`,
        }}
      ></div>
    </div>
  );
};

export default VerticalProgressBar;
