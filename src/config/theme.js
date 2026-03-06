/**
 * Configurações de Tema — Dark Premium Glass
 * @description Paleta neon sobre fundo dark, tipografia mono + sans, glassmorphism tokens
 */
export const themeConfig = {
    // Cores principais — dark-only, inspirado em glass-effect2 + fluxora
    primaryColor: '#007bff',       // Neon Blue
    secondaryColor: '#00d4ff',     // Cyan accent
    accentColor: '#06b6d4',        // Cyan neon
    backgroundColor: '#050a14',    // Space dark
    paperColor: '#0d1117',         // Card surfaces
    textColor: '#f0f0f0',          // Primary text
    textSecondary: '#94a3b8',      // Muted text (Slate 400)
    darkGray: '#64748b',           // Slate 500

    // Paleta neon estendida (design-system.html)
    neon: {
        blue: '#007bff',
        cyan: '#00d4ff',
        pink: '#ff2d78',
        yellow: '#ffd600',
        green: '#00e676',
        purple: '#a855f7',
    },

    // Glass tokens
    glass: {
        bg: 'rgba(255, 255, 255, 0.03)',
        bgHover: 'rgba(255, 255, 255, 0.06)',
        border: 'rgba(255, 255, 255, 0.08)',
        borderHover: 'rgba(255, 255, 255, 0.2)',
        borderTop: 'rgba(255, 255, 255, 0.15)',
        blur: '16px',
        saturate: '180%',
        shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        shadowHover: '0 15px 40px rgba(0, 123, 255, 0.1)',
    },

    // Tipografia — IBM Plex Mono (headings/code) + Inter (body)
    fontFamily: "'Inter', 'IBM Plex Mono', -apple-system, sans-serif",
    fontFamilyMono: "'IBM Plex Mono', 'Fira Code', monospace",
    fontSize: {
        xs: '0.75rem',
        small: '0.875rem',
        medium: '1rem',
        large: '1.25rem',
        xlarge: '2rem',
        xxlarge: '3rem',
        xxxlarge: '3.75rem',
        hero: 'clamp(3rem, 8vw, 6rem)',
    },
    fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },

    // Espaçamentos (8px base)
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
        xxxl: '64px',
    },

    // Border radius
    borderRadius: {
        small: '8px',
        medium: '12px',
        large: '16px',
        xl: '24px',
        pill: '9999px',
        round: '50%',
    },

    // Transições
    transitions: {
        fast: '0.15s ease-out',
        normal: '0.3s ease-in-out',
        slow: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        spring: '0.8s cubic-bezier(0.23, 1, 0.32, 1)',
    },
};
