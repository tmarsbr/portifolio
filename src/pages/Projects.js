import React, { useState, useEffect } from 'react';
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
  Code,
  Storage,
  Speed,
  AutoGraph,
  ArrowForward,
} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

import { projects, personalInfo, PROJECT_CATEGORIES, projectsPageConfig } from '../config/portfolio';
import CategoryPills from '../components/common/CategoryPills';
import { useProjectFilter } from '../hooks/useProjectFilter';

/* ── neon accent map ─────────────────────────────────── */
const catColor = {
  'Análise Exploratória': '#007bff',
  'Engenharia de Dados': '#00e676',
  'API & Web Scraping': '#ffd600',
  'Machine Learning': '#ff2d78',
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

/**
 * Projects — página completa de projetos (glass dark design)
 */
const Projects = () => {
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('Engenharia de Dados');
  const [subcategoryFilter, setSubcategoryFilter] = useState('Todos');
  const [techFilter, setTechFilter] = useState('');
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() => {
    const sp = new URLSearchParams(location.search);
    if (sp.get('cat')) setCategoryFilter(sp.get('cat'));
    if (sp.get('sub')) setSubcategoryFilter(sp.get('sub'));
    if (sp.get('tech')) setTechFilter(sp.get('tech'));
  }, [location.search]);

  const placeholderImage =
    "data:image/svg+xml,%3csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='400' height='300' fill='%230d1117'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='monospace' font-size='14' fill='%23475569'%3eImagem do Projeto%3c/text%3e%3c/svg%3e";

  const categories = PROJECT_CATEGORIES;

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

      {/* ── Hero ──────────────────────────────────────── */}
      <Box
        sx={{
          pt: { xs: 14, md: 20 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* radial glow */}
        <Box sx={{ position: 'absolute', top: '15%', right: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,123,255,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <Box sx={{ position: 'absolute', bottom: '10%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            {/* code label */}
            <Typography
              sx={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: 3,
                color: '#007bff',
                mb: 2,
              }}
            >
              {'// projetos'}
            </Typography>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(135deg, #007bff 0%, #00d4ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                fontSize: { xs: '2.4rem', md: '3.75rem' },
              }}
            >
              {projectsPageConfig.title}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: '#94a3b8',
                mb: 4,
                fontWeight: 500,
                maxWidth: 800,
                mx: 'auto',
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: { xs: '0.95rem', md: '1.15rem' },
              }}
            >
              {projectsPageConfig.subtitle}
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: '1.05rem', color: '#94a3b8', maxWidth: 700, mx: 'auto', lineHeight: 1.8, mb: 6 }}
            >
              {projectsPageConfig.description}
            </Typography>

            {/* Stats */}
            <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
              {[
                { n: projects.filter((p) => !p.hidden).length, l: 'Soluções', icon: <Storage />, c: '#007bff' },
                { n: categories.length, l: 'Áreas', icon: <AutoGraph />, c: '#00d4ff' },
                { n: '40+', l: 'Ferramentas', icon: <Code />, c: '#a855f7' },
              ].map((s, i) => (
                <Grid item xs={12} sm={4} md={3} key={i}>
                  <Box
                    sx={{
                      p: 3,
                      ...glass,
                      transition: 'all .3s ease',
                      '&:hover': { transform: 'translateY(-5px)', borderColor: `${s.c}50`, boxShadow: `0 0 24px ${s.c}18` },
                    }}
                  >
                    <Box sx={{ color: s.c, mb: 1 }}>{s.icon}</Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, fontFamily: '"IBM Plex Mono", monospace', color: '#e2e8f0' }}>
                      {s.n}
                    </Typography>
                    <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600, color: '#64748b' }}>
                      {s.l}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* ── Sticky filters ───────────────────────────── */}
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
          <CategoryPills categories={categories} active={categoryFilter} onChange={handleCategoryChange} />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, alignItems: 'center', gap: 1 }}>
            <Speed sx={{ fontSize: 16, color: '#64748b' }} />
            <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 500, fontFamily: '"IBM Plex Mono", monospace' }}>
              {count === total ? `Exibindo todos os ${total} projetos` : `${count} projetos encontrados`}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Grid ─────────────────────────────────────── */}
      <Box sx={{ py: 8, minHeight: '60vh' }}>
        <Container maxWidth="lg">
          {filteredProjects.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 12 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: '#94a3b8' }}>Nenhum projeto encontrado</Typography>
              <Button sx={neonBtn('#007bff')} onClick={() => handleCategoryChange('all')}>Limpar Filtros</Button>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {filteredProjects.map((project, index) => {
                const ac = accent(project.category);
                return (
                  <Grid item xs={12} md={6} lg={4} key={project.id}>
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
                  </Grid>
                );
              })}
            </Grid>
          )}
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
