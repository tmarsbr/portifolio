import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography } from '@mui/material';

import { personalInfo } from '../../config/portfolio';

const prefersReducedMotion = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const AnimatedPreloader = ({ onComplete }) => {
  const reducedMotion = useMemo(() => prefersReducedMotion(), []);
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    let intervalId;
    let completionTimeout;
    let exitTimeout;

    if (reducedMotion) {
      setProgress(100);
      completionTimeout = setTimeout(() => setIsLeaving(true), 120);
      exitTimeout = setTimeout(() => onComplete?.(), 420);
      return () => {
        clearTimeout(completionTimeout);
        clearTimeout(exitTimeout);
      };
    }

    intervalId = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 92) {
          window.clearInterval(intervalId);
          return current;
        }

        const step = Math.max(3, Math.round((100 - current) * 0.16));
        return Math.min(current + step, 92);
      });
    }, 90);

    completionTimeout = setTimeout(() => {
      setProgress(100);
      setIsLeaving(true);
    }, 1200);

    exitTimeout = setTimeout(() => {
      onComplete?.();
    }, 1750);

    return () => {
      window.clearInterval(intervalId);
      clearTimeout(completionTimeout);
      clearTimeout(exitTimeout);
    };
  }, [onComplete, reducedMotion]);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 20000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at top, rgba(0, 123, 255, 0.14), transparent 35%), linear-gradient(180deg, #020611 0%, #050a14 65%, #030913 100%)',
        transform: isLeaving ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isLeaving ? 0 : 1,
        transition: reducedMotion
          ? 'opacity 0.2s ease'
          : 'transform 0.8s cubic-bezier(0.86, 0, 0.07, 1), opacity 0.6s ease',
      }}
    >
      <Box
        sx={{
          width: 'min(520px, calc(100vw - 40px))',
          px: { xs: 3, md: 4 },
          py: { xs: 4, md: 5 },
          borderRadius: '24px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.45)',
        }}
      >
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            mb: 1,
            color: '#00d4ff',
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: '0.18em',
            fontWeight: 600,
          }}
        >
          {'// carregando portfólio'}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: '#f8fafc',
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 700,
            fontSize: { xs: '1.6rem', md: '2rem' },
          }}
        >
          {personalInfo.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 1.5,
            mb: 4,
            maxWidth: 420,
            color: '#94a3b8',
            lineHeight: 1.7,
          }}
        >
          Preparando a vitrine de projetos, estudos e arquitetura de dados.
        </Typography>

        <Box
          sx={{
            position: 'relative',
            height: 6,
            borderRadius: '999px',
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <Box
            sx={{
              width: `${progress}%`,
              height: '100%',
              borderRadius: 'inherit',
              background: 'linear-gradient(90deg, #007bff 0%, #00d4ff 60%, #00e676 100%)',
              boxShadow: '0 0 24px rgba(0, 123, 255, 0.35)',
              transition: reducedMotion ? 'none' : 'width 0.22s ease-out',
            }}
          />
        </Box>

        <Box
          sx={{
            mt: 1.5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            color: '#64748b',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <span>Pipeline visual iniciado</span>
          <span>{String(progress).padStart(2, '0')}%</span>
        </Box>
      </Box>
    </Box>
  );
};

export default AnimatedPreloader;
