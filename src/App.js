import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Helmet } from 'react-helmet';

// Context do tema
import { ThemeProvider } from './contexts/ThemeContext';

// Estilos
import './styles/global.css';

// Componentes
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ThemeHelper from './components/common/ThemeHelper';
import LoadingSpinner from './components/common/LoadingSpinner';

// Configurações
import { seoConfig, personalInfo } from './config/portfolio';

// Lazy Loading das Páginas
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Certificacoes = lazy(() => import('./pages/Certificacoes'));

/**
 * App - Componente raiz do portfólio
 *
 * Envolve toda a aplicação com o provedor de tema e define as rotas
 * principais utilizando o Router.
 *
 * Funcionalidades:
 * - Fornece contexto de tema global
 * - Inclui o CssBaseline do Material UI
 * - Configura o roteamento com basename do projeto
 * - Implementa Lazy Loading para otimização de performance
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router basename="/portifolio">
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

// Componente interno para acessar o tema
/**
 * AppContent - Estrutura interna da aplicação
 *
 * Gerencia metadados de SEO e renderiza as páginas com
 * cabeçalho e rodapé.
 *
 * Funcionalidades:
 * - Define título e meta tags dinâmicas
 * - Renderiza Header, Footer e componentes auxiliares
 * - Controla as rotas do portfólio
 *
 * @component
 * @example
 * return (
 *   <AppContent />
 * )
 */
function AppContent() {
  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="author" content={seoConfig.author} />

        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.url} />
        <meta property="og:image" content={seoConfig.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={seoConfig.twitterCard} />
        <meta name="twitter:title" content={seoConfig.ogTitle} />
        <meta name="twitter:description" content={seoConfig.ogDescription} />
        <meta name="twitter:image" content={seoConfig.image} />
        {seoConfig.twitterCreator && (
          <meta name="twitter:creator" content={seoConfig.twitterCreator} />
        )}

        {/* Outros meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={seoConfig.url} />
        {/* JSON-LD: Person */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: personalInfo.fullName || personalInfo.name,
            jobTitle: personalInfo.title,
            url: seoConfig.url,
            email: `mailto:${personalInfo.email}`,
            telephone: personalInfo.phone,
            sameAs: [personalInfo.linkedin, personalInfo.github].filter(Boolean)
          })}
        </script>
        {/* JSON-LD: WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: seoConfig.title,
            url: seoConfig.url,
            description: seoConfig.description,
            inLanguage: 'pt-BR'
          })}
        </script>
      </Helmet>

      <div className="App">
        <ThemeHelper />
        <Header />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificacoes" element={<Certificacoes />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
