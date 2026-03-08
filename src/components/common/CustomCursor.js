/**
 * CustomCursor — dot + ring cursor with mix-blend-mode: difference
 *
 * - Small dot follows mouse 1:1 (no lag)
 * - Outer ring follows with spring delay
 * - On hover of interactive elements: ring expands + blends white
 * - Hides native cursor on desktop only (pointer device)
 */
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

const CustomCursor = () => {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const pos      = useRef({ x: -120, y: -120 });
  const ring     = useRef({ x: -120, y: -120 });
  const rafId    = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /* Only run on real pointer devices */
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onEnter = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')) {
        setHovered(true);
      }
    };
    const onLeave = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')) {
        setHovered(false);
      }
    };
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    const LERP = 0.35;

    const animate = () => {
      /* Dot: instant */
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }

      /* Ring: lerp */
      ring.current.x += (pos.current.x - ring.current.x) * LERP;
      ring.current.y += (pos.current.y - ring.current.y) * LERP;
      if (ringRef.current) {
        const offset = hovered ? 20 : 12;
        ringRef.current.style.transform = `translate(${ring.current.x - offset}px, ${ring.current.y - offset}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [hovered, visible]); // eslint-disable-line react-hooks/exhaustive-deps

  /* Don't render on touch-only devices */
  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <Box
        ref={dotRef}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#fff',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
          willChange: 'transform',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease, width 0.25s ease, height 0.25s ease',
        }}
      />

      {/* Ring */}
      <Box
        ref={ringRef}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovered ? 40 : 24,
          height: hovered ? 40 : 24,
          borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.85)',
          background: hovered ? 'rgba(255,255,255,0.06)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 99998,
          mixBlendMode: 'difference',
          willChange: 'transform',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s ease, width 0.15s cubic-bezier(.23,1,.32,1), height 0.15s cubic-bezier(.23,1,.32,1), background 0.15s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
