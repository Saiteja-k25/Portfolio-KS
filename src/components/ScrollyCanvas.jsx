import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { Navbar } from './Navbar';
import { StickyCanvas } from './canvas/StickyCanvas';
import { Overlay } from './sections/Overlay';
import { Preloader } from './Preloader';
import { Footer } from './Footer';

export const ScrollyCanvas = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize Lenis Smooth Scroll & calculate scroll progress
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / totalScrollable));
      setScrollProgress(progress);
    };

    lenis.on('scroll', handleScroll);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    handleScroll();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="scrolly-wrapper">
      {/* High-end Preloader Overlay */}
      <Preloader
        progress={loadProgress}
        isLoaded={isLoaded}
      />

      <Navbar />

      {/* 500vh sticky scroll container */}
      <div ref={containerRef} className="scrolly-scroll-container" style={{ height: '500vh', position: 'relative' }}>
        <StickyCanvas
          frameProgress={scrollProgress}
          onProgress={(ratio) => setLoadProgress(ratio)}
          onLoadComplete={() => setIsLoaded(true)}
        />
        <Overlay scrollProgress={scrollProgress} />
      </div>

      {/* Dennis Snellenberg Awwwards Footer */}
      <Footer />
    </div>
  );
};

export default ScrollyCanvas;
