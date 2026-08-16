import React, { useEffect, useState } from 'react';
import './Preloader.css';

export const Preloader = ({ progress, isLoaded, onComplete }) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Smooth steady counter interpolation from 0% to 100%
  useEffect(() => {
    const target = Math.min(100, Math.floor((progress || 0) * 100));

    const timer = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev < target) {
          return prev + 1;
        }

        if (prev >= 100 && (isLoaded || progress >= 0.99)) {
          clearInterval(timer);
          // Brief smooth delay before button appears
          setTimeout(() => setIsReady(true), 250);
        }
        return prev;
      });
    }, 28); // Deliberate smooth pacing

    return () => clearInterval(timer);
  }, [progress, isLoaded]);

  const handleEnter = () => {
    if (exiting) return;
    setExiting(true);
    setTimeout(() => {
      setHidden(true);
      if (onComplete) onComplete();
    }, 1000); // 1.0s ultra-smooth GPU curtain reveal
  };

  if (hidden) return null;

  return (
    <div className={`preloader-overlay ${exiting ? 'exiting' : ''}`}>
      <div className="preloader-hero-stage">
        {/* Large Standalone S-Logo Centerpiece */}
        <div className={`preloader-s-hero-wrapper ${exiting ? 'zoom-exit' : ''}`}>
          <img
            src="/logo-s-mark.png"
            alt="S Logo"
            className="preloader-s-hero-logo"
          />
        </div>

        {/* Below Logo: Loading Progress or UNFOLDING Button */}
        <div className="preloader-bottom-controls">
          {!isReady ? (
            <div className="preloader-progress-group">
              <span className="materializing-label label">Materializing the experience...</span>
              <span className="preloader-counter-text">{displayProgress}%</span>
              <div className="preloader-bar-track">
                <div
                  className="preloader-bar-fill"
                  style={{ width: `${displayProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <button
              type="button"
              className="preloader-unfolding-btn"
              onClick={handleEnter}
            >
              <span>UNFOLDING ↗</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
