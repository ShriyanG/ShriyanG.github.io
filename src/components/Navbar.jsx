import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        {/* <li>
          <Link
            to="about-section"
            smooth={true}
            duration={1000}
            onClick={(event) => handleLinkClick("about-section", event)}
            className="navbar-link"
          >
            About
          </Link>
        </li> */}
        {/* <li>
          <Link
            to="experience-section"
            smooth={true}
            duration={1000}
            onClick={(event) => handleLinkClick("experience-section", event)}
            className="navbar-link"
          >
            Experience
          </Link>
        </li> */}
        {/* <li>
          <Link
            to="projects-section"
            smooth={true}
            duration={1000}
            onClick={(event) => handleLinkClick("projects-section", event)}
            className="navbar-link"
          >
            Projects
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
