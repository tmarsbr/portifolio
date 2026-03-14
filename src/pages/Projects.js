import React, { useState, useEffect, useRef } from 'react';
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
  Modal,
  Stack,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import {
  GitHub,
  Launch,
  TrendingUp,
  Close,
  Storage,
  AutoGraph,
  ArrowForward,
  East,
} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

import { projects, personalInfo, PROJECT_CATEGORIES, PROJECT_SUBCATEGORIES, projectsPageConfig } from '../config/portfolio';
import CategoryPills from '../components/common/CategoryPills';
import TiltCard from '../components/common/TiltCard';
import { useProjectFilter } from '../hooks/useProjectFilter';

/* ── neon accent map ─────────────────────────────────── */
const catColor = {
  'Todos':               '#007bff',
  'Engenharia de Dados': '#00e676',
  'API & Scraping':      '#ffd600',
  'Análise de Dados':    '#00d4ff',
  'Ciência de Dados':    '#a855f7',
};
const accent = (cat) => catColor[cat] || '#007bff';

/* ── glass base ──────────────────────────────────────── */
const glass = {
  background: 'rgba(255,255,255,0.03)',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '16px',
};

/* ── neon button factory ─────────────────────────────── */
const neonBtn = (c) => ({
  fontFamily: '"IBM Plex Mono", monospace',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '10px',
  border: `1.5px solid ${c}`,
  color: c,
  background: 'transparent',
  transition: 'all .3s ease',
  '&:hover': { background: `${c}18`, boxShadow: `0 0 18px ${c}30` },
});

/* ── Marquee component ───────────────────────────────── */
const TechMarquee = ({ items }) => {
  const doubled = [...items, ...items];
  return (
    <Box
      sx={{
        overflow: 'hidden',
        py: 3,
        position: 'relative',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '120px',
          zIndex: 2,
          pointerEvents: 'none',
        },
        '&::before': {
          left: 0,
          background: 'linear-gradient(90deg, #050a14 0%, transparent 100%)',
        },
        '&::after': {
          right: 0,
          background: 'linear-gradient(270deg, #050a14 0%, transparent 100%)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          width: 'max-content',
          animation: 'marqueeScroll 35s linear infinite',
          '@keyframes marqueeScroll': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        {doubled.map((item, i) => (
          <Typography
            key={i}
            sx={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.8rem',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.15)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              '&::after': {
                content: '"·"',
                fontSize: '1.2rem',
                color: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

/* ── Section label component ─────────────────────────── */
const SectionLabel = ({ number, text }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
    <Box
      sx={{
        width: 32,
        height: '1px',
        background: 'linear-gradient(90deg, #007bff, transparent)',
      }}
    />
    <Typography
      sx={{
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#007bff',
      }}
    >
      {number} {text}
    </Typography>
  </Box>
);

/**
 * Projects — página completa de projetos (glass dark design)
 */
const Projects = () => {
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('Todos');
  const [subcategoryFilter, setSubcategoryFilter] = useState('Todos');
  const [techFilter, setTechFilter] = useState('');
  const [expandedImage, setExpandedImage] = useState(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  useEffect(() => {
    const sp = new URLSearchParams(location.search);
    if (sp.get('cat')) setCategoryFilter(sp.get('cat'));
    if (sp.get('sub')) setSubcategoryFilter(sp.get('sub'));
    if (sp.get('tech')) setTechFilter(sp.get('tech'));
  }, [location.search]);

  const placeholderImage =
    "data:image/svg+xml,%3csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='400' height='300' fill='%230d1117'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='monospace' font-size='14' fill='%23475569'%3eImagem do Projeto%3c/text%3e%3c/svg%3e";

  const categories = ['Todos', ...PROJECT_CATEGORIES];

  const { filtered: baseFilteredProjects, total } = useProjectFilter(
    projects, categoryFilter, subcategoryFilter,
  );
  const filteredProjects = techFilter
    ? baseFilteredProjects.filter((p) =>
        p.technologies?.some((t) => t.toLowerCase().includes(techFilter.toLowerCase())),
      )
    : baseFilteredProjects;
  const count = filteredProjects.length;

  const handleCategoryChange = (c) => { setCategoryFilter(c); setSubcategoryFilter('Todos'); setTechFilter(''); };
  const handleSubcategoryChange = (s) => setSubcategoryFilter(s);
  const handleProjectClick = (p) => setSelectedProject(p);
  const handleCloseModal = () => setSelectedProject(null);
  const handleImageClick = (src) => setExpandedImage(src);
  const handleCloseImageModal = () => setExpandedImage(null);

  /* ── glass card sx ─────────────────────────────────── */
  const cardSx = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    ...glass,
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all .4s cubic-bezier(.4,0,.2,1)',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 50px rgba(0,123,255,0.12)',
      borderColor: 'rgba(0,123,255,0.35)',
      '& .project-image': { transform: 'scale(1.06)' },
      '& .view-details': { opacity: 1, transform: 'translateY(0)' },
    },
  };

  return (
    <>
      <Helmet>
        <title>Projetos - {personalInfo.name} | Data Engineering</title>
        <meta name="description" content={projectsPageConfig.description} />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────── */}
      <Box
        ref={heroRef}
        sx={{
          pt: { xs: 16, md: 24 },
          pb: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: 'auto', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Decorative grid lines */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.03,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Radial glow — right */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '-15%',
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,123,255,0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        {/* Radial glow — left */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '5%',
            left: '-10%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,230,118,0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div style={{ opacity: heroOpacity, y: heroY }}>
            <Grid container spacing={6} alignItems="center">
              {/* Left — Text */}
              <Grid item xs={12} md={7}>
                <SectionLabel number="01" text="Projetos" />

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontWeight: 800,
                      fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.5rem' },
                      lineHeight: 0.95,
                      letterSpacing: '-0.03em',
                      mb: 3,
                      background: 'linear-gradient(160deg, #ffffff 0%, #007bff 50%, #00d4ff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {projectsPageConfig.title}
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontWeight: 500,
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      color: '#e2e8f0',
                      mb: 3,
                      maxWidth: 560,
                    }}
                  >
                    {projectsPageConfig.subtitle}
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.05rem',
                      color: '#94a3b8',
                      maxWidth: 520,
                      lineHeight: 1.8,
                      mb: 4,
                    }}
                  >
                    {projectsPageConfig.description}
                  </Typography>
                </motion.div>

                {/* Philosophy quote */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Box
                    sx={{
                      pl: 3,
                      borderLeft: '2px solid rgba(0,123,255,0.3)',
                      py: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"IBM Plex Mono", monospace',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: '#64748b',
                        fontStyle: 'italic',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {projectsPageConfig.philosophy}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>

              {/* Right — Visual element */}
              <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 380,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Geometric decorative element */}
                    <Box
                      sx={{
                        width: 280,
                        height: 280,
                        border: '1px solid rgba(0,123,255,0.12)',
                        borderRadius: '24px',
                        transform: 'rotate(45deg)',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          inset: 20,
                          border: '1px solid rgba(0,212,255,0.08)',
                          borderRadius: '20px',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          inset: 44,
                          border: '1px solid rgba(0,230,118,0.06)',
                          borderRadius: '16px',
                        },
                      }}
                    />
                    {/* Center stats */}
                    <Box
                      sx={{
                        position: 'absolute',
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"IBM Plex Mono", monospace',
                          fontSize: '3.5rem',
                          fontWeight: 800,
                          color: '#e2e8f0',
                          lineHeight: 1,
                        }}
                      >
                        {projects.filter((p) => !p.hidden).length}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: '"IBM Plex Mono", monospace',
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: '#64748b',
                          mt: 0.5,
                        }}
                      >
                        Projetos
                      </Typography>
                    </Box>
                    {/* Floating dots */}
                    {[
                      { top: '15%', left: '10%', color: '#007bff', size: 6 },
                      { top: '75%', left: '20%', color: '#00e676', size: 4 },
                      { top: '25%', right: '15%', color: '#00d4ff', size: 5 },
                      { bottom: '20%', right: '10%', color: '#ffd600', size: 4 },
                    ].map((dot, i) => (
                      <Box
                        key={i}
                        sx={{
                          position: 'absolute',
                          width: dot.size,
                          height: dot.size,
                          borderRadius: '50%',
                          background: dot.color,
                          opacity: 0.5,
                          filter: `blur(0.5px)`,
                          animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
                          ...dot,
                        }}
                      />
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ── TECH MARQUEE ─────────────────────────────── */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
          background: 'rgba(255,255,255,0.01)',
        }}
      >
        <TechMarquee items={projectsPageConfig.marqueeItems || []} />
      </Box>

      {/* ── FILTERS ──────────────────────────────────── */}
      <Box
        sx={{
          py: 4,
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(5,10,20,0.92)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Container maxWidth="lg">
          {/* Filter label */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Typography
              sx={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#475569',
              }}
            >
              Filtrar por especialidade
            </Typography>
          </Box>

          <CategoryPills categories={categories} active={categoryFilter} onChange={handleCategoryChange} />

          {/* subcategory pills */}
          {categoryFilter !== 'Todos' && PROJECT_SUBCATEGORIES[categoryFilter]?.length > 0 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {['Todos', ...PROJECT_SUBCATEGORIES[categoryFilter]].map((sub) => {
                const ac = accent(categoryFilter);
                const isActiveSub = subcategoryFilter === sub;
                return (
                  <Box
                    key={sub}
                    component="button"
                    onClick={() => handleSubcategoryChange(sub)}
                    sx={{
                      px: 2,
                      py: 0.6,
                      borderRadius: '999px',
                      border: `1px solid ${isActiveSub ? ac + '60' : 'rgba(255,255,255,0.08)'}`,
                      background: isActiveSub ? `${ac}15` : 'rgba(255,255,255,0.03)',
                      color: isActiveSub ? ac : '#64748b',
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all .25s ease',
                      '&:hover': { borderColor: `${ac}40`, color: ac },
                    }}
                  >
                    {sub}
                  </Box>
                );
              })}
            </Box>
          )}

          {/* count */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 4, height: 4, borderRadius: '50%', background: '#007bff', opacity: 0.6 }} />
            <Typography
              variant="caption"
              sx={{
                color: '#475569',
                fontWeight: 500,
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.7rem',
              }}
            >
              {count === total ? `${total} projetos` : `${count} de ${total}`}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── PROJECTS GRID ────────────────────────────── */}
      <Box sx={{ py: { xs: 6, md: 10 }, minHeight: '60vh', position: 'relative' }}>
        {/* Subtle background accent */}
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 800,
            height: 800,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,123,255,0.03) 0%, transparent 60%)',
            filter: 'blur(100px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Section header */}
          <Box sx={{ mb: 6 }}>
            <SectionLabel number="02" text="Portfólio" />
          </Box>

          {filteredProjects.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 12 }}>
              <Typography
                variant="h5"
                sx={{ mb: 2, fontWeight: 600, color: '#94a3b8' }}
              >
                Nenhum projeto encontrado
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#64748b', mb: 4 }}
              >
                Tente ajustar os filtros para ver mais resultados.
              </Typography>
              <Button sx={neonBtn('#007bff')} onClick={() => handleCategoryChange('Todos')}>
                Limpar Filtros
              </Button>
            </Box>
          ) : (
            <Grid container spacing={4}>
              <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => {
                const ac = accent(project.category);
                return (
                  <Grid item xs={12} md={6} lg={4} key={project.id}>
                    <TiltCard
                      maxTilt={8}
                      scale={1.02}
                      className="beam-border"
                      sx={{ borderRadius: '16px', height: '100%' }}
                    >
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
                      style={{ height: '100%' }}
                    >
                    <Card sx={cardSx} onClick={() => handleProjectClick(project)}>
                      {/* image */}
                      <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                        <CardMedia
                          component="img"
                          image={project.image || placeholderImage}
                          alt={project.title}
                          className="project-image"
                          sx={{ height: '100%', objectFit: 'cover', transition: 'transform .5s ease' }}
                        />
                        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(5,10,20,0.85) 100%)' }} />
                        {/* category chip */}
                        <Chip
                          label={project.category}
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 14,
                            left: 14,
                            fontFamily: '"IBM Plex Mono", monospace',
                            fontWeight: 700,
                            fontSize: '0.7rem',
                            background: `${ac}18`,
                            color: ac,
                            border: `1px solid ${ac}40`,
                            backdropFilter: 'blur(8px)',
                          }}
                        />
                        {project.featured && (
                          <Chip
                            label="DESTAQUE"
                            size="small"
                            sx={{
                              position: 'absolute',
                              top: 14,
                              right: 14,
                              fontWeight: 700,
                              fontSize: '0.65rem',
                              background: 'rgba(255,45,120,0.15)',
                              color: '#ff2d78',
                              border: '1px solid rgba(255,45,120,0.3)',
                            }}
                          />
                        )}
                      </Box>

                      <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          variant="caption"
                          sx={{ fontFamily: '"IBM Plex Mono", monospace', color: ac, fontWeight: 700, mb: 1, letterSpacing: 0.5 }}
                        >
                          {project.impactPhrase?.split('|')[1]?.trim() || project.category}
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.3, minHeight: 56, color: '#e2e8f0' }}>
                          {project.title}
                        </Typography>

                        <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, flex: 1, lineHeight: 1.6 }}>
                          {project.description}
                        </Typography>

                        {/* divider */}
                        <Box sx={{ height: '1px', background: 'rgba(255,255,255,0.06)', my: 2 }} />

                        {/* tech chips */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <Chip
                              key={i}
                              label={tech}
                              size="small"
                              sx={{
                                height: 24,
                                fontSize: '0.68rem',
                                fontFamily: '"IBM Plex Mono", monospace',
                                background: 'rgba(255,255,255,0.04)',
                                color: '#cbd5e1',
                                border: '1px solid rgba(255,255,255,0.08)',
                              }}
                            />
                          ))}
                          {project.technologies.length > 3 && (
                            <Typography variant="caption" sx={{ color: '#64748b', alignSelf: 'center', ml: 0.5 }}>
                              +{project.technologies.length - 3}
                            </Typography>
                          )}
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                          <Typography variant="caption" sx={{ color: '#475569', fontWeight: 500, fontFamily: '"IBM Plex Mono", monospace' }}>
                            {project.date}
                          </Typography>
                          <Box
                            className="view-details"
                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: ac, opacity: 0.7, transform: 'translateY(4px)', transition: 'all .3s ease' }}
                          >
                            <Typography variant="caption" sx={{ fontWeight: 700, fontFamily: '"IBM Plex Mono", monospace' }}>Detalhes</Typography>
                            <ArrowForward sx={{ fontSize: 14 }} />
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                    </motion.div>
                    </TiltCard>
                  </Grid>
                );
              })}
              </AnimatePresence>
            </Grid>
          )}
        </Container>
      </Box>

      {/* ── CTA SECTION ──────────────────────────────── */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,123,255,0.04) 0%, transparent 60%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box
              sx={{
                width: 40,
                height: '1px',
                background: 'rgba(255,255,255,0.15)',
                mx: 'auto',
                mb: 4,
              }}
            />
            <Typography
              sx={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 700,
                color: '#e2e8f0',
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              Quer saber mais?
            </Typography>
            <Typography
              sx={{
                fontSize: '0.95rem',
                color: '#64748b',
                mb: 5,
                lineHeight: 1.7,
              }}
            >
              Cada projeto tem seu repositório aberto. Explore o código, a arquitetura e os testes.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                href="https://github.com/tmarsbr"
                target="_blank"
                startIcon={<GitHub />}
                sx={{
                  ...neonBtn('#007bff'),
                  px: 4,
                  py: 1.4,
                }}
              >
                GitHub
              </Button>
              <Button
                href="/portifolio/contato"
                endIcon={<East />}
                sx={{
                  ...neonBtn('#00d4ff'),
                  px: 4,
                  py: 1.4,
                }}
              >
                Contato
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ── Detail Modal ─────────────────────────────── */}
      <Modal
        open={!!selectedProject}
        onClose={handleCloseModal}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, backdropFilter: 'blur(6px)' }}
      >
        <Box
          sx={{
            background: 'rgba(13,17,23,0.96)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
            maxWidth: 920,
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            outline: 'none',
            position: 'relative',
            '&::-webkit-scrollbar': { width: 6 },
            '&::-webkit-scrollbar-track': { background: 'transparent' },
            '&::-webkit-scrollbar-thumb': { background: 'rgba(255,255,255,0.08)', borderRadius: 3 },
          }}
        >
          {selectedProject && (() => {
            const ac = accent(selectedProject.category);
            return (
              <>
                {/* header image */}
                <Box sx={{ position: 'relative', height: 280 }}>
                  <CardMedia
                    component="img"
                    image={selectedProject.image || placeholderImage}
                    alt={selectedProject.title}
                    sx={{ height: '100%', objectFit: 'cover' }}
                  />
                  <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(13,17,23,0.95) 0%, transparent 60%)' }} />
                  <IconButton
                    onClick={handleCloseModal}
                    sx={{
                      position: 'absolute', top: 16, right: 16,
                      color: '#e2e8f0',
                      background: 'rgba(0,0,0,0.4)',
                      backdropFilter: 'blur(8px)',
                      '&:hover': { background: 'rgba(255,45,120,0.25)', color: '#ff2d78' },
                    }}
                  >
                    <Close />
                  </IconButton>
                  <Box sx={{ position: 'absolute', bottom: 24, left: 28, right: 28 }}>
                    <Chip
                      label={selectedProject.category}
                      sx={{
                        fontFamily: '"IBM Plex Mono", monospace',
                        fontWeight: 700,
                        fontSize: '0.72rem',
                        background: `${ac}20`,
                        color: ac,
                        border: `1px solid ${ac}50`,
                        mb: 2,
                      }}
                    />
                    <Typography variant="h4" sx={{ color: '#fff', fontWeight: 800, fontFamily: '"IBM Plex Mono", monospace', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                      {selectedProject.title}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ p: { xs: 3, md: 5 } }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                      <Typography variant="h6" sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 700, mb: 2, color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Storage fontSize="small" sx={{ color: ac }} /> Sobre o Projeto
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#94a3b8', lineHeight: 1.8, mb: 4, fontSize: '1.02rem', whiteSpace: 'pre-line' }}>
                        {selectedProject.longDescription || selectedProject.description}
                      </Typography>

                      {selectedProject.architectureDiagramImage && (
                        <Box sx={{ mb: 4 }}>
                          <Typography variant="h6" sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 700, mb: 2, color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AutoGraph fontSize="small" sx={{ color: '#00d4ff' }} /> Arquitetura
                          </Typography>
                          <Box
                            component="img"
                            src={selectedProject.architectureDiagramImage}
                            alt={`Arquitetura - ${selectedProject.title}`}
                            onClick={() => handleImageClick(selectedProject.architectureDiagramImage)}
                            sx={{
                              width: '100%',
                              height: 'auto',
                              borderRadius: '12px',
                              background: '#0d1117',
                              p: 2,
                              border: '1px solid rgba(255,255,255,0.08)',
                              cursor: 'pointer',
                              transition: 'all .3s ease',
                              '&:hover': { transform: 'scale(1.02)', boxShadow: '0 8px 30px rgba(0,123,255,0.15)' },
                            }}
                          />
                        </Box>
                      )}

                      {selectedProject.metrics && (
                        <Box sx={{ p: 3, background: 'rgba(0,230,118,0.06)', borderRadius: '12px', border: '1px solid rgba(0,230,118,0.18)', mb: 4 }}>
                          <Typography variant="subtitle2" sx={{ color: '#00e676', fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1, fontFamily: '"IBM Plex Mono", monospace' }}>
                            <TrendingUp fontSize="small" /> Impacto & Resultados
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500, color: '#cbd5e1' }}>
                            {selectedProject.metrics}
                          </Typography>
                        </Box>
                      )}
                    </Grid>

                    {/* sidebar */}
                    <Grid item xs={12} md={4}>
                      <Box sx={{ p: 3, ...glass, borderRadius: '14px' }}>
                        <Typography variant="subtitle2" sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 1, color: '#94a3b8' }}>
                          Stack Tecnológico
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                          {selectedProject.technologies.map((tech, i) => (
                            <Chip
                              key={i}
                              label={tech}
                              size="small"
                              sx={{
                                fontFamily: '"IBM Plex Mono", monospace',
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                background: `${ac}12`,
                                color: ac,
                                border: `1px solid ${ac}30`,
                              }}
                            />
                          ))}
                        </Box>

                        <Stack spacing={2}>
                          {selectedProject.github && (
                            <Button
                              fullWidth
                              startIcon={<GitHub />}
                              href={selectedProject.github}
                              target="_blank"
                              sx={{ ...neonBtn(ac), py: 1.3 }}
                            >
                              Ver Código
                            </Button>
                          )}
                          {selectedProject.demo && (
                            <Button
                              fullWidth
                              startIcon={<Launch />}
                              href={selectedProject.demo}
                              target="_blank"
                              sx={{ ...neonBtn('#00d4ff'), py: 1.3 }}
                            >
                              Live Demo
                            </Button>
                          )}
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </>
            );
          })()}
        </Box>
      </Modal>

      {/* ── Image expansion modal ────────────────────── */}
      <Modal
        open={Boolean(expandedImage)}
        onClose={handleCloseImageModal}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}
      >
        <Box sx={{ position: 'relative', maxWidth: '95vw', maxHeight: '95vh', outline: 'none' }}>
          <IconButton
            onClick={handleCloseImageModal}
            sx={{
              position: 'absolute', top: -16, right: -16,
              background: '#0d1117',
              color: '#e2e8f0',
              border: '1px solid rgba(255,255,255,0.1)',
              zIndex: 1,
              '&:hover': { background: 'rgba(255,45,120,0.2)', color: '#ff2d78' },
            }}
          >
            <Close />
          </IconButton>
          <Box
            component="img"
            src={expandedImage}
            alt="Arquitetura expandida"
            sx={{
              maxWidth: '100%',
              maxHeight: '95vh',
              width: 'auto',
              height: 'auto',
              borderRadius: '14px',
              background: '#0d1117',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default Projects;
