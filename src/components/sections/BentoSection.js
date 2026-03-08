/**
 * BentoSection â€” asymmetric bento-grid showcase between stats and projects
 *
 * Layout (3 cols Ã— 2 rows):
 *   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
 *   â”‚  Philosophy  â”‚  Stack     â”‚
 *   â”‚  (col 1-2)   â”‚  (row 1-2) â”‚
 *   â”œâ”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¤            â”‚
 *   â”‚Status â”‚Stats â”‚            â”‚
 *   â””â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
 */
import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  FiberManualRecord,
  GitHub,
  LocationOn,
  Code,
  Storage,
  CloudQueue,
} from '@mui/icons-material';
import { personalInfo, projects } from '../../config/portfolio';

/* â”€â”€ constants â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const stack = [
  { label: 'Python',   color: '#3b82f6' },
  { label: 'SQL',      color: '#00d4ff' },
  { label: 'Airflow',  color: '#00e676' },
  { label: 'dbt',      color: '#f97316' },
  { label: 'AWS',      color: '#fbbf24' },
  { label: 'Docker',   color: '#38bdf8' },
  { label: 'Pandas',   color: '#a78bfa' },
  { label: 'Spark',    color: '#fb923c' },
  { label: 'Postgres', color: '#4ade80' },
  { label: 'Scikit',   color: '#f472b6' },
];

/* â”€â”€ glass card base â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const card = {
  background: 'rgba(255,255,255,0.03)',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '20px',
  p: { xs: 2.5, md: 3 },
  transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
  position: 'relative',
  overflow: 'hidden',
};

const hoverGlow = (rgb) => ({
  '&:hover': {
    borderColor: `rgba(${rgb},0.35)`,
    boxShadow: `0 0 36px rgba(${rgb},0.1)`,
  },
});

/* â”€â”€ stagger animation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

/* â”€â”€ component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export default function BentoSection() {
  const totalProjects = projects.filter((p) => !p.hidden).length;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 0 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '10%',
          left: '20%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        },
      }}
    >
      <Box sx={{ maxWidth: 1152, mx: 'auto', position: 'relative', zIndex: 1 }}>
        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gridTemplateRows: { md: 'auto auto' },
              gap: { xs: 2, md: 2.5 },
              justifyItems: 'stretch',
              mx: 'auto',
              maxWidth: { xs: '100%', sm: 720, md: 1000 },
            }}
          >
            {/* â”€â”€ Card 1: Philosophy (2 cols wide) â”€â”€ */}
            <Box
              component={motion.div}
              variants={item}
              sx={{
                ...card,
                gridColumn: { xs: 'span 1', sm: 'span 2', md: 'span 2' },
                minHeight: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                ...hoverGlow('0,123,255'),
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #007bff 40%, #00d4ff 60%, transparent)',
                  opacity: 0.6,
                },
              }}
            >
              <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontWeight: 700,
                      color: '#e2e8f0',
                      lineHeight: 1.35,
                      fontSize: { xs: '1.1rem', md: '1.4rem' },
                      mb: 2,
                    }}
                  >
                    "TolerÃ¢ncia apertada e processo confiÃ¡vel geram qualidade â€”{' '}
                    <Box component="span" sx={{ color: '#00d4ff' }}>
                      em aÃ§o e em dados.
                    </Box>"
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#64748b', lineHeight: 1.65, fontSize: '0.85rem', maxWidth: 480 }}
                  >
                    Da usinagem de precisÃ£o para a engenharia de dados â€” a mesma disciplina de
                    processo, aplicada na construÃ§Ã£o de pipelines confiÃ¡veis e escalÃ¡veis.
                  </Typography>
              </Box>

                <Stack direction="row" spacing={1.5} sx={{ mt: 2.5, flexWrap: 'wrap' }} useFlexGap>
                  {[
                    { icon: <LocationOn sx={{ fontSize: 14 }} />, label: personalInfo.location },
                    { icon: <GitHub sx={{ fontSize: 14 }} />, label: 'tmarsbr' },
                  ].map((item, i) => (
                    <Chip
                      key={i}
                      icon={item.icon}
                      label={item.label}
                      size="small"
                      sx={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.68rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#94a3b8',
                        '& .MuiChip-icon': { color: '#64748b' },
                      }}
                    />
                  ))}
                </Stack>
            </Box>

            {/* â”€â”€ Card 2: Stack (1 col, 2 rows) â”€â”€ */}
            <Box
              component={motion.div}
              variants={item}
              sx={{
                ...card,
                gridColumn: { xs: 'span 1', sm: 'span 1' },
                gridRow: { md: 'span 2' },
                display: 'flex',
                flexDirection: 'column',
                ...hoverGlow('168,85,247'),
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #a855f7 50%, transparent)',
                  opacity: 0.7,
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.7rem',
                  color: '#a855f7',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.8,
                }}
              >
                <Code sx={{ fontSize: 14 }} />
                stack
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {stack.map((tech, i) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    <Chip
                      label={tech.label}
                      size="small"
                      sx={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        background: `${tech.color}18`,
                        border: `1px solid ${tech.color}40`,
                        color: tech.color,
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          background: `${tech.color}28`,
                          boxShadow: `0 0 12px ${tech.color}30`,
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </Box>

              <Box sx={{ mt: 'auto', pt: 3 }}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: '12px',
                    background: 'rgba(168,85,247,0.06)',
                    border: '1px solid rgba(168,85,247,0.12)',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.68rem',
                      color: '#a855f7',
                      fontWeight: 700,
                      mb: 0.5,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    + 40 ferramentas
                  </Typography>
                  <Typography sx={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.5 }}>
                    SQL avanÃ§ado, ML, visualizaÃ§Ã£o, orquestraÃ§Ã£o e cloud
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* â”€â”€ Card 3: Status (open to work) â”€â”€ */}
            <Box
              component={motion.div}
              variants={item}
              sx={{
                ...card,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                ...hoverGlow('0,230,118'),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <FiberManualRecord
                  className="pulsing-dot"
                  sx={{ fontSize: 10, color: '#00e676' }}
                />
                <Typography
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.68rem',
                    color: '#00e676',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  disponÃ­vel
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 700,
                  color: '#e2e8f0',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.3,
                  mb: 1,
                }}
              >
                Aberto para oportunidades
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.55 }}>
                Engenharia de Dados JÃºnior Â· SÃ£o Paulo (remoto / hÃ­brido)
              </Typography>
            </Box>

            {/* â”€â”€ Card 4: Stats â”€â”€ */}
            <Box
              component={motion.div}
              variants={item}
              sx={{
                ...card,
                ...hoverGlow('0,123,255'),
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.68rem',
                  color: '#64748b',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  mb: 2.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.8,
                }}
              >
                <Storage sx={{ fontSize: 13 }} />
                nÃºmeros
              </Typography>

              <Stack spacing={1.8}>
                {[
                  { n: totalProjects, label: 'Projetos construÃ­dos', color: '#007bff' },
                  { n: '40+',         label: 'Ferramentas dominadas', color: '#00d4ff' },
                  { n: '550h',        label: 'De formaÃ§Ã£o em dados',  color: '#a855f7' },
                ].map((stat, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: stat.color,
                        lineHeight: 1,
                        minWidth: 52,
                      }}
                    >
                      {stat.n}
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.4 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Box
                sx={{
                  mt: 2.5,
                  p: 1.5,
                  borderRadius: '10px',
                  background: 'rgba(0,123,255,0.05)',
                  border: '1px solid rgba(0,123,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <CloudQueue sx={{ fontSize: 16, color: '#007bff' }} />
                <Typography
                  sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem', color: '#94a3b8' }}
                >
                  AWS Â· Airflow Â· dbt Â· Docker
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
