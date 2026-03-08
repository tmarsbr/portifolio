import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
  Link,
  Divider,
  Stack,
  Chip,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Code,
  Storage,
  Cloud,
  Terminal,
  Favorite,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { personalInfo } from '../../config/portfolio';
import VisitorCounter from './VisitorCounter';

/**
 * Footer — Glass Panel Grid
 *
 * - Glass background com border top sutil
 * - Links com hover neon
 * - Tech chips glass
 * - Social icons com glow hover
 */

const Footer = ({ mode = 'default' }) => {
  const currentYear = new Date().getFullYear();
  const isRevealMode = mode === 'reveal';

  const techStack = [
    { name: 'Python', icon: <Code fontSize="small" /> },
    { name: 'Airflow', icon: <Storage fontSize="small" /> },
    { name: 'AWS', icon: <Cloud fontSize="small" /> },
    { name: 'SQL', icon: <Terminal fontSize="small" /> },
  ];

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/about' },
    { name: 'Projetos', path: '/projects' },
    { name: 'Certificações', path: '/certificacoes' },
    { name: 'Contato', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHub />,
      url: personalInfo.social?.github || personalInfo.github || 'https://github.com/tmarsbr',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      url: personalInfo.social?.linkedin || personalInfo.linkedin || 'https://linkedin.com/in/tmarsbr',
    },
    {
      name: 'Email',
      icon: <Email />,
      url: `mailto:${personalInfo.email || 'contato@exemplo.com'}`,
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: isRevealMode ? { xs: 6, md: 8 } : 6,
        minHeight: isRevealMode ? '100%' : 'auto',
        mt: 'auto',
        display: 'flex',
        alignItems: isRevealMode ? 'center' : 'stretch',
        background: isRevealMode
          ? 'radial-gradient(circle at top, rgba(0,123,255,0.12) 0%, transparent 30%), linear-gradient(180deg, rgba(3,9,19,0.96) 0%, rgba(2,6,17,1) 100%)'
          : 'linear-gradient(180deg, transparent 0%, rgba(5,10,20,0.6) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {isRevealMode && (
        <>
          <Box
            sx={{
              position: 'absolute',
              inset: 'auto auto -20% -10%',
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,123,255,0.22) 0%, transparent 72%)',
              filter: 'blur(18px)',
              pointerEvents: 'none',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: '10% -12% auto auto',
              width: 280,
              height: 280,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,230,118,0.12) 0%, transparent 72%)',
              filter: 'blur(18px)',
              pointerEvents: 'none',
            }}
          />
        </>
      )}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Col 1: Sobre */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                gutterBottom
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  background: 'linear-gradient(135deg, #007bff 0%, #00d4ff 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {personalInfo.name || 'Tiago Mars'}
              </Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2, lineHeight: 1.6 }}>
                Engenheiro de Dados Junior focado em construir pipelines
                robustos e escaláveis.
              </Typography>
              <VisitorCounter />
            </motion.div>
          </Grid>

          {/* Col 2: Navegação */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="subtitle2"
                fontWeight={600}
                gutterBottom
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: '#f0f0f0',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  fontSize: '0.7rem',
                }}
              >
                Navegação
              </Typography>
              <Stack spacing={0.8}>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    component={RouterLink}
                    to={link.path}
                    underline="none"
                    sx={{
                      color: '#94a3b8',
                      fontSize: '0.85rem',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#00d4ff',
                        transform: 'translateX(4px)',
                        display: 'inline-block',
                      },
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Col 3: Tech Stack */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="subtitle2"
                fontWeight={600}
                gutterBottom
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: '#f0f0f0',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  fontSize: '0.7rem',
                }}
              >
                Tech Stack
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {techStack.map((tech) => (
                  <Chip
                    key={tech.name}
                    icon={tech.icon}
                    label={tech.name}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.7rem',
                      color: '#cbd5e1',
                      borderColor: 'rgba(255,255,255,0.1)',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      '& .MuiChip-icon': { color: '#00d4ff' },
                      '&:hover': {
                        borderColor: 'rgba(0,123,255,0.4)',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Col 4: Social */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="subtitle2"
                fontWeight={600}
                gutterBottom
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: '#f0f0f0',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  fontSize: '0.7rem',
                }}
              >
                Conecte-se
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      color: '#94a3b8',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#00d4ff',
                        borderColor: 'rgba(0,212,255,0.4)',
                        backgroundColor: 'rgba(0,212,255,0.06)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 0 12px rgba(0,212,255,0.15)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.06)' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#64748b',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontSize: '0.8rem',
            }}
          >
            © {currentYear} {personalInfo.name || 'Tiago Mars'}. Feito com
            <Favorite sx={{ fontSize: 14, color: '#ff2d78', mx: 0.5 }} />
            usando React & Material-UI
          </Typography>
          <Typography variant="caption" sx={{ color: '#475569', fontSize: '0.75rem' }}>
            Engenheiro de Dados Junior • São Paulo, Brasil
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
