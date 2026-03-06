/**
 * ProjectsPreview — Glass card grid with neon category pills
 */

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  IconButton,
  Stack,
  Divider,
  Modal,
} from '@mui/material';
import {
  ArrowForward,
  GitHub,
  Launch,
  TrendingUp,
  DataObject,
  Engineering,
  Analytics,
  Star,
  Visibility,
  Code,
  Close,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { projects, projectsConfig } from '../../config/portfolio';

/* ── Category colors (neon palette) ── */
const catColors = {
  'Análise Exploratória': { neon: '#007bff', rgb: '0,123,255' },
  'Engenharia de Dados': { neon: '#00e676', rgb: '0,230,118' },
  'API & Web Scraping': { neon: '#ffd600', rgb: '255,214,0' },
  'Machine Learning': { neon: '#ff2d78', rgb: '255,45,120' },
};
const catIcons = {
  'Análise Exploratória': <Analytics />,
  'Engenharia de Dados': <Engineering />,
  'API & Web Scraping': <Code />,
  'Machine Learning': <TrendingUp />,
};
const getCatColor = (c) => catColors[c] || { neon: '#007bff', rgb: '0,123,255' };
const getCatIcon = (c) => catIcons[c] || <DataObject />;

/* ── Glass card base ── */
const glassCard = {
  backgroundColor: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.06)',
  backdropFilter: 'blur(16px)',
  borderRadius: '16px',
  transition: 'all 0.35s cubic-bezier(.25,.8,.25,1)',
};

/* ── Neon outline button ── */
const neonBtnSx = (neon, rgb) => ({
  fontFamily: "'IBM Plex Mono', monospace",
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '0.8rem',
  borderColor: `rgba(${rgb},0.4)`,
  color: neon,
  borderRadius: '10px',
  '&:hover': {
    borderColor: neon,
    backgroundColor: `rgba(${rgb},0.08)`,
    boxShadow: `0 0 14px rgba(${rgb},0.2)`,
  },
  transition: 'all 0.3s ease',
});

/* ─────────── ProjectCard ─────────── */
const ProjectCard = ({ project, index, onProjectClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const accent = getCatColor(project.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      style={{ height: '100%' }}
    >
      <Card
        onClick={() => onProjectClick(project)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        elevation={0}
        sx={{
          ...glassCard,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          '&:hover': {
            borderColor: `rgba(${accent.rgb},0.35)`,
            boxShadow: `0 12px 40px rgba(${accent.rgb},0.1), 0 0 0 1px rgba(${accent.rgb},0.12)`,
          },
        }}
      >
        {/* Featured badge */}
        {project.featured && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              px: 1.2,
              py: 0.4,
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #ffd600, #ff9800)',
              color: '#000',
              fontSize: '0.65rem',
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 700,
            }}
          >
            <Star sx={{ fontSize: '0.75rem' }} /> Destaque
          </Box>
        )}

        {/* Thumbnail / Cover */}
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <CardMedia
            component="div"
            sx={{
              height: 190,
              background: project.image
                ? `url(${project.image}) center/cover`
                : `linear-gradient(135deg, rgba(${accent.rgb},0.25) 0%, rgba(0,123,255,0.15) 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 50%, rgba(5,10,20,0.85) 100%)',
              },
            }}
          >
            {!project.image && (
              <Box sx={{ color: accent.neon, fontSize: '3.5rem', opacity: 0.5, zIndex: 1 }}>
                {getCatIcon(project.category)}
              </Box>
            )}

            {/* Hover action buttons */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    {project.github && (
                      <IconButton
                        component="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#fff',
                          '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            transform: 'scale(1.1)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <GitHub fontSize="small" />
                      </IconButton>
                    )}
                    {project.demo && (
                      <IconButton
                        component="a"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#fff',
                          '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            transform: 'scale(1.1)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Launch fontSize="small" />
                      </IconButton>
                    )}
                  </Stack>
                </motion.div>
              )}
            </AnimatePresence>
          </CardMedia>

          {/* Category chip */}
          <Chip
            icon={getCatIcon(project.category)}
            label={project.category}
            size="small"
            sx={{
              position: 'absolute',
              bottom: 8,
              left: 8,
              zIndex: 2,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.65rem',
              backgroundColor: `rgba(${accent.rgb},0.2)`,
              color: accent.neon,
              border: `1px solid rgba(${accent.rgb},0.3)`,
              backdropFilter: 'blur(8px)',
              fontWeight: 600,
              '& .MuiChip-icon': { color: accent.neon },
            }}
          />
        </Box>

        {/* Content */}
        <CardContent
          sx={{
            flex: 1,
            p: 2.5,
            backgroundColor: project.inDevelopment ? 'rgba(100,116,139,0.06)' : 'transparent',
          }}
        >
          <Stack spacing={1.5} height="100%">
            {/* Impact phrase */}
            {project.impactPhrase && (
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: project.inDevelopment ? '#64748b' : '#00d4ff',
                  fontWeight: 700,
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  backgroundColor: project.inDevelopment
                    ? 'rgba(100,116,139,0.12)'
                    : 'rgba(0,212,255,0.08)',
                  px: 1.2,
                  py: 0.4,
                  borderRadius: '6px',
                  display: 'inline-block',
                  width: 'fit-content',
                }}
              >
                {project.impactPhrase}
              </Typography>
            )}

            {/* Title + date */}
            <Box>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={0.5}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: project.inDevelopment ? '#64748b' : '#e2e8f0',
                    fontSize: '0.95rem',
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: '#64748b',
                    backgroundColor: 'rgba(0,123,255,0.08)',
                    px: 1,
                    py: 0.3,
                    borderRadius: '6px',
                    fontWeight: 500,
                    fontSize: '0.65rem',
                    whiteSpace: 'nowrap',
                    ml: 1,
                  }}
                >
                  {project.date}
                </Typography>
              </Stack>
            </Box>

            {/* Description */}
            <Typography
              variant="body2"
              sx={{
                color: project.inDevelopment ? '#475569' : '#94a3b8',
                lineHeight: 1.6,
                flex: 1,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                fontSize: '0.82rem',
              }}
            >
              {project.description}
            </Typography>

            {/* Architecture diagram */}
            {project.architectureDiagramImage && (
              <Box
                sx={{
                  backgroundColor: 'rgba(0,123,255,0.04)',
                  borderRadius: '10px',
                  p: 1.5,
                  border: '1px solid rgba(0,123,255,0.12)',
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: '#00d4ff',
                    fontWeight: 700,
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    mb: 1,
                    display: 'block',
                  }}
                >
                  Arquitetura
                </Typography>
                <Box
                  component="img"
                  src={project.architectureDiagramImage}
                  alt={`Arquitetura - ${project.title}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    p: 0.5,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                />
              </Box>
            )}

            {/* Metrics */}
            {project.metrics && (
              <Box
                sx={{
                  backgroundColor: 'rgba(0,123,255,0.04)',
                  borderRadius: '8px',
                  p: 1.2,
                  border: '1px solid rgba(0,123,255,0.1)',
                }}
              >
                <Stack direction="row" alignItems="center" spacing={0.8}>
                  <TrendingUp sx={{ fontSize: '0.9rem', color: '#00d4ff' }} />
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: '#00d4ff',
                      fontWeight: 600,
                      fontSize: '0.72rem',
                    }}
                  >
                    {project.metrics}
                  </Typography>
                </Stack>
              </Box>
            )}

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />

            {/* Technologies */}
            <Box>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: '#64748b',
                  fontWeight: 600,
                  mb: 0.8,
                  display: 'block',
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Tecnologias
              </Typography>
              <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.62rem',
                      height: 22,
                      borderColor: project.inDevelopment
                        ? 'rgba(255,255,255,0.08)'
                        : `rgba(${accent.rgb},0.3)`,
                      color: project.inDevelopment ? '#64748b' : accent.neon,
                      '&:hover': {
                        backgroundColor: project.inDevelopment
                          ? 'transparent'
                          : `rgba(${accent.rgb},0.12)`,
                      },
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
                {project.technologies.length > 4 && (
                  <Chip
                    label={`+${project.technologies.length - 4}`}
                    size="small"
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.62rem',
                      height: 22,
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      color: '#94a3b8',
                    }}
                  />
                )}
              </Stack>
            </Box>

            {/* CTA buttons */}
            <Box sx={{ mt: 'auto', pt: 1.5 }}>
              {project.inDevelopment ? (
                <Button
                  disabled
                  fullWidth
                  variant="outlined"
                  startIcon={<Engineering />}
                  size="small"
                  sx={{
                    ...neonBtnSx('#64748b', '100,116,139'),
                    py: 0.8,
                  }}
                >
                  Em Desenvolvimento
                </Button>
              ) : (
                <Stack direction="row" spacing={1}>
                  {project.github && (
                    <Button
                      component="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      startIcon={<GitHub />}
                      size="small"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        ...neonBtnSx('#a855f7', '168,85,247'),
                        flex: 1,
                        py: 0.8,
                      }}
                    >
                      Código
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      component="a"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      startIcon={<Launch />}
                      size="small"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        ...neonBtnSx('#00d4ff', '0,212,255'),
                        flex: 1,
                        py: 0.8,
                        background: 'rgba(0,212,255,0.06)',
                      }}
                    >
                      Demo
                    </Button>
                  )}
                  {!project.github && !project.demo && (
                    <Button
                      disabled
                      fullWidth
                      variant="outlined"
                      startIcon={<Visibility />}
                      size="small"
                      sx={{ ...neonBtnSx('#64748b', '100,116,139'), py: 0.8 }}
                    >
                      Ver Projeto
                    </Button>
                  )}
                </Stack>
              )}
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

/* ─────────── ProjectsPreview ─────────── */
const ProjectsPreview = () => {
  const [selectedCategory, setSelectedCategory] = useState('Engenharia de Dados');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { key: 'Engenharia de Dados', label: 'Engenharia de Dados', icon: <Engineering />, neon: '#00e676', rgb: '0,230,118' },
    { key: 'API & Scraping', label: 'API & Scraping', icon: <Code />, neon: '#ffd600', rgb: '255,214,0' },
  ];

  const visibleProjects = projects.filter((p) => !p.hidden && p.category !== 'Análise de Dados');
  const filteredProjects = visibleProjects
    .filter((p) => p.category === selectedCategory)
    .slice(0, projectsConfig.maxProjects);

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        /* subtle radial glow */
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120%',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(0,123,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                01/
              </Box>
              {'// projetos'}
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 700,
                mb: 3,
                background: 'linear-gradient(135deg, #007bff 0%, #00d4ff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2rem', md: '3rem' },
                letterSpacing: '-0.02em',
              }}
            >
              {projectsConfig.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#94a3b8',
                maxWidth: 600,
                mx: 'auto',
                mb: 5,
                lineHeight: 1.6,
                fontSize: { xs: '0.95rem', md: '1.1rem' },
              }}
            >
              {projectsConfig.description}
            </Typography>

            {/* Category filter pills */}
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5 }}>
              {categories.map((cat) => {
                const active = selectedCategory === cat.key;
                return (
                  <motion.div key={cat.key} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Button
                      onClick={() => setSelectedCategory(cat.key)}
                      startIcon={cat.icon}
                      variant="outlined"
                      sx={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.82rem',
                        px: 3,
                        py: 1.2,
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        ...(active
                          ? {
                              background: `rgba(${cat.rgb},0.1)`,
                              borderColor: cat.neon,
                              color: cat.neon,
                              boxShadow: `0 0 20px rgba(${cat.rgb},0.15)`,
                            }
                          : {
                              borderColor: 'rgba(255,255,255,0.1)',
                              color: '#94a3b8',
                              '&:hover': {
                                borderColor: `rgba(${cat.rgb},0.4)`,
                                color: cat.neon,
                                backgroundColor: `rgba(${cat.rgb},0.04)`,
                              },
                            }),
                      }}
                    >
                      {cat.label}
                    </Button>
                  </motion.div>
                );
              })}
            </Box>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Grid container spacing={3}>
              {filteredProjects.map((project, index) => (
                <Grid item xs={12} md={6} lg={4} key={`${selectedCategory}-${index}`}>
                  <ProjectCard project={project} index={index} onProjectClick={setSelectedProject} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                mb: 2,
                color: '#e2e8f0',
                fontWeight: 600,
              }}
            >
              Gostou dos projetos?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#94a3b8', maxWidth: 400, mx: 'auto', lineHeight: 1.6 }}>
              Explore a coleção completa e veja o processo de cada análise
            </Typography>
            <Button
              component={Link}
              to="/projects"
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                py: 1.5,
                px: 4,
                borderRadius: '14px',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderColor: 'rgba(0,123,255,0.4)',
                color: '#00d4ff',
                background: 'rgba(0,123,255,0.06)',
                '& .MuiButton-endIcon': { transition: 'transform 0.3s ease' },
                '&:hover': {
                  borderColor: '#007bff',
                  background: 'rgba(0,123,255,0.1)',
                  boxShadow: '0 0 30px rgba(0,123,255,0.15)',
                  transform: 'translateY(-2px)',
                  '& .MuiButton-endIcon': { transform: 'translateX(4px)' },
                },
                transition: 'all 0.3s ease',
              }}
            >
              Ver Todos os Projetos
            </Button>
          </Box>
        </motion.div>
      </Container>

      {/* ── Project Detail Modal ── */}
      <Modal
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(5,10,20,0.7)',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            ...glassCard,
            backgroundColor: 'rgba(13,17,23,0.96)',
            border: '1px solid rgba(255,255,255,0.08)',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflowY: 'auto',
            width: '100%',
            p: { xs: 3, md: 4 },
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
            /* scrollbar */
            '&::-webkit-scrollbar': { width: 6 },
            '&::-webkit-scrollbar-track': { background: 'transparent' },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 3,
            },
          }}
        >
          {/* Close */}
          <IconButton
            onClick={() => setSelectedProject(null)}
            sx={{
              position: 'absolute',
              right: 12,
              top: 12,
              zIndex: 10,
              color: '#94a3b8',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px',
              '&:hover': {
                color: '#ff2d78',
                borderColor: 'rgba(255,45,120,0.3)',
                backgroundColor: 'rgba(255,45,120,0.06)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <Close />
          </IconButton>

          {selectedProject && (
            <Box sx={{ pt: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  mb: 2,
                  fontWeight: 700,
                  color: '#f0f0f0',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                {selectedProject.title}
              </Typography>

              {selectedProject.impactPhrase && (
                <Typography
                  variant="body2"
                  sx={{
                    mb: 3,
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: '#00d4ff',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                  }}
                >
                  {selectedProject.impactPhrase}
                </Typography>
              )}

              {selectedProject.image && (
                <Box
                  sx={{
                    width: '100%',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    mb: 3,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <Box
                    component="img"
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    sx={{ width: '100%', height: 'auto', maxHeight: 400, objectFit: 'cover' }}
                  />
                </Box>
              )}

              <Typography variant="body1" sx={{ mb: 3, color: '#94a3b8', lineHeight: 1.8 }}>
                {selectedProject.description}
              </Typography>

              {selectedProject.longDescription && (
                <Box sx={{ mb: 3 }}>
                  {selectedProject.longDescription.split('\n').map((p, i) => (
                    <Typography key={i} variant="body2" sx={{ mb: 2, color: '#94a3b8', lineHeight: 1.8 }}>
                      {p}
                    </Typography>
                  ))}
                </Box>
              )}

              {selectedProject.architectureDiagramImage && (
                <Box
                  sx={{
                    backgroundColor: 'rgba(0,123,255,0.04)',
                    borderRadius: '10px',
                    p: 2,
                    mb: 3,
                    border: '1px solid rgba(0,123,255,0.12)',
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: '#00d4ff',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      mb: 1.5,
                      display: 'block',
                    }}
                  >
                    Arquitetura do Projeto
                  </Typography>
                  <Box
                    component="img"
                    src={selectedProject.architectureDiagramImage}
                    alt={`Arquitetura - ${selectedProject.title}`}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      p: 0.5,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    }}
                  />
                </Box>
              )}

              <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.06)' }} />

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: '#e2e8f0',
                    fontWeight: 700,
                    mb: 1.5,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  Tecnologias
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {selectedProject.technologies?.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      variant="outlined"
                      sx={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.72rem',
                        borderColor: 'rgba(0,212,255,0.3)',
                        color: '#00d4ff',
                        '&:hover': { backgroundColor: 'rgba(0,212,255,0.08)' },
                        transition: 'all 0.3s ease',
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              {selectedProject.metrics && (
                <Box sx={{ mb: 3 }}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <TrendingUp sx={{ fontSize: '1.1rem', color: '#00d4ff' }} />
                    <Typography variant="body2" sx={{ fontFamily: "'IBM Plex Mono', monospace", color: '#00d4ff', fontWeight: 600, fontSize: '0.85rem' }}>
                      {selectedProject.metrics}
                    </Typography>
                  </Stack>
                </Box>
              )}

              <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.06)' }} />

              <Stack direction="row" spacing={1.5} sx={{ mt: 3, flexWrap: 'wrap' }} useFlexGap>
                {selectedProject.github && (
                  <Button
                    component="a"
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    startIcon={<GitHub />}
                    sx={neonBtnSx('#a855f7', '168,85,247')}
                  >
                    Ver Código
                  </Button>
                )}
                {selectedProject.demo && (
                  <Button
                    component="a"
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    startIcon={<Launch />}
                    sx={{
                      ...neonBtnSx('#00d4ff', '0,212,255'),
                      background: 'rgba(0,212,255,0.06)',
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </Stack>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default ProjectsPreview;
