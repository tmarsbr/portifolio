import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

/**
 * LoadingSpinner — Dark Premium Glass
 */
const LoadingSpinner = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      backgroundColor: '#050a14',
      gap: 2,
    }}
  >
    <CircularProgress
      size={60}
      thickness={4}
      sx={{ color: '#007bff' }}
    />
    <Typography
      variant="h6"
      sx={{
        color: '#94a3b8',
        fontWeight: 500,
        fontFamily: "'IBM Plex Mono', monospace",
        animation: 'pulse 1.5s infinite ease-in-out',
        '@keyframes pulse': {
          '0%': { opacity: 0.6 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.6 },
        },
      }}
    >
      Carregando...
    </Typography>
  </Box>
);

export default LoadingSpinner;
