import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Chip,
  Button,
  Modal,
  IconButton,
  CardMedia,
  Stack,
} from '@mui/material';
import { Close, School, EmojiEvents } from '@mui/icons-material';
import { Helmet } from 'react-helmet';
import { personalInfo, certificates, certificationStats } from '../config/portfolio';

/* ── glass tokens ───────────────────────────────────── */
const glass = {
  background: 'rgba(255,255,255,0.03)',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 3,
};

const neonBtn = (c) => ({
  fontFamily: '"IBM Plex Mono",monospace',
  fontWeight: 700,
  border: `1px solid ${c}`,
  color: c,
  background: 'transparent',
  transition: 'all .3s',
  '&:hover': { background: `${c}22`, boxShadow: `0 0 14px ${c}55` },
});

const statColors = ['#007bff', '#00d4ff', '#a855f7'];

// sobre
const About = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <Helmet>
        <title>Sobre - {personalInfo.name} | Data & Analytics</title>
        <meta name="description" content={`Conheça a trajetória de ${personalInfo.name}, da precisão mecânica à análise de dados.`} />
        <meta property="og:title" content={`Sobre ${personalInfo.name} - Data & Analytics Specialist`} />
        <meta property="og:description" content="História de transição de carreira da usinagem para Data & Analytics." />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────── */}
      <Box sx={{ pt: { xs: 12, md: 16 }, pb: { xs: 8, md: 12 }, position: 'relative' }}>
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
                    border: '4px solid #007bff',
                    boxShadow: '0 0 40px rgba(0,123,255,0.25)',
                    backgroundColor: personalInfo.avatar ? 'transparent' : '#007bff',
                    fontSize: '4rem',
                    fontWeight: 600,
                  }}
                >
                  {!personalInfo.avatar && personalInfo.name.charAt(0)}
                </Avatar>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"IBM Plex Mono",monospace',
                    fontWeight: 700,
                    mb: 1,
                    background: 'linear-gradient(135deg,#007bff 30%,#00d4ff 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {personalInfo.name}
                </Typography>
                <Typography variant="h6" sx={{ color: '#94a3b8', mb: 2, fontWeight: 500 }}>
                  {personalInfo.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
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
                    color: '#007bff',
                    fontFamily: '"IBM Plex Mono",monospace',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 2,
                    mb: 2,
                  }}
                >
                  Minha História
                </Typography>

                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontFamily: '"IBM Plex Mono",monospace',
                    fontWeight: 700,
                    mb: 4,
                    color: '#e2e8f0',
                    lineHeight: 1.2,
                    background: 'linear-gradient(135deg,#007bff,#a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Da Oficina para os Dados
                </Typography>

                {personalInfo.aboutDescription.split('\n\n').map((paragraph, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{ color: '#94a3b8', mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Certificações ────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontFamily: '"IBM Plex Mono",monospace',
                fontWeight: 700,
                mb: 3,
                background: 'linear-gradient(135deg,#007bff,#00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Certificações & Especializações
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: 700, mx: 'auto', lineHeight: 1.7 }}
            >
              <strong style={{ color: '#e2e8f0' }}>550 horas</strong> de formação intensiva e prática em Engenharia de Dados,
              Ciência de Dados e Analytics — da coleta e processamento até modelagem preditiva e visualização.
            </Typography>
          </Box>

          {/* Stats */}
          <Box sx={{ mb: 6, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }} data-aos="fade-up">
            {[
              { value: `${certificationStats.totalHours}h`, label: 'Total de Formação' },
              { value: certificationStats.totalCertificates, label: 'Certificações Concluídas' },
              { value: `${certificationStats.technologies}+`, label: 'Tecnologias Dominadas' },
            ].map((s, i) => {
              const c = statColors[i];
              return (
                <Box
                  key={i}
                  sx={{
                    ...glass,
                    p: 3,
                    textAlign: 'center',
                    minWidth: 200,
                    border: `1px solid ${c}33`,
                    transition: 'all .3s',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: `0 0 20px ${c}33`, borderColor: `${c}88` },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontFamily: '"IBM Plex Mono",monospace', fontWeight: 700, color: c, mb: 1 }}
                  >
                    {s.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#94a3b8', fontWeight: 600 }}>{s.label}</Typography>
                </Box>
              );
            })}
          </Box>

          {/* Cards */}
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
                <Box
                  sx={{
                    ...glass,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    transition: 'all .3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 0 30px rgba(0,123,255,0.15)',
                      borderColor: 'rgba(0,123,255,0.3)',
                    },
                  }}
                >
                  <Box sx={{ height: 160, overflow: 'hidden', position: 'relative', backgroundColor: '#0d1117' }}>
                    <Box
                      component="img"
                      src={cert.image}
                      alt={cert.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform .5s',
                        '&:hover': { transform: 'scale(1.05)' },
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
                          fontFamily: '"IBM Plex Mono",monospace',
                          fontSize: '0.7rem',
                          backgroundColor: '#007bff',
                          color: '#fff',
                          alignSelf: 'flex-start',
                        }}
                      />
                    )}
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#007bff',
                        fontFamily: '"IBM Plex Mono",monospace',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        mb: 1,
                        display: 'block',
                      }}
                    >
                      {cert.institution} • {cert.duration}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mb: 2, fontSize: '1rem', lineHeight: 1.4, flex: 1, color: '#e2e8f0' }}
                    >
                      {cert.title}
                    </Typography>

                    {cert.description && (
                      <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2, lineHeight: 1.6 }}>
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
                            backgroundColor: 'rgba(255,255,255,0.06)',
                            color: '#94a3b8',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}
                        />
                      ))}
                    </Box>

                    <Stack spacing={1} sx={{ mt: 'auto' }}>
                      <Button
                        fullWidth
                        size="small"
                        onClick={() => setSelectedCertificate(cert)}
                        sx={{
                          ...neonBtn('#007bff'),
                          background: '#007bff',
                          color: '#fff',
                          '&:hover': { background: '#007bff', boxShadow: '0 0 18px rgba(0,123,255,0.5)' },
                        }}
                      >
                        Ver Detalhes
                      </Button>
                      <Button fullWidth size="small" href={cert.pdf} target="_blank" sx={neonBtn('#00d4ff')}>
                        Baixar PDF
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Modal ────────────────────────────────────── */}
      <Modal
        open={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, backdropFilter: 'blur(12px)' }}
      >
        <Box
          sx={{
            ...glass,
            background: '#0d1117',
            border: '1px solid rgba(0,123,255,0.15)',
            maxWidth: 900,
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            '&::-webkit-scrollbar': { width: 6 },
            '&::-webkit-scrollbar-thumb': { background: '#007bff55', borderRadius: 3 },
          }}
        >
          {selectedCertificate && (
            <>
              {/* Header image */}
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
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(5,10,20,0.3), rgba(5,10,20,0.85))',
                  }}
                />
                <IconButton
                  onClick={() => setSelectedCertificate(null)}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    ...glass,
                    color: '#e2e8f0',
                    '&:hover': { background: 'rgba(255,255,255,0.1)' },
                  }}
                >
                  <Close />
                </IconButton>
                <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                  {selectedCertificate.badge && (
                    <Chip
                      label={selectedCertificate.badge}
                      sx={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        fontWeight: 700,
                        fontFamily: '"IBM Plex Mono",monospace',
                        mb: 2,
                      }}
                    />
                  )}
                  <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', mb: 1 }}>
                    {selectedCertificate.institution} • {selectedCertificate.duration}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#e2e8f0',
                      fontFamily: '"IBM Plex Mono",monospace',
                      fontWeight: 800,
                      textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                    }}
                  >
                    {selectedCertificate.title}
                  </Typography>
                </Box>
              </Box>

              {/* Body */}
              <Box sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"IBM Plex Mono",monospace',
                    fontWeight: 700,
                    color: '#e2e8f0',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <School fontSize="small" sx={{ color: '#007bff' }} /> Sobre a Formação
                </Typography>
                <Typography variant="body1" sx={{ color: '#94a3b8', lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}>
                  {selectedCertificate.description}
                </Typography>

                {selectedCertificate.modules && (
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"IBM Plex Mono",monospace',
                        fontWeight: 700,
                        color: '#e2e8f0',
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <EmojiEvents fontSize="small" sx={{ color: '#007bff' }} /> Módulos da Formação
                    </Typography>
                    <Grid container spacing={2}>
                      {selectedCertificate.modules.map((mod, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                          <Box
                            sx={{
                              ...glass,
                              p: 2,
                              background: 'rgba(0,123,255,0.06)',
                              border: '1px solid rgba(0,123,255,0.12)',
                            }}
                          >
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#e2e8f0' }}>
                              • {mod}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}

                {selectedCertificate.keyTopics && (
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"IBM Plex Mono",monospace',
                        fontWeight: 700,
                        color: '#e2e8f0',
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <EmojiEvents fontSize="small" sx={{ color: '#00d4ff' }} /> Tópicos Principais
                    </Typography>
                    <Grid container spacing={2}>
                      {selectedCertificate.keyTopics.map((topic, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                          <Box
                            sx={{
                              ...glass,
                              p: 2,
                              background: 'rgba(0,212,255,0.06)',
                              border: '1px solid rgba(0,212,255,0.12)',
                            }}
                          >
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#e2e8f0' }}>
                              • {topic}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}

                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: '"IBM Plex Mono",monospace', fontWeight: 700, color: '#e2e8f0', mb: 2 }}
                  >
                    Habilidades Desenvolvidas
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedCertificate.skills.map((skill, i) => (
                      <Chip
                        key={i}
                        label={skill}
                        sx={{
                          fontWeight: 600,
                          backgroundColor: 'rgba(255,255,255,0.06)',
                          color: '#94a3b8',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                <Stack spacing={2}>
                  <Button
                    fullWidth
                    href={selectedCertificate.pdf}
                    target="_blank"
                    startIcon={<School />}
                    sx={{
                      ...neonBtn('#007bff'),
                      py: 1.5,
                      background: '#007bff',
                      color: '#fff',
                      '&:hover': { background: '#007bff', boxShadow: '0 0 18px rgba(0,123,255,0.5)' },
                    }}
                  >
                    Baixar Certificado (PDF)
                  </Button>
                  <Button
                    fullWidth
                    onClick={() => setSelectedCertificate(null)}
                    sx={{ ...neonBtn('#94a3b8'), py: 1.5 }}
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
