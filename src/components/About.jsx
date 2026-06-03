import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-left',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
      gsap.fromTo('.about-right',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
      gsap.fromTo('.stat-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.stats-grid', start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { n: '3+', label: 'Years of building' },
    { n: '3', label: 'Internships' },
    { n: '10+', label: 'Projects shipped' },
  ];

  return (
    <section id="about" ref={sectionRef} data-dark style={{
      background: 'var(--black-2)',
      padding: '8rem 2.5rem',
      color: 'var(--cream)',
    }}>
      {/* Header row */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', marginBottom: '5rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1.5rem',
      }}>
        <span className="section-label-dark">About</span>
        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.9rem', color: 'rgba(255,255,255,0.3)' }}>
          Hyderabad, India
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
        {/* Left */}
        <div className="about-left">
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 400,
            fontSize: 'clamp(2.8rem, 4vw, 3.8rem)', lineHeight: 1.1,
            letterSpacing: '-0.02em', marginBottom: '2rem', color: 'var(--cream)',
          }}>
            Builder by choice.<br />
            <em style={{ fontStyle: 'italic', opacity: 0.5 }}>Curious by nature.</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '1rem', lineHeight: 1.85,
            color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem',
          }}>
            BTech graduate in AI &amp; ML from Anurag University, Hyderabad. 
            Currently Jr. Web Developer at Matrix Missions — building responsive, 
            performant interfaces that clients actually use.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '1rem', lineHeight: 1.85,
            color: 'rgba(255,255,255,0.5)',
          }}>
            I work across the full stack — from Firebase backends and REST APIs 
            to GSAP-animated frontends.
          </p>
        </div>

        {/* Right: Experience + Stats */}
        <div className="about-right">
          {/* Experience */}
          <div style={{ marginBottom: '3.5rem' }}>
            {[
              { role: 'Jr. Web Developer', co: 'Matrix Missions', period: 'Apr 2026 – Present', current: true },
              { role: 'UI/UX Designer', co: 'Zaalima Development', period: 'Jan – Mar 2026', current: false },
              { role: 'Web Dev Intern', co: 'The Developers Arena', period: 'Aug – Oct 2025', current: false },
            ].map((e, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                padding: '1.25rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-sans)', fontWeight: 500,
                      fontSize: '0.95rem', color: 'var(--cream)',
                    }}>{e.role}</span>
                    {e.current && (
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        padding: '0.15rem 0.5rem',
                        border: '1px solid rgba(34,197,94,0.4)',
                        color: '#22c55e',
                      }}>Now</span>
                    )}
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                    color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em',
                  }}>{e.co}</span>
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                  color: 'rgba(255,255,255,0.25)', whiteSpace: 'nowrap', paddingTop: '0.1rem',
                }}>{e.period}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {stats.map(s => (
              <div key={s.n} className="stat-item" style={{
                background: 'var(--black-2)', padding: '1.75rem 1.5rem',
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)', fontWeight: 700,
                  fontSize: '2.4rem', color: 'var(--cream)',
                  lineHeight: 1, marginBottom: '0.4rem',
                }}>{s.n}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                  color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
