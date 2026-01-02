// ========================================
// CONFIGURAÇÃO DO PORTFÓLIO DATA & ANALYTICS
// ========================================
// Edite este arquivo para personalizar seu portfólio

import { personalInfo, experiences, certificates } from './personal';
import { projects, PROJECT_CATEGORIES, PROJECT_SUBCATEGORIES, projectsConfig, projectsPageConfig } from './projects';
import { skills, SKILL_TREE } from './skills';
import { themeConfig } from './theme';

// Re-exportar tudo para manter compatibilidade
export {
  personalInfo,
  experiences,
  certificates,
  projects,
  PROJECT_CATEGORIES,
  PROJECT_SUBCATEGORIES,
  projectsConfig,
  projectsPageConfig,
  skills,
  SKILL_TREE,
  themeConfig
};

/**
 * Configurações de SEO (Search Engine Optimization)
 * @description Metadados para otimização em motores de busca
 * @includes title, description, keywords, Open Graph, Twitter Cards
 */
export const seoConfig = {
  title: "Tiago Silva — Engenheiro de Dados Júnior",
  description: "Engenheiro de Dados Júnior focado em ETL, SQL e automação de pipelines na nuvem. Experiência prática com Python, Pandas, dbt, Apache Airflow e AWS. Foco em Data Quality, testes automatizados e pipelines confiáveis.",
  keywords: "engenheiro de dados junior, data engineering, etl, python, sql, aws, airflow, dbt, pandas, pydantic, pytest, pipeline de dados, tiago silva, portfólio, data quality",
  author: "Tiago Silva",
  url: "https://tmarsbr.github.io/portifolio", // URL do GitHub Pages
  image: `${process.env.PUBLIC_URL}/og-image.jpg`, // Adicione uma imagem de preview

  // Open Graph
  ogTitle: "Tiago Silva — Engenheiro de Dados Júnior",
  ogDescription: "ETL robusto, SQL avançado, automação com Python e orquestração com Airflow e dbt. Focado em Data Quality e pipelines confiáveis.",
  twitterCard: "summary_large_image",
  twitterCreator: "@tiagodados" // Se tiver Twitter
};

/**
 * Configurações do Google Analytics
 * @description Tracking e métricas de acesso (opcional)
 */
export const analyticsConfig = {
  trackingId: process.env.REACT_APP_TRACKING_ID || "",
  enabled: process.env.NODE_ENV === "production"
};

/**
 * Configuração Principal do Portfólio
 * @description Exportação unificada de todas as configurações
 * @exports Objeto contendo todas as seções do portfólio
 */
const portfolioConfig = {
  personalInfo,
  skills,
  experiences,
  projects,
  projectsConfig,
  projectsPageConfig,
  certificates,
  themeConfig,
  seoConfig,
  analyticsConfig
};

export default portfolioConfig;
