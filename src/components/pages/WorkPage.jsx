import React, { useState, useEffect } from 'react';
import { projectsData } from '../../data/projects';
import { portfolioContent } from '../../data/content';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import './WorkPage.css';

export const WorkPage = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Reset scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="work-page" onMouseMove={handleMouseMove}>
      <Navbar />

      <main className="work-content">
        {/* Header Metadata */}
        <section className="work-header-meta">
          <div className="meta-left label">WORKS</div>
          <div className="meta-center" />
          <div className="meta-right label" />
        </section>

        {/* Hero Title */}
        <section className="work-hero-section">
          <h1 className="work-main-title">
            <span className="serif-title">Creating something</span>
            <br />
            <span className="bold-title">that can be felt.</span>
          </h1>
        </section>

        {/* Table Column Headers (Image 2 style) */}
        <div className="work-table-header label">
          <div className="col-client">CLIENT / PROJECT</div>
          <div className="col-location">LOCATION</div>
          <div className="col-services">SERVICES & TECH</div>
          <div className="col-year">YEAR</div>
        </div>

        {/* Project List Rows */}
        <section className="work-list-section">
          {projectsData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row"
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Client & Title */}
              <div className="row-col col-client">
                <span className="row-num label">{project.id}</span>
                <h2 className="project-title">
                  {project.title}
                  {project.badge && (
                    <span className={`badge ${project.badge === 'LIVE' ? 'live-badge' : 'app-badge'}`}>
                      {project.badge}
                    </span>
                  )}
                </h2>
              </div>

              {/* Location */}
              <div className="row-col col-location label">
                {project.location}
              </div>

              {/* Services & Tech Pills */}
              <div className="row-col col-services">
                <p className="project-desc">{project.description}</p>
                <div className="tech-pills">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-pill label">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year & Link Action */}
              <div className="row-col col-year">
                <span className="year-label label">{project.year}</span>
                <span className="view-link label">View →</span>
              </div>
            </a>
          ))}
        </section>

        {/* Floating Hover Preview Card — shows project NAME + View button */}
        {activeProject && (
          <div
            className="floating-preview-card"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
            }}
          >
            <div className="preview-name-wrapper">
              <span className="preview-project-name">{activeProject.title}</span>
              <div className="preview-blue-btn">
                <span>View</span>
              </div>
            </div>
          </div>
        )}


        {/* More on GitHub Banner */}
        <div className="more-github-bar label">
          <span>MORE ON</span>
          <a
            href={portfolioContent.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GitHub ↗</span>
          </a>
        </div>

        {/* Integrated Dennis Snellenberg Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default WorkPage;
