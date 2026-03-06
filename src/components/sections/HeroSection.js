/**
 * HeroSection — Dark Premium Glass
 *
 * - Liquid blobs background + floating particles
 * - Glass chips com border neon
 * - Gradient text headings (IBM Plex Mono)
 * - Neon glow avatar ring
 * - Split-line reveal animations
 */

import React, { useEffect, useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  Chip,
  Grid,
  Stack,
} from '@mui/material';
import {
  ArrowForward,
  GitHub,
  LinkedIn,
  Email,
  Download,
  CloudQueue,
  DeviceHub,
  Hub,
  Code,
  Storage,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { personalInfo } from '../../config/portfolio';

/* ── Sub-components ─────────────────────────────────────────── */

const TypewriterEffect = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const speed = Math.max(30, 50 - currentIndex * 2);
      const wait = currentIndex === 0 ? delay : speed;
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, wait);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        style={{ color: '#007bff', fontWeight: 'bold', marginLeft: 2, display: 'inline-block' }}
      >
        |
      </motion.span>
    </span>
  );
};

const BlinkingText = ({ text, delay = 0 }) => {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t); }, [delay]);
  if (!show) return null;
  return (
    <motion.span
      animate={{ opacity: [1, 0.15, 1, 0.15, 1], scale: [1, 0.98, 1, 0.98, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
      style={{ display: 'inline-block' }}
    >
      {text}
    </motion.span>
  );
};

const FloatingParticles = () => {
  const particles = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1.5,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      dur: Math.random() * 12 + 10,
      color: ['#007bff', '#00d4ff', '#a855f7', '#ff2d78'][Math.floor(Math.random() * 4)],
    })), []);

  return (
    <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, left: `${p.x1}%`, top: `${p.y1}%` }}
          animate={{ opacity: [0, 0.7, 0], left: `${p.x2}%`, top: `${p.y2}%` }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: '50%',
            boxShadow: `0 0 6px ${p.color}`,
          }}
        />
      ))}
    </Box>
  );
};

/* ── Liquid Blobs ───────────────────────────────────────────── */
const LiquidBlobs = () => (
  <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
    <div className="liquid-blob" style={{
      width: 500, height: 500,
      background: 'radial-gradient(circle, rgba(0,123,255,0.18) 0%, transparent 70%)',
      top: '-10%', left: '-8%',
    }} />
    <div className="liquid-blob" style={{
      width: 400, height: 400,
      background: 'radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)',
      bottom: '-5%', right: '-5%',
      animationDelay: '-8s',
    }} />
    <div className="liquid-blob" style={{
      width: 300, height: 300,
      background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
      top: '40%', right: '20%',
      animationDelay: '-15s',
    }} />
  </Box>
);

/* ── Main Component ─────────────────────────────────────────── */

const HeroSection = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  const mainStacks = [
    { label: 'SQL', icon: <Code fontSize="small" /> },
    { label: 'Python', icon: <Code fontSize="small" /> },
    { label: 'dbt', icon: <Hub fontSize="small" /> },
    { label: 'Airflow', icon: <DeviceHub fontSize="small" /> },
    { label: 'AWS', icon: <CloudQueue fontSize="small" /> },
    { label: 'Docker', icon: <Storage fontSize="small" /> },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimationStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } },
  };

  // ── Glass chip style ────────────────────────────────────────
  const glassChipSx = {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.8rem',
    fontWeight: 500,
    color: '#e2e8f0',
    backgroundColor: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(12px)',
    transition: 'all 0.3s ease',
    '& .MuiChip-icon': { color: '#00d4ff' },
    '&:hover': {
      transform: 'translateY(-2px)',
      borderColor: 'rgba(0,123,255,0.5)',
      boxShadow: '0 4px 16px rgba(0,123,255,0.15)',
      backgroundColor: 'rgba(255,255,255,0.06)',
    },
  };

  // ── Neon button styles ──────────────────────────────────────
  const primaryBtnSx = {
    background: 'linear-gradient(135deg, #007bff, #0056b3)',
    color: '#fff',
    fontFamily: "'IBM Plex Mono', monospace",
    fontWeight: 600,
    px: 4, py: 1.5,
    borderRadius: '12px',
    textTransform: 'none',
    fontSize: '0.95rem',
    boxShadow: '0 0 20px rgba(0,123,255,0.3)',
    '& .MuiButton-endIcon': { transition: 'transform 0.3s ease' },
    '&:hover': {
      background: 'linear-gradient(135deg, #0056b3, #003d80)',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 30px rgba(0,123,255,0.45)',
      '& .MuiButton-endIcon': { transform: 'translateX(4px)' },
    },
    transition: 'all 0.3s ease',
  };

  const outlineBtnSx = (borderColor, hoverGlow) => ({
    borderColor: `${borderColor}55`,
    color: borderColor,
    fontFamily: "'IBM Plex Mono', monospace",
    fontWeight: 600,
    px: 4, py: 1.5,
    borderRadius: '12px',
    textTransform: 'none',
    fontSize: '0.95rem',
    borderWidth: '1.5px',
    '& .MuiButton-endIcon': { transition: 'transform 0.3s ease' },
    '&:hover': {
      borderColor,
      borderWidth: '1.5px',
      backgroundColor: `${borderColor}12`,
      transform: 'translateY(-2px)',
      boxShadow: `0 0 20px ${hoverGlow}`,
      '& .MuiButton-endIcon': { transform: 'translateX(4px)' },
    },
    transition: 'all 0.3s ease',
  });

  // ── Social icon style ──────────────────────────────────────
  const socialBtnSx = {
    minWidth: 'auto',
    p: 1.5,
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.06)',
    color: '#94a3b8',
    '&:hover': {
      backgroundColor: 'rgba(0,123,255,0.08)',
      borderColor: 'rgba(0,123,255,0.3)',
      color: '#00d4ff',
      transform: 'translateY(-2px)',
      boxShadow: '0 0 12px rgba(0,212,255,0.2)',
    },
    transition: 'all 0.3s ease',
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #020617 0%, #050a14 40%, #0d1117 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
      }}
    >
      {/* Layers */}
      <LiquidBlobs />
      <FloatingParticles />

      {/* Radial glow */}
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: `
          radial-gradient(circle at 20% 50%, rgba(0,123,255,0.12) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(0,212,255,0.10) 0%, transparent 50%),
          radial-gradient(circle at 60% 80%, rgba(168,85,247,0.06) 0%, transparent 40%)
        `,
      }} />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          {/* ── Text column ──────────────────────────────────── */}
          <Grid item xs={12} md={7}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <Stack spacing={{ xs: 1.5, md: 2 }}>
                {/* Greeting */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: 'rgba(0,212,255,0.85)',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                    }}
                  >
                    <span className="pulsing-dot" />
                    {animationStarted && (
                      <BlinkingText text="// Olá, seja bem-vindo(a)" delay={200} />
                    )}
                  </Typography>
                </motion.div>

                {/* Name — gradient text */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.2rem', md: '3.5rem', lg: '4rem' },
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontWeight: 700,
                      lineHeight: 1.1,
                      background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      mb: 0.5,
                    }}
                  >
                    {personalInfo.name}
                  </Typography>
                </motion.div>

                {/* Typewriter */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: '1.2rem', md: '1.8rem' },
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontWeight: 500,
                      color: '#94a3b8',
                      minHeight: '3rem',
                    }}
                  >
                    {animationStarted && (
                      <TypewriterEffect text={personalInfo.title} delay={1800} />
                    )}
                  </Typography>
                </motion.div>

                {/* Description */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.05rem' },
                      color: '#cbd5e1',
                      lineHeight: 1.7,
                      maxWidth: '580px',
                    }}
                  >
                    {personalInfo.homeIntro}
                  </Typography>
                </motion.div>

                {/* Glass chips */}
                <motion.div variants={itemVariants}>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Chip
                        label="Engenharia de Dados"
                        icon={<Hub fontSize="small" />}
                        sx={{
                          ...glassChipSx,
                          borderColor: 'rgba(0,212,255,0.25)',
                          '& .MuiChip-icon': { color: '#00d4ff' },
                        }}
                      />
                    </motion.div>

                    {mainStacks.map((stack, index) => (
                      <motion.div
                        key={stack.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.6 + index * 0.08 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Chip icon={stack.icon} label={stack.label} sx={glassChipSx} />
                      </motion.div>
                    ))}
                  </Stack>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
                    <Button
                      component={Link}
                      to="/projects"
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      sx={primaryBtnSx}
                    >
                      Ver Projetos
                    </Button>

                    <Button
                      href={personalInfo.resume}
                      download
                      variant="outlined"
                      size="large"
                      endIcon={<Download />}
                      sx={outlineBtnSx('#00e676', 'rgba(0,230,118,0.15)')}
                    >
                      Baixar CV
                    </Button>

                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      size="large"
                      endIcon={<Email />}
                      sx={outlineBtnSx('#00d4ff', 'rgba(0,212,255,0.15)')}
                    >
                      Contato
                    </Button>
                  </Stack>
                </motion.div>

                {/* Social icons */}
                <motion.div variants={itemVariants}>
                  <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
                    <Button href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" sx={socialBtnSx}>
                      <GitHub />
                    </Button>
                    <Button href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" sx={socialBtnSx}>
                      <LinkedIn />
                    </Button>
                    <Button href={`mailto:${personalInfo.email}`} aria-label="Email" sx={socialBtnSx}>
                      <Email />
                    </Button>
                  </Stack>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

          {/* ── Avatar column ────────────────────────────────── */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              <motion.div
                variants={avatarVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05, rotate: 3, transition: { duration: 0.3 } }}
              >
                <Avatar
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  sx={{
                    width: { xs: 180, md: 280, lg: 320 },
                    height: { xs: 180, md: 280, lg: 320 },
                    border: '3px solid rgba(0,123,255,0.5)',
                    boxShadow: '0 0 50px rgba(0,123,255,0.4), 0 0 100px rgba(0,123,255,0.15)',
                  }}
                />
              </motion.div>

              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.08, 1] }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 5, repeat: Infinity },
                }}
                style={{
                  position: 'absolute',
                  width: '110%',
                  height: '110%',
                  border: '1px dashed rgba(0,212,255,0.25)',
                  borderRadius: '50%',
                  zIndex: -1,
                }}
              />

              {/* Second ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  width: '125%',
                  height: '125%',
                  border: '1px dashed rgba(168,85,247,0.15)',
                  borderRadius: '50%',
                  zIndex: -1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
