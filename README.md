# Kurapati Saiteja | Portfolio 3D

🌐 **Live Demo**: [https://portfolio-ks-beta.vercel.app/](https://portfolio-ks-beta.vercel.app/)

A cinematic, scroll-driven 3D portfolio built with **React + Vite**, featuring a WebP image sequence hero rendered on HTML Canvas, GSAP-powered scroll-linked animations, smooth Lenis scrolling, and a premium editorial UI language. Designed and developed as a freelance creative portfolio showcasing full-stack engineering, UI/UX design, and motion capabilities.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + Vite |
| **3D Scroll Engine** | HTML5 Canvas + WebP Image Sequence (scroll-driven frame rendering) |
| **Animations** | GSAP (ScrollTrigger, Timelines) |
| **Smooth Scrolling** | Lenis |
| **Styling** | Vanilla CSS (CSS Variables, Flexbox/Grid, `clamp()` fluid scaling) |
| **Typography** | Google Fonts (Inter, Space Mono, DM Serif Display) |
| **Email Integration** | FormSubmit (AJAX endpoint, activated token) |
| **Deployment** | Vercel (auto-deploy from GitHub `main` branch) |

---

## ⚡ Key Features

- **Cinematic 3D Scroll-Driven Hero** — 150+ WebP frames rendered on Canvas, synchronized to scroll position via GSAP ScrollTrigger for a smooth parallax storytelling experience.
- **Interactive S-Logo Preloader** — Large standalone S strike-through logo mark with "Materializing the experience..." loading counter and `UNFOLDING ↗` launch button with GPU-accelerated curtain reveal transition.
- **Curved SVG Page Transitions** — Signature curved SVG wipe animations between routes with smart color adaptation (white wipe on dark pages, dark wipe on light pages).
- **5-Field Contact Form** — Numbered inquiry form (Name, Email, Organization, Services, Message) with FormSubmit AJAX integration for direct email delivery.
- **Dynamic Browser Tab Titles** — Per-route `document.title` updates (Home, Work, About, Contact) with custom S-logo SVG favicon.
- **Navbar Logo Swap** — Full wordmark logo on default, animated S strike-through mark on hover.
- **Fully Responsive** — Pixel-perfect across Mobile (375px), Tablet (768px), and Desktop (1536px+) with dedicated media query breakpoints.
- **Custom Cursor Integration** — Premium circular cursor with magnetic hover effects.
- **Page Refresh Transition** — Signature page wipe animation triggers even on browser refresh for secondary routes.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg              # S-logo favicon (SVG)
│   ├── logo-kurapati-saiteja.png # Full wordmark logo (navbar)
│   ├── logo-s-mark.png          # S strike-through mark (preloader, footer)
│   └── sequence/                # WebP image frames for hero scroll animation
│       ├── frame_0001.webp
│       ├── frame_0002.webp
│       └── ... (150+ frames)
├── src/
│   ├── App.jsx                  # Router, PageSetup (dynamic titles), routes
│   ├── index.css                # Global design tokens & CSS variables
│   ├── components/
│   │   ├── Navbar.jsx/css       # Fixed navbar with logo swap & fullscreen menu
│   │   ├── Footer.jsx/css       # Footer with S-logo avatar & edition tag
│   │   ├── Preloader.jsx/css    # Interactive S-logo preloader + UNFOLDING button
│   │   ├── PageTransition.jsx/css # Curved SVG wipe page transitions
│   │   ├── ScrollyCanvas.jsx    # Canvas scroll-driven WebP sequence renderer
│   │   ├── sections/
│   │   │   └── Overlay.jsx/css  # Hero text overlay (phases 1–5)
│   │   └── pages/
│   │       ├── AboutPage.jsx/css
│   │       ├── WorkPage.jsx/css
│   │       └── ContactPage.jsx/css
│   └── data/
│       └── content.js           # Centralized portfolio content & links
├── index.html                   # Entry HTML with favicon, meta, fonts
├── vite.config.js               # Vite configuration
└── package.json
```

---

## 🛠️ Run Locally

```bash
# Clone the repo
git clone https://github.com/Saiteja-k25/Portfolio-KS.git

# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

---

## 📬 Contact

- **Email**: kurapatisaitejas@gmail.com
- **LinkedIn**: [Kurapati Saiteja](https://www.linkedin.com/in/kurapati-saiteja/)
- **Instagram**: [@saiteja.kurapati](https://www.instagram.com/saiteja.kurapati/)

---

<p align="center">
  <b>Designed & Developed by Kurapati Saiteja</b><br/>
  <i>Freelance Creative Designer & Developer</i><br/>
  <code>2026 © Edition</code>
</p>
