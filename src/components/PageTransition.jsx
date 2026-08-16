import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

// Routes that have dark backgrounds — transition should be WHITE to contrast
const DARK_BG_ROUTES = ['/about', '/work', '/contact'];

export const PageTransition = () => {
  const { pathname } = useLocation();
  const [animating, setAnimating] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const prevPathRef = useRef(pathname);
  const [transitionColor, setTransitionColor] = useState('dark'); // 'dark' = black wipe, 'light' = white wipe

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      // Play page transition animation when refreshing on /about, /work, or /contact
      if (pathname !== '/') {
        const isDarkPage = DARK_BG_ROUTES.some((r) => pathname.startsWith(r));
        setTransitionColor(isDarkPage ? 'light' : 'dark');
        setAnimating(true);
        const timer = setTimeout(() => {
          setAnimating(false);
        }, 900);
        prevPathRef.current = pathname;
        return () => clearTimeout(timer);
      }
      prevPathRef.current = pathname;
      return;
    }

    // Determine transition color based on the page we're LEAVING
    const leavingRoute = prevPathRef.current;
    const isDarkPage = DARK_BG_ROUTES.some((r) => leavingRoute.startsWith(r));
    setTransitionColor(isDarkPage ? 'light' : 'dark');

    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 900);

    prevPathRef.current = pathname;
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!animating) return null;

  return (
    <div className={`page-transition-wrapper ${transitionColor === 'light' ? 'wipe-light' : 'wipe-dark'}`}>
      <svg className="transition-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          className="transition-path"
          d="M 0 0 C 50 20 50 20 100 0 L 100 100 C 50 100 50 100 0 100 Z"
        />
      </svg>
    </div>
  );
};

export default PageTransition;
