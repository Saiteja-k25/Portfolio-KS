import React, { useRef } from 'react';
import { portfolioContent } from '../../data/content';
import './Overlay.css';

export const Overlay = ({ scrollProgress }) => {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);
  const p4Ref = useRef(null);

  // Non-overlapping opacity calculation
  const calculateOpacity = (progress, start, peakStart, peakEnd, end) => {
    if (progress < start || progress > end) return 0;
    if (progress >= peakStart && progress <= peakEnd) return 1;
    if (progress < peakStart) {
      return (progress - start) / (peakStart - start);
    }
    return 1 - (progress - peakEnd) / (end - peakEnd);
  };

  // Strictly partitioned phase intervals to eliminate double-text overlap
  const op1 = calculateOpacity(scrollProgress, 0.0, 0.0, 0.14, 0.22);
  const op2 = calculateOpacity(scrollProgress, 0.26, 0.32, 0.42, 0.48);
  const op3 = calculateOpacity(scrollProgress, 0.52, 0.58, 0.68, 0.74);
  const op4 = calculateOpacity(scrollProgress, 0.78, 0.84, 1.0, 1.0);

  // Subtle Y translation for smooth entrance/exit
  const trans1 = scrollProgress * -100;
  const trans2 = (scrollProgress - 0.35) * -100;
  const trans3 = (scrollProgress - 0.60) * -100;
  const trans4 = (scrollProgress - 0.85) * -60;

  return (
    <div className="overlay-wrapper">
      {/* PHASE 1: HERO (Status badge removed per feedback) */}
      <div
        ref={p1Ref}
        className="phase-container phase-1"
        style={{
          opacity: op1,
          transform: `translate3d(-50%, ${trans1}px, 0)`,
          pointerEvents: op1 > 0.5 ? 'auto' : 'none',
        }}
      >
        <h1 className="hero-title">
          <span className="first-name">{portfolioContent.personal.firstName}</span>
          <span className="last-name">{portfolioContent.personal.lastName}</span>
        </h1>
        <p className="hero-subtitle">{portfolioContent.personal.title}</p>
      </div>

      {/* PHASE 2: STATEMENT LEFT (Small label removed per feedback) */}
      <div
        ref={p2Ref}
        className="phase-container phase-2"
        style={{
          opacity: op2,
          transform: `translate3d(-50%, ${trans2}px, 0)`,
          pointerEvents: op2 > 0.5 ? 'auto' : 'none',
        }}
      >
        <div className="statement-box left-aligned">
          <h2 className="statement-title">I build digital experiences.</h2>
          <p className="statement-quote">"{portfolioContent.personal.quote}"</p>
        </div>
      </div>

      {/* PHASE 3: STATEMENT RIGHT (Small label removed per feedback) */}
      <div
        ref={p3Ref}
        className="phase-container phase-3"
        style={{
          opacity: op3,
          transform: `translate3d(-50%, ${trans3}px, 0)`,
          pointerEvents: op3 > 0.5 ? 'auto' : 'none',
        }}
      >
        <div className="statement-box right-aligned">
          <h2 className="statement-title">{portfolioContent.personal.shortTagline}</h2>

          <div className="stats-grid">
            {portfolioContent.stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PHASE 4: TRANSITION TO FOOTER */}
      <div
        ref={p4Ref}
        className="phase-container phase-4"
        style={{
          opacity: op4,
          transform: `translate3d(-50%, ${trans4}px, 0)`,
          pointerEvents: op4 > 0.5 ? 'auto' : 'none',
        }}
      >
        <div className="cta-box">
          <h2 className="cta-headline">
            <span className="serif-part">Got a project</span>
            <br />
            <span className="italic-part">in mind?</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
