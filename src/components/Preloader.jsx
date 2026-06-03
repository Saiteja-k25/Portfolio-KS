import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [isMobile] = useState(window.innerWidth < 768);
  const containerRef = useRef(null);
  const kRef = useRef(null);
  const sRef = useRef(null);
  const flashRef = useRef(null);

  useEffect(() => {
    // Strict mobile safeguard: if width is < 768, do nothing and abort immediately
    if (isMobile) {
      setDone(true);
      return;
    }

    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        setDone(true);
      }
    });

    // Start with elements completely off-screen using viewport units
    gsap.set(kRef.current, { x: '-50vw', opacity: 0 });
    gsap.set(sRef.current, { x: '50vw', opacity: 0 });

    // Animate K and S sliding in to the center
    tl.to(kRef.current, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.inOut' }, 0)
      .to(sRef.current, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.inOut' }, 0)
      // Flash lightning effect on collision
      .to(flashRef.current, { opacity: 1, duration: 0.1, ease: 'power1.in' })
      .to(flashRef.current, { opacity: 0, duration: 0.4, ease: 'power1.out' })
      // Hold briefly, then fade out the entire preloader background
      .to(containerRef.current, { opacity: 0, duration: 0.8, ease: 'power2.inOut', delay: 0.3 });

    return () => tl.kill();
  }, [isMobile]);

  // If mobile or animation done, render absolutely nothing
  if (done || isMobile) return null;

  return (
    <div ref={containerRef} style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'var(--black)', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span ref={kRef} style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(5rem, 15vw, 10rem)',
          fontWeight: 700, color: '#f4f3ef', letterSpacing: '-0.05em',
          display: 'inline-block'
        }}>K</span>
        <span ref={sRef} style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(5rem, 15vw, 10rem)',
          fontWeight: 700, color: '#f4f3ef', letterSpacing: '-0.05em',
          display: 'inline-block'
        }}>S</span>
        
        {/* Flash thunder overlay */}
        <div ref={flashRef} style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150vw', height: '150vh',
          background: '#ffffff', opacity: 0,
          pointerEvents: 'none', mixBlendMode: 'overlay',
        }} />
      </div>
    </div>
  );
}
