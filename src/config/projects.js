/**
 * Categorias de Projetos
 * @description Lista de categorias principais para filtros
 */
export const PROJECT_CATEGORIES = [
    'Todos',
    'Engenharia de Dados',
    'API & Scraping'
];

/**
 * Subcategorias por Categoria
 * @description Subfiltros específicos para cada categoria principal
 */
export const PROJECT_SUBCATEGORIES = {
    'Engenharia de Dados': ['ETL/ELT', 'Cloud AWS', 'SQL'],
    'API & Scraping': ['Scraping', 'API REST', 'Integrações'],
    'Todos': []
};

/**
 * Portfólio de Projetos em Data & Analytics
 * @description Projetos práticos demonstrando habilidades técnicas
 * @categories "Análise Exploratória", "Engenharia de Dados", "Ciência de Dados", "API & Web Scraping"
 * @structure Array de objetos com dados completos do projeto
 */
export const projects = [
    {
        id: 1,
        title: "Análise Exploratória - Spotify Most Streamed Songs",
        impactPhrase: "★ Destaque | Análise de Dados",
        description: "🎵 Transformei +50k músicas em insights visuais que revelam padrões de sucesso no Spotify usando Python e visualizações com Seaborn.",
        longDescription: "Mergulhei no universo musical para responder uma pergunta intrigante: o que torna uma música irresistível? Usando dataset do Spotify com as faixas mais tocadas globalmente, conduzi uma análise exploratória completa que revelou insights surpreendentes. Descobri que características como 'danceability' e 'energy' têm correlações específicas com o sucesso, mas também identifiquei padrões temporais que mostram como o gosto musical evolui. O projeto culminou na criação de um 'mapa do sucesso musical' com 8 fatores-chave que podem prever a popularidade de uma música.",
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
        category: "Análise de Dados",
        subcategories: ["EDA", "Visualização", "Estatística"],
        image: `${process.env.PUBLIC_URL}/projects/capa_spotify_analysis.png`,
        github: "https://github.com/tmarsbr/data-analyst-project",
        demo: "",
        metrics: "Análise de +50k músicas, identificação de 8 fatores-chave de sucesso",
        featured: false,
        hidden: true,
        complexity: 4,
        date: "2024"
    },
    {
        id: 2,
        title: "Análise dos Acidentes nas Rodovias Brasileiras",
        impactPhrase: "🎯 Projeto Social | Análise de Dados",
        description: "🛣️ Analisei +100k registros de acidentes da PRF criando um mapa inteligente de segurança viária que identifica pontos críticos em 27 estados brasileiros.",
        longDescription: "Este projeto nasceu de uma missão pessoal: usar dados para salvar vidas nas estradas. Analisando registros da Polícia Rodoviária Federal, criei visualizações interativas que revelam os pontos críticos de acidentes em todo território nacional. O mais impactante foi descobrir padrões inesperados entre localização de radares e redução de acidentes, gerando insights que podem influenciar políticas públicas de segurança. Mapiei 27 estados e identifiquei os horários, condições climáticas e trechos mais perigosos, criando um verdadeiro 'GPS da segurança' para as rodovias brasileiras.",
        technologies: ["Python", "Pandas", "Geopandas", "Plotly", "Folium"],
        category: "Análise de Dados",
        subcategories: ["EDA", "Visualização", "Estatística"],
        image: `${process.env.PUBLIC_URL}/projects/capa_prf_accidents.png`,
        github: "https://github.com/tmarsbr/analise-PRF-",
        demo: "",
        metrics: "Análise de +100k acidentes, mapeamento de 27 estados",
        featured: false,
        hidden: true,
        complexity: 5,
        date: "2024"
    },
    {
        id: 3,
        title: "Pipeline de Integração - Clínicas Sanare e Reviver",
        impactPhrase: "⚡ Projeto Real | Engenharia de Dados",
        description: "🏥 Desenvolvi um pipeline ETL robusto que unificou sistemas de duas clínicas médicas, migrando +10k registros com 99.9% de precisão e zero downtime.",
        longDescription: "Enfrentei um desafio real do mundo corporativo: duas clínicas médicas se fundiram e precisavam unificar seus dados de pacientes, históricos e procedimentos. O problema? Sistemas completamente diferentes, formatos incompatíveis e zero margem para erros - afinal, eram dados de saúde humana. Desenvolvi uma solução elegante usando programação orientada a objetos, criando um pipeline ETL modular que não apenas integrou os dados, mas também implementou validações rigorosas de qualidade. O resultado? Uma migração 100% bem-sucedida que permitiu à nova empresa operar desde o primeiro dia.",
        technologies: ["Python", "OOP", "ETL", "Data Quality", "Pandas"],
        category: "Engenharia de Dados",
        subcategories: ["ETL/ELT"],
        image: `${process.env.PUBLIC_URL}/projects/capa_integracao_sistemas_medicos.png`,
        github: "https://github.com/tmarsbr/projeto_pipeline",
        demo: "",
        metrics: "Integração de +10k registros, 99.9% de precisão na migração",
        featured: true,
        complexity: 5,
        date: "2024"
    },
    {
        id: 4,
        title: "Extração e Análise - Repositórios GitHub",
        impactPhrase: "🔥 Automatização | API & Scraping",
        description: "🐙 Sistema automatizado que extraiu e analisou dados de +1000 repositórios de 15 grandes empresas tech via API GitHub, revelando tendências de desenvolvimento.",
        longDescription: "Queria entender como as big techs constroem software em escala. O desafio? Coletar dados de milhares de repositórios sem violar rate limits da API. Desenvolvi um sistema robusto com retry automático, cache inteligente e extração otimizada que processou +1000 repos de 15 empresas (Netflix, Uber, Airbnb...). O resultado revelou padrões surpreendentes: quais linguagens dominam, como evoluíram nos últimos anos e o que isso diz sobre o futuro do desenvolvimento.",
        technologies: ["Python", "GitHub API", "Pandas", "Requests", "JSON"],
        category: "API & Scraping",
        subcategories: ["Scraping", "API REST"],
        image: `${process.env.PUBLIC_URL}/projects/capa_github_analysis.png`,
        github: "https://github.com/tmarsbr/Projeto_api",
        demo: "",
        metrics: "Análise de +1000 repositórios, 15 empresas tech",
        featured: false,
        complexity: 3,
        date: "2024"
    },
    {
        id: 5,
        title: "Pipeline Python - MongoDB - MySQL",
        impactPhrase: "🚀 Integração | Engenharia de Dados",
        description: "🔄 Pipeline completo para e-commerce integrando MongoDB e MySQL, reduzindo em 70% o tempo de análise da equipe de BI com processamento automatizado.",
        longDescription: "A equipe de BI de um e-commerce perdia horas toda semana fazendo joins manuais entre MongoDB e MySQL. Construí um pipeline ETL que automatizou todo o processo: extração de dados não-estruturados do Mongo, transformação com validações de qualidade, e carga otimizada no MySQL. O resultado? 70% menos tempo gasto em preparação de dados e uma base unificada pronta para análise. Eng. de dados resolvendo problemas reais de negócio.",
        technologies: ["Python", "MongoDB", "MySQL", "ETL", "PyMongo"],
        category: "Engenharia de Dados",
        subcategories: ["ETL/ELT", "SQL"],
        image: `${process.env.PUBLIC_URL}/projects/capa_pipeline_mongo_mysql.png`,
        github: "https://github.com/tmarsbr/pipeline-python-mongo-mysql",
        demo: "",
        metrics: "Redução de 70% no tempo de análise da equipe de BI",
        featured: true,
        complexity: 4,
        date: "2024"
    },
    {
        id: 6,
        title: "Análise de Crédito com Machine Learning",
        impactPhrase: "🛠️ Em Desenvolvimento | Ciência de Dados",
        description: "💳 Modelo de score de crédito com Machine Learning em fase de testes.",
        longDescription: "Projeto de análise de crédito utilizando técnicas de machine learning para avaliação de risco. Em desenvolvimento com foco em algoritmos de classificação e análise de padrões de inadimplência.",
        technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
        category: "Ciência de Dados",
        hidden: true,
        subcategories: ["ML Clássico"],
        image: `${process.env.PUBLIC_URL}/projects/capa_credito_ml.png`,
        github: "",
        demo: "",
        metrics: "",
        featured: false,
        inDevelopment: true,
        date: "Em breve"
    },
    {
        id: 7,
        title: "People Analytics - Insights de RH",
        impactPhrase: "🚧 Em Desenvolvimento | Ciência de Dados",
        description: "👥 Sistema de análise de dados de RH para insights estratégicos em gestão de pessoas.",
        longDescription: "Projeto focado na aplicação de People Analytics para tomada de decisão em gestão de pessoas, incluindo análise de turnover, performance e engajamento de colaboradores.",
        technologies: ["Python", "Pandas", "Plotly", "Statistics"],
        category: "Ciência de Dados",
        hidden: true,
        subcategories: ["ML Clássico"],
        image: `${process.env.PUBLIC_URL}/projects/capa_people_analytics.png`,
        github: "",
        demo: "",
        metrics: "",
        featured: false,
        inDevelopment: true,
        date: "Em breve"
    },
    {
        id: 8,
        title: "Previsão de Demandas - Séries Temporais",
        impactPhrase: "⏱️ Em Construção | Ciência de Dados",
        description: "📈 Modelos de previsão de demanda utilizando algoritmos de séries temporais.",
        longDescription: "Projeto focado em previsão de demandas utilizando algoritmos de série temporal avançados, incluindo ARIMA, Prophet e redes neurais para forecasting empresarial.",
        technologies: ["Python", "Prophet", "ARIMA", "TensorFlow"],
        category: "Ciência de Dados",
        hidden: true,
        subcategories: ["ML Clássico"],
        image: `${process.env.PUBLIC_URL}/projects/capa_previsao_demandas.png`,
        github: "",
        demo: "",
        metrics: "",
        featured: false,
        inDevelopment: true,
        date: "Em breve"
    },
    {
        id: 9,
        title: "Sistema Antifraude com IA",
        impactPhrase: "🔒 Em Desenvolvimento | Ciência de Dados",
        description: "🛡️ Sistema de detecção de fraudes com métodos estatísticos e machine learning.",
        longDescription: "Modelo de escore antifraude utilizando técnicas avançadas de machine learning para detectar padrões suspeitos e prevenir fraudes em transações financeiras.",
        technologies: ["Python", "Scikit-learn", "Anomaly Detection", "Deep Learning"],
        category: "Ciência de Dados",
        hidden: true,
        subcategories: ["ML Clássico"],
        image: `${process.env.PUBLIC_URL}/projects/capa_fraude_financeira.png`,
        github: "",
        demo: "",
        metrics: "",
        featured: false,
        inDevelopment: true,
        date: "Em breve"
    },
    {
        id: 10,
        title: "Automatizando Infraestrutura de Processamento de Dados com AWS EMR e Apache Flink",
        impactPhrase: "☁️ Cloud Infrastructure | Engenharia de Dados",
        description: "⚡ Infraestrutura como código para processamento de big data em tempo real utilizando AWS EMR, Apache Flink e Terraform para escalabilidade automática.",
        longDescription: "Projeto focado na automação completa de infraestrutura de processamento de dados em nuvem. Utilizando AWS EMR (Elastic MapReduce) para clusters gerenciados e Apache Flink para processamento de streams em tempo real, toda a infraestrutura é provisionada via Terraform seguindo práticas de IaC (Infrastructure as Code). O sistema inclui auto-scaling, monitoramento integrado e otimização de custos, demonstrando como construir pipelines de dados robustos e escaláveis na AWS.",
        technologies: ["AWS EMR", "Apache Flink", "Terraform", "IaC", "Python"],
        category: "Engenharia de Dados",
        hidden: true,
        subcategories: ["Cloud AWS", "IaC"],
        image: `${process.env.PUBLIC_URL}/projects/capa_aws_emr_flink.png`,
        github: "https://github.com/tmarsbr/aws-emr-flink-portfolio",
        demo: "",
        metrics: "Infraestrutura 100% automatizada, processamento em tempo real",
        featured: true,
        complexity: 5,
        date: "2024"
    },
    {
        id: 11,
        title: "Pipeline PySpark Para Extrair, Transformar e Carregar Arquivos JSON em Banco de Dados",
        impactPhrase: "🔥 Big Data Processing | Engenharia de Dados",
        description: "🚀 Pipeline robusto de ETL desenvolvido com PySpark para processar grandes volumes de dados JSON, aplicando transformações complexas e carregamento otimizado com processamento distribuído.",
        longDescription: "Imagine uma empresa que coleta dados de APIs, logs de aplicações ou sensores IoT, todos em formato JSON. Esses dados precisam ser extraídos, limpos, transformados e carregados em um banco de dados relacional ou NoSQL para análises posteriores. Como engenheiro de dados, meu desafio era criar um pipeline escalável que pudesse processar grandes volumes de JSONs, garantindo integridade, performance e facilidade de manutenção.",
        technologies: ["PySpark", "Apache Spark", "JSON", "ETL", "SQL", "Processamento Distribuído"],
        category: "Engenharia de Dados",
        hidden: true,
        subcategories: ["ETL/ELT", "PySpark", "DataOps", "Docker", "SQL/NoSQL"],
        image: `${process.env.PUBLIC_URL}/projects/capa_pyspark_etl_json.png`,
        github: "https://github.com/tmarsbr/pipeline-pyspark-etl-json",
        demo: "",
        metrics: "Processamento distribuído, transformações complexas, escalabilidade horizontal",
        featured: true,
        complexity: 4,
        date: "2024"
    },
    {
        id: 12,
        title: "Pipeline de Limpeza e Transformação Para Aplicações de IA com PySpark SQL",
        impactPhrase: "🤖 AI Data Preparation | Engenharia de Dados",
        description: "✨ Pipeline especializado em preparação de dados para modelos de IA usando PySpark SQL, garantindo qualidade e consistência dos datasets de treinamento.",
        longDescription: "Pipeline avançado de preparação de dados especificamente desenhado para alimentar aplicações de Inteligência Artificial. Utilizando PySpark SQL para operações eficientes, o sistema implementa técnicas sofisticadas de limpeza, detecção de anomalias, feature engineering e normalização. Inclui validações automatizadas de qualidade, tratamento inteligente de valores ausentes e geração de estatísticas descritivas para garantir que os dados estejam prontos para treinamento de modelos de ML.",
        technologies: ["PySpark", "Spark SQL", "Feature Engineering", "Data Quality"],
        category: "Engenharia de Dados",
        hidden: true,
        subcategories: ["ETL/ELT"],
        image: `${process.env.PUBLIC_URL}/projects/capa_pyspark_ai_pipeline.png`,
        github: "https://github.com/tmarsbr/pyspark-ai-data-pipeline",
        demo: "",
        metrics: "Preparação de dados para IA, validações automatizadas",
        featured: true,
        complexity: 5,
        date: "2024"
    },
    {
        id: 13,
        title: "Automação de Testes de Modelos de Dados no dbt",
        impactPhrase: "🧪 Data Testing | Engenharia de Dados",
        description: "🔍 Framework completo de testes automatizados para modelos de dados usando dbt, garantindo qualidade e confiabilidade dos pipelines analíticos.",
        longDescription: "Implementação de um framework robusto de testes automatizados para modelos de dados utilizando dbt (data build tool). O sistema inclui testes de integridade referencial, validações de qualidade de dados, testes de regressão e monitoramento contínuo. Desenvolvido com foco em DataOps, o projeto demonstra como implementar CI/CD para dados, incluindo testes unitários para transformações SQL, validações de schema e alertas automáticos para anomalias nos dados.",
        technologies: ["dbt", "SQL", "Data Testing", "DataOps", "CI/CD"],
        category: "Engenharia de Dados",
        hidden: true,
        subcategories: ["DataOps"],
        image: `${process.env.PUBLIC_URL}/projects/capa_dbt_automated_testing.png`,
        github: "https://github.com/tmarsbr/dbt-automated-testing",
        demo: "",
        metrics: "Framework de testes automatizados, qualidade de dados garantida",
        featured: true,
        complexity: 4,
        date: "2024"
    },
    {
        id: 14,
        title: "Movimentação de Dados Entre Bancos de Dados com Airbyte",
        impactPhrase: "🔄 Data Integration | Engenharia de Dados",
        description: "🌐 Solução de integração de dados usando Airbyte para sincronização automática entre diferentes fontes de dados, garantindo consistência e atualização em tempo real.",
        longDescription: "Implementação de uma solução completa de integração de dados utilizando Airbyte para orquestrar a movimentação entre diferentes sistemas de banco de dados. O projeto demonstra como configurar conectores personalizados, implementar transformações durante a sincronização e garantir a consistência dos dados entre ambientes. Inclui monitoramento de performance, tratamento de falhas e estratégias de recuperação, mostrando como construir pipelines de dados resilientes e escaláveis.",
        technologies: ["Airbyte", "PostgreSQL", "MySQL", "Data Integration", "ETL"],
        category: "Engenharia de Dados",
        hidden: true,
        subcategories: ["ETL/ELT"],
        image: `${process.env.PUBLIC_URL}/projects/capa_automacao_etl.png`,
        github: "https://github.com/tmarsbr/airbyte-etl-portfolio",
        demo: "",
        metrics: "Sincronização automática entre DBs, integração de dados resiliente",
        featured: true,
        complexity: 4,
        date: "2024"
    },
    {
        id: 15,
        title: "Pipeline de Dados Climáticos – Airflow",
        impactPhrase: "🌤️ Orquestração | Engenharia de Dados",
        description: "⚡ Pipeline automatizado com Apache Airflow que extrai dados meteorológicos da API Visual Crossing Weather, processa e estrutura datasets semanalmente para planejamento turístico em Boston.",
        longDescription: "Desenvolvimento de um pipeline robusto de dados climáticos utilizando Apache Airflow para uma empresa de turismo em Boston. O sistema resolve o desafio de coletar e processar dados meteorológicos de forma consistente e automatizada, permitindo planejamento inteligente de roteiros turísticos baseados em condições climáticas. Implementa DAGs (Directed Acyclic Graphs) que extraem dados da API Visual Crossing Weather, processam informações meteorológicas e armazenam datasets organizados por semana. O pipeline inclui separação especializada de dados (temperaturas, condições climáticas) e execução semanal automatizada, capacitando decisões data-driven que melhoram a experiência do cliente e otimizam operações turísticas.",
        technologies: ["Apache Airflow", "Python", "API Integration", "ETL", "pandas"],
        category: "Engenharia de Dados",
        subcategories: ["DataOps", "ETL/ELT"],
        image: `${process.env.PUBLIC_URL}/projects/capa_pipeline_climatico_airflow.png`,
        github: "https://github.com/tmarsbr/airflowalura",
        demo: "",
        metrics: "Pipeline semanal automatizado, extração de dados meteorológicos estruturados",
        featured: true,
        complexity: 4,
        date: "2024"
    },
    {
        id: 16,
        title: "Pipeline ETL Distribuído com Apache Airflow e AWS EMR",
        impactPhrase: "🚀 Enterprise-Ready | Big Data Engineering",
        description: "⚡ Pipeline completo de ETL processando 5.8M registros de voos com Apache Airflow e AWS EMR, demonstrando arquitetura enterprise para processamento distribuído em escala.",
        longDescription: "Projeto completo de Data Engineering de nível profissional que implementa um pipeline ETL robusto para processamento de big data. O sistema processa 5,819,079 registros de voos (564.96 MB) convertendo dados de CSV para formato Parquet otimizado, utilizando Apache Airflow 2.8.2 para orquestração e AWS EMR 6.15.0 com Spark 3.4.1 para processamento distribuído. Inclui containerização com Docker Compose, storage otimizado no S3 com particionamento por ano/mês/dia, e configuração completa de VPC + IAM para segurança enterprise. O projeto demonstra resolução de desafios técnicos reais incluindo compatibilidade de instâncias AWS (m5→m4), configuração VPC obrigatória, permissões IAM corretas, capacidade de zona e correção de tipos de dados no Spark. Documentação completa para diferentes audiências (técnica e executiva) e práticas de produção com monitoramento, logs detalhados e auto-terminação para otimização de custos.",
        technologies: ["Apache Airflow", "AWS EMR", "Apache Spark", "Docker", "S3", "Parquet", "VPC"],
        category: "Engenharia de Dados",
        hidden: true,
        subcategories: ["Cloud AWS", "DataOps", "ETL/ELT"],
        image: `${process.env.PUBLIC_URL}/projects/capa_airflow_emr_pipeline.png`,
        github: "https://github.com/tmarsbr/apache-airflow-emr-pipeline",
        demo: "",
        metrics: "5.8M registros processados, 564.96 MB otimizados, pipeline enterprise-ready",
        featured: true,
        complexity: 5,
        date: "2024"
    },
    {
        id: 17,
        title: "Construção de um Datalake e Lakehouse do Zero – AWS & Databricks",
        impactPhrase: "🏗️ Data Lakehouse | Engenharia de Dados",
        description: "🏛️ Arquitetura moderna de dados implementando Datalake e Lakehouse do zero com AWS e Databricks, organizando dados em camadas RAW → BRONZE → SILVER → GOLD.",
        longDescription: "Projeto completo de construção de uma arquitetura de dados moderna implementando conceitos de Datalake e Lakehouse utilizando AWS e Databricks. A solução organiza dados em camadas (RAW → BRONZE → SILVER → GOLD) com CDC (Change Data Capture) e CDF (Change Data Feed) para ingestão e transformação contínua. Inclui processamento em tempo real, governança de dados, e criação de cubos analíticos na camada GOLD para alimentar dashboards e análises de negócio. Demonstra domínio em arquiteturas modernas de dados com foco em escalabilidade, performance e governança.",
        technologies: ["AWS", "Databricks", "Delta Lake", "CDC", "CDF", "Spark", "Data Lakehouse"],
        category: "Engenharia de Dados",
        subcategories: ["Cloud AWS", "Databricks", "ETL/ELT", "Streaming", "Data Lakehouse", "DataOps", "Dashboard"],
        image: `${process.env.PUBLIC_URL}/projects/capa_neon_data_lakehouse.png`,
        github: "",
        demo: "",
        metrics: "Arquitetura Lakehouse completa, processamento em tempo real com CDC/CDF",
        featured: true,
        complexity: 5,
        date: "2024"
    },
    {
        id: 18,
        title: "Pipeline CDC - Ingestão Automatizada Kaggle → AWS S3",
        impactPhrase: "🔄 Change Data Capture | Engenharia de Dados",
        description: "📊 Sistema de ETL automatizado com CDC que detecta mudanças em datasets do Kaggle, gerando arquivos Parquet otimizados para alimentar Data Lake na AWS S3.",
        longDescription: "Pipeline de ingestão incremental (Parte 1/2 de arquitetura completa de Data Lake) que automatiza a extração de dados do Kaggle com Change Data Capture (CDC). O sistema detecta e captura automaticamente três tipos de operações: INSERT (novos registros), UPDATE (alterações em registros existentes) e DELETE (registros removidos), gerando arquivos Parquet com compressão Snappy e metadados CDC estruturados. Implementa comparação inteligente de snapshots (anterior vs atual) para identificar mudanças, evitando reprocessamento completo de datasets. Utiliza Python Schedule para orquestração de execuções periódicas, com retry logic e exponential backoff para resiliência. Os dados são organizados no S3 em duas camadas: full-load (snapshot completo inicial) e cdc/ (arquivos incrementais com timestamp). Alcança 70% de redução no tamanho de armazenamento comparado a CSV tradicional, preparando dados otimizados para consumo downstream em arquiteturas Delta Lake e Lakehouse. Inclui logging estruturado, tratamento robusto de erros e suporte a múltiplas tabelas via configuração JSON, demonstrando domínio em processamento incremental, otimização de storage cloud-native e automação de pipelines ETL enterprise-grade.",
        technologies: ["Python", "Pandas", "AWS S3", "Parquet", "Kaggle API", "CDC", "boto3", "PyArrow"],
        category: "Engenharia de Dados",
        subcategories: ["ETL/ELT", "Cloud AWS", "DataOps"],
        image: `${process.env.PUBLIC_URL}/projects/capa_pipeline_cdc_kaggle.png`,
        github: "https://github.com/tmarsbr/cdc-kaggle",
        demo: "",
        metrics: "1.5GB/mês processados, 24 exec./dia, 3-5min tempo médio, 70% economia storage, 99.9% uptime",
        featured: true,
        complexity: 4,
        date: "2024"
    }
];

/**
 * Configuração da Seção de Projetos
 * @description Textos e limites para a seção de projetos na Home
 */
export const projectsConfig = {
    title: "Projetos em Destaque",
    description: "Uma vitrine com os projetos que mostram minha evolução prática em dados — da coleta à modelagem, com impacto real.",
    maxProjects: 3
};

/**
 * Configuração da Página de Projetos
 * @description Textos e storytelling da página de projetos
 */
export const projectsPageConfig = {
    title: "Data & Analytics",
    subtitle: "Arquiteturas Escaláveis • Pipelines Robustos • Insights Reais",
    description: "Da ingestão bruta à inteligência de negócio. Cada projeto demonstra minha capacidade de desenhar arquiteturas resilientes, automatizar fluxos complexos e entregar dados confiáveis para tomada de decisão.",
    philosophy: "Código limpo, documentação clara e foco em resolver problemas reais. Minha stack é apenas a ferramenta; o objetivo é gerar valor através dos dados."
};
