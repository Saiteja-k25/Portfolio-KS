import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const WA_MSG = encodeURIComponent("Hey hi, Need help in building my new site");
const WA_URL = `https://wa.me/916305656651?text=${WA_MSG}`;

export default function Contact() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const bodyRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(bodyRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.25,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
  const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>;
  const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
  const LinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>;

  const socials = [
    { label: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com/in/kurapati-saiteja-06343724b/' },
    { label: 'GitHub', icon: GithubIcon, url: 'https://github.com/Saiteja-k25' },
    { label: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/k.s.t_2003__' },
    { label: 'Linktree', icon: LinkIcon, url: 'https://linktr.ee/kurapati_saiteja' },
  ];

  return (
    <section id="contact" ref={sectionRef} data-dark style={{
      background: 'var(--black)', padding: 'clamp(3rem, 4vw, 5rem) clamp(1.1rem, 3vw, 2.5rem)',
      color: 'var(--cream)', minHeight: 'auto',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      {/* Section header */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: 'clamp(1.1rem, 2vw, 1.5rem)', marginBottom: 'clamp(2.8rem, 4vw, 4rem)',
        display: 'flex', flexDirection: 'column', gap: 'clamp(1.1rem, 1vw, 1rem)', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      }}>
        <span className="section-label-dark" style={{ fontSize: 'clamp(1.1rem, 1.2vw, 0.65rem)' }}>Contact</span>
        <span style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          fontSize: 'clamp(0.9rem, 1.5vw, 0.9rem)', color: 'rgba(255,255,255,0.35)',
        }}>Open to work · Remote-friendly</span>
      </div>

      {/* Big headline */}
      <div ref={headRef} style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontWeight: 400,
          fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
          letterSpacing: '-0.04em', lineHeight: 0.92,
          color: '#ffffff',
        }}>
          Got a project<br />
          <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.3)' }}>in mind?</em>
        </h2>
      </div>

      {/* Contact details */}
      <div ref={bodyRef} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '1.5rem' : 'clamp(1.1rem, 2vw, 2rem)',
          marginBottom: 'clamp(1.5rem, 2vw, 2rem)',
          paddingBottom: 'clamp(1.5rem, 2vw, 2rem)', borderBottom: '1px solid rgba(255,255,255,0.08)',
          width: '100%', maxWidth: '600px',
        }}>
          {/* Email */}
          <a href="mailto:kurapatisaitejas@gmail.com" data-hover
            style={{
              fontFamily: 'var(--font-serif)', fontWeight: 400,
              fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
              color: '#ffffff',
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              paddingBottom: '0.15rem',
              transition: 'border-color 0.2s',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={e => e.target.style.borderColor = '#ffffff'}
            onMouseLeave={e => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
          >kurapatisaitejas@gmail.com</a>

          {/* WhatsApp icon button */}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" data-hover
            title="Chat on WhatsApp"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: 'clamp(0.9rem, 0.8vw, 0.55rem) clamp(1.1rem, 1.5vw, 1.1rem)',
              border: '1px solid rgba(37,211,102,0.35)',
              borderRadius: '2px',
              color: '#25d366',
              transition: 'all 0.25s',
              textDecoration: 'none',
              fontSize: 'clamp(1.1rem, 1vw, 0.65rem)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#25d366'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = '#25d366'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#25d366'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.35)'; }}
          >
            {/* WhatsApp SVG icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 0.9vw, 0.65rem)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              WhatsApp
            </span>
          </a>
        </div>

        <p style={{
          fontFamily: 'var(--font-sans)', fontWeight: 300,
          fontSize: 'clamp(1.1rem, 1.5vw, 0.95rem)', color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.8, maxWidth: '360px', marginBottom: 'clamp(2.8rem, 4vw, 3.5rem)',
        }}>
          Open to full-time roles, freelance projects,<br />
          and collaborations. Based in Hyderabad —<br />
          remote-friendly.
        </p>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '2rem',
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: isMobile ? '1.5rem' : '2rem',
      }}>
        {/* Left: copyright */}
        <div style={{ textAlign: 'center', flex: '1 1 auto' }}>
          <div style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2vw, 1rem)', color: 'rgba(255,255,255,0.6)',
            marginBottom: '0.2rem',
          }}>Kurapati Saiteja</div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 1.2vw, 0.6rem)',
            color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em',
          }}>© 2026 · All rights reserved</div>
        </div>

        {/* Center: socials */}
        <div style={{ display: 'flex', gap: 'clamp(1.1rem, 2vw, 2rem)', justifyContent: 'center', flex: '1 1 auto' }}>
          {socials.map(s => {
            const Icon = s.icon;
            return (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" data-hover
                title={s.label}
                style={{
                  color: 'rgba(255,255,255,0.35)', transition: 'color 0.2s',
                  display: 'flex', alignItems: 'center',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Right: stack */}
        <div style={{ textAlign: 'center', flex: '1 1 auto' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 1.2vw, 0.6rem)',
            color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em',
            marginBottom: '0.2rem',
          }}>Built with</div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 1.2vw, 0.62rem)',
            color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em',
          }}>React · GSAP · Lenis · Vite</div>
        </div>
      </div>
    </section>
  );
}
