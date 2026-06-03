import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const tagRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const imgRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(imgRef.current,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 30 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1.2, ease: 'power4.out' }
      )
      .fromTo(nameRef.current.querySelectorAll('.word'),
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.1 }, '-=0.8'
      )
      .fromTo(tagRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5'
      )
      .fromTo(descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.4'
      )
      .fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3'
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }, '-=0.1'
      );

    gsap.to(scrollRef.current, {
      y: 6, repeat: -1, yoyo: true, duration: 1.2, ease: 'sine.inOut'
    });
  }, []);

  return (
    <section id="hero" ref={sectionRef} style={{
      minHeight: 'clamp(85vh, 100vh, 120vh)',
      padding: 'clamp(2.8rem, 4vw, 2.5rem)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      alignItems: 'center',
      gap: 'clamp(1.5rem, 3vw, 4rem)',
      position: 'relative',
      background: 'var(--cream)',
    }}>
      {/* Left: Text */}
      <div style={{ paddingTop: 'clamp(2.8rem, 4vw, 5rem)', minWidth: 0 }}>
        {/* Status */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          padding: '0.35rem 0.8rem',
          border: '1px solid var(--border)',
          borderRadius: '2px',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#22c55e',
            boxShadow: '0 0 6px #22c55e',
            animation: 'pulse 2s infinite',
          }} />
          <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
          <span className="section-label" style={{ fontSize: 'clamp(1.1rem, 1.2vw, 0.65rem)' }}>Available for work</span>
        </div>

        {/* Name */}
        <div ref={nameRef} style={{ marginBottom: 'clamp(1.1rem, 2vw, 1.25rem)', overflow: 'visible' }}>
          {['Kurapati', 'Saiteja'].map((word, i) => (
            <div key={i} style={{ overflow: 'hidden', lineHeight: 1, paddingRight: '0.15em', paddingBottom: '0.1em', margin: '-0.1em' }}>
              <span className="word" style={{
                display: 'block',
                fontFamily: 'var(--font-serif)',
                fontWeight: i === 0 ? 400 : 900,
                fontStyle: i === 0 ? 'italic' : 'normal',
                fontSize: 'clamp(2.8rem, 6vw, 6.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--black)',
              }}>{word}</span>
            </div>
          ))}
        </div>

        {/* Role tag */}
        <div ref={tagRef} style={{ marginBottom: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.1rem, 1vw, 0.72rem)',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--gray)',
          }}>Full-Stack Developer &amp; AI Enthusiast</span>
        </div>

        {/* Tagline — from GitHub */}
        <p ref={descRef} style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(1.1rem, 1.6vw, 1.25rem)',
          lineHeight: 1.65, color: 'var(--gray)',
          maxWidth: '420px', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          letterSpacing: '-0.01em',
        }}>
          "Code is like magic — if you know the spell,<br />you can build anything."
        </p>

        {/* CTA */}
        <div ref={ctaRef} style={{ display: 'flex', gap: 'clamp(1.1rem, 2vw, 1rem)', flexWrap: 'wrap' }}>
          <button data-hover
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.1rem, 1vw, 0.7rem)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: 'clamp(1.1rem, 1vw, 0.75rem) clamp(1.1rem, 2vw, 1.75rem)',
              background: 'var(--black)', color: 'var(--cream)',
              border: 'none', transition: 'opacity 0.2s', whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >See my work →</button>
          <a href="mailto:kurapatisaitejas@gmail.com" target="_blank" rel="noopener noreferrer" data-hover
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.1rem, 1vw, 0.7rem)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: 'clamp(1.1rem, 1vw, 0.75rem) clamp(1.1rem, 2vw, 1.75rem)',
              border: '1px solid var(--border)',
              color: 'var(--black)', transition: 'border-color 0.2s', whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--black)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >Get in touch</a>
        </div>
      </div>

      {/* Right: Photo */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 'clamp(2.8rem, 4vw, 5rem)', position: 'relative', minWidth: 0 }}>
        <div style={{
          position: 'absolute',
          top: '13%', right: '8%',
          width: '75%', height: '82%',
          border: '1px solid var(--black)',
          opacity: 0.12,
          pointerEvents: 'none',
          transform: 'translate(16px, 16px)',
        }} />
        <div ref={imgRef} style={{
          width: '72%',
          aspectRatio: '3/4',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
        }}>
          <img src="/profile.jpg" alt="Kurapati Saiteja"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 15%',
              filter: 'grayscale(100%) contrast(1.05)',
              display: 'block',
            }}
          />
        </div>
        <div ref={scrollRef} style={{
          position: 'absolute', right: '-1.5rem', bottom: '20%',
          writingMode: 'vertical-rl', textOrientation: 'mixed',
          transform: 'rotate(180deg)',
          fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--gray-3)',
        }}>Scroll Down</div>
      </div>
    </section>
  );
}
