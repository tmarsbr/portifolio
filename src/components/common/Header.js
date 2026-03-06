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

/**
 * Header — Glass Pill Floating Navbar
 *
 * Dark premium glass design:
 * - Pill-shape flutuante com glassmorphism (backdrop-filter blur)
 * - Border gradient sutil + glow no scroll
 * - Links com underline neon animado
 * - Drawer mobile com glass panel
 * - Sem toggle light/dark
 */

// Esconde header ao scrollar para baixo
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({ threshold: 100 });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleNavigation = () => setMobileOpen(false);

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Sobre', path: '/about' },
    { text: 'Projetos', path: '/projects' },
    { text: 'Contato', path: '/contact' },
  ];

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  // ── Glass pill style ──────────────────────────────────────────
  const headerStyle = {
    backgroundColor: scrolled
      ? 'rgba(5, 10, 20, 0.85)'
      : 'rgba(5, 10, 20, 0.6)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    borderBottom: scrolled
      ? '1px solid rgba(255,255,255,0.08)'
      : '1px solid transparent',
    boxShadow: scrolled
      ? '0 4px 30px rgba(0, 123, 255, 0.08), 0 1px 0 rgba(255,255,255,0.05) inset'
      : 'none',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  // ── Link ativo com underline neon ─────────────────────────────
  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      position: 'relative',
      px: 2,
      py: 1,
      borderRadius: '8px',
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '0.85rem',
      fontWeight: isActive ? 600 : 500,
      letterSpacing: '0.02em',
      textTransform: 'none',
      color: isActive ? '#007bff' : 'rgba(240,240,240,0.85)',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: '#00d4ff',
        backgroundColor: 'rgba(0, 123, 255, 0.06)',
        transform: 'translateY(-1px)',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 2,
        left: '50%',
        width: isActive ? '60%' : '0%',
        height: '2px',
        background: 'linear-gradient(90deg, #007bff, #00d4ff)',
        transform: 'translateX(-50%)',
        borderRadius: '2px',
        transition: 'width 0.3s ease',
        boxShadow: isActive ? '0 0 8px rgba(0,123,255,0.4)' : 'none',
      },
      '&:hover::after': {
        width: '60%',
      },
    };
  };

  // ── Mobile drawer – glass panel ───────────────────────────────
  const drawer = (
    <Box sx={{
      width: 300,
      height: '100%',
      background: 'linear-gradient(180deg, rgba(5,10,20,0.98) 0%, rgba(13,17,23,0.98) 100%)',
      backdropFilter: 'blur(24px)',
    }}>
      {/* Drawer header */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 3,
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 700,
              background: 'linear-gradient(135deg, #007bff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <CodeIcon sx={{ fontSize: '1.4rem', color: '#007bff' }} />
            {personalInfo.fullName}
          </Typography>
        </motion.div>

        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: '#94a3b8',
            '&:hover': {
              color: '#ff2d78',
              backgroundColor: 'rgba(255,45,120,0.08)',
              transform: 'rotate(90deg)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation links */}
      <List sx={{ pt: 2, px: 1 }}>
        <AnimatePresence>
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                <ListItem
                  component={Link}
                  to={item.path}
                  onClick={handleNavigation}
                  sx={{
                    py: 1.5,
                    px: 3,
                    mx: 1,
                    mb: 0.5,
                    borderRadius: '12px',
                    backgroundColor: isActive
                      ? 'rgba(0, 123, 255, 0.1)'
                      : 'transparent',
                    border: isActive
                      ? '1px solid rgba(0, 123, 255, 0.2)'
                      : '1px solid transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 123, 255, 0.06)',
                      border: '1px solid rgba(0, 123, 255, 0.15)',
                      transform: 'translateX(6px)',
                    },
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                >
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.9rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#007bff' : '#f0f0f0',
                      letterSpacing: '0.02em',
                    }}
                  />
                  {isActive && (
                    <Box sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#007bff',
                      boxShadow: '0 0 8px rgba(0,123,255,0.6)',
                    }} />
                  )}
                </ListItem>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" elevation={0} sx={headerStyle}>
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', py: 0.5, minHeight: '64px' }}>
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h6"
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: 'none',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #007bff, #00d4ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&:hover': { opacity: 0.85 },
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <CodeIcon sx={{ fontSize: '1.4rem', color: '#007bff' }} />
                  {!isMobile && personalInfo.fullName}
                </Typography>
              </motion.div>

              {/* Desktop nav */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                    >
                      {item.text === 'Contato' ? (
                        <Button
                          component={Link}
                          to={item.path}
                          variant="outlined"
                          sx={{
                            ml: 1.5,
                            borderRadius: '9999px',
                            textTransform: 'none',
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '0.02em',
                            borderColor: 'rgba(0, 123, 255, 0.4)',
                            color: '#007bff',
                            px: 2.5,
                            '&:hover': {
                              borderColor: '#007bff',
                              backgroundColor: 'rgba(0, 123, 255, 0.1)',
                              boxShadow: '0 0 16px rgba(0, 123, 255, 0.2)',
                              transform: 'translateY(-1px)',
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
                          sx={getLinkStyle(item.path)}
                        >
                          {item.text}
                        </Button>
                      )}
                    </motion.div>
                  ))}
                </Box>
              )}

              {/* Mobile hamburger */}
              {isMobile && (
                <IconButton
                  aria-label="abrir menu"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: '#f0f0f0',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    p: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 123, 255, 0.08)',
                      borderColor: 'rgba(0, 123, 255, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundImage: 'none',
            backgroundColor: 'transparent',
            borderLeft: '1px solid rgba(255,255,255,0.06)',
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
