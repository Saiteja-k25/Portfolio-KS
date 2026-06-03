import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    index: '01',
    name: 'Swarala Thota',
    type: 'Event Booking Platform',
    year: '2025',
    description: 'Full event booking platform for Paatashala music brand, Hyderabad. Firebase Auth, Cashfree payments, Cloudflare Workers/D1/R2 backend.',
    stack: ['HTML', 'CSS', 'JS', 'Firebase', 'Cashfree', 'Cloudflare'],
    url: 'https://swaralathota.com',
    live: true,
    color: '#1a1a1a',
  },
  {
    index: '02',
    name: 'Cresco Prime',
    type: 'Corporate Trading Platform',
    year: '2025',
    description: 'Prop trading platform with GSAP animations, Framer Motion, Lenis smooth scroll, Firebase Auth and Recharts dashboards.',
    stack: ['React', 'Vite', 'GSAP', 'Framer Motion', 'Firebase'],
    url: 'https://cresco-prime.vercel.app',
    live: true,
    color: '#0d0d0d',
  },
  {
    index: '03',
    name: 'OroGlee Dental',
    type: 'MERN Booking App',
    year: '2024',
    description: 'Full-stack MERN dental appointment booking app with patient dashboard and real-time appointment management.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Netlify'],
    url: 'https://github.com/Saiteja-k25/oroglee-dental-app',
    live: false,
    color: '#111111',
  },
  {
    index: '04',
    name: 'Assignment Summarizer',
    type: 'AI-Powered Tool',
    year: '2024',
    description: 'React app powered by Groq API and LLaMA for intelligent assignment summarization. Deployed on Netlify + Railway.',
    stack: ['React', 'Groq API', 'LLaMA', 'Netlify', 'Railway'],
    url: 'https://github.com/Saiteja-k25/assignment-summarizer',
    live: false,
    color: '#161616',
  },
];

function ProjectRow({ project, index: idx }) {
  const rowRef = useRef(null);
  const previewRef = useRef(null);
  const nameRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const row = rowRef.current;
    const preview = previewRef.current;

    const onMove = (e) => {
      const rect = row.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(preview, {
        x: x - 120, y: y - 80,
        duration: 0.4, ease: 'power2.out',
      });
    };

    row.addEventListener('mousemove', onMove);
    return () => row.removeEventListener('mousemove', onMove);
  }, []);

  const handleEnter = () => {
    setHovered(true);
    gsap.to(previewRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' });
    gsap.to(nameRef.current, { x: 12, duration: 0.3, ease: 'power2.out' });
  };

  const handleLeave = () => {
    setHovered(false);
    gsap.to(previewRef.current, { opacity: 0, scale: 0.92, duration: 0.3, ease: 'power2.in' });
    gsap.to(nameRef.current, { x: 0, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer"
      ref={rowRef}
      className="project-row"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        display: 'block',
        padding: '2rem 2.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        textDecoration: 'none', color: 'var(--cream)',
        cursor: 'none', position: 'relative', overflow: 'hidden',
        transition: 'background 0.3s',
        background: hovered ? 'rgba(255,255,255,0.03)' : 'transparent',
      }}
    >
      {/* Hover preview box */}
      <div ref={previewRef} style={{
        position: 'absolute', top: 0, left: 0,
        width: '240px', height: '160px',
        background: project.color,
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', zIndex: 10,
        opacity: 0, scale: 0.92,
        transform: 'translate(0,0)',
      }}>
        <span style={{
          fontFamily: 'var(--font-serif)', fontSize: '1rem',
          color: 'rgba(255,255,255,0.4)', fontStyle: 'italic',
          letterSpacing: '-0.01em',
        }}>{project.type}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'clamp(2.8rem, 6vw, 3rem) 1fr auto', gap: 'clamp(1.1rem, 2vw, 1.5rem)', alignItems: 'center' }}>
        {/* Index */}
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 1vw, 0.62rem)',
          color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em',
        }}>{project.index}</span>

        {/* Name + meta */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1.1rem, 1vw, 1rem)', marginBottom: 'clamp(1.1rem, 0.7vw, 0.5rem)', flexWrap: 'wrap' }}>
            <h3 ref={nameRef} style={{
              fontFamily: 'var(--font-serif)', fontWeight: 400,
              fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)',
              letterSpacing: '-0.02em', transition: 'transform 0.3s',
              display: 'inline-block',
            }}>{project.name}</h3>
            {project.live && (
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.9rem, 0.8vw, 0.55rem)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: 'clamp(0.1rem, 0.2vw, 0.18rem) clamp(1.1rem, 0.5vw, 0.5rem)',
                border: '1px solid rgba(34,197,94,0.35)',
                color: '#22c55e',
              }}>Live</span>
            )}
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 'clamp(0.9rem, 1.3vw, 0.82rem)',
            color: 'rgba(255,255,255,0.35)', lineHeight: 1.65,
            maxWidth: '560px', marginBottom: 'clamp(1.1rem, 1vw, 0.75rem)',
          }}>{project.description}</p>
          <div style={{ display: 'flex', gap: 'clamp(1.1rem, 0.5vw, 0.4rem)', flexWrap: 'wrap' }}>
            {project.stack.map(s => (
              <span key={s} style={{
                fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 0.9vw, 0.58rem)',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.2)',
                padding: 'clamp(0.12rem, 0.2vw, 0.18rem) clamp(1.1rem, 0.5vw, 0.5rem)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 1vw, 0.62rem)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)', display: 'block', marginBottom: '0.3rem',
          }}>{project.year}</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.1rem, 1vw, 0.65rem)',
            color: 'rgba(255,255,255,0.4)',
            transition: 'color 0.3s',
          }}>View →</span>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-row',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} data-dark style={{
      background: 'var(--black-3)', paddingTop: 'clamp(3rem, 5vw, 6rem)', paddingBottom: 'clamp(3rem, 5vw, 6rem)', color: 'var(--cream)',
    }}>
      {/* Header */}
      <div style={{
        padding: 'clamp(1.1rem, 2vw, 2.5rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap',
        gap: 'clamp(1.1rem, 1vw, 1.5rem)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        paddingBottom: 'clamp(1.1rem, 2vw, 1.5rem)', marginBottom: 'clamp(2.8rem, 4vw, 4rem)',
      }}>
        <span className="section-label-dark" style={{ fontSize: 'clamp(1.1rem, 1.2vw, 0.65rem)' }}>Works</span>
        <span style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          fontSize: 'clamp(0.9rem, 1.5vw, 0.9rem)', color: 'rgba(255,255,255,0.25)',
        }}>Crafted with care.</span>
      </div>

      {/* Project rows — no side padding, edge to edge */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        {projects.map((p, i) => (
          <ProjectRow key={p.index} project={p} index={i} />
        ))}
      </div>

      {/* View all */}
      <div style={{
        padding: 'clamp(2.8rem, 3vw, 3rem) clamp(1.1rem, 2vw, 2.5rem) 0',
        display: 'flex', alignItems: 'center', gap: 'clamp(1.1rem, 1.5vw, 1.5rem)', flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 1vw, 0.6rem)',
          color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>More on</span>
        <a href="https://github.com/Saiteja-k25" target="_blank" data-hover
          style={{
            color: 'rgba(255,255,255,0.4)',
            transition: 'color 0.3s',
            display: 'flex', alignItems: 'center',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
