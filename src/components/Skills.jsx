import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const rows = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript'],
    dir: 1,
  },
  {
    category: 'Animation & UX',
    skills: ['GSAP', 'ScrollTrigger', 'Framer Motion', 'Lenis', 'CSS Animations', 'Three.js'],
    dir: -1,
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Flask', 'FastAPI', 'REST APIs', 'WebSockets'],
    dir: 1,
  },
  {
    category: 'Database & Cloud',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'Cloudflare', 'Vercel', 'Netlify', 'Railway'],
    dir: -1,
  },
  {
    category: 'AI & ML',
    skills: ['scikit-learn', 'TensorFlow', 'CNN', 'Random Forest', 'Groq API', 'LLaMA', 'OpenAI'],
    dir: 1,
  },
];

function MarqueeRow({ skills, dir, speed = 35 }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;
    const tween = gsap.to(track, {
      x: dir > 0 ? -totalWidth : totalWidth,
      duration: speed,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => {
          const val = parseFloat(x);
          if (dir > 0) return val % -totalWidth;
          return ((val % totalWidth) + totalWidth) % totalWidth;
        }),
      },
    });
    return () => tween.kill();
  }, [dir, speed]);

  const doubled = [...skills, ...skills, ...skills];

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div ref={trackRef} style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap', willChange: 'transform' }}>
        {doubled.map((s, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: '2rem',
            padding: '0 2rem',
          }}>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 400,
              color: 'var(--black)',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
            }}>{s}</span>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--gray-3)', display: 'inline-block', flexShrink: 0,
            }} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-row-wrapper',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{
      background: 'var(--cream)', padding: '8rem 0', overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '0 2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem', marginBottom: '5rem',
      }}>
        <span className="section-label">Tech Stack</span>
        <span style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          fontSize: '0.9rem', color: 'var(--gray-2)',
        }}>What I build with</span>
      </div>

      {/* Marquee rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {rows.map((row, i) => (
          <div key={row.category} className="skill-row-wrapper"
            style={{
              borderTop: '1px solid var(--border)',
              borderBottom: i === rows.length - 1 ? '1px solid var(--border)' : 'none',
              padding: '1.5rem 0',
              display: 'grid',
              gridTemplateColumns: '10rem 1fr',
              alignItems: 'center',
              gap: '0',
              overflow: 'hidden',
            }}
          >
            {/* Category label */}
            <div style={{
              padding: '0 2.5rem',
              borderRight: '1px solid var(--border)',
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--gray-2)', writingMode: 'horizontal-tb',
              }}>{row.category}</span>
            </div>
            {/* Marquee */}
            <MarqueeRow skills={row.skills} dir={row.dir} speed={30 + i * 5} />
          </div>
        ))}
      </div>

      {/* Tools row — static, centered */}
      <div style={{
        padding: '3rem 2.5rem 0',
        display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center',
      }}>
        {['Git', 'GitHub', 'VS Code', 'Cursor', 'Figma', 'Postman', 'Vite'].map(t => (
          <span key={t} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '0.4rem 0.9rem',
            border: '1px solid var(--border)',
            color: 'var(--gray)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--black)'; e.target.style.color = 'var(--cream)'; e.target.style.borderColor = 'var(--black)'; }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--gray)'; e.target.style.borderColor = 'var(--border)'; }}
          >{t}</span>
        ))}
      </div>
    </section>
  );
}
