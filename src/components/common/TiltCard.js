/**
 * TiltCard — 3D perspective tilt wrapper
 *
 * Wraps any children and applies rotateX/Y based on mouse position
 * within the card. Works with CSS perspective.
 *
 * Props:
 *  - maxTilt: max degrees of rotation (default 12)
 *  - scale: scale on hover (default 1.02)
 *  - glare: show a white shine glare (default true)
 *  - disabled: turn off on mobile / pages that don't need it
 */
import React, { useRef, useCallback } from 'react';
import { Box } from '@mui/material';

const TiltCard = ({
  children,
  maxTilt = 12,
  scale = 1.02,
  glare = true,
  disabled = false,
  className = '',
  sx = {},
  ...props
}) => {
  const cardRef  = useRef(null);
  const glareRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (disabled || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;  // -0.5 → 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5;

    const rotX = -y * maxTilt;   // pitch
    const rotY =  x * maxTilt;   // yaw

    cardRef.current.style.transform =
      `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale},${scale},${scale})`;

    if (glare && glareRef.current) {
      const angle = Math.atan2(y, x) * (180 / Math.PI);
      glareRef.current.style.transform = `rotate(${angle}deg)`;
      glareRef.current.style.opacity   = `${Math.min(Math.sqrt(x * x + y * y) * 0.5, 0.22)}`;
    }
  }, [disabled, maxTilt, scale, glare]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    if (glare && glareRef.current) glareRef.current.style.opacity = '0';
  }, [glare]);

  return (
    <Box
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      sx={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.08s linear',
        willChange: 'transform',
        position: 'relative',
        ...sx,
      }}
      {...props}
    >
      {children}

      {/* Glare shine layer */}
      {glare && (
        <Box
          ref={glareRef}
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            opacity: 0,
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 50%)',
            transition: 'opacity 0.25s ease',
            zIndex: 10,
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </Box>
  );
};

export default TiltCard;
