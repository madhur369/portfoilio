import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClick() {
    setIsMenuOpen(false);
  }

  return (
    <div className={`header ${scrollPosition > 0 ? 'header-shadow' : ''}`}>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse${isMenuOpen ? " show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link className="nav-link" to="about" smooth={true} offset={-100} onClick={handleClick}>about me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="why" smooth={true} offset={-100} onClick={handleClick}>why me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact" smooth={true} offset={-100} onClick={handleClick}>contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
