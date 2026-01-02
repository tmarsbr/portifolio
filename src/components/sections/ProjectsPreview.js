/**
 * ProjectsPreview aprimorado - Showcase moderno dos projetos em destaque
 * 
 * Melhorias implementadas:
 * - Cards redesenhados com hover effects aprimorados
 * - Thumbnails realistas com mockups
 * - Tags de tecnologias visualmente destacadas
 * - Hover effects que revelam botões de ação
 * - Layout em grid responsivo aprimorado
 * - Animações com Framer Motion
 * - Filtros por categoria com transições suaves
 * - Métricas de projeto destacadas
 * - Indicação clara de projeto em destaque
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
  Badge,
  Divider,
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
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

import { projects, projectsConfig } from '../../config/portfolio';

// Componente para card de projeto aprimorado
const ProjectCard = ({ project, index }) => {
  const { theme, darkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Ícones para categorias
  const getCategoryIcon = (category) => {
    const icons = {
      'Análise Exploratória': <Analytics />,
      'Engenharia de Dados': <Engineering />,
      'API & Web Scraping': <Code />,
      'Machine Learning': <TrendingUp />,
    };
    return icons[category] || <DataObject />;
  };

  // Cores para categorias
  const getCategoryColor = (category) => {
    const colors = {
      'Análise Exploratória': '#2196f3',
      'Engenharia de Dados': '#4caf50',
      'API & Web Scraping': '#ff9800',
      'Machine Learning': '#e91e63',
    };
    return colors[category] || theme.palette.primary.main;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          background: darkMode
            ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
          boxShadow: darkMode
            ? '0 4px 20px rgba(0, 0, 0, 0.3)'
            : '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: darkMode
              ? '0 20px 60px rgba(0, 0, 0, 0.5)'
              : '0 20px 60px rgba(0, 0, 0, 0.15)',
            border: `1px solid ${theme.palette.primary.main}`,
          },
        }}
      >
        {/* Badge de projeto em destaque */}
        {project.featured && (
          <Badge
            badgeContent={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, px: 1, py: 0.5 }}>
                <Star sx={{ fontSize: '0.8rem' }} />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  Destaque
                </Typography>
              </Box>
            }
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 2,
              '& .MuiBadge-badge': {
                backgroundColor: '#ffd700',
                color: '#000',
                borderRadius: 2,
                fontSize: '0.7rem',
              },
            }}
          />
        )}

        {/* Imagem/Thumbnail do projeto */}
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <CardMedia
            component="div"
            sx={{
              height: 200,
              background: project.image
                ? `url(${project.image}) center/cover`
                : `linear-gradient(45deg, ${getCategoryColor(project.category)} 30%, ${theme.palette.primary.main} 90%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.2)',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease',
              },
            }}
          >
            {/* Ícone da categoria quando não há imagem */}
            {!project.image && (
              <Box sx={{ color: 'white', fontSize: '4rem', opacity: 0.8 }}>
                {getCategoryIcon(project.category)}
              </Box>
            )}

            {/* Overlay com botões de ação */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    {project.github && (
                      <IconButton
                        component="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: 'text.primary',
                          '&:hover': {
                            backgroundColor: 'white',
                            transform: 'scale(1.1)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <GitHub />
                      </IconButton>
                    )}
                    {project.demo && (
                      <IconButton
                        component="a"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: 'text.primary',
                          '&:hover': {
                            backgroundColor: 'white',
                            transform: 'scale(1.1)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Launch />
                      </IconButton>
                    )}
                  </Stack>
                </motion.div>
              )}
            </AnimatePresence>
          </CardMedia>

          {/* Chip de categoria */}
          <Chip
            icon={getCategoryIcon(project.category)}
            label={project.category}
            size="small"
            sx={{
              position: 'absolute',
              bottom: 8,
              left: 8,
              backgroundColor: getCategoryColor(project.category),
              color: 'white',
              fontWeight: 500,
              '& .MuiChip-icon': {
                color: 'white',
              },
            }}
          />
        </Box>

        {/* Conteúdo do card */}
        <CardContent sx={{
          flex: 1,
          p: 3,
          backgroundColor: project.inDevelopment ? (darkMode ? 'rgba(156, 163, 175, 0.1)' : 'rgba(107, 114, 128, 0.05)') : 'transparent'
        }}>
          <Stack spacing={2} height="100%">
            {/* Frase de impacto */}
            {project.impactPhrase && (
              <Typography
                variant="caption"
                sx={{
                  color: project.inDevelopment ? 'text.disabled' : 'primary.main',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                  backgroundColor: project.inDevelopment
                    ? (darkMode ? 'rgba(156, 163, 175, 0.2)' : 'rgba(107, 114, 128, 0.1)')
                    : (darkMode ? 'rgba(100, 181, 246, 0.15)' : 'rgba(21, 101, 192, 0.1)'),
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  display: 'inline-block',
                }}
              >
                {project.impactPhrase}
              </Typography>
            )}

            {/* Título e data */}
            <Box>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: project.inDevelopment ? 'text.disabled' : 'text.primary',
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    backgroundColor: darkMode ? 'rgba(100, 181, 246, 0.1)' : 'rgba(21, 101, 192, 0.08)',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontWeight: 500,
                  }}
                >
                  {project.date}
                </Typography>
              </Stack>
            </Box>

            {/* Descrição */}
            <Typography
              variant="body2"
              sx={{
                color: project.inDevelopment ? 'text.disabled' : 'text.secondary',
                lineHeight: 1.6,
                flex: 1,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {project.description}
            </Typography>

            {/* Diagrama de Arquitetura */}
            {project.architectureDiagramImage && (
              <Box
                sx={{
                  backgroundColor: darkMode ? 'rgba(100, 181, 246, 0.05)' : 'rgba(21, 101, 192, 0.05)',
                  borderRadius: 2,
                  p: 2,
                  border: `1px solid ${darkMode ? 'rgba(100, 181, 246, 0.2)' : 'rgba(21, 101, 192, 0.1)'}`,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    mb: 1.5,
                    display: 'block',
                  }}
                >
                  🏛️ Arquitetura do Projeto
                </Typography>
                <Box
                  component="img"
                  src={project.architectureDiagramImage}
                  alt={`Arquitetura - ${project.title}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 1,
                    backgroundColor: 'white',
                    p: 1,
                    boxShadow: darkMode
                      ? '0 2px 8px rgba(0, 0, 0, 0.3)'
                      : '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Box>
            )}

            {/* Métricas do projeto */}
            {project.metrics && (
              <Box
                sx={{
                  backgroundColor: darkMode ? 'rgba(100, 181, 246, 0.05)' : 'rgba(21, 101, 192, 0.05)',
                  borderRadius: 2,
                  p: 1.5,
                  border: `1px solid ${darkMode ? 'rgba(100, 181, 246, 0.2)' : 'rgba(21, 101, 192, 0.1)'}`,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <TrendingUp sx={{ fontSize: '1rem', color: 'primary.main' }} />
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                    }}
                  >
                    {project.metrics}
                  </Typography>
                </Stack>
              </Box>
            )}

            <Divider sx={{ my: 1 }} />

            {/* Tecnologias */}
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 600,
                  mb: 1,
                  display: 'block',
                }}
              >
                🛠️ Tecnologias:
              </Typography>
              <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <Chip
                    key={techIndex}
                    label={tech}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: '0.7rem',
                      height: 24,
                      borderColor: project.inDevelopment ? 'text.disabled' : 'primary.main',
                      color: project.inDevelopment ? 'text.disabled' : 'primary.main',
                      '&:hover': {
                        backgroundColor: project.inDevelopment ? 'transparent' : 'primary.main',
                        color: project.inDevelopment ? 'text.disabled' : 'white',
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
                      fontSize: '0.7rem',
                      height: 24,
                      backgroundColor: 'text.secondary',
                      color: 'white',
                    }}
                  />
                )}
              </Stack>
            </Box>

            {/* Botões CTA */}
            <Box sx={{ mt: 'auto', pt: 2 }}>
              {project.inDevelopment ? (
                <Button
                  disabled
                  fullWidth
                  variant="outlined"
                  startIcon={<Engineering />}
                  sx={{
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 600,
                    color: 'text.disabled',
                    borderColor: 'text.disabled',
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
                      sx={{
                        flex: 1,
                        py: 1,
                        textTransform: 'none',
                        fontWeight: 600,
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    >
                      Ver Código
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      component="a"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      startIcon={<Launch />}
                      size="small"
                      sx={{
                        flex: 1,
                        py: 1,
                        textTransform: 'none',
                        fontWeight: 600,
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                  {!project.github && !project.demo && (
                    <Button
                      disabled
                      fullWidth
                      variant="outlined"
                      startIcon={<Visibility />}
                      sx={{
                        py: 1,
                        textTransform: 'none',
                        fontWeight: 600,
                      }}
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

const ProjectsPreview = () => {
  const { theme, darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Definir categorias com seus ícones e cores
  const categories = [
    {
      key: 'all',
      label: 'Todos',
      icon: <DataObject />,
      color: theme.palette.primary.main,
    },
    {
      key: 'Engenharia de Dados',
      label: 'Engenharia de Dados',
      icon: <Engineering />,
      color: '#4caf50',
    },
    {
      key: 'API & Scraping',
      label: 'API & Scraping',
      icon: <Code />,
      color: '#ff9800',
    },
  ];

  // Função para filtrar projetos por categoria (excluindo Análise de Dados)
  const visibleProjects = projects.filter(project => !project.hidden && project.category !== 'Análise de Dados');

  const filteredProjects = selectedCategory === 'all'
    ? visibleProjects.slice(0, projectsConfig.maxProjects) // Mostrar apenas projetos configurados na home
    : visibleProjects
      .filter(project => project.category === selectedCategory)
      .slice(0, projectsConfig.maxProjects);

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        background: darkMode
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(to bottom, rgb(241, 245, 249) 0%, white 50%, rgb(248, 250, 252) 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: darkMode ? 'none' : '1px solid rgb(226, 232, 240)',
        transition: 'all 0.3s ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: darkMode
            ? 'radial-gradient(ellipse at top, rgba(100, 181, 246, 0.05) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at top, rgba(21, 101, 192, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                letterSpacing: '-0.02em',
              }}
            >
              {projectsConfig.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                mb: 6,
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              {projectsConfig.description}
            </Typography>

            {/* Filtros por categoria aprimorados */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 1,
                  mb: 6,
                }}
              >
                {categories.map((category, index) => (
                  <motion.div
                    key={category.key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => setSelectedCategory(category.key)}
                      startIcon={category.icon}
                      variant={selectedCategory === category.key ? 'contained' : 'outlined'}
                      sx={{
                        minWidth: 'auto',
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        px: 3,
                        py: 1.5,
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        ...(selectedCategory === category.key ? {
                          background: `linear-gradient(45deg, ${category.color} 30%, ${theme.palette.primary.main} 90%)`,
                          color: 'white',
                          border: 'none',
                          boxShadow: `0 4px 15px ${category.color}30`,
                        } : {
                          borderColor: category.color,
                          color: category.color,
                          '&:hover': {
                            backgroundColor: `${category.color}10`,
                            borderColor: category.color,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 4px 15px ${category.color}20`,
                          },
                        }),
                      }}
                    >
                      {category.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={4}>
              {filteredProjects.map((project, index) => (
                <Grid item xs={12} md={6} lg={4} key={`${selectedCategory}-${index}`}>
                  <ProjectCard project={project} index={index} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action aprimorado */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: 'text.primary',
                fontWeight: 600,
              }}
            >
              Gostou dos projetos?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: 400,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Explore a coleção completa de projetos e veja o processo de desenvolvimento
              de cada análise
            </Typography>
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: 3,
                background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                boxShadow: '0 4px 20px rgba(33, 150, 243, 0.3)',
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 30px rgba(33, 150, 243, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Ver Todos os Projetos
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProjectsPreview;
