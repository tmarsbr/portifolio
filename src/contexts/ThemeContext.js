/**
 * ThemeContext — Dark Premium Glass (Dark-Only)
 * 
 * Contexto simplificado: sem toggle light/dark, sempre dark.
 * Usa o tema MUI pré-construído de styles/theme.js
 */

import React, { createContext, useContext } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

// Criar contexto do tema
const ThemeContext = createContext();

// Hook para usar o contexto do tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};

// Componente ThemeProvider — dark-only
const ThemeProvider = ({ children }) => {
  const contextValue = {
    theme,
    darkMode: true, // Sempre dark — mantido para compatibilidade com componentes
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider };
export default ThemeProvider;
