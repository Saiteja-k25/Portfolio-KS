import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioContent } from '../data/content';
import './Navbar.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle full screen body scroll lock when menu opens
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCvClick = (e) => {
    e.preventDefault();
    if (portfolioContent.links.resume) {
      window.open(portfolioContent.links.resume, '_blank', 'noopener,noreferrer');
    }
    closeMenu();
  };

  return (
    <>
      <header className="navbar-header">
        <div className="navbar-bar">
          <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
            <span className="logo-swap-wrapper">
              <img
                src="/logo-kurapati-saiteja.png"
                alt="Kurapati Saiteja"
                className="logo-img logo-default"
              />
              <img
                src="/logo-s-mark.png"
                alt="S"
                className="logo-img logo-hover"
              />
            </span>
          </Link>

          {/* Circular Hamburger Toggle Button */}
          <button
            type="button"
            className={`hamburger-btn ${menuOpen ? 'is-active' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
          </button>
        </div>
      </header>

      {/* Bold Full-Screen Navigation Takeover Overlay */}
      <div className={`fullscreen-nav-overlay ${menuOpen ? 'is-open' : ''}`}>
        <div className="fullscreen-nav-bg" />

        <div className="fullscreen-nav-content">
          <nav className="fullscreen-menu">
            <Link
              to="/work"
              className="menu-item"
              onClick={closeMenu}
            >
              <span className="item-text">Work</span>
            </Link>

            <Link
              to="/about"
              className="menu-item"
              onClick={closeMenu}
            >
              <span className="item-text">About</span>
            </Link>

            <Link
              to="/contact"
              className="menu-item"
              onClick={closeMenu}
            >
              <span className="item-text">Contact</span>
            </Link>

            <a
              href={portfolioContent.links.resume}
              onClick={handleCvClick}
              className="menu-item menu-item-cv"
            >
              <span className="item-text">CV <span className="arrow">↗</span></span>
            </a>
          </nav>

          {/* Social Links Footer inside Nav */}
          <div className="fullscreen-nav-footer">
            <div className="social-links label">
              <a href={portfolioContent.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={portfolioContent.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={portfolioContent.links.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href={portfolioContent.links.linktree} target="_blank" rel="noopener noreferrer">
                Linktree
              </a>
            </div>
            <div className="location-info label">
              <svg className="location-pin-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {portfolioContent.personal.location}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
