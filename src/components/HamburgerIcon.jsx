import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";

const HamburgerIcon = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`hamburger-menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
      </div>
      {menuOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li>
              <Link
                to="about-section"
                smooth={true}
                duration={1000}
                onClick={() => setMenuOpen(false)}
                className="menu-link"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="experience-section"
                smooth={true}
                duration={1000}
                onClick={() => setMenuOpen(false)}
                className="menu-link"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects-section"
                smooth={true}
                duration={1000}
                onClick={() => setMenuOpen(false)}
                className="menu-link"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerIcon;
