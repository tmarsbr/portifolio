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
  Modal,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Fade,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import {
  Close,
  School,
  Verified,
  Download,
  Search,
  AccessTime,
  ZoomIn,
} from '@mui/icons-material';

import { certificates, personalInfo } from '../config/portfolio';

/* ── glass base ──────────────────────────────────────── */
const glass = {
  background: 'rgba(255,255,255,0.03)',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '16px',
};

/* ── glass input sx ──────────────────────────────────── */
const glassInputSx = {
  '& .MuiOutlinedInput-root': {
    background: 'rgba(255,255,255,0.04)',
    color: '#e2e8f0',
    borderRadius: '12px',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.08)' },
    '&:hover fieldset': { borderColor: 'rgba(0,123,255,0.4)' },
    '&.Mui-focused fieldset': { borderColor: '#007bff' },
  },
  '& .MuiInputBase-input::placeholder': { color: '#64748b', opacity: 1 },
};

/**
 * Certificacoes — página completa (glass dark design)
 */
const Certificacoes = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = [
    'all',
    ...new Set(certificates.flatMap((c) => c.skills || []).filter(Boolean).sort()),
  ];

  const filteredCertificates = certificates.filter((cert) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      cert.title.toLowerCase().includes(q) ||
      cert.institution.toLowerCase().includes(q) ||
      (cert.skills && cert.skills.some((s) => s.toLowerCase().includes(q)));
    const matchesCat = categoryFilter === 'all' || (cert.skills && cert.skills.includes(categoryFilter));
    return matchesSearch && matchesCat;
  });

  return (
    <>
      <Helmet>
        <title>Certificações - {personalInfo.name} | Data & Analytics</title>
        <meta name="description" content={`Todas as certificações e cursos de ${personalInfo.name}.`} />
      </Helmet>

      {/* ── Hero ──────────────────────────────────────── */}
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
        {/* radial glows */}
        <Box sx={{ position: 'absolute', top: '10%', right: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,123,255,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <Box sx={{ position: 'absolute', bottom: '5%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            {/* code label */}
            <Typography sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.75rem', fontWeight: 600, letterSpacing: 3, color: '#007bff', mb: 2 }}>
              {'// certificações'}
            </Typography>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2rem', md: '3.2rem' },
              }}
            >
              <Box component="span" sx={{ color: '#e2e8f0' }}>Todas as </Box>
              <Box
                component="span"
                sx={{ background: 'linear-gradient(135deg, #007bff 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                Certificações
              </Box>
            </Typography>

            <Typography sx={{ fontSize: '1.05rem', color: '#94a3b8', maxWidth: 700, mx: 'auto', lineHeight: 1.7, mb: 5 }}>
              Jornada de aprendizado contínuo com cursos e certificações que fundamentam
              minha expertise em Data & Analytics.
            </Typography>

            {/* stats */}
            <Grid container spacing={4} sx={{ mt: 2, maxWidth: 650, mx: 'auto' }}>
              {[
                { n: certificates.length, l: 'Certificações', c: '#007bff' },
                { n: categories.length - 1, l: 'Áreas', c: '#00d4ff' },
                { n: '2+', l: 'Anos', c: '#a855f7' },
              ].map((s, i) => (
                <Grid item xs={4} key={i}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: s.c, mb: 0.5, fontFamily: '"IBM Plex Mono", monospace' }}>
                    {s.n}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>{s.l}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* ── Filters ──────────────────────────────────── */}
      <Box
        sx={{
          py: 3,
          background: 'rgba(5,10,20,0.85)',
          backdropFilter: 'blur(14px)',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: { md: 'center' } }}>
            <TextField
              placeholder="Buscar certificações…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outlined"
              size="small"
              sx={{ flex: 1, maxWidth: { md: 400 }, ...glassInputSx }}
              InputProps={{ startAdornment: <Search sx={{ mr: 1, color: '#64748b' }} /> }}
            />

            <FormControl size="small" sx={{ minWidth: 200 }}>
              <InputLabel sx={{ color: '#64748b', '&.Mui-focused': { color: '#007bff' } }}>
                Área de Estudo
              </InputLabel>
              <Select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                label="Área de Estudo"
                sx={{
                  background: 'rgba(255,255,255,0.04)',
                  color: '#e2e8f0',
                  borderRadius: '12px',
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.08)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0,123,255,0.4)' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#007bff' },
                  '& .MuiSvgIcon-root': { color: '#64748b' },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      background: '#0d1117',
                      border: '1px solid rgba(255,255,255,0.08)',
                      '& .MuiMenuItem-root': {
                        color: '#e2e8f0',
                        '&:hover': { background: 'rgba(0,123,255,0.1)' },
                        '&.Mui-selected': { background: 'rgba(0,123,255,0.15)', '&:hover': { background: 'rgba(0,123,255,0.2)' } },
                      },
                    },
                  },
                }}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat === 'all' ? 'Todas as Áreas' : cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Typography
            variant="body2"
            sx={{ mt: 2, color: '#64748b', textAlign: 'center', fontWeight: 500, fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.8rem' }}
          >
            {filteredCertificates.length === certificates.length
              ? `Mostrando todas as ${certificates.length} certificações`
              : `${filteredCertificates.length} de ${certificates.length} encontradas`}
          </Typography>
        </Container>
      </Box>

      {/* ── Grid ─────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, minHeight: '60vh' }}>
        <Container maxWidth="lg">
          {filteredCertificates.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 10 }}>
              <Typography variant="h5" sx={{ color: '#94a3b8', mb: 2, fontWeight: 600 }}>Nenhuma certificação encontrada</Typography>
              <Typography variant="body1" sx={{ color: '#64748b', mb: 3 }}>Tente ajustar os filtros ou termos de busca</Typography>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {filteredCertificates.map((certificate) => (
                <Grid item xs={12} sm={6} md={4} key={certificate.id}>
                  <Card
                    onClick={() => setSelectedCertificate(certificate)}
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      ...glass,
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'all .35s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0,123,255,0.12)',
                        borderColor: 'rgba(0,123,255,0.35)',
                        '& .certificate-image': { transform: 'scale(1.06)' },
                        '& .zoom-icon': { opacity: 1 },
                      },
                    }}
                  >
                    {/* image */}
                    {certificate.image ? (
                      <CardMedia
                        component="img"
                        className="certificate-image"
                        sx={{ height: 200, maxHeight: 300, objectFit: 'cover', transition: 'transform .4s ease', backgroundColor: '#0d1117' }}
                        image={certificate.image}
                        alt={certificate.title}
                      />
                    ) : (
                      <Box sx={{ height: 200, background: '#0d1117', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 2 }}>
                        <School sx={{ fontSize: 48, color: '#007bff', opacity: 0.6 }} />
                        <Typography variant="body2" sx={{ color: '#64748b', textAlign: 'center', px: 2 }}>Certificado</Typography>
                      </Box>
                    )}

                    {/* zoom icon */}
                    <Box className="zoom-icon" sx={{ position: 'absolute', top: 10, right: 10, opacity: 0, transition: 'opacity .3s ease' }}>
                      <IconButton size="small" sx={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', color: '#e2e8f0', '&:hover': { background: 'rgba(0,123,255,0.3)' } }}>
                        <ZoomIn sx={{ fontSize: 18 }} />
                      </IconButton>
                    </Box>

                    <CardContent sx={{ p: 3, flex: 1 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700, mb: 2, color: '#e2e8f0', lineHeight: 1.3,
                          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                        }}
                      >
                        {certificate.title}
                      </Typography>

                      <Typography variant="subtitle1" sx={{ color: '#007bff', fontWeight: 600, mb: 2, fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.9rem' }}>
                        {certificate.institution}
                      </Typography>

                      {/* chips */}
                      <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                        <Chip
                          label={certificate.year}
                          size="small"
                          icon={<Verified sx={{ fontSize: 14, color: '#00e676 !important' }} />}
                          sx={{ background: 'rgba(0,230,118,0.12)', color: '#00e676', fontWeight: 600, fontSize: '0.72rem', border: '1px solid rgba(0,230,118,0.2)' }}
                        />
                        {certificate.duration && (
                          <Chip
                            label={certificate.duration}
                            size="small"
                            icon={<AccessTime sx={{ fontSize: 14, color: '#94a3b8 !important' }} />}
                            sx={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8', fontWeight: 600, fontSize: '0.72rem', border: '1px solid rgba(255,255,255,0.08)' }}
                          />
                        )}
                      </Box>

                      {/* skills */}
                      {certificate.skills?.length > 0 && (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                          {certificate.skills.slice(0, 3).map((skill, i) => (
                            <Chip
                              key={i}
                              label={skill}
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: 'rgba(255,255,255,0.08)',
                                color: '#94a3b8',
                                fontSize: '0.68rem',
                                fontFamily: '"IBM Plex Mono", monospace',
                                transition: 'all .25s ease',
                                '&:hover': { borderColor: '#007bff', color: '#007bff' },
                              }}
                            />
                          ))}
                          {certificate.skills.length > 3 && (
                            <Chip
                              label={`+${certificate.skills.length - 3}`}
                              size="small"
                              sx={{ background: 'rgba(255,255,255,0.05)', color: '#64748b', fontSize: '0.68rem', border: '1px solid rgba(255,255,255,0.06)' }}
                            />
                          )}
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* ── Detail Modal ─────────────────────────────── */}
      <Modal
        open={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, backdropFilter: 'blur(6px)' }}
      >
        <Fade in={!!selectedCertificate}>
          <Box
            sx={{
              background: 'rgba(13,17,23,0.96)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
              outline: 'none',
              maxWidth: '90vw',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              '&::-webkit-scrollbar': { width: 6 },
              '&::-webkit-scrollbar-track': { background: 'transparent' },
              '&::-webkit-scrollbar-thumb': { background: 'rgba(255,255,255,0.08)', borderRadius: 3 },
            }}
          >
            {selectedCertificate && (
              <>
                {/* close */}
                <IconButton
                  onClick={() => setSelectedCertificate(null)}
                  sx={{
                    position: 'absolute', top: 16, right: 16, zIndex: 10,
                    background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', color: '#e2e8f0',
                    '&:hover': { background: 'rgba(255,45,120,0.25)', color: '#ff2d78' },
                  }}
                >
                  <Close />
                </IconButton>

                {/* image */}
                {selectedCertificate.image && (
                  <Box sx={{ width: '100%', maxWidth: 800, background: '#0d1117', borderRadius: '20px 20px 0 0', overflow: 'hidden' }}>
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      style={{ width: '100%', height: 'auto', maxHeight: '60vh', objectFit: 'contain', display: 'block' }}
                    />
                  </Box>
                )}

                {/* info */}
                <Box sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                    <School sx={{ fontSize: 32, color: '#007bff', mt: 0.5 }} />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h4" component="h2" sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 700, color: '#e2e8f0', mb: 1, lineHeight: 1.2 }}>
                        {selectedCertificate.title}
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#007bff', fontWeight: 600, fontFamily: '"IBM Plex Mono", monospace' }}>
                        {selectedCertificate.institution}
                      </Typography>
                    </Box>
                  </Box>

                  {/* chips */}
                  <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<Verified sx={{ color: '#00e676 !important' }} />}
                      label={`Concluído em ${selectedCertificate.year}`}
                      sx={{ background: 'rgba(0,230,118,0.12)', color: '#00e676', fontWeight: 600, border: '1px solid rgba(0,230,118,0.2)' }}
                    />
                    {selectedCertificate.duration && (
                      <Chip
                        icon={<AccessTime sx={{ color: '#94a3b8 !important' }} />}
                        label={selectedCertificate.duration}
                        sx={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8', fontWeight: 600, border: '1px solid rgba(255,255,255,0.08)' }}
                      />
                    )}
                  </Box>

                  {/* skills */}
                  {selectedCertificate.skills?.length > 0 && (
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle1" sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 600, color: '#cbd5e1', mb: 2 }}>
                        Competências Desenvolvidas:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {selectedCertificate.skills.map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill}
                            variant="outlined"
                            sx={{
                              borderColor: 'rgba(0,123,255,0.3)',
                              color: '#007bff',
                              fontFamily: '"IBM Plex Mono", monospace',
                              fontSize: '0.78rem',
                              transition: 'all .25s ease',
                              '&:hover': { background: 'rgba(0,123,255,0.1)', borderColor: '#007bff' },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}

                  {/* download */}
                  {selectedCertificate.pdf && (
                    <Button
                      startIcon={<Download />}
                      onClick={() => window.open(selectedCertificate.pdf, '_blank')}
                      sx={{
                        fontFamily: '"IBM Plex Mono", monospace',
                        fontWeight: 600,
                        textTransform: 'none',
                        border: '1.5px solid #007bff',
                        color: '#007bff',
                        borderRadius: '10px',
                        px: 3,
                        py: 1.3,
                        transition: 'all .3s ease',
                        '&:hover': { background: 'rgba(0,123,255,0.12)', boxShadow: '0 0 22px rgba(0,123,255,0.25)' },
                      }}
                    >
                      Baixar Certificado PDF
                    </Button>
                  )}
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Certificacoes;
