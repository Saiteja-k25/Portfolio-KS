import React, { useEffect } from 'react';
import { portfolioContent } from '../../data/content';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import './AboutPage.css';

export const AboutPage = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <Navbar />

      <main className="about-content">
        {/* SECTION 1: HERO & EXPERIENCE (Image 1) */}
        <section className="about-section about-hero-section">
          <div className="section-meta label">
            <span>ABOUT</span>
            <span>{portfolioContent.personal.location}</span>
          </div>

          <div className="hero-grid">
            {/* Left Column Bio */}
            <div className="hero-bio">
              <h1 className="about-main-headline">
                <span className="serif-title">Creative by choice,</span>
                <br />
                <span className="bold-title">Curious by design.</span>
              </h1>

              <p className="bio-lead">
                BTech graduate in AI & ML from Anurag University, Hyderabad. Currently Jr. Web Developer at Matrix Missions — building responsive, performant interfaces that clients actually use.
              </p>

              <p className="bio-body">
                I work across the full stack — from Firebase backends and REST APIs to GSAP-animated frontends.
              </p>
            </div>

            {/* Right Column Experience Timeline */}
            <div className="hero-experience">
              <h2 className="exp-heading label">EXPERIENCE</h2>

              <div className="exp-list">
                {portfolioContent.experience.map((exp, idx) => (
                  <div key={idx} className="exp-item">
                    <div className="exp-header">
                      <h3 className="exp-role">
                        {exp.role}
                        {exp.badge && <span className="now-badge">{exp.badge}</span>}
                      </h3>
                      <span className="exp-period label">{exp.period}</span>
                    </div>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FOUR DIFFERENTIATORS (Image 2) */}
        <section className="about-section about-traits-section">
          <h2 className="traits-headline">
            Four things that put me in a different category.
          </h2>

          <div className="traits-grid">
            {portfolioContent.traits.map((trait) => (
              <div key={trait.id} className="trait-card">
                <div className="trait-num label">{trait.id}</div>
                <h3 className="trait-title">{trait.title}</h3>
                <p className="trait-desc">{trait.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: CREATOR WORLD / LENS (Image 3) */}
        <section className="about-section creator-world-section">
          <div className="creator-card">
            <div className="creator-watermark">CREATOR</div>

            <div className="creator-text-col">
              <div className="creator-tagline label">
                {portfolioContent.lens.tagline}
              </div>
              <h2 className="creator-headline">
                {portfolioContent.lens.headline}
              </h2>
              <p className="creator-desc">
                {portfolioContent.lens.description}
              </p>
            </div>

            <div className="creator-btn-col">
              <a
                href={portfolioContent.lens.link}
                target="_blank"
                rel="noopener noreferrer"
                className="creator-btn"
              >
                {portfolioContent.lens.buttonText}
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: DENNIS SNELLENBERG FOOTER */}
        <Footer />
      </main>
    </div>
  );
};

export default AboutPage;
