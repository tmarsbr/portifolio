import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Container,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import { personalInfo } from '../../config/portfolio';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

/**
 * Header aprimorado - Barra de navegação moderna e elegante
 * 
 * Melhorias visuais implementadas:
 * - Navbar com blur effect e sombra dinâmica no scroll
 * - Links com animação de hover (sublinhado animado)
 * - Indicação visual da rota ativa
 * - Menu mobile aprimorado com animações
 * - Transições suaves entre estados
 */

// Componente para esconder header no scroll
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = ({ elevation = 0 }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, darkMode } = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  // Função para fechar o menu mobile
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Função para fechar menu ao navegar
  const handleNavigation = () => {
    setMobileOpen(false);
  };

  // Lista de navegação com ícones
  const navItems = [
    { text: 'Home', path: '/', icon: '🏠' },
    { text: 'Sobre', path: '/about', icon: '👨‍💻' },
    { text: 'Projetos', path: '/projects', icon: '💼' },
    { text: 'Contato', path: '/contact', icon: '📬' },
  ];

  // Trigger para detectar scroll e mudar estilo
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  // Estilo dinâmico baseado no scroll
  const headerStyle = {
    backgroundColor: scrollTrigger
      ? (darkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)')
      : (darkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)'),
    backdropFilter: 'blur(20px)',
    borderBottom: scrollTrigger
      ? `1px solid ${darkMode ? 'rgba(71, 85, 105, 0.3)' : 'rgba(226, 232, 240, 0.8)'}`
      : 'none',
    boxShadow: scrollTrigger
      ? (darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.08)')
      : 'none',
    transition: 'all 0.3s ease-in-out',
  };

  // Estilo do link ativo
  const getLinkStyle = (path) => ({
    position: 'relative',
    padding: '8px 16px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    fontWeight: location.pathname === path ? 600 : 500,
    color: location.pathname === path
      ? theme.palette.primary.main
      : theme.palette.text.primary,
    '&:hover': {
      backgroundColor: darkMode ? 'rgba(100, 181, 246, 0.08)' : 'rgba(25, 118, 210, 0.04)',
      transform: 'translateY(-1px)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: location.pathname === path ? '80%' : '0%',
      height: '2px',
      backgroundColor: theme.palette.primary.main,
      transform: 'translateX(-50%)',
      transition: 'width 0.3s ease',
    },
  });

  // Componente do menu mobile aprimorado
  const drawer = (
    <Box sx={{
      width: 280,
      height: '100%',
      background: darkMode
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      backdropFilter: 'blur(10px)',
    }}>
      {/* Header do menu mobile */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 3,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: 'primary.main',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <CodeIcon sx={{ fontSize: '1.5rem' }} />
            {personalInfo.fullName}
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ThemeToggle />
          <IconButton
            onClick={handleDrawerToggle}
            color="inherit"
            sx={{
              color: darkMode ? '#fff' : '#1f2937',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
                transform: 'rotate(90deg)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Links de navegação mobile */}
      <List sx={{ pt: 2 }}>
        <AnimatePresence>
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ListItem
                button
                component={Link}
                to={item.path}
                onClick={handleNavigation}
                sx={{
                  py: 2,
                  px: 3,
                  mx: 2,
                  mb: 1,
                  borderRadius: 2,
                  backgroundColor: location.pathname === item.path
                    ? (darkMode ? 'rgba(100, 181, 246, 0.1)' : 'rgba(25, 118, 210, 0.08)')
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: darkMode ? 'rgba(100, 181, 246, 0.08)' : 'rgba(25, 118, 210, 0.04)',
                    transform: 'translateX(8px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography sx={{ fontSize: '1.2rem' }}>
                    {item.icon}
                  </Typography>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: location.pathname === item.path ? 600 : 500,
                      color: location.pathname === item.path
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    }}
                  />
                </Box>
              </ListItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={headerStyle}
          className="app-header"
        >
          <Container maxWidth="lg">
            <Toolbar className="header-toolbar" sx={{ justifyContent: 'space-between', py: 1 }}>
              {/* Logo/Nome */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h5"
                  component={Link}
                  to="/"
                  className="header-title"
                  sx={{
                    textDecoration: 'none',
                    color: 'primary.main',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <CodeIcon sx={{ fontSize: '1.8rem' }} />
                  {!isMobile && (
                    <Box component="span" className="gradient-text">
                      {personalInfo.fullName}
                    </Box>
                  )}
                </Typography>
              </motion.div>

              {/* Navegação Desktop */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {item.text === 'Contato' ? (
                        <Button
                          component={Link}
                          to={item.path}
                          variant="outlined"
                          color="primary"
                          sx={{
                            ml: 2,
                            borderRadius: '20px',
                            textTransform: 'none',
                            fontWeight: 600,
                            borderWidth: '2px',
                            '&:hover': {
                              borderWidth: '2px',
                              backgroundColor: 'primary.main',
                              color: 'white',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {item.text}
                        </Button>
                      ) : (
                        <Button
                          component={Link}
                          to={item.path}
                          className="nav-button"
                          sx={getLinkStyle(item.path)}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography sx={{ fontSize: '1rem' }}>
                              {item.icon}
                            </Typography>
                            {item.text}
                          </Box>
                        </Button>
                      )}
                    </motion.div>
                  ))}

                  {/* Toggle de tema */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <ThemeToggle />
                  </motion.div>
                </Box>
              )}

              {/* Menu Mobile */}
              {isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ThemeToggle />
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    sx={{
                      color: darkMode ? '#fff' : '#1f2937',
                      '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.08)',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Melhor performance em mobile
        }}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundImage: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

Header.propTypes = {
  elevation: PropTypes.number,
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
