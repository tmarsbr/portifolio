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
  useTheme,
  alpha,
  Divider,
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
  ArrowForward
} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

import { projects, personalInfo, PROJECT_CATEGORIES, projectsPageConfig } from '../config/portfolio';
import CategoryPills from '../components/common/CategoryPills';
import { useProjectFilter } from '../hooks/useProjectFilter';

/**
 * Projects - Portfólio de projetos
 *
 * Versão Redesenhada: Estética Tech/Data Engineering
 */
const Projects = () => {
  const theme = useTheme();
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('Engenharia de Dados');
  const [subcategoryFilter, setSubcategoryFilter] = useState('Todos');
  const [techFilter, setTechFilter] = useState('');

  // Ler parâmetros da querystring
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const cat = searchParams.get('cat');
    const sub = searchParams.get('sub');
    const tech = searchParams.get('tech');

    if (cat) setCategoryFilter(cat);
    if (sub) setSubcategoryFilter(sub);
    if (tech) setTechFilter(tech);
  }, [location.search]);

  const placeholderImage = "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='%23f5f5f5'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23999'%3eImagem do Projeto%3c/text%3e%3c/svg%3e";

  const categories = PROJECT_CATEGORIES;

  const { filtered: baseFilteredProjects, total } = useProjectFilter(
    projects,
    categoryFilter,
    subcategoryFilter
  );

  const filteredProjects = techFilter
    ? baseFilteredProjects.filter(project =>
      project.technologies &&
      project.technologies.some(tech =>
        tech.toLowerCase().includes(techFilter.toLowerCase())
      )
    )
    : baseFilteredProjects;

  const count = filteredProjects.length;

  const handleCategoryChange = (newCategory) => {
    setCategoryFilter(newCategory);
    setSubcategoryFilter('Todos');
    setTechFilter('');
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Estilos comuns para cards e efeitos
  const cardStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 4,
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
    backgroundColor: theme.palette.mode === 'dark'
      ? alpha(theme.palette.background.paper, 0.6)
      : theme.palette.background.paper,
    backdropFilter: 'blur(10px)',
    cursor: 'pointer',
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
      borderColor: alpha(theme.palette.primary.main, 0.3),
      '& .project-image': {
        transform: 'scale(1.05)',
      },
      '& .view-details': {
        opacity: 1,
        transform: 'translateY(0)',
      }
    },
  };

  return (
    <>
      <Helmet>
        <title>Projetos - {personalInfo.name} | Data Engineering</title>
        <meta name="description" content={projectsPageConfig.description} />
      </Helmet>

      {/* Hero Section - Tech Style */}
      <Box
        sx={{
          pt: { xs: 14, md: 20 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          background: theme.palette.mode === 'dark'
            ? `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.9)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`
            : `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.9)} 0%, ${alpha(theme.palette.primary.main, 0.02)} 100%)`,
        }}
      >
        {/* Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
            filter: 'blur(60px)',
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Chip
              label="ENGENHARIA DE DADOS APLICADA"
              size="small"
              sx={{
                mb: 3,
                fontWeight: 700,
                letterSpacing: 2,
                borderRadius: 1,
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                color: 'primary.main',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              }}
            />

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: theme.palette.mode === 'dark'
                  ? `linear-gradient(45deg, #fff 30%, ${theme.palette.primary.main} 90%)`
                  : `linear-gradient(45deg, ${theme.palette.text.primary} 30%, ${theme.palette.primary.main} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                fontSize: { xs: '2.5rem', md: '3.75rem' },
              }}
            >
              {projectsPageConfig.title}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontWeight: 500,
                maxWidth: '800px',
                mx: 'auto',
                fontFamily: 'monospace',
                fontSize: { xs: '1rem', md: '1.25rem' },
                opacity: 0.9,
              }}
            >
              {projectsPageConfig.subtitle}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.8,
                mb: 6,
              }}
            >
              {projectsPageConfig.description}
            </Typography>

            {/* Stats Cards */}
            <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
              {[
                { number: projects.filter(p => !p.hidden).length, label: 'Soluções Completas', icon: <Storage /> },
                { number: categories.length, label: 'Áreas de Atuação', icon: <AutoGraph /> },
                { number: '40+', label: 'Ferramentas', icon: <Code /> },
              ].map((stat, index) => (
                <Grid item xs={12} sm={4} md={3} key={index}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: alpha(theme.palette.background.paper, 0.5),
                      border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        backgroundColor: alpha(theme.palette.background.paper, 0.8),
                        borderColor: alpha(theme.palette.primary.main, 0.3),
                      }
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 1, opacity: 0.8 }}>
                      {stat.icon}
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600, color: 'text.secondary' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Filters Section */}
      <Box
        sx={{
          py: 4,
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: alpha(theme.palette.background.default, 0.95),
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        <Container maxWidth="lg">
          <CategoryPills
            categories={categories}
            active={categoryFilter}
            onChange={handleCategoryChange}
          />

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, alignItems: 'center', gap: 1 }}>
            <Speed sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              {count === total ? `Exibindo todos os ${total} projetos` : `${count} projetos encontrados`}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Box sx={{ py: 8, backgroundColor: 'background.default', minHeight: '60vh' }}>
        <Container maxWidth="lg">
          {filteredProjects.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 12, opacity: 0.7 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Nenhum projeto encontrado
              </Typography>
              <Button variant="outlined" onClick={() => handleCategoryChange('all')}>
                Limpar Filtros
              </Button>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {filteredProjects.map((project, index) => (
                <Grid item xs={12} md={6} lg={4} key={project.id} data-aos="fade-up" data-aos-delay={index * 50}>
                  <Card sx={cardStyle} onClick={() => handleProjectClick(project)}>
                    <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        image={project.image || placeholderImage}
                        alt={project.title}
                        className="project-image"
                        sx={{ height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                        }}
                      />
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          backgroundColor: alpha(theme.palette.background.paper, 0.9),
                          backdropFilter: 'blur(4px)',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          color: 'text.primary',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        }}
                      />
                      {project.featured && (
                        <Chip
                          label="DESTAQUE"
                          size="small"
                          color="secondary"
                          sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            fontWeight: 700,
                            fontSize: '0.7rem',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                          }}
                        />
                      )}
                    </Box>

                    <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, mb: 1, letterSpacing: 0.5 }}>
                        {project.impactPhrase?.split('|')[1]?.trim() || project.category}
                      </Typography>

                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.3, minHeight: 64 }}>
                        {project.title}
                      </Typography>

                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, flex: 1, lineHeight: 1.6 }}>
                        {project.description}
                      </Typography>

                      <Divider sx={{ my: 2, borderColor: alpha(theme.palette.divider, 0.1) }} />

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              height: 24,
                              fontSize: '0.7rem',
                              backgroundColor: alpha(theme.palette.primary.main, 0.08),
                              color: 'primary.main',
                              fontWeight: 600,
                              border: 'none',
                            }}
                          />
                        ))}
                        {project.technologies.length > 3 && (
                          <Typography variant="caption" sx={{ color: 'text.secondary', alignSelf: 'center', ml: 0.5 }}>
                            +{project.technologies.length - 3}
                          </Typography>
                        )}
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                        <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 500 }}>
                          {project.date}
                        </Typography>
                        <Box
                          className="view-details"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            color: 'primary.main',
                            opacity: 0.7,
                            transform: 'translateY(4px)',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <Typography variant="caption" sx={{ fontWeight: 700 }}>Detalhes</Typography>
                          <ArrowForward sx={{ fontSize: 14 }} />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* Modal de Detalhes */}
      <Modal
        open={!!selectedProject}
        onClose={handleCloseModal}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, backdropFilter: 'blur(5px)' }}
      >
        <Box
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 4,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            maxWidth: 900,
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            outline: 'none',
            position: 'relative',
          }}
        >
          {selectedProject && (
            <>
              <Box sx={{ position: 'relative', height: 300 }}>
                <CardMedia
                  component="img"
                  image={selectedProject.image || placeholderImage}
                  alt={selectedProject.title}
                  sx={{ height: '100%', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
                  }}
                />
                <IconButton
                  onClick={handleCloseModal}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' }
                  }}
                >
                  <Close />
                </IconButton>
                <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                  <Chip
                    label={selectedProject.category}
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      fontWeight: 700,
                      mb: 2
                    }}
                  />
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                    {selectedProject.title}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ p: { xs: 3, md: 5 } }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Storage fontSize="small" color="primary" /> Sobre o Projeto
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}>
                      {selectedProject.longDescription || selectedProject.description}
                    </Typography>

                    {selectedProject.architectureDiagramImage && (
                      <Box sx={{ mb: 4 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                          <AutoGraph fontSize="small" color="primary" /> Arquitetura do Projeto
                        </Typography>
                        <Box
                          component="img"
                          src={selectedProject.architectureDiagramImage}
                          alt={`Arquitetura - ${selectedProject.title}`}
                          sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: 2,
                            backgroundColor: 'white',
                            p: 2,
                            border: `1px solid ${theme.palette.divider}`,
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                          }}
                        />
                      </Box>
                    )}

                    {selectedProject.metrics && (
                      <Box sx={{ p: 3, backgroundColor: alpha(theme.palette.success.main, 0.1), borderRadius: 2, border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`, mb: 4 }}>
                        <Typography variant="subtitle2" sx={{ color: 'success.main', fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                          <TrendingUp fontSize="small" /> Impacto & Resultados
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {selectedProject.metrics}
                        </Typography>
                      </Box>
                    )}
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box sx={{ p: 3, backgroundColor: alpha(theme.palette.background.default, 0.5), borderRadius: 3, border: `1px solid ${theme.palette.divider}` }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                        Stack Tecnológico
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                        {selectedProject.technologies.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: alpha(theme.palette.primary.main, 0.1),
                              color: 'primary.main',
                              fontWeight: 600,
                              border: 'none'
                            }}
                          />
                        ))}
                      </Box>

                      <Stack spacing={2}>
                        {selectedProject.github && (
                          <Button
                            variant="contained"
                            fullWidth
                            startIcon={<GitHub />}
                            href={selectedProject.github}
                            target="_blank"
                            sx={{ py: 1.5, fontWeight: 700 }}
                          >
                            Ver Código
                          </Button>
                        )}
                        {selectedProject.demo && (
                          <Button
                            variant="outlined"
                            fullWidth
                            startIcon={<Launch />}
                            href={selectedProject.demo}
                            target="_blank"
                            sx={{ py: 1.5, fontWeight: 700 }}
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
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Projects;
