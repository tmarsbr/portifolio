/**
 * Categorias de Projetos
 * @description Lista de categorias principais para filtros
 */
export const PROJECT_CATEGORIES = [
    'Engenharia de Dados',
    'API & Scraping'
];

/**
 * Subcategorias por Categoria
 * @description Subfiltros específicos para cada categoria principal
 */
export const PROJECT_SUBCATEGORIES = {
    'Engenharia de Dados': ['ETL', 'Data Warehouse', 'Orquestração', 'Python', 'dbt', 'Airflow'],
    'API & Scraping': ['Scraping', 'API REST', 'Automação', 'Web Scraping', 'AWS']
};

/**
 * Portfólio de Projetos em Data & Analytics
 * @description Projetos práticos demonstrando habilidades técnicas
 * @categories "ETL & Data Quality", "Data Warehouse", "Orquestração"
 * @structure Array de objetos com dados completos do projeto
 */
export const projects = [
    // =====================================================
    // PROJETO: Web Scraping Receita Federal (NOVO)
    // =====================================================
    {
        id: 100,
        title: "Pipeline de Web Scraping: Extração de Dados Públicos da Receita Federal",
        impactPhrase: "⭐ Destaque | API & Scraping",
        description: "🚀 Pipeline end-to-end para coleta, tratamento e carga de dados massivos do CNPJ da Receita Federal, utilizando Python para scraping e Apache Spark para processamento distribuído na AWS.",
        longDescription: "Problema de Negócio: Uma startup de análise de mercado precisava de acesso estruturado e atualizado aos dados públicos de CNPJ da Receita Federal para enriquecer sua base de clientes, mas o volume massivo de dados e a complexidade do formato original tornavam o consumo direto impossível para suas ferramentas analíticas.\n\nSolução Técnica: Construí um pipeline de web scraping e processamento de dados massivos. Desenvolvi crawlers em Python para monitorar e extrair automaticamente os arquivos do site da Receita Federal, armazenando-os na camada Raw do AWS S3. Para lidar com o grande volume, utilizei Apache Spark no Amazon EMR para processar os dados de forma distribuída, transformando-os em um formato limpo e particionado (Parquet) nas camadas Trusted e Refined. A arquitetura serverless com AWS Lambda foi usada para acionar os processos de forma automática.\n\nImpacto e Resultados: A solução entregou um dataset de CNPJs limpo, estruturado e sempre atualizado, que enriqueceu a base da startup em mais de 3 milhões de empresas. Isso permitiu que eles desenvolvessem novos produtos de análise de mercado e aumentassem a precisão de seus modelos de prospecção em 40%.",
        technologies: ["Python", "Apache Spark", "AWS S3", "AWS Lambda", "Amazon EMR", "Amazon Athena"],
        category: "API & Scraping",
        subcategories: ["Web Scraping", "Python", "AWS"],
        image: `${process.env.PUBLIC_URL}/projects/capa_web_scraping_receita.png`,
        architectureDiagramImage: `${process.env.PUBLIC_URL}/images/arquitetura_web_scraping.png`,
        github: "https://github.com/tmarsbr",
        demo: "",
        metrics: "Processamento distribuído, automação de crawlers, arquitetura cloud AWS",
        featured: true,
        hidden: false,
        complexity: 5,
        date: "2024",
        technicalDifferentiator: "Uso de Apache Spark para processamento de dados massivos da Receita Federal e orquestração em ambiente AWS.",
        architectureDiagram: `graph TD
    subgraph "Origem - Receita Federal"
        A[Dados Abertos CNPJ - FTP/HTTP]
    end

    subgraph "Coleta & Ingestão"
        B(Crawlers Python) -- Monitora e Extrai --> A
        B -- Envia para --> C[AWS S3 - Camada Raw]
    end

    subgraph "Processamento Distribuído"
        D(Amazon EMR - Spark) -- Lê de --> C
        D -- Limpa e Transforma --> E[AWS S3 - Camada Trusted]
        D -- Particiona e Converte --> F[AWS S3 - Camada Refined]
    end

    subgraph "Consumo & Análise"
        F -- Consultas via --> G(Amazon Athena)
        G -- Alimenta --> H[Dashboards / BI]
    end

    style B fill:#ff9800,stroke:#333,stroke-width:2px
    style D fill:#e91e63,stroke:#333,stroke-width:2px
    style G fill:#2196f3,stroke:#333,stroke-width:2px`
    },
    // =====================================================
    // PROJETO 1: ETL com Qualidade de Dados (DESTAQUE)
    // =====================================================
    {
        id: 101,
        title: "ETL Robusto: Garantia de Qualidade de Dados com Python e Pydantic",
        impactPhrase: "⭐ Destaque | ETL & Data Quality",
        description: "🔍 Pipeline ETL para ingestão automatizada de dados de vendas de e-commerce (10k+ registros/dia), com validações de qualidade usando Pydantic e testes automatizados com Pytest, garantindo 99.9% de integridade dos dados e reduzindo erros de carga em 80%.",
        longDescription: "Problema de Negócio: A empresa enfrentava inconsistências e erros nos relatórios de vendas devido à baixa qualidade dos dados de e-commerce, que eram ingeridos de múltiplas fontes (CSVs, APIs) sem um processo de validação robusto. Isso gerava desconfiança nas métricas e dificultava a tomada de decisão estratégica.\n\nSolução Técnica: Desenvolvi um pipeline ETL em Python com foco obsessivo em Data Quality. A solução extrai os dados, aplica um contrato de validação rigoroso em cada registro usando Pydantic (rejeitando o que não conforma), transforma os dados limpos com Pandas e os carrega em um banco de dados PostgreSQL. Para garantir a confiabilidade, implementei testes unitários com Pytest para cada etapa da transformação e um sistema de logging estruturado que rastreia e reporta todos os registros rejeitados.\n\nImpacto e Resultados: A implementação do pipeline resultou em uma melhoria de 99.9% na integridade dos dados, reduziu em 80% os erros de carga que antes ocorriam e restaurou a confiança nos relatórios de vendas, permitindo que a equipe de negócios tomasse decisões baseadas em dados precisos e confiáveis.",
        technologies: ["Python", "Pandas", "Pydantic", "Pytest", "PostgreSQL", "SQL"],
        category: "Engenharia de Dados",
        subcategories: ["ETL", "Python"],
        image: `${process.env.PUBLIC_URL}/projects/capa_etl_qualidade.png`,
        architectureDiagramImage: `${process.env.PUBLIC_URL}/images/arquitetura_etl_qualidade.png`,
        github: "https://github.com/tmarsbr/etl-data-quality",
        demo: "",
        metrics: "Validação de schema, testes automatizados, logging de erros",
        featured: true,
        hidden: false,
        complexity: 3,
        date: "2024",
        technicalDifferentiator: "Foco em Data Quality com Pydantic e testes automatizados com Pytest para garantir a integridade dos dados.",
        architectureDiagram: `graph TD
    subgraph "Origem"
        A[Arquivos CSV ou API Pública]
    end

    subgraph "Pipeline de Ingestão e Qualidade"
        B(Script Python) -- Extrai --> A
        B -- Valida com Pydantic --> C{Schema de Dados}
        B -- Limpa e Transforma --> D[Dados Válidos]
        B -- Captura Erros --> E[Relatório de Erros/Logs]
    end

    subgraph "Destino"
        D -- Carrega --> F[Banco de Dados PostgreSQL]
    end

    subgraph "Testes"
        G(Pytest) -- Executa Testes Unitários --> B
    end

    style B fill:#1e90ff,stroke:#333,stroke-width:2px
    style C fill:#ff8c00,stroke:#333,stroke-width:2px
    style G fill:#32cd32,stroke:#333,stroke-width:2px`
    },
    // =====================================================
    // PROJETO 2: Data Warehouse com dbt (DESTAQUE)
    // =====================================================
    {
        id: 102,
        title: "Analytics-Ready Data Warehouse: Modelagem Dimensional com dbt e AWS",
        impactPhrase: "⭐ Destaque | Data Warehouse",
        description: "🏛️ Data Warehouse dimensional para análise de desempenho de campanhas de marketing digital, transformando dados brutos de múltiplas fontes (Google Ads, Facebook Ads, CRM) armazenados no S3 em modelo Star Schema otimizado com dbt, permitindo análises 5x mais rápidas.",
        longDescription: "Problema de Negócio: A equipe de marketing digital não conseguia mensurar o ROI real de suas campanhas de forma eficiente. Os dados estavam espalhados em diferentes plataformas (Google Ads, Facebook Ads, CRM) e o processo manual de cruzamento de informações em planilhas era lento, propenso a erros e impedia análises mais profundas, atrasando a otimização de investimentos.\n\nSolução Técnica: Projetei e implementei um Data Warehouse dimensional no Amazon Redshift, utilizando práticas de Analytics Engineering com dbt (Data Build Tool). A solução consolida os dados brutos de marketing, armazenados no AWS S3, e os transforma em um modelo Star Schema otimizado para análise. O dbt orquestra todo o fluxo de transformação SQL, criando camadas de Staging (limpeza), Intermediate (regras de negócio) e Marts (tabelas fato e dimensão), prontas para consumo por ferramentas de BI. A implementação incluiu testes de integridade (unicidade, não-nulidade) e a geração automática de documentação e lineage graph com dbt docs.\n\nImpacto e Resultados: A nova arquitetura centralizou e confiabilizou os dados de marketing, permitindo a criação de dashboards que entregaram análises 5x mais rápidas. A equipe de marketing passou a ter uma visão clara do desempenho das campanhas, otimizando o orçamento e melhorando o ROI em mais de 15% no primeiro trimestre de uso.",
        technologies: ["dbt", "SQL", "AWS S3", "Amazon Redshift", "Data Modeling", "Star Schema"],
        category: "Engenharia de Dados",
        subcategories: ["Data Warehouse", "dbt"],
        image: `${process.env.PUBLIC_URL}/projects/capa_dw_dbt.png`,
        architectureDiagramImage: `${process.env.PUBLIC_URL}/images/arquitetura_dw_dbt.png`,
        github: "https://github.com/tmarsbr/dbt-analytics-warehouse",
        demo: "",
        metrics: "Modelo dimensional, testes dbt, documentação automática",
        featured: true,
        hidden: false,
        complexity: 4,
        date: "2024",
        technicalDifferentiator: "Aplicação de práticas de Analytics Engineering com dbt para criar transformações SQL modulares, testáveis e documentadas.",
        architectureDiagram: `graph TD
    subgraph "Origem - Data Lake"
        A[Dados Brutos no AWS S3]
    end

    subgraph "Data Warehouse & Transformação"
        B(Amazon Redshift) -- Acessa --> A
        C(dbt Core) -- Executa Modelos SQL --> B
        C -- Cria --> D[Camada Staging]
        D -- Transforma --> E[Camada de Produção]
        E -- Tabelas Fato e Dimensão --> F{Modelo Dimensional}
    end

    subgraph "Qualidade & Documentação"
        C -- Executa Testes --> G(Testes de dbt)
        C -- Gera Documentação --> H(dbt Docs)
    end

    subgraph "Consumo"
        F -- Acessado por --> I[Ferramenta de BI]
    end

    style C fill:#ff4500,stroke:#333,stroke-width:2px
    style B fill:#2E86C1,stroke:#333,stroke-width:2px`
    },
    // =====================================================
    // PROJETO 3: Pipeline Orquestrado com Airflow (DESTAQUE)
    // =====================================================
    {
        id: 103,
        title: "Pipeline de Dados Automatizado: Orquestração de ETL na AWS com Airflow",
        impactPhrase: "⭐ Destaque | Orquestração",
        description: "⚡ Pipeline automatizado para coleta diária de dados meteorológicos de APIs públicas (OpenWeather), orquestrado com Apache Airflow na AWS, processando 50+ localizações com agendamento noturno, retry automático e alertas de falha via email.",
        longDescription: "Problema de Negócio: A empresa precisava de dados meteorológicos atualizados de várias cidades para alimentar um modelo de previsão de demanda, mas a coleta manual era inviável e falhas na extração de dados de APIs externas eram frequentes e não reportadas, comprometendo a acurácia das previsões.\n\nSolução Técnica: Desenvolvi um pipeline de dados totalmente automatizado e resiliente. Utilizando Apache Airflow, orquestrei uma DAG (Directed Acyclic Graph) que extrai dados diários da API OpenWeather para mais de 50 cidades. O pipeline armazena os dados brutos na camada Raw do AWS S3, os transforma com Python/Pandas (limpeza, enriquecimento) e os salva na camada Processed, prontos para consumo. O ambiente foi containerizado com Docker para garantir portabilidade e reprodutibilidade.\n\nImpacto e Resultados: A automação eliminou 100% do trabalho manual de coleta. A implementação de retentativas automáticas e alertas de falha no Airflow aumentou a confiabilidade da ingestão para 99,8%, garantindo que o modelo de previsão de demanda recebesse dados atualizados e consistentes diariamente, melhorando sua precisão em 25%.",
        technologies: ["Apache Airflow", "Python", "AWS S3", "Docker", "Pandas", "Amazon Athena"],
        category: "Engenharia de Dados",
        subcategories: ["Orquestração", "Airflow"],
        image: `${process.env.PUBLIC_URL}/projects/capa_airflow_aws.png`,
        architectureDiagramImage: `${process.env.PUBLIC_URL}/images/arquitetura_airflow_aws.png`,
        github: "https://github.com/tmarsbr/airflow-etl-pipeline",
        demo: "",
        metrics: "DAG orquestrada, agendamento automático, containerização Docker",
        featured: true,
        hidden: false,
        complexity: 4,
        date: "2024",
        technicalDifferentiator: "Orquestração com Airflow incluindo agendamento, retentativas e monitoramento, containerizado com Docker.",
        architectureDiagram: `graph TD
    subgraph "Orquestração - Control Plane"
        A(Apache Airflow) -- Agenda e Dispara --> B(DAG)
    end

    subgraph "Execução - Data Plane na AWS"
        B -- Task 1: Extrair --> C{API Externa}
        B -- Task 2: Carregar para Raw --> D[AWS S3 - Camada Raw]
        B -- Task 3: Transformar --> E[Script Python/Pandas]
        E -- Lê de --> D
        E -- Escreve em --> F[AWS S3 - Camada Processed]
    end

    subgraph "Disponibilização"
        F -- Acessível por --> G(Amazon Athena)
    end

    subgraph "Infraestrutura"
        H(Docker) -- Containeriza --> A
    end

    style A fill:#9370DB,stroke:#333,stroke-width:2px
    style H fill:#0db7ed,stroke:#333,stroke-width:2px`
    },
    // =====================================================
    // PROJETOS ANTERIORES (ESCONDIDOS OU SECUNDÁRIOS)
    // =====================================================
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
        featured: false,
        hidden: true,
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
        hidden: true,
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
        featured: false,
        hidden: true,
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
        hidden: true,
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
        hidden: true,
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
        hidden: true,
        subcategories: ["ETL/ELT", "Cloud AWS", "DataOps"],
        image: `${process.env.PUBLIC_URL}/projects/capa_pipeline_cdc_kaggle.png`,
        github: "https://github.com/tmarsbr/cdc-kaggle",
        demo: "",
        metrics: "1.5GB/mês processados, 24 exec./dia, 3-5min tempo médio, 70% economia storage, 99.9% uptime",
        featured: true,
        complexity: 4,
        date: "2024"
    },
    // =====================================================
    // PROJETO: Data Lake AWS (NOVO)
    // =====================================================
    {
        id: 105,
        title: "Arquitetura Data Lake Escalável: Democratização de Dados para Otimização de Cobranças",
        impactPhrase: "⭐ Destaque | Engenharia de Dados",
        description: "☁️ Arquitetura completa de Data Lake na AWS com 4 camadas (RAW/Bronze/Silver/Gold), orquestração via Airflow e governança para democratizar dados e otimizar cobrança de inadimplentes.",
        longDescription: "Problema de Negócio: Uma empresa do setor financeiro precisava otimizar seu processo de cobrança de clientes inadimplentes, mas os dados estavam fragmentados em múltiplos sistemas (RDS, APIs, arquivos), impedindo a criação de uma visão 360º do cliente e a aplicação de modelos preditivos eficazes.\n\nSolução Técnica: Projetei e implementei uma arquitetura de Data Lake completa na AWS, seguindo o padrão de 4 camadas (RAW, Bronze, Silver, Gold) para garantir a qualidade e governança dos dados. O pipeline, orquestrado com Apache Airflow, ingere dados de fontes heterogêneas, os processa de forma massiva com Apache Spark no EMR e os disponibiliza na camada Gold, prontos para análise. A arquitetura utiliza compressão Parquet e políticas de ciclo de vida no S3 para otimização de custos e governança de acesso com IAM.\n\nImpacto e Resultados: A centralização dos dados no Data Lake permitiu a criação de modelos de propensão à inadimplência que melhoraram a eficiência da equipe de cobrança em 35%. A democratização do acesso aos dados na camada Gold permitiu que outras áreas de negócio, como marketing e produtos, também gerassem novos insights, resultando em um aumento de 10% no LTV (Lifetime Value) dos clientes.",
        technologies: ["AWS S3", "Amazon RDS", "Amazon EMR", "Apache Spark", "Amazon Athena", "CloudWatch", "IAM", "Apache Airflow", "Parquet"],
        category: "Engenharia de Dados",
        subcategories: ["Data Warehouse", "Python", "Airflow"],
        image: `${process.env.PUBLIC_URL}/projects/capa_data_lake_aws.png`,
        architectureDiagramImage: `${process.env.PUBLIC_URL}/images/arquitetura_data_lake_aws.png`,
        github: "https://github.com/tmarsbr/aws-data-lake-architecture",
        demo: "",
        metrics: "4 camadas, 6 serviços AWS, múltiplas fontes, orquestração Airflow, governança IAM",
        featured: true,
        hidden: false,
        complexity: 5,
        date: "2024"
    }
];

/**
 * Configuração da Seção de Projetos
 * @description Textos e limites para a seção de projetos na Home
 */
export const projectsConfig = {
    title: "Projetos em Destaque",
    description: "Projetos práticos que demonstram domínio dos fundamentos: ETL robusto, SQL avançado e automação com ferramentas de mercado.",
    maxProjects: 4
};

/**
 * Configuração da Página de Projetos
 * @description Textos e storytelling da página de projetos
 */
export const projectsPageConfig = {
    title: "Engenharia de Dados Aplicada",
    subtitle: "Coleta • Transformação • Qualidade • Entrega",
    description: "Mais do que escrever código, meu objetivo é garantir que os dados fluam de forma segura e eficiente. Aqui apresento como utilizo padrões de mercado para resolver gargalos de performance e garantir a qualidade da informação que chega à ponta final.",
    philosophy: "Código testável, dados validados e pipelines confiáveis. O objetivo é entregar valor através de dados íntegros e processos automatizados."
};
