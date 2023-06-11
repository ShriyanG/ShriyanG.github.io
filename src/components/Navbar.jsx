import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const scrollToSection = (section) => {
    scroll.scrollTo(section);
  };

const handleLinkClick = (section, event) => {
    event.preventDefault(); // Prevent the default link behavior
    scrollToSection(section);
  };

  return (
    <nav>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          <Link
            to="testSection"
            smooth={true}
            duration={1000}
            onClick={(event) => handleLinkClick("testSection", event)}
            style={{ color: "white" }}
          >
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;