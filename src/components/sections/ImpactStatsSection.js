import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import {
  AutoGraph,
  School,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

import SpotlightCard from '../common/SpotlightCard';
import {
  certificationStats,
  projects,
} from '../../config/portfolio';

const prefersReducedMotion = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const useCountUp = (target, enabled) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    if (prefersReducedMotion()) {
      setValue(target);
      return undefined;
    }

    let frameId;
    const duration = 1600;
    const start = performance.now();

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [enabled, target]);

  return value;
};

const StatValue = ({ target, suffix = '' }) => {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const value = useCountUp(target, enabled);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    if (typeof window === 'undefined' || typeof window.IntersectionObserver !== 'function') {
      setEnabled(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEnabled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={ref} component="span">
      {value}
      {suffix}
    </Box>
  );
};

const ImpactStatsSection = () => {
  const stats = [
    {
      icon: <AutoGraph sx={{ fontSize: 28 }} />,
      value: projects.filter((project) => !project.hidden).length,
      suffix: '+',
      label: 'projetos publicados',
      description: 'Pipelines, APIs e arquiteturas que já viraram portfólio executável.',
      accent: 'rgba(0, 123, 255, 0.18)',
    },
    {
      icon: <School sx={{ fontSize: 28 }} />,
      value: certificationStats.totalHours,
      suffix: 'h',
      label: 'de formação intensiva',
      description: 'Carga consolidada em engenharia de dados, analytics e ciência de dados.',
      accent: 'rgba(0, 230, 118, 0.16)',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={5} key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, amount: 0.3 }}
                style={{ height: '100%' }}
              >
                <SpotlightCard
                  spotlightColor={stat.accent}
                  sx={{
                    height: '100%',
                    minHeight: 280,
                    p: 3,
                    borderRadius: '22px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(18px)',
                    boxShadow: '0 24px 50px rgba(0,0,0,0.22)',
                    transition: 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: 'rgba(255,255,255,0.16)',
                      boxShadow: '0 28px 60px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <Stack spacing={4} height="100%" justifyContent="space-between">
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: '16px',
                        display: 'grid',
                        placeItems: 'center',
                        color: '#e2e8f0',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {stat.icon}
                    </Box>

                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          mb: 1,
                          color: '#ffffff',
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontWeight: 700,
                          fontSize: { xs: '2.5rem', md: '2.7rem' },
                          lineHeight: 1,
                        }}
                      >
                        <StatValue target={stat.value} suffix={stat.suffix} />
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          mb: 1.5,
                          color: '#e2e8f0',
                          fontWeight: 600,
                          fontSize: '1rem',
                        }}
                      >
                        {stat.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#94a3b8',
                          lineHeight: 1.7,
                        }}
                      >
                        {stat.description}
                      </Typography>
                    </Box>
                  </Stack>
                </SpotlightCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ImpactStatsSection;
