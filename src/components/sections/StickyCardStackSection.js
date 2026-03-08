import React from 'react';
import {
  Box,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { Hub } from '@mui/icons-material';
import { motion } from 'framer-motion';

import SpotlightCard from '../common/SpotlightCard';
import { projects } from '../../config/portfolio';

const StickyCardStackSection = () => {
  const stackProjects = projects
    .filter((project) => !project.hidden && project.featured)
    .slice(0, 4);

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 1, md: 2 },
        pb: { xs: 8, md: 12 },
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(13,17,23,0) 0%, rgba(13,17,23,0.72) 12%, rgba(13,17,23,0.88) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative' }}>
          {stackProjects.map((project, index) => (
            <Box
              key={project.id}
              sx={{
                position: { xs: 'relative', md: 'sticky' },
                top: { md: `calc(92px + ${index * 26}px)` },
                mb: { xs: 3, md: 8 },
                pt: { xs: 0, md: index === 0 ? 0 : 1 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(0, 212, 255, 0.14)"
                  sx={{
                    minHeight: { xs: 520, md: 620 },
                    borderRadius: '28px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.025) 100%)',
                    backdropFilter: 'blur(18px)',
                    boxShadow: '0 30px 90px rgba(0,0,0,0.35)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', md: '1.05fr 1fr' },
                      minHeight: 'inherit',
                    }}
                  >
                    <Box
                      sx={{
                        p: { xs: 3, md: 5 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: 3,
                      }}
                    >
                      <Box>
                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
                          <Chip
                            icon={<Hub fontSize="small" />}
                            label={project.category}
                            sx={{
                              fontFamily: "'IBM Plex Mono', monospace",
                              backgroundColor: 'rgba(0,212,255,0.1)',
                              color: '#00d4ff',
                              border: '1px solid rgba(0,212,255,0.18)',
                              '& .MuiChip-icon': { color: '#00d4ff' },
                            }}
                          />
                          <Chip
                            label={project.date}
                            variant="outlined"
                            sx={{
                              fontFamily: "'IBM Plex Mono', monospace",
                              color: '#94a3b8',
                              borderColor: 'rgba(255,255,255,0.12)',
                            }}
                          />
                        </Stack>

                        <Typography
                          variant="h3"
                          sx={{
                            mb: 2,
                            color: '#ffffff',
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontWeight: 700,
                            fontSize: { xs: '1.65rem', md: '2.4rem' },
                            lineHeight: 1.12,
                          }}
                        >
                          {project.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            color: '#cbd5e1',
                            lineHeight: 1.8,
                            fontSize: { xs: '0.97rem', md: '1rem' },
                            maxWidth: 560,
                          }}
                        >
                          {project.description}
                        </Typography>
                      </Box>

                      <Stack spacing={2.5}>
                        {project.metrics && (
                          <Box
                            sx={{
                              p: 2,
                              borderRadius: '18px',
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                            }}
                          >
                            <Typography
                              variant="overline"
                              sx={{
                                display: 'block',
                                mb: 0.5,
                                color: '#64748b',
                                fontFamily: "'IBM Plex Mono', monospace",
                                letterSpacing: '0.14em',
                                fontWeight: 700,
                              }}
                            >
                              Impacto técnico
                            </Typography>
                            <Typography sx={{ color: '#e2e8f0', lineHeight: 1.7 }}>
                              {project.metrics}
                            </Typography>
                          </Box>
                        )}

                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                          {project.technologies.slice(0, 5).map((technology) => (
                            <Chip
                              key={`${project.id}-${technology}`}
                              label={technology}
                              variant="outlined"
                              sx={{
                                fontFamily: "'IBM Plex Mono', monospace",
                                color: '#94a3b8',
                                borderColor: 'rgba(255,255,255,0.12)',
                                backgroundColor: 'rgba(255,255,255,0.02)',
                              }}
                            />
                          ))}
                        </Stack>
                      </Stack>
                    </Box>

                    <Box
                      sx={{
                        position: 'relative',
                        minHeight: { xs: 260, md: '100%' },
                        overflow: 'hidden',
                        borderTop: { xs: '1px solid rgba(255,255,255,0.08)', md: 'none' },
                        borderLeft: { md: '1px solid rgba(255,255,255,0.08)' },
                        backgroundColor: 'rgba(3, 9, 19, 0.6)',
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'saturate(1.05)',
                          transform: 'scale(1.02)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, rgba(2,6,17,0.08) 0%, rgba(2,6,17,0.2) 30%, rgba(2,6,17,0.85) 100%)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 'auto 0 0 0',
                          p: { xs: 3, md: 4 },
                        }}
                      >
                        <Typography
                          variant="overline"
                          sx={{
                            display: 'block',
                            color: '#00e676',
                            fontFamily: "'IBM Plex Mono', monospace",
                            letterSpacing: '0.16em',
                            fontWeight: 700,
                            mb: 1,
                          }}
                        >
                          Card {String(index + 1).padStart(2, '0')}
                        </Typography>
                        <Typography
                          sx={{
                            color: '#e2e8f0',
                            fontSize: { xs: '0.92rem', md: '1rem' },
                            lineHeight: 1.7,
                            maxWidth: 360,
                          }}
                        >
                          {project.longDescription
                            ? `${project.longDescription.split('\n')[0]}`
                            : project.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </SpotlightCard>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StickyCardStackSection;
