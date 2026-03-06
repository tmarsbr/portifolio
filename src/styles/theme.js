import { createTheme } from '@mui/material/styles';
import { themeConfig } from '../config/portfolio';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: themeConfig.primaryColor,
      light: '#3d9bff',
      dark: '#0056b3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: themeConfig.secondaryColor,
      light: '#33ddff',
      dark: '#009bb8',
      contrastText: '#ffffff',
    },
    accent: {
      main: themeConfig.accentColor,
      light: '#22d3ee',
      dark: '#0891b2',
    },
    background: {
      default: themeConfig.backgroundColor,
      paper: themeConfig.paperColor,
    },
    text: {
      primary: themeConfig.textColor,
      secondary: themeConfig.textSecondary,
    },
    grey: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: themeConfig.darkGray,
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: themeConfig.fontFamily,
    h1: {
      fontFamily: themeConfig.fontFamilyMono,
      fontSize: themeConfig.fontSize.xxlarge,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.04em',
      color: themeConfig.textColor,
    },
    h2: {
      fontFamily: themeConfig.fontFamilyMono,
      fontSize: themeConfig.fontSize.xlarge,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.03em',
      color: themeConfig.textColor,
    },
    h3: {
      fontFamily: themeConfig.fontFamilyMono,
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
      color: themeConfig.textColor,
    },
    h4: {
      fontFamily: themeConfig.fontFamilyMono,
      fontSize: themeConfig.fontSize.large,
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
      color: themeConfig.textColor,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: themeConfig.textColor,
    },
    h6: {
      fontSize: themeConfig.fontSize.medium,
      fontWeight: 500,
      lineHeight: 1.6,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: themeConfig.textSecondary,
    },
    body1: {
      fontSize: themeConfig.fontSize.medium,
      lineHeight: 1.7,
      color: 'rgba(255, 255, 255, 0.8)',
    },
    body2: {
      fontSize: themeConfig.fontSize.small,
      lineHeight: 1.6,
      color: themeConfig.textSecondary,
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: 'rgba(255, 255, 255, 0.7)',
    },
    subtitle2: {
      fontSize: '0.625rem',
      fontWeight: 600,
      lineHeight: 1.4,
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      color: themeConfig.textSecondary,
    },
    button: {
      fontSize: themeConfig.fontSize.small,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
    },
    caption: {
      fontSize: '0.75rem',
      fontFamily: themeConfig.fontFamilyMono,
      lineHeight: 1.4,
      color: themeConfig.textSecondary,
      letterSpacing: '0.05em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: themeConfig.backgroundColor,
          color: themeConfig.textColor,
        },
      },
    },

    // Botões — glass pill style
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          padding: '12px 28px',
          fontSize: '0.7rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: `0 8px 25px rgba(0, 123, 255, 0.25)`,
          },
        },
        contained: {
          background: themeConfig.glass.bg,
          backdropFilter: `blur(${themeConfig.glass.blur})`,
          border: `1px solid ${themeConfig.glass.border}`,
          color: themeConfig.textColor,
          '&:hover': {
            background: '#ffffff',
            color: '#000000',
            borderColor: 'transparent',
          },
        },
        outlined: {
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.2)',
          color: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: `blur(${themeConfig.glass.blur})`,
          '&:hover': {
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.4)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          },
        },
      },
    },

    // Cards — glass panel
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          background: themeConfig.glass.bg,
          backdropFilter: `blur(${themeConfig.glass.blur}) saturate(${themeConfig.glass.saturate})`,
          WebkitBackdropFilter: `blur(${themeConfig.glass.blur}) saturate(${themeConfig.glass.saturate})`,
          borderTop: `1px solid ${themeConfig.glass.borderTop}`,
          borderLeft: `1px solid ${themeConfig.glass.border}`,
          borderRight: `1px solid ${themeConfig.glass.border}`,
          borderBottom: `1px solid rgba(255, 255, 255, 0.05)`,
          boxShadow: themeConfig.glass.shadow,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: themeConfig.glass.bgHover,
            borderColor: themeConfig.glass.borderHover,
            transform: 'translateY(-5px)',
            boxShadow: themeConfig.glass.shadowHover,
          },
        },
      },
    },

    // Chips — neon badges
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          fontWeight: 500,
          fontSize: '0.7rem',
          fontFamily: themeConfig.fontFamilyMono,
          letterSpacing: '0.05em',
          backdropFilter: `blur(${themeConfig.glass.blur})`,
          border: `1px solid ${themeConfig.glass.border}`,
          '&.MuiChip-filled': {
            backgroundColor: 'rgba(0, 123, 255, 0.15)',
            color: themeConfig.primaryColor,
          },
          '&.MuiChip-outlined': {
            borderColor: 'rgba(255, 255, 255, 0.15)',
            color: themeConfig.textSecondary,
          },
        },
      },
    },

    // AppBar — glass navbar
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          backdropFilter: 'none',
          boxShadow: 'none',
          color: themeConfig.textColor,
        },
      },
    },

    // Timeline
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          '&:before': {
            display: 'none',
          },
        },
      },
    },

    MuiTimelineDot: {
      styleOverrides: {
        root: {
          backgroundColor: themeConfig.primaryColor,
          border: `3px solid ${themeConfig.accentColor}`,
          boxShadow: `0 0 15px rgba(0, 123, 255, 0.4)`,
        },
      },
    },

    // Tooltip
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          fontSize: themeConfig.fontSize.small,
          borderRadius: 12,
          border: `1px solid ${themeConfig.glass.border}`,
          padding: '8px 16px',
          fontFamily: themeConfig.fontFamilyMono,
        },
      },
    },

    // Paper — glass surface
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: themeConfig.glass.bg,
          backdropFilter: `blur(${themeConfig.glass.blur})`,
        },
      },
    },

    // Divider
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255, 255, 255, 0.08)',
        },
      },
    },

    // IconButton
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.7)',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: themeConfig.primaryColor,
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
