import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

// Seções da página Home
import HeroSection from '../components/sections/HeroSection';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import ContactSection from '../components/sections/ContactSection';

// Configurações
import { seoConfig } from '../config/portfolio';

/* ── Animated divider between sections ── */
const SectionDivider = ({ color = 'rgba(0,123,255,0.5)', delay = 0 }) => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    viewport={{ once: true, margin: '-40px' }}
  >
    <Box
      className="section-divider-animated"
      sx={{
        height: '1px',
        mx: 'auto',
        maxWidth: 1200,
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        my: { xs: 2, md: 4 },
      }}
    />
  </motion.div>
);

/* ── Section wrapper with blur-up reveal ── */
const SectionReveal = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    viewport={{ once: true, margin: '-60px' }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * Home - Página inicial do portfólio
 */
const Home = () => {
  useEffect(() => {
    document.documentElement.classList.add('snap-active');
    return () => document.documentElement.classList.remove('snap-active');
  }, []);

  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.url} />
        <meta property="og:image" content={seoConfig.image} />
        
        <meta name="twitter:card" content={seoConfig.twitterCard} />
        <meta name="twitter:title" content={seoConfig.ogTitle} />
        <meta name="twitter:description" content={seoConfig.ogDescription} />
        <meta name="twitter:image" content={seoConfig.image} />
      </Helmet>

      {/* Página Home principal */}
      <div className="snap-section"><HeroSection /></div>

      <SectionDivider color="rgba(0,212,255,0.4)" />

      <div className="snap-section">
        <SectionReveal delay={0.05}>
          <ProjectsPreview />
        </SectionReveal>
      </div>

      <SectionDivider color="rgba(0,212,255,0.25)" delay={0.1} />

      <ContactSection />
    </>
  );
};

export default Home;
