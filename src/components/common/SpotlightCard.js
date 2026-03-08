import React, { forwardRef } from 'react';
import { Box } from '@mui/material';

const SpotlightCard = forwardRef(function SpotlightCard(
  {
    children,
    component = 'div',
    spotlightColor = 'rgba(0, 212, 255, 0.16)',
    spotlightSize = '460px',
    sx = {},
    onPointerMove,
    onPointerLeave,
    ...props
  },
  ref
) {
  const handlePointerMove = (event) => {
    if (event.pointerType && event.pointerType !== 'mouse') {
      onPointerMove?.(event);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
    event.currentTarget.style.setProperty('--spotlight-opacity', '1');
    onPointerMove?.(event);
  };

  const handlePointerLeave = (event) => {
    event.currentTarget.style.setProperty('--spotlight-opacity', '0');
    onPointerLeave?.(event);
  };

  return (
    <Box
      ref={ref}
      component={component}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      sx={{
        '--spotlight-x': '50%',
        '--spotlight-y': '50%',
        '--spotlight-opacity': 0,
        '--spotlight-size': spotlightSize,
        '--spotlight-color': spotlightColor,
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(var(--spotlight-size) circle at var(--spotlight-x) var(--spotlight-y), var(--spotlight-color), transparent 42%)',
          opacity: 'var(--spotlight-opacity)',
          transition: 'opacity 0.35s ease',
          zIndex: 1,
        },
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Box>
    </Box>
  );
});

export default SpotlightCard;
