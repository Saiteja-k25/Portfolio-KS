import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const traits = [
  {
    n: '01',
    title: 'AI-native, not AI-dependent',
    desc: 'I use Cursor, Anti-gravity, Claude, and Copilot daily — not as crutches, but as 10x amplifiers. The thinking stays mine. The output ships faster.',
  },
  {
    n: '02',
    title: 'Engineer who can design motion',
    desc: 'Most developers avoid animation. I\'ve shipped GSAP + ScrollTrigger + Framer Motion in production. That\'s a rare combination and clients notice.',
  },
  {
    n: '03',
    title: 'Real products, real users',
    desc: 'Swarala Thota processes live event bookings. Cresco Prime is a live trading dashboard. These aren\'t GitHub repos collecting any random things.',
  },
  {
    n: '04',
    title: 'Theory behind the tools',
    desc: 'A BTech in AI & ML means I understand what\'s happening under the hood — CNNs, gradient descent, embeddings — not just which API to call.',
  },
];

export default function Unique() {
  const sectionRef = useRef(null);
  const portalRef = useRef(null);
  const headRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo('.trait-card',
        { y: 35, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.traits-grid', start: 'top 80%' },
        }
      );
      gsap.fromTo(portalRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: portalRef.current, start: 'top 85%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: 'var(--cream)', padding: '8rem 2.5rem' }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid var(--border)',
        paddingBottom: '1.5rem', marginBottom: '5rem',
      }}>
        <span className="section-label">What makes me different</span>
        <span style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          fontSize: '0.9rem', color: 'var(--gray-2)',
        }}>Not just another graduate.</span>
      </div>

      {/* Intro headline */}
      <div ref={headRef} style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontWeight: 400,
          fontSize: 'clamp(2.8rem, 4.5vw, 4rem)',
          letterSpacing: '-0.03em', lineHeight: 1.05,
          maxWidth: '700px',
        }}>
          Four things that put me in a
          different category.
        </h2>
      </div>

      {/* Traits grid */}
      <div className="traits-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1px', background: 'var(--border)', marginBottom: '5rem',
      }}>
        {traits.map(t => (
          <div key={t.n} className="trait-card"
            style={{
              background: 'var(--cream)', padding: '2.75rem',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--cream-2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--cream)'}
            data-hover
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontWeight: 400,
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                letterSpacing: '-0.01em', lineHeight: 1.2,
                maxWidth: '80%',
              }}>{t.title}</h3>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                letterSpacing: '0.15em', color: 'var(--gray-3)',
                paddingTop: '0.2rem',
              }}>{t.n}</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300,
              fontSize: '0.88rem', color: 'var(--gray)',
              lineHeight: 1.8,
            }}>{t.desc}</p>
          </div>
        ))}
      </div>

      {/* Creator world portal */}
      <div ref={portalRef}
        style={{
          display: 'grid', gridTemplateColumns: '1fr auto',
          alignItems: 'center', gap: '3rem',
          padding: '3.5rem',
          border: '1px solid var(--border)',
          position: 'relative', overflow: 'hidden',
          transition: 'border-color 0.35s',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--black)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
      >
        <span style={{
          position: 'absolute', right: '-1rem', top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-serif)', fontWeight: 900,
          fontSize: 'clamp(4rem, 10vw, 9rem)',
          color: 'rgba(0,0,0,0.04)', letterSpacing: '-0.05em',
          userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap',
        }}>CREATOR</span>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '1.25rem' }}>
            Another world
          </span>
          <h3 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 400,
            fontSize: 'clamp(1.5rem, 3vw, 2.8rem)',
            letterSpacing: '-0.02em', lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            I also live<br /><em>behind a lens.</em>
          </h3>
          <p style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '0.9rem', color: 'var(--gray)',
            lineHeight: 1.8, maxWidth: '420px',
          }}>
            Mobile photographer. Reel creator. 1K+ followers and growing.
            Storytelling through aesthetics, travel, and visual moments —
            a completely different creative universe.
          </p>
        </div>

        <a href="https://www.instagram.com/k.s.t_2003__" target="_blank"
          rel="noopener noreferrer" data-hover
          style={{
            position: 'relative', zIndex: 1,
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '1rem 2rem', whiteSpace: 'nowrap',
            background: 'var(--black)', color: 'var(--cream)',
            transition: 'opacity 0.2s', flexShrink: 0,
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >Enter Creator World ↗</a>
      </div>
    </section>
  );
}
