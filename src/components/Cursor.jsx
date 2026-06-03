import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [dark, setDark] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      // Check if over dark section
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isDark = el?.closest('[data-dark]');
      setDark(!!isDark);
    };

    const lerp = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      ringEl.style.left = ring.current.x + 'px';
      ringEl.style.top = ring.current.y + 'px';
      requestAnimationFrame(lerp);
    };

    const enterHover = () => { dot.classList.add('hovered'); ringEl.classList.add('hovered'); };
    const leaveHover = () => { dot.classList.remove('hovered'); ringEl.classList.remove('hovered'); };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', enterHover);
      el.addEventListener('mouseleave', leaveHover);
    });

    requestAnimationFrame(lerp);
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${dark ? 'on-dark' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${dark ? 'on-dark' : ''}`} />
    </>
  );
}
