import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollyCanvas from './components/ScrollyCanvas';
import AboutPage from './components/pages/AboutPage';
import WorkPage from './components/pages/WorkPage';
import ContactPage from './components/pages/ContactPage';
import PageTransition from './components/PageTransition';
import './index.css';

// Dynamic Document Title & Scroll restoration component
const PageSetup = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position on route change
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Dynamic Snellenberg-style per-route browser tab titles
    switch (pathname) {
      case '/work':
        document.title = 'Work — Kurapati Saiteja';
        break;
      case '/about':
        document.title = 'About — Kurapati Saiteja';
        break;
      case '/contact':
        document.title = 'Contact — Kurapati Saiteja';
        break;
      case '/':
      default:
        document.title = 'Kurapati Saiteja — Freelance Creative Design & Developer';
        break;
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <PageSetup />
      <PageTransition />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<ScrollyCanvas />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
