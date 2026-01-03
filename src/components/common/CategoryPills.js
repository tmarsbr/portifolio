import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import {
  DataObject,
  Analytics,
  Engineering,
  Code,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

/**
 * CategoryPills - Componente reutilizável para filtros de categoria
 *
 * Renderiza botões em formato de "pills" para seleção de categorias,
 * com ícones, cores e animações consistentes.
 *
 * @param {Object} props
 * @param {string[]} props.categories - Lista de categorias (ex.: ['Todos', 'Análise de Dados', ...])
 * @param {string} props.active - Categoria ativa atualmente
 * @param {Function} props.onChange - Callback para mudança de categoria
 * @component
 */
const CategoryPills = ({ categories, active, onChange }) => {
  const { theme } = useTheme();

  // Mapeamento de categorias para chaves, ícones e cores
  const categoryConfig = {
    'Engenharia de Dados': {
      key: 'Engenharia de Dados',
      icon: <Engineering />,
      color: '#4caf50',
    },
    'API & Scraping': {
      key: 'API & Scraping',
      icon: <Code />,
      color: '#ff9800',
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 1,
        mb: 6,
      }}
    >
      {categories.map((category, index) => {
        const config = categoryConfig[category];
        if (!config) return null;

        return (
          <motion.div
            key={config.key}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => onChange(config.key)}
              startIcon={config.icon}
              variant={active === config.key ? 'contained' : 'outlined'}
              sx={{
                minWidth: 'auto',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                px: 3,
                py: 1.5,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                ...(active === config.key ? {
                  background: `linear-gradient(45deg, ${config.color} 30%, ${theme.palette.primary.main} 90%)`,
                  color: 'white',
                  border: 'none',
                  boxShadow: `0 4px 15px ${config.color}30`,
                } : {
                  borderColor: config.color,
                  color: config.color,
                  '&:hover': {
                    backgroundColor: `${config.color}10`,
                    borderColor: config.color,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 15px ${config.color}20`,
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
};

export default CategoryPills;
