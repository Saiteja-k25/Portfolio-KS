import React, { useState, useEffect } from 'react';
import { portfolioContent } from '../../data/content';
import { Navbar } from '../Navbar';
import './ContactPage.css';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    services: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTextareaInput = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.organization || !formData.services || !formData.message) {
      alert('Please fill out all mandatory fields (*)');
      return;
    }

    setSubmitting(true);

    try {
      // Send real email directly to kurapatisaitejas@gmail.com via FormSubmit token endpoint
      const response = await fetch(`https://formsubmit.co/ajax/2c55241845a8505a50bff101f23352ec`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Organization: formData.organization || 'N/A',
          Services: formData.services || 'N/A',
          Message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', organization: '', services: '', message: '' });
      } else {
        // Fallback to mailto if endpoint fails
        window.open(
          `mailto:${portfolioContent.links.email}?subject=${encodeURIComponent(`Project Inquiry from ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`,
          '_blank'
        );
        setSubmitted(true);
      }
    } catch (err) {
      // Fallback to mailto
      window.open(
        `mailto:${portfolioContent.links.email}?subject=${encodeURIComponent(`Project Inquiry from ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`,
        '_blank'
      );
      setSubmitted(true);
    } finally {
      setSubmitting(false);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="contact-page">
      <Navbar />

      <main className="contact-container">
        {/* Header Metadata */}
        <div className="contact-header-meta label">
          <span>CONTACT</span>
          <span>{portfolioContent.personal.location}</span>
        </div>

        {/* Top Title & Avatar Row */}
        <div className="contact-hero-row">
          <h1 className="contact-headline">
            Let's start a<br />
            project together
          </h1>

          <div className="contact-avatar-wrapper">
            <img
              src="/logo-s-mark.png"
              alt="S Logo"
              className="contact-avatar-img"
            />
            <span className="contact-arrow-icon">↘</span>
          </div>
        </div>

        {/* Main 2-Column Section: Form (Left) & Details (Right) */}
        <div className="contact-grid">
          {/* Left Column: 5-Part Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Field 01 */}
            <div className="form-field-row">
              <span className="field-num label">01</span>
              <div className="field-content">
                <label className="field-label">What's your name?</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="field-input"
                />
              </div>
            </div>

            {/* Field 02 */}
            <div className="form-field-row">
              <span className="field-num label">02</span>
              <div className="field-content">
                <label className="field-label">What's your email?</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Yourname@gmail.com *"
                  required
                  className="field-input"
                />
              </div>
            </div>

            {/* Field 03 */}
            <div className="form-field-row">
              <span className="field-num label">03</span>
              <div className="field-content">
                <label className="field-label">What's the name of your organization?</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your Organisation Name *"
                  required
                  className="field-input"
                />
              </div>
            </div>

            {/* Field 04 */}
            <div className="form-field-row">
              <span className="field-num label">04</span>
              <div className="field-content">
                <label className="field-label">What services are you looking for?</label>
                <input
                  type="text"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  placeholder="Web Design, Web Development ... *"
                  required
                  className="field-input"
                />
              </div>
            </div>

            {/* Field 05 */}
            <div className="form-field-row field-row-textarea">
              <span className="field-num label">05</span>
              <div className="field-content">
                <label className="field-label">Your message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onInput={handleTextareaInput}
                  placeholder="Hello Kurapati Can you help me with redesign of our UI ? *"
                  required
                  rows={1}
                  className="field-input field-textarea"
                />
              </div>
            </div>

            {/* Form Divider Bar & Circular "Send it!" Button */}
            <div className="send-action-bar">
              <div className="action-divider-line" />
              <button type="submit" disabled={submitting} className="circular-send-btn">
                <span>{submitting ? 'Sending...' : submitted ? 'Sent! ✓' : 'Send it!'}</span>
              </button>
            </div>
          </form>

          {/* Right Column: Contact Details, Business/Location, Socials */}
          <aside className="contact-details-col">
            {/* Contact Details */}
            <div className="details-group">
              <h3 className="details-title label">CONTACT DETAILS</h3>
              <a href={`mailto:${portfolioContent.links.email}`} className="details-link">
                {portfolioContent.links.email}
              </a>
              <a href={`tel:${portfolioContent.links.phone}`} className="details-link">
                {portfolioContent.links.phone}
              </a>
            </div>

            {/* Location Details */}
            <div className="details-group">
              <h3 className="details-title label">LOCATION DETAILS</h3>
              <p className="details-text">{portfolioContent.personal.location}</p>
            </div>

            {/* Social Links */}
            <div className="details-group">
              <h3 className="details-title label">SOCIALS</h3>
              <div className="socials-list">
                <a
                  href={portfolioContent.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  GitHub
                </a>
                <a
                  href={portfolioContent.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LinkedIn
                </a>
                <a
                  href={portfolioContent.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Instagram
                </a>
                <a
                  href={portfolioContent.links.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Linktree
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
