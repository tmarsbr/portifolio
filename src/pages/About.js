import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Paper,
  Chip,
  Button,
  useTheme,
  Modal,
  IconButton,
  CardMedia,
  Stack,
  alpha,
} from '@mui/material';
import { Close, School, EmojiEvents, CalendarToday } from '@mui/icons-material';
import { Helmet } from 'react-helmet';

import { personalInfo, certificates, certificationStats } from '../config/portfolio';


/**
 * About - Página "Sobre"
 *
 * Apresenta a trajetória profissional e as principais habilidades do autor.
 *
 * Funcionalidades:
 * - Seções com história, qualidades e evolução profissional
 * - Uso de animações e responsividade
 * - Metadados para SEO via react-helmet
 *
 * @component
 * @example
 * return (
 *   <About />
 * )
 */
const About = () => {
  const theme = useTheme();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpenCertificate = (cert) => {
    setSelectedCertificate(cert);
  };

  const handleCloseCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <Helmet>
        <title>Sobre - {personalInfo.name} | Data & Analytics</title>
        <meta name="description" content={`Conheça a trajetória de ${personalInfo.name}, da precisão mecânica à análise de dados. História de transição de carreira e especialização em Data & Analytics.`} />
        <meta property="og:title" content={`Sobre ${personalInfo.name} - Data & Analytics Specialist`} />
        <meta property="og:description" content="História de transição de carreira da usinagem para Data & Analytics, combinando precisão técnica com análise de dados." />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }} data-aos="fade-right">
                <Avatar
                  src={personalInfo.avatar || undefined}
                  alt={personalInfo.name}
                  sx={{
                    width: { xs: 200, md: 280 },
                    height: { xs: 200, md: 280 },
                    mx: 'auto',
                    mb: 3,
                    border: `4px solid ${theme.palette.primary.main}`,
                    boxShadow: theme.shadows[8],
                    backgroundColor: personalInfo.avatar ? 'transparent' : 'primary.main',
                    fontSize: '4rem',
                    fontWeight: 600,
                  }}
                >
                  {!personalInfo.avatar && personalInfo.name.charAt(0)}
                </Avatar>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {personalInfo.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    mb: 2,
                    fontWeight: 500,
                  }}
                >
                  {personalInfo.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                  }}
                >
                  📍 {personalInfo.location}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Box data-aos="fade-left">
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    mb: 2,
                  }}
                >
                  Minha História
                </Typography>

                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 4,
                    color: 'text.primary',
                    lineHeight: 1.2,
                  }}
                >
                  Da Oficina para os Dados
                </Typography>

                <Box sx={{ '& p': { mb: 3, fontSize: '1.1rem', lineHeight: 1.7 } }}>
                  {personalInfo.aboutDescription.split('\n\n').map((paragraph, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>


      {/* Certificações */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Certificações & Especializações
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              <strong>550 horas</strong> de formação intensiva e prática em Engenharia de Dados, Ciência de Dados e Analytics. Certificações que validam domínio end-to-end: da coleta e processamento de dados até modelagem preditiva e visualização de resultados.
            </Typography>
          </Box>

          {/* Estatísticas de Formação */}
          <Box
            sx={{
              mb: 6,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 3,
            }}
            data-aos="fade-up"
          >
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                border: `2px solid ${theme.palette.primary.main}`,
                textAlign: 'center',
                minWidth: 200,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                {certificationStats.totalHours}h
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Total de Formação
              </Typography>
            </Paper>

            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                border: `2px solid ${theme.palette.secondary.main}`,
                textAlign: 'center',
                minWidth: 200,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'secondary.main', mb: 1 }}>
                {certificationStats.totalCertificates}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Certificações Concluídas
              </Typography>
            </Paper>

            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                border: `2px solid ${theme.palette.info.main}`,
                textAlign: 'center',
                minWidth: 200,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'info.main', mb: 1 }}>
                {certificationStats.technologies}+
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Tecnologias Dominadas
              </Typography>
            </Paper>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {certificates.map((cert, index) => (
              <Grid
                item
                xs={12}
                sm={cert.highlight ? 12 : 6}
                md={cert.highlight ? 12 : 6}
                lg={cert.highlight ? 12 : 4}
                key={cert.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Paper
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 160,
                      overflow: 'hidden',
                      position: 'relative',
                      backgroundColor: 'background.paper',
                    }}
                  >
                    <Box
                      component="img"
                      src={cert.image}
                      alt={cert.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {cert.badge && (
                      <Chip
                        label={cert.badge}
                        size="small"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          backgroundColor: 'primary.main',
                          color: 'white',
                          alignSelf: 'flex-start',
                        }}
                      />
                    )}
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        mb: 1,
                        display: 'block',
                      }}
                    >
                      {cert.institution} • {cert.duration}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: '1rem',
                        lineHeight: 1.4,
                        flex: 1,
                      }}
                    >
                      {cert.title}
                    </Typography>

                    {cert.description && (
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          mb: 2,
                          lineHeight: 1.6,
                        }}
                      >
                        {cert.description}
                      </Typography>
                    )}

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 3 }}>
                      {cert.skills.slice(0, cert.highlight ? 8 : 5).map((skill, i) => (
                        <Chip
                          key={i}
                          label={skill}
                          size="small"
                          sx={{
                            height: 22,
                            fontSize: '0.7rem',
                            backgroundColor: theme.palette.action.hover,
                          }}
                        />
                      ))}
                    </Box>

                    <Stack spacing={1} sx={{ mt: 'auto' }}>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleOpenCertificate(cert)}
                        size="small"
                      >
                        Ver Detalhes
                      </Button>
                      <Button
                        variant="outlined"
                        fullWidth
                        href={cert.pdf}
                        target="_blank"
                        size="small"
                      >
                        Baixar PDF
                      </Button>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Modal de Detalhes do Certificado */}
      <Modal
        open={!!selectedCertificate}
        onClose={handleCloseCertificate}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, backdropFilter: 'blur(5px)' }}
      >
        <Box
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 3,
            maxWidth: 900,
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: 24,
            position: 'relative',
          }}
        >
          {selectedCertificate && (
            <>
              <Box sx={{ position: 'relative', height: 300 }}>
                <CardMedia
                  component="img"
                  image={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  sx={{ height: '100%', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                  }}
                />
                <IconButton
                  onClick={handleCloseCertificate}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    '&:hover': { backgroundColor: 'white' },
                  }}
                >
                  <Close />
                </IconButton>
                <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                  {selectedCertificate.badge && (
                    <Chip
                      label={selectedCertificate.badge}
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        fontWeight: 700,
                        mb: 2,
                      }}
                    />
                  )}
                  <Typography variant="caption" sx={{ color: 'white', display: 'block', mb: 1, opacity: 0.9 }}>
                    {selectedCertificate.institution} • {selectedCertificate.duration}
                  </Typography>
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                    {selectedCertificate.title}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <School fontSize="small" color="primary" /> Sobre a Formação
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}>
                  {selectedCertificate.description}
                </Typography>

                {selectedCertificate.modules && (
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <EmojiEvents fontSize="small" color="primary" /> Módulos da Formação
                    </Typography>
                    <Grid container spacing={2}>
                      {selectedCertificate.modules.map((module, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                          <Paper
                            sx={{
                              p: 2,
                              backgroundColor: alpha(theme.palette.primary.main, 0.05),
                              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                            }}
                          >
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              • {module}
                            </Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}

                {selectedCertificate.keyTopics && (
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <EmojiEvents fontSize="small" color="primary" /> Tópicos Principais
                    </Typography>
                    <Grid container spacing={2}>
                      {selectedCertificate.keyTopics.map((topic, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                          <Paper
                            sx={{
                              p: 2,
                              backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                              border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
                            }}
                          >
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              • {topic}
                            </Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Habilidades Desenvolvidas
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedCertificate.skills.map((skill, i) => (
                      <Chip
                        key={i}
                        label={skill}
                        sx={{
                          backgroundColor: theme.palette.action.hover,
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    href={selectedCertificate.pdf}
                    target="_blank"
                    startIcon={<School />}
                    sx={{ py: 1.5, fontWeight: 700 }}
                  >
                    Baixar Certificado (PDF)
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleCloseCertificate}
                    sx={{ py: 1.5, fontWeight: 700 }}
                  >
                    Fechar
                  </Button>
                </Stack>
              </Box>
            </>
          )}
        </Box>
      </Modal>

    </>
  );
};

export default About;
