/**
 * SkillsMarquee — Faixa infinita de tecnologias
 *
 * Ticker horizontal com loop infinito, dois strips duplicados
 * para efeito seamless. Fade nas bordas com mask-image.
 */

import React from 'react';
import { Box, Typography } from '@mui/material';

/* ── Tech items with neon accent colors ── */
const techItems = [
  { label: 'Python', color: '#ffd600' },
  { label: 'SQL', color: '#007bff' },
  { label: 'PostgreSQL', color: '#00d4ff' },
  { label: 'dbt', color: '#ff2d78' },
  { label: 'Apache Airflow', color: '#00e676' },
  { label: 'Docker', color: '#007bff' },
  { label: 'AWS', color: '#ffd600' },
  { label: 'Pandas', color: '#a855f7' },
  { label: 'Scikit-learn', color: '#ff2d78' },
  { label: 'Git', color: '#00e676' },
  { label: 'Power BI', color: '#ffd600' },
  { label: 'Spark', color: '#00d4ff' },
  { label: 'Terraform', color: '#a855f7' },
  { label: 'MongoDB', color: '#00e676' },
  { label: 'Streamlit', color: '#ff2d78' },
  { label: 'NumPy', color: '#007bff' },
];

/* Duplicar para loop seamless */
const doubledItems = [...techItems, ...techItems];

/* ── Pill style ── */
const pillSx = (color) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1,
  px: 2.5,
  py: 1,
  borderRadius: '9999px',
  border: `1px solid rgba(${hexToRgb(color)}, 0.25)`,
  backgroundColor: `rgba(${hexToRgb(color)}, 0.06)`,
  whiteSpace: 'nowrap',
  flexShrink: 0,
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: color,
    backgroundColor: `rgba(${hexToRgb(color)}, 0.12)`,
    boxShadow: `0 0 16px rgba(${hexToRgb(color)}, 0.2)`,
    transform: 'scale(1.05)',
  },
});

/* Helper: hex → r,g,b */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : '255,255,255';
}

const SkillsMarquee = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden',
        /* Fade nas bordas */
        maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      {/* Label */}
      <Typography
        sx={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.65rem',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.3)',
          textAlign: 'center',
          mb: 3,
        }}
      >
        tech stack
      </Typography>

      {/* Row 1 — scrolls left */}
      <Box className="marquee-track" sx={{ mb: 2 }}>
        <Box className="marquee-content">
          {doubledItems.map((item, i) => (
            <Box key={`r1-${i}`} sx={pillSx(item.color)}>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: item.color,
                  boxShadow: `0 0 8px ${item.color}`,
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: '#e2e8f0',
                  letterSpacing: '0.02em',
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Row 2 — scrolls right (reversed) */}
      <Box className="marquee-track marquee-reverse">
        <Box className="marquee-content">
          {[...doubledItems].reverse().map((item, i) => (
            <Box key={`r2-${i}`} sx={pillSx(item.color)}>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: item.color,
                  boxShadow: `0 0 8px ${item.color}`,
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: '#e2e8f0',
                  letterSpacing: '0.02em',
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsMarquee;
