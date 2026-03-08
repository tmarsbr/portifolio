/**
 * ContactSection — Glass contact cards com neon hover
 */

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Email,
  WhatsApp,
  LocationOn,
  Phone,
} from '@mui/icons-material';
import { motion, useScroll, useTransform } from 'framer-motion';
import SpotlightCard from '../common/SpotlightCard';
import { personalInfo } from '../../config/portfolio';

/* ── Neon-color map for each contact method ── */
const neonMap = {
  Email: { neon: '#ff2d78', rgb: '255,45,120' },
  LinkedIn: { neon: '#007bff', rgb: '0,123,255' },
  GitHub: { neon: '#a855f7', rgb: '168,85,247' },
  WhatsApp: { neon: '#00e676', rgb: '0,230,118' },
};

/* ── Shared glass card sx ── */
const glassCardSx = {
  p: 3,
  borderRadius: '16px',
  textDecoration: 'none',
  color: 'inherit',
  border: '1px solid rgba(255,255,255,0.06)',
  backgroundColor: 'rgba(255,255,255,0.03)',
  backdropFilter: 'blur(16px)',
  transition: 'all 0.35s cubic-bezier(.25,.8,.25,1)',
  display: 'block',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
};

/* ── Stagger variants with blur (inspired by references) ── */
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const blurUpVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ContactSection = () => {
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax for decorative elements
  const blobY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const blobScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const fadeOut = useTransform(scrollYProgress, [0.7, 1], [1, 0.3]);

  const contactMethods = [
    {
      icon: <Email />,
      title: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      description: 'Envie um email direto',
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: '/in/tiagodados',
      link: personalInfo.linkedin,
      description: 'Conecte-se comigo',
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      value: '@tmarsbr',
      link: personalInfo.github,
      description: 'Veja meus projetos',
    },
    {
      icon: <WhatsApp />,
      title: 'WhatsApp',
      value: personalInfo.phone,
      link: personalInfo.whatsapp,
      description: 'Conversa rápida',
    },
  ];

  const quickInfo = [
    { icon: <LocationOn />, title: 'Localização', value: personalInfo.location },
    { icon: <Phone />, title: 'Telefone', value: personalInfo.phone },
  ];

  return (
    <Box
      ref={sectionRef}
      className="contact-footer-bridge"
      sx={{
        py: { xs: 8, md: 12 },
        pb: { xs: 14, md: 20 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Parallax decorative blobs ── */}
      <motion.div
        style={{ y: blobY, scale: blobScale }}
      >
        <Box
          className="morph-blob"
          sx={{
            position: 'absolute',
            top: '5%',
            left: '-5%',
            width: 400,
            height: 400,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            background: 'radial-gradient(circle, rgba(0,123,255,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 60]) }}
      >
        <Box
          className="morph-blob"
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '-8%',
            width: 350,
            height: 350,
            borderRadius: '40% 60% 70% 30% / 50% 40% 60% 50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 0,
            animationDelay: '-6s',
          }}
        />
      </motion.div>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* ── Header with blur-up animation ── */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={blurUpVariant}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: '#00d4ff',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontSize: '0.75rem',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1.5,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: 'rgba(255,255,255,0.2)',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                  }}
                >
                  02/
                </Box>
                {'// contato'}
              </Typography>
            </motion.div>

            <motion.div variants={blurUpVariant}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 700,
                  mb: 3,
                  color: '#f0f0f0',
                }}
              >
                Vamos Conversar sobre{' '}
                <Typography
                  component="span"
                  variant="inherit"
                  sx={{
                    background: 'linear-gradient(135deg, #007bff 0%, #00d4ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Data & Analytics
                </Typography>
              </Typography>
            </motion.div>

            <motion.div variants={blurUpVariant}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.05rem',
                  color: '#94a3b8',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                Estou sempre aberto para discussões sobre projetos, oportunidades
                de colaboração ou apenas para trocar experiências na área de dados.
              </Typography>
            </motion.div>
          </motion.div>
        </Box>

        <motion.div style={{ opacity: fadeOut }}>
          <Grid container spacing={4}>
            {/* ── Contact Cards ── */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                {contactMethods.map((method, index) => {
                  const accent = neonMap[method.title] || neonMap.Email;
                  return (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        viewport={{ once: true }}
                        style={{ height: '100%' }}
                      >
                      <SpotlightCard
                        component="a"
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        spotlightColor={`rgba(${accent.rgb},0.18)`}
                        sx={{
                          ...glassCardSx,
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            borderColor: `rgba(${accent.rgb},0.4)`,
                            boxShadow: `0 8px 30px rgba(${accent.rgb},0.12), 0 0 0 1px rgba(${accent.rgb},0.15)`,
                            '& .contact-icon': {
                              backgroundColor: accent.neon,
                              color: '#fff',
                              boxShadow: `0 0 18px rgba(${accent.rgb},0.35)`,
                              transform: 'scale(1.1)',
                            },
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Box
                            className="contact-icon"
                            sx={{
                              p: 1.5,
                              borderRadius: '12px',
                              backgroundColor: `rgba(${accent.rgb},0.12)`,
                              color: accent.neon,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              minWidth: 48,
                              height: 48,
                              transition: 'all 0.35s ease',
                            }}
                          >
                            {method.icon}
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontFamily: "'IBM Plex Mono', monospace",
                                fontWeight: 600,
                                mb: 0.5,
                                color: '#e2e8f0',
                                fontSize: '1rem',
                              }}
                            >
                              {method.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: '#64748b', mb: 1, fontSize: '0.82rem' }}
                            >
                              {method.description}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: accent.neon,
                                fontWeight: 500,
                                fontFamily: "'IBM Plex Mono', monospace",
                                fontSize: '0.8rem',
                              }}
                            >
                              {method.value}
                            </Typography>
                          </Box>
                        </Box>
                      </SpotlightCard>
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          {/* ── Sidebar: Quick Info + Availability ── */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              {/* Quick Info */}
              <SpotlightCard
                component={Paper}
                elevation={0}
                spotlightColor="rgba(0, 123, 255, 0.14)"
                sx={{
                  ...glassCardSx,
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 700,
                    mb: 3,
                    color: '#e2e8f0',
                    fontSize: '0.95rem',
                  }}
                >
                  Informações Rápidas
                </Typography>

                {quickInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #007bff, #00d4ff)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 32,
                        height: 32,
                        '& svg': { fontSize: 18 },
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: '#e2e8f0',
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '0.8rem',
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </SpotlightCard>

              {/* Availability */}
              <SpotlightCard
                component={Paper}
                elevation={0}
                spotlightColor="rgba(0, 230, 118, 0.16)"
                sx={{
                  ...glassCardSx,
                  border: '1px solid rgba(0,230,118,0.2)',
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    borderColor: 'rgba(0,230,118,0.4)',
                    boxShadow: '0 8px 25px rgba(0,230,118,0.1)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 700,
                    mb: 1,
                    color: '#00e676',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    fontSize: '0.95rem',
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#00e676',
                      boxShadow: '0 0 8px rgba(0,230,118,0.6)',
                      animation: 'pulseSoft 2s ease-in-out infinite',
                    }}
                  />
                  Disponível para Projetos
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#94a3b8', fontSize: '0.85rem' }}>
                  Abertura para freelance ou posições fixas em Data & Analytics.
                </Typography>
              </SpotlightCard>
            </motion.div>
          </Grid>
        </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection;
