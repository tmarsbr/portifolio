import React from 'react';
import { Helmet } from 'react-helmet';

// Seções da página Home
import HeroSection from '../components/sections/HeroSection';
// import AboutPreview from '../components/sections/AboutPreview'; // Removido da Home
import ProjectsPreview from '../components/sections/ProjectsPreview';
import ContactSection from '../components/sections/ContactSection';

// Configurações
import { seoConfig } from '../config/portfolio';

/**
 * Home - Página inicial do portfólio
 *
 * Agrega seções principais com overview das habilidades e projetos.
 *
 * Funcionalidades:
 * - Carrega herói, destaques de projetos e experiência
 * - Metadados para SEO na página inicial
 * - Integração com seções reutilizáveis
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
const Home = () => {
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
      <HeroSection />
      {/* <AboutPreview /> - Removido da Home */}
      <ProjectsPreview />
      <ContactSection />
    </>
  );
};

export default Home;
