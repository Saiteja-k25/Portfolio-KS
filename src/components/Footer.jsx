import React from 'react';
import { portfolioContent } from '../data/content';
import './Footer.css';

// Crisp inline Brand SVG Icons for 100% Reliability
const GithubIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinktreeIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const MailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const WhatsappIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="snellenberg-footer" id="contact">
      <div className="footer-container">
        {/* Top Headline & Avatar */}
        <div className="footer-header">
          <div className="footer-headline-wrapper">
            <img
              src="/logo-s-mark.png"
              alt="KS Logo"
              className="footer-avatar"
            />
            <h2 className="footer-headline">Let’s work together</h2>
          </div>
        </div>

        {/* Action Row — Circular Button + Contact Pills */}
        <div className="footer-action-row">
          <div className="contact-pills">
            <a
              href={`mailto:${portfolioContent.links.email}`}
              className="contact-pill mail-pill"
            >
              <span className="pill-cover">
                <MailIcon size={20} />
                <span>Email</span>
              </span>
              <span className="pill-reveal">
                <MailIcon size={20} />
                <span>{portfolioContent.links.email}</span>
              </span>
            </a>

            <a
              href={portfolioContent.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill whatsapp-pill"
            >
              <span className="pill-cover">
                <WhatsappIcon size={20} />
                <span>WhatsApp</span>
              </span>
              <span className="pill-reveal">
                <WhatsappIcon size={20} />
                <span>{portfolioContent.links.phone}</span>
              </span>
            </a>
          </div>

          {/* Large Circular Dennis Snellenberg CTA Button */}
          <a
            href={`mailto:${portfolioContent.links.email}`}
            className="circular-get-in-touch"
          >
            <span>Get in touch</span>
          </a>
        </div>

        {/* Footer Bottom Bar — Edition + Social Icons */}
        <div className="footer-bottom-bar">
          <div className="edition-tag">
            <span className="edition-label label">VERSION</span>
            <span className="edition-value">2026 © Edition</span>
          </div>

          {/* Prominent Social SVG Icons */}
          <div className="social-icons-group">
            <a
              href={portfolioContent.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon size={22} />
              <span className="icon-label">GitHub</span>
            </a>

            <a
              href={portfolioContent.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon size={22} />
              <span className="icon-label">LinkedIn</span>
            </a>

            <a
              href={portfolioContent.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Instagram"
              title="Instagram"
            >
              <InstagramIcon size={22} />
              <span className="icon-label">Instagram</span>
            </a>

            <a
              href={portfolioContent.links.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Linktree"
              title="Linktree"
            >
              <LinktreeIcon size={22} />
              <span className="icon-label">Linktree</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
