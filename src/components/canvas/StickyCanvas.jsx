import React, { useEffect, useRef, useState } from 'react';
import { portfolioContent } from '../../data/content';

export const StickyCanvas = ({ frameProgress, onProgress, onLoadComplete }) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const totalFrames = portfolioContent.sequenceTotalFrames;

  // Preload sequence frames
  useEffect(() => {
    let loadedCount = 0;
    const imgArray = [];

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/sequence/frame_${frameNum}_delay-0.067s.webp`;

      const handleLoad = () => {
        loadedCount++;
        if (onProgress) {
          onProgress(loadedCount / totalFrames);
        }
        if (loadedCount === totalFrames) {
          setLoaded(true);
          if (onLoadComplete) {
            onLoadComplete();
          }
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad; // Ensure progress continues even if single frame stutters
      imgArray.push(img);
    }
    setImages(imgArray);
  }, [totalFrames, onProgress, onLoadComplete]);

  // Draw current frame on canvas based on scroll progress
  useEffect(() => {
    if (!loaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI crisp rendering
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Map frame progress (0 to 1) to frame index
    const frameIndex = Math.min(
      totalFrames - 1,
      Math.max(0, Math.floor(frameProgress * (totalFrames - 1)))
    );

    const currentImg = images[frameIndex];
    if (currentImg && currentImg.complete && currentImg.naturalWidth !== 0) {
      ctx.clearRect(0, 0, width, height);

      // Implement object-fit: cover scaling
      const imgRatio = currentImg.width / currentImg.height;
      const canvasRatio = width / height;
      let renderW, renderH, renderX, renderY;

      if (canvasRatio > imgRatio) {
        renderW = width;
        renderH = width / imgRatio;
        renderX = 0;
        renderY = (height - renderH) / 2;
      } else {
        renderH = height;
        renderW = height * imgRatio;
        renderX = (width - renderW) / 2;
        renderY = 0;
      }

      ctx.drawImage(currentImg, renderX, renderY, renderW, renderH);
    }

    ctx.restore();
  }, [frameProgress, loaded, images, totalFrames]);

  const canvasOpacity = frameProgress > 0.90 ? Math.max(0, 1 - (frameProgress - 0.90) / 0.08) : 1;

  return (
    <div
      className="canvas-wrapper"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        opacity: canvasOpacity,
        transition: 'opacity 0.2s linear',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};
