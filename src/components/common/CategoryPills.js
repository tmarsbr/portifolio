import React from 'react';
import { Box, Button } from '@mui/material';
import {
  DataObject,
  Analytics,
  Engineering,
  Code,
  Storage,
  Api,
  Psychology,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

/* ── neon palette per category ─────────────────────────── */
const categoryConfig = {
  Todos:                  { icon: <DataObject />,  color: '#007bff' },
  'Análise Exploratória': { icon: <Analytics />,   color: '#007bff' },
  'Engenharia de Dados':  { icon: <Engineering />, color: '#00e676' },
  'API & Web Scraping':   { icon: <Api />,         color: '#ffd600' },
  'API & Scraping':       { icon: <Code />,        color: '#ffd600' },
  'Machine Learning':     { icon: <Psychology />,  color: '#ff2d78' },
  'Data Storage':         { icon: <Storage />,     color: '#a855f7' },
};

/**
 * CategoryPills — glass neon filter pills
 */
const CategoryPills = ({ categories, active, onChange }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mb: 6 }}>
    {categories.map((category, index) => {
      const cfg = categoryConfig[category] || { icon: <DataObject />, color: '#007bff' };
      const isActive = active === category;

      return (
        <motion.div
          key={category}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: index * 0.07 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => onChange(category)}
            startIcon={cfg.icon}
            variant="outlined"
            sx={{
              minWidth: 'auto',
              textTransform: 'none',
              fontFamily: '"IBM Plex Mono", monospace',
              fontWeight: 600,
              fontSize: '0.85rem',
              px: 2.5,
              py: 1.2,
              borderRadius: '999px',
              transition: 'all 0.3s ease',
              ...(isActive
                ? {
                    background: `${cfg.color}18`,
                    color: cfg.color,
                    border: `1.5px solid ${cfg.color}`,
                    boxShadow: `0 0 18px ${cfg.color}30, inset 0 0 12px ${cfg.color}10`,
                  }
                : {
                    background: 'rgba(255,255,255,0.03)',
                    color: '#94a3b8',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                    '&:hover': {
                      background: `${cfg.color}12`,
                      borderColor: cfg.color,
                      color: cfg.color,
                      boxShadow: `0 0 14px ${cfg.color}20`,
                    },
                  }),
            }}
          >
            {category}
          </Button>
        </motion.div>
      );
    })}
  </Box>
);

export default CategoryPills;
