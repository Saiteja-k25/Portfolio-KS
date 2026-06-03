import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);
  const [darkBg, setDarkBg] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1.6 }
    );
    const onScroll = () => {
      const darkSections = document.querySelectorAll('[data-dark]');
      let inDark = false;
      darkSections.forEach(s => {
        const r = s.getBoundingClientRect();
        if (r.top <= 56 && r.bottom >= 56) inDark = true;
      });
      setDarkBg(inDark);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Works', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  // Base colors
  const bg = darkBg ? '#f4f3ef' : '#0a0a0a';
  const text = darkBg ? '#0a0a0a' : '#f4f3ef';
  const border = darkBg ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.12)';

  return (
    <nav ref={navRef} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      boxSizing: 'border-box', width: '100%',
      padding: 'clamp(1rem, 4vw, 2.5rem)',
      height: 'clamp(56px, 12vh, 64px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: bg,
      borderBottom: `1px solid ${border}`,
      transition: 'background 0.4s ease, border-color 0.4s ease',
    }}>
      {/* Left: Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button data-hover
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none', border: 'none',
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 5vw, 1.8rem)',
            fontWeight: 700, color: text,
            letterSpacing: '-0.01em',
            transition: 'color 0.4s',
          }}
        >KS</button>
      </div>

      {/* Center: nav links (Desktop Only) */}
      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.15rem, 0.5vw, 0.25rem)' }}>
          {links.map((l) => (
            <button key={l.id} data-hover onClick={() => scrollTo(l.id)}
              style={{
                background: 'none', border: 'none',
                fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 1.2vw, 0.8rem)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: text, opacity: 0.5,
                padding: 'clamp(0.25rem, 0.5vw, 0.4rem) clamp(1rem, 1vw, 1.2rem)',
                transition: 'opacity 0.2s, color 0.4s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.5}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      {/* Right: resume */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <a href="https://drive.google.com/file/d/1Lu1Z23HrOVJxJ9omi9QX9Imjon_nxivb/view?usp=sharing" target="_blank" rel="noreferrer" data-hover
          style={{
            fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.95rem, 1.5vw, 1rem)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: 'clamp(0.5rem, 0.8vw, 0.6rem) clamp(1.5rem, 2vw, 1.8rem)',
            border: `1px solid ${border}`,
            color: text, opacity: 0.8,
            transition: 'all 0.25s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.style.background = text;
            e.currentTarget.style.color = bg;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = 0.8;
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = text;
          }}
        >CV ↗</a>
      </div>
    </nav>
  );
}