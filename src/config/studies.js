/**
 * Configuração de Estudos - Estrutura Hierárquica
 * @description Formações > Cursos > Labs/Projetos
 */

/**
 * Lista de Formações (Nível Superior)
 * Adicione novas formações aqui
 */
export const FORMATIONS = [
    {
        id: 'engenharia-dados-4',
        name: 'Engenharia de Dados 4.0',
        fullName: 'Formação Engenharia de Dados 4.0 - Data Science Academy',
        icon: '🎓',
        color: '#00D4AA',
        institution: 'Data Science Academy',
        description: 'Onde minha transição ganhou forma. Mergulhei em Python, SQL e conceitos de estatística — fundamentos essenciais para qualquer engenheiro de dados. A cada módulo, construí projetos que transformaram teoria em prática.'
    },
    {
        id: 'fullstack-data-pod',
        name: 'Full Stack Data & Analytics',
        fullName: 'Formação Full Stack Data & Analytics - Pod Academy (550h)',
        icon: '📊',
        color: '#FF6B35',
        institution: 'Pod Academy',
        description: 'Programa avançado de 550 horas que reúne disciplinas completas de Engenharia de Dados, Análise de Dados, Ciência de Dados e Cloud Computing. Projeto Prático de Conclusão aprovado por banca de executivos.',
        subFormations: [
            { id: 'analise-dados', name: 'Formação Análise de Dados', icon: '📈' },
            { id: 'ciencia-dados', name: 'Formação Ciência de Dados', icon: '🔬' },
            { id: 'engenharia-dados', name: 'Formação Engenharia de Dados', icon: '⚙️' },
        ]
    },
    {
        id: 'formacoes-alura',
        name: 'Formações Alura',
        fullName: 'Formações em Dados - Alura',
        icon: '🔵',
        color: '#0066FF',
        institution: 'Alura',
        description: 'Formações especializadas em tecnologias de dados: Analytics, AWS Data Lake, Apache Airflow e DataMesh. Aprofundamento contínuo em ferramentas e arquiteturas modernas.',
        subFormations: [
            { id: 'eng-analytics', name: 'Formação Engenharia de Analytics', icon: '📊' },
            { id: 'aws-data-lake', name: 'Formação AWS Data Lake: pipelines na AWS', icon: '☁️' },
            { id: 'apache-airflow', name: 'Formação Apache Airflow', icon: '🌊' },
            { id: 'data-mesh', name: 'Formação Data Mesh', icon: '🔗' },
        ]
    },
    {
        id: 'engenharia-software-dados',
        name: 'Eng. de Software para Dados',
        fullName: 'Engenharia de Software para Dados - Apoena Stack',
        icon: '📚',
        color: '#8B5CF6',
        institution: 'Apoena Stack',
        description: 'Especialização focada em arquitetura de dados, algoritmos eficientes e orquestração de pipelines. Mentoria do instrutor Iury com ênfase em qualidade de código e performance.'
    }
];

/**
 * Lista de Cursos organizados por Formação
 */
export const COURSES = [
    // ========================================
    // FORMAÇÃO: Engenharia de Dados 4.0 - DSA
    // ========================================
    {
        id: 'iac-terraform',
        name: 'Infraestrutura e Cloud',
        fullName: 'Infraestrutura como Código e Cloud (Terraform, AWS, Azure, Databricks)',
        icon: '🏗️',
        color: '#7B42BC', // Terraform purple
        formation: 'engenharia-dados-4',
        description: 'Neste conjunto de atividades, o objetivo foi aprender a provisionar e gerenciar recursos na nuvem de forma automatizada usando Infraestrutura como Código. As tecnologias centrais incluem Terraform (para definição de infraestrutura), AWS (serviços como EC2, EMR e S3), Microsoft Azure e Databricks. Nos projetos práticos, utilizei esses recursos para criar ambientes de processamento de dados escaláveis.'
    },
    {
        id: 'airbyte-dbt',
        name: 'ETL/ELT com Airbyte e DBT',
        fullName: 'ETL/ELT com Airbyte e DBT',
        icon: '🔄',
        color: '#FF6B35', // DBT Orange
        formation: 'engenharia-dados-4',
        description: 'A próxima fase focou na integração e transformação de dados. Usei o Airbyte como plataforma de ETL/ELT para extrair dados de diferentes fontes e carregá-los em bancos de dados de destino. Paralelamente, utilizei o DBT para modelagem de dados e construção de transformações SQL.'
    },
    {
        id: 'data-warehouse',
        name: 'Data Warehousing e SQL',
        fullName: 'Modelagem, Implementação e Governança de Data Warehouses',
        icon: '🏢',
        color: '#4285F4', // Google Blue
        formation: 'engenharia-dados-4',
        description: 'Essa etapa concentrou-se em modelagem, implementação e consulta em Data Warehouses. Trabalhei com bancos de dados para análises, usando Amazon Redshift e Amazon Athena no AWS, além de ferramentas tradicionais como PostgreSQL. Os projetos envolveram definição de esquemas, otimização de consultas SQL e migração de dados.'
    },
    {
        id: 'pipelines-airflow',
        name: 'Data Lake e Lakehouse',
        fullName: 'Armazenamento e Gestão de Dados com Data Lake e Data Lakehouse',
        icon: '🌊',
        color: '#00D4AA', // Airflow Green-ish
        formation: 'engenharia-dados-4',
        description: 'Transforme dados em insights com Data Lakes e Data Lakehouses.'
    },
    {
        id: 'pyspark-kafka',
        name: 'Big Data com PySpark e Kafka',
        fullName: 'Big Data e Processamento com PySpark e Kafka',
        icon: '⚡',
        color: '#E25A1C', // Spark Orange
        formation: 'engenharia-dados-4',
        description: 'Por fim, aprofundei-me em processamento de dados em larga escala, usando PySpark para tarefas batch/streaming e Apache Kafka para ingestão de eventos em tempo real. Os projetos práticos abordaram desde a manipulação de arquivos distribuídos até streaming em tempo real.'
    }
    // Adicione cursos de outras formações aqui
];

/**
 * Helper: Obter cursos de uma formação específica
 */
export const getCoursesByFormation = (formationId) => {
    return COURSES.filter(course => course.formation === formationId);
};

/**
 * Categorias para filtro
 */
export const STUDY_CATEGORIES = [
    'Todos',
    ...COURSES.map(c => c.name)
];

/**
 * Configuração da página de Estudos
 */
export const studiesPageConfig = {
    title: "Estudos",
    subtitle: "Da Indústria à Engenharia de Dados",
    description: "Minha trajetória começou na área industrial, mas logo percebi o crescente impacto dos dados na tomada de decisão e na otimização de processos. A transição para Engenharia de Dados foi motivada pela curiosidade em entender como coletar, processar e analisar grandes volumes de informação. Para isso, participei de cursos focados em prática hands-on, construindo projetos que envolvem desde a configuração de infraestrutura na nuvem até a implementação de pipelines e modelagem de dados. Cada etapa da minha jornada incorporou aplicações concretas de tecnologias relevantes, consolidando conhecimento por meio de laboratórios e repositórios de código.",
    institutionsLabel: "Instituições onde estudei",
    // Detalhes por instituição
    institutionDetails: {
        "Data Science Academy": "Formação em Analista/Engenheiro de Dados 4.0 — cursos de Python, SQL, Machine Learning e Estatística. Base sólida em melhores práticas de programação e análise de dados.",
        "Pod Academy": "Bootcamp Full Stack Dados & Analytics — Engenharia de Dados, Cloud (AWS/GCP), Data Science e projetos hands-on. Hackathons e squads multidisciplinares.",
        "Alura": "Certificações em Data Science e Cloud Computing — módulos sobre SQL, Python avançado, AWS, BigQuery e tecnologias emergentes.",
        "Apoena Stack": "Especialização em Engenharia de Software para Dados — ênfase em pipelines, testes automatizados, boas práticas de codificação e arquitetura de dados."
    },
    // Lista de instituições onde estudo
    institutions: [
        { name: "Data Science Academy", icon: "🎓" },
        { name: "Pod Academy", icon: "📊" },
        { name: "Alura", icon: "🔵" },
        { name: "Apoena Stack", icon: "📚" },
    ]
};

/**
 * Lista completa de Estudos organizados por curso
 */
export const studies = [
    // ========================================
    // CURSO 1: Infraestrutura e Cloud
    // ========================================
    {
        id: 101,
        title: "Estudo de Caso - Deploy de App com Docker e Agente de IA Para Provisionamento de Infraestrutura com IaC",
        type: "Estudo de Caso",
        description: "Deploy de aplicação containerizada com Docker e uso de Agente de IA para automatizar o provisionamento de infraestrutura utilizando Infrastructure as Code.",
        technologies: ["Docker", "Terraform", "IA", "IaC"],
        course: "iac-terraform",
        courseName: "Infraestrutura e Cloud",
        image: `${process.env.PUBLIC_URL}/projects/iac_estudo_caso.png`,
        github: "https://github.com/tmarsbr/estudo-caso-docker-ia-iac",
        date: "2024"
    },
    {
        id: 102,
        title: "Lab 1 - Automatizando a Infraestrutura de Instâncias EC2 na Nuvem AWS com Terraform",
        type: "Laboratório",
        description: "Automação de provisionamento de instâncias EC2 na AWS utilizando Terraform para Infrastructure as Code. Container Docker com ambiente completo para IaC.",
        technologies: ["Terraform", "AWS", "EC2", "IaC", "Docker"],
        course: "iac-terraform",
        courseName: "Infraestrutura e Cloud",
        image: `${process.env.PUBLIC_URL}/projects/lab1.png`,
        github: "https://github.com/tmarsbr/Lab_1_projeto_automatizando_a_infraestrutura",
        date: "2024"
    },
    {
        id: 103,
        title: "Lab 2 - Automatizando a Infraestrutura na Nuvem AWS com Variáveis no Terraform",
        type: "Laboratório",
        description: "Uso avançado de variáveis no Terraform para criar infraestrutura flexível e reutilizável na AWS.",
        technologies: ["Terraform", "AWS", "Variáveis", "IaC"],
        course: "iac-terraform",
        courseName: "Infraestrutura e Cloud",
        image: `${process.env.PUBLIC_URL}/projects/iac_lab2.png`,
        github: "https://github.com/tmarsbr/Lab-2-IaC-Stack-Variaveis-Terraform",
        date: "2024"
    },
    {
        id: 104,
        title: "Lab 3 - Usando Terraform Provisioners e Outras Tarefas de Automação",
        type: "Laboratório",
        description: "Exploração de Terraform Provisioners para executar scripts e comandos durante o provisionamento de recursos.",
        technologies: ["Terraform", "Provisioners", "AWS", "Automação"],
        course: "iac-terraform",
        courseName: "Infraestrutura e Cloud",
        image: `${process.env.PUBLIC_URL}/projects/iac_lab3.png`,
        github: "https://github.com/tmarsbr/Lab-3-IaC-Stack-Terraform-Provisioners",
        date: "2024"
    },
    {
        id: 105,
        title: "Lab 4 - Deploy de Infraestrutura e API Para Aplicação de Data Science na AWS com Terraform",
        type: "Laboratório",
        description: "Deploy completo de infraestrutura e API REST para aplicações de Data Science na AWS utilizando Terraform.",
        technologies: ["Terraform", "AWS", "API", "Data Science"],
        course: "iac-terraform",
        courseName: "Infraestrutura e Cloud",
        image: `${process.env.PUBLIC_URL}/projects/iac_lab4.png`,
        github: "https://github.com/tmarsbr/Lab-4-IaC-AWS-Infra-API-Data-Science",
        date: "2024"
    },
    {
        id: 106,
        title: "Lab 5 - IaC com Terraform Para Deploy de Aplicação Web em Container Docker no AWS ECS",
        type: "Laboratório",
        description: "Deploy de aplicação web containerizada no AWS ECS (Elastic Container Service) utilizando Terraform.",
        technologies: ["Terraform", "AWS ECS", "Docker", "IaC"],
        course: "iac-terraform",
        courseName: "Infraestrutura e Cloud",
        image: `${process.env.PUBLIC_URL}/projects/iac_lab5.png`,
        github: "https://github.com/tmarsbr/Lab-5-IaC-AWS-ECS-Docker-WebApp",
        date: "2024"
    },
    {
        id: 107,
        title: "Projeto 1 - Automatizando Infraestrutura de Processamento de Dados com AWS EMR e Apache Flink",
        type: "Projeto",
        description: "Automação de cluster AWS EMR com Apache Flink para processamento de dados em larga escala.",
        technologies: ["Terraform", "AWS EMR", "Apache Flink", "Big Data"],
        course: "iac-terraform",
        courseName: "Infraestrutura e Cloud",
        image: `${process.env.PUBLIC_URL}/projects/iac_projeto1.png`,
        github: "https://github.com/tmarsbr/aws-emr-flink-portfolio",
        date: "2024"
    },
    {
        id: 108,
        title: "Projeto 2 - Deploy do Stack de Treinamento Distribuído de ML com PySpark no Amazon EMR",
        type: "Projeto",
        description: "Deploy de infraestrutura para treinamento distribuído de modelos de Machine Learning utilizando PySpark no Amazon EMR.",
        technologies: ["Terraform", "AWS EMR", "PySpark", "Machine Learning"],
        course: "iac-terraform",
        courseName: "Infraestrutura e Cloud",
        image: `${process.env.PUBLIC_URL}/projects/iac_projeto2.png`,
        github: "https://github.com/tmarsbr/Projeto-2-AWS-EMR-PySpark-ML",
        date: "2024"
    },
    {
        id: 109,
        title: "Projeto 3 - Deploy do Stack de Infraestrutura de Dados no Azure com Terraform",
        type: "Projeto",
        description: "Provisionamento de infraestrutura de dados completa no Microsoft Azure utilizando Terraform.",
        technologies: ["Terraform", "Azure", "Data Engineering", "IaC"],
        course: "iac-terraform",
        courseName: "Infraestrutura e Cloud",
        image: `${process.env.PUBLIC_URL}/projects/iac_projeto3.png`,
        github: "https://github.com/tmarsbr/Projeto-3-Azure-Terraform-Data-Infra",
        date: "2024"
    },
    {
        id: 110,
        title: "Projeto 4 - AWS e Azure Multi-Cloud Deploy com Terraform",
        type: "Projeto",
        description: "Deploy multi-cloud combinando recursos da AWS e Azure em uma única configuração Terraform.",
        technologies: ["Terraform", "AWS", "Azure", "Multi-Cloud"],
        course: "iac-terraform",
        courseName: "Infraestrutura e Cloud",
        image: `${process.env.PUBLIC_URL}/projects/iac_projeto4.png`,
        github: "https://github.com/tmarsbr/Projeto-4-Multi-Cloud-AWS-Azure-Terraform",
        date: "2024"
    },
    {
        id: 111,
        title: "Projeto 5 - Databricks Cluster Deploy com Terraform Para Processamento Distribuído",
        type: "Projeto",
        description: "Deploy automatizado de cluster Databricks com Terraform para processamento de dados distribuído.",
        technologies: ["Terraform", "Databricks", "Spark", "Data Engineering"],
        course: "iac-terraform",
        courseName: "Infraestrutura e Cloud",
        image: `${process.env.PUBLIC_URL}/projects/iac_projeto5.png`,
        github: "https://github.com/tmarsbr/projeto5-databricks-terraform",
        date: "2024"
    },

    // ========================================
    // CURSO 2: Data Warehouses e SQL
    // ========================================
    {
        id: 201,
        title: "Lab 1 - Automação da Infraestrutura de Consultas SQL com Terraform e BigQuery no GCP",
        type: "Laboratório",
        description: "Automação de infraestrutura de consultas SQL utilizando Terraform e BigQuery no Google Cloud Platform.",
        technologies: ["Terraform", "BigQuery", "GCP", "SQL"],
        course: "data-warehouse",
        courseName: "Data Warehouses e SQL",
        image: `${process.env.PUBLIC_URL}/projects/dw_lab1.png`,
        github: "https://github.com/tmarsbr/DWH-Lab-1-GCP-BigQuery-Terraform",
        date: "2024"
    },
    {
        id: 202,
        title: "Lab 2 - Usando o ChatGPT Para Construir Um Modelo Dimensional de Forma Segura",
        type: "Laboratório",
        description: "Utilização de IA generativa (ChatGPT) como ferramenta auxiliar para construção de modelos dimensionais seguindo boas práticas.",
        technologies: ["ChatGPT", "Modelagem Dimensional", "Data Warehouse", "IA"],
        course: "data-warehouse",
        courseName: "Data Warehouses e SQL",
        image: `${process.env.PUBLIC_URL}/projects/dw_lab2.png`,
        github: "https://github.com/tmarsbr/DWH-Lab-2-ChatGPT-Modelo-Dimensional-Seguro",
        date: "2024"
    },
    {
        id: 203,
        title: "Lab 3 - Airbyte e SQL Para ETL no Data Warehouse em Ambiente Local",
        type: "Laboratório",
        description: "Implementação de pipeline ETL utilizando Airbyte e SQL em ambiente local de Data Warehouse.",
        technologies: ["Airbyte", "SQL", "ETL", "Docker"],
        course: "data-warehouse",
        courseName: "Data Warehouses e SQL",
        image: `${process.env.PUBLIC_URL}/projects/dw_lab3.png`,
        github: "https://github.com/tmarsbr/DWH-Lab-3-Airbyte-SQL-ETL-Local",
        date: "2024"
    },
    {
        id: 204,
        title: "Lab 4 - Processo de Governança e Qualidade de Dados no Data Warehouse",
        type: "Laboratório",
        description: "Implementação de processos de governança e qualidade de dados em ambiente de Data Warehouse.",
        technologies: ["Governança", "Qualidade de Dados", "Data Warehouse", "SQL"],
        course: "data-warehouse",
        courseName: "Data Warehouses e SQL",
        image: `${process.env.PUBLIC_URL}/projects/dw_lab4.png`,
        github: "https://github.com/tmarsbr/DWH-Lab-4-Governanca-Qualidade-Dados-DWH",
        date: "2024"
    },
    {
        id: 205,
        title: "Lab 5 - Migração de Data Warehouse Local Para a Nuvem",
        type: "Laboratório",
        description: "Processo completo de migração de Data Warehouse de ambiente local para infraestrutura em nuvem.",
        technologies: ["Migração", "Cloud", "Data Warehouse", "ETL"],
        course: "data-warehouse",
        courseName: "Data Warehouses e SQL",
        image: `${process.env.PUBLIC_URL}/projects/dw_lab5.png`,
        github: "https://github.com/tmarsbr/DWH-Lab-5-Migracao-Local-Para-Nuvem",
        date: "2024"
    },
    {
        id: 206,
        title: "Estudo de Caso - O Que é e Como Implementar ETL Reverso?",
        type: "Estudo de Caso",
        description: "Estudo sobre ETL Reverso (Reverse ETL) - conceitos, casos de uso e implementação prática.",
        technologies: ["Reverse ETL", "Data Warehouse", "Integração", "Analytics"],
        course: "data-warehouse",
        courseName: "Data Warehouses e SQL",
        image: `${process.env.PUBLIC_URL}/projects/dw_estudo_caso.png`,
        github: "https://github.com/tmarsbr/DWH-Estudo-de-Caso-ETL-Reverso",
        date: "2024"
    },
    {
        id: 207,
        title: "Projeto 1 - Modelagem e Implementação de Um Data Warehouse Local",
        type: "Projeto",
        description: "Projeto completo de modelagem dimensional e implementação de Data Warehouse em ambiente local.",
        technologies: ["Modelagem Dimensional", "PostgreSQL", "ETL", "Data Warehouse"],
        course: "data-warehouse",
        courseName: "Data Warehouses e SQL",
        image: `${process.env.PUBLIC_URL}/projects/dw_projeto1.png`,
        github: "https://github.com/tmarsbr/DWH-Projeto-1-Data-Warehouse-Local",
        date: "2024"
    },
    {
        id: 208,
        title: "Projeto 2 - Modelagem e Implementação de Data Warehouse na Nuvem com Amazon Redshift e Terraform",
        type: "Projeto",
        description: "Deploy de Data Warehouse na nuvem utilizando Amazon Redshift provisionado com Terraform.",
        technologies: ["Amazon Redshift", "Terraform", "AWS", "Data Warehouse"],
        course: "data-warehouse",
        courseName: "Data Warehouses e SQL",
        image: `${process.env.PUBLIC_URL}/projects/dw_projeto2.png`,
        github: "https://github.com/tmarsbr/DWH-Projeto-2-Redshift-Terraform",
        date: "2024"
    },

    // ========================================
    // CURSO 3: ETL/ELT com Airbyte e DBT
    // ========================================
    {
        id: 301,
        title: "Lab 1 - Movimentação de Dados Entre Bancos de Dados com Airbyte",
        type: "Laboratório",
        description: "Configuração e execução de pipelines de movimentação de dados entre diferentes bancos de dados usando Airbyte.",
        technologies: ["Airbyte", "PostgreSQL", "MySQL", "EL"],
        course: "airbyte-dbt",
        courseName: "ETL/ELT com Airbyte e DBT",
        image: `${process.env.PUBLIC_URL}/projects/dbt_lab1.png`,
        github: "https://github.com/tmarsbr/ED-Airbyte-DBT-SQL-Lab-1-Movimentacao-Entre-Bancos",
        date: "2024"
    },
    {
        id: 302,
        title: "Lab 2 - Construindo Pipeline EL(T) com Change Data Capture (CDC)",
        type: "Laboratório",
        description: "Implementação de pipeline ELT com captura de mudanças de dados (CDC) para sincronização em tempo real.",
        technologies: ["Airbyte", "CDC", "ELT", "Debezium"],
        course: "airbyte-dbt",
        courseName: "ETL/ELT com Airbyte e DBT",
        image: `${process.env.PUBLIC_URL}/projects/dbt_lab2.png`,
        github: "https://github.com/tmarsbr/ED-Airbyte-DBT-SQL-Lab-2-Pipeline-ELT-CDC",
        date: "2024"
    },
    {
        id: 303,
        title: "Lab 3 - Carga e Sincronização Incremental de Dados com Airbyte",
        type: "Laboratório",
        description: "Configuração de cargas incrementais e sincronização de dados para otimização de pipelines.",
        technologies: ["Airbyte", "Incremental Sync", "ETL", "Otimização"],
        course: "airbyte-dbt",
        courseName: "ETL/ELT com Airbyte e DBT",
        image: `${process.env.PUBLIC_URL}/projects/dbt_lab3.png`,
        github: "https://github.com/tmarsbr/ED-Airbyte-DBT-SQL-Lab-3-Carga-Sincronizacao-Incremental",
        date: "2024"
    },
    {
        id: 304,
        title: "Lab 4 - Plano de Execução e Otimização de Consultas em Pipelines de Engenharia de Dados",
        type: "Laboratório",
        description: "Análise de planos de execução e técnicas de otimização de consultas SQL em pipelines de dados.",
        technologies: ["SQL", "Query Optimization", "EXPLAIN", "Performance"],
        course: "airbyte-dbt",
        courseName: "ETL/ELT com Airbyte e DBT",
        image: `${process.env.PUBLIC_URL}/projects/dbt_lab4.png`,
        github: "https://github.com/tmarsbr/ED-Airbyte-DBT-SQL-Lab-4-Plano-Execucao-Otimizacao-Consultas",
        date: "2024"
    },
    {
        id: 305,
        title: "Lab 5 - Modelagem de Dados Para Engenharia de Dados em Sistemas de IA",
        type: "Laboratório",
        description: "Técnicas de modelagem de dados otimizadas para alimentar sistemas de Inteligência Artificial.",
        technologies: ["Modelagem", "IA", "Feature Engineering", "SQL"],
        course: "airbyte-dbt",
        courseName: "ETL/ELT com Airbyte e DBT",
        image: `${process.env.PUBLIC_URL}/projects/dbt_lab5.png`,
        github: "https://github.com/tmarsbr/ED-Airbyte-DBT-SQL-Lab-5-Modelagem-Dados-IA",
        date: "2024"
    },
    {
        id: 306,
        title: "Lab 6 - Deploy e Re-Deploy do Primeiro Modelo com DBT",
        type: "Laboratório",
        description: "Primeiros passos com DBT: criação, deploy e re-deploy de modelos de transformação de dados.",
        technologies: ["DBT", "SQL", "Data Modeling", "Deploy"],
        course: "airbyte-dbt",
        courseName: "ETL/ELT com Airbyte e DBT",
        image: `${process.env.PUBLIC_URL}/projects/dbt_lab6.png`,
        github: "https://github.com/tmarsbr/ED-Airbyte-DBT-SQL-Lab-6-Deploy-Primeiro-Modelo-DBT",
        date: "2024"
    },
    {
        id: 307,
        title: "Lab 7 - Criação de Macros, Refatoramento e Deploy em Produção com DBT",
        type: "Laboratório",
        description: "Desenvolvimento de macros reutilizáveis, refatoramento de código e deploy em ambiente de produção com DBT.",
        technologies: ["DBT", "Macros", "Jinja", "Produção"],
        course: "airbyte-dbt",
        courseName: "ETL/ELT com Airbyte e DBT",
        image: `${process.env.PUBLIC_URL}/projects/dbt_lab7.png`,
        github: "https://github.com/tmarsbr/ED-Airbyte-DBT-SQL-Lab-7-Macros-Refatoramento-Deploy-Producao",
        date: "2024"
    },
    {
        id: 308,
        title: "Lab 8 - Automação de Testes de Modelos de Dados no DBT",
        type: "Laboratório",
        description: "Implementação de testes automatizados para garantir qualidade e integridade dos modelos DBT.",
        technologies: ["DBT", "Testes", "Data Quality", "CI/CD"],
        course: "airbyte-dbt",
        courseName: "ETL/ELT com Airbyte e DBT",
        image: `${process.env.PUBLIC_URL}/projects/dbt_lab8.png`,
        github: "https://github.com/tmarsbr/ED-Airbyte-DBT-SQL-Lab-8-Automacao-Testes-DBT",
        date: "2024"
    },
    {
        id: 309,
        title: "Lab 9 - Analytics Engineering e Linhagem de Dados com Python, DBT, BigQuery e Looker Studio",
        type: "Laboratório",
        description: "Pipeline completo de Analytics Engineering com rastreamento de linhagem de dados usando DBT, BigQuery e visualização no Looker Studio.",
        technologies: ["DBT", "BigQuery", "Looker Studio", "Python"],
        course: "airbyte-dbt",
        courseName: "ETL/ELT com Airbyte e DBT",
        image: `${process.env.PUBLIC_URL}/projects/dbt_lab9.png`,
        github: "https://github.com/tmarsbr/ED-Airbyte-DBT-SQL-Lab-9-Analytics-Engineering-Linhagem",
        date: "2024"
    },

    // ========================================
    // CURSO 4: Data Lake e Lakehouse
    // ========================================
    {
        id: 401,
        title: "Lab 1 - Plano de Custo Para Implementar Data Lakes e Data Lakehouses em Diferentes Cenários",
        type: "Laboratório",
        description: "Análise e planejamento de custos para implementação de Data Lakes e Data Lakehouses em diversos cenários de negócio.",
        technologies: ["Cost Analysis", "Data Lake", "Lakehouse", "Cloud"],
        course: "pipelines-airflow",
        courseName: "Data Lake e Lakehouse",
        image: `${process.env.PUBLIC_URL}/projects/lake_lab1.png`,
        github: "https://github.com/tmarsbr/DL-Lakehouse-Lab-1-Plano-Custo",
        date: "2024"
    },
    {
        id: 402,
        title: "Lab 2 - Design e Implementação de Data Lake Local Para Armazenamento e Processamento Distribuído",
        type: "Laboratório",
        description: "Arquitetura e implementação de Data Lake em ambiente local com capacidade de processamento distribuído.",
        technologies: ["Data Lake", "MinIO", "Spark", "Delta Lake"],
        course: "pipelines-airflow",
        courseName: "Data Lake e Lakehouse",
        image: `${process.env.PUBLIC_URL}/projects/lake_lab2.png`,
        github: "https://github.com/tmarsbr/DL-Lakehouse-Lab-2-Data-Lake-Local",
        date: "2024"
    },
    {
        id: 403,
        title: "Lab 3 - Design e Implementação de Data Lake na Nuvem com IaC e Terraform",
        type: "Laboratório",
        description: "Provisionamento automatizado de Data Lake em nuvem utilizando Infrastructure as Code com Terraform.",
        technologies: ["Terraform", "AWS S3", "Data Lake", "IaC"],
        course: "pipelines-airflow",
        courseName: "Data Lake e Lakehouse",
        image: `${process.env.PUBLIC_URL}/projects/lake_lab3.png`,
        github: "https://github.com/tmarsbr/DL-Lakehouse-Lab-3-Data-Lake-Nuvem-Terraform",
        date: "2024"
    },
    {
        id: 404,
        title: "Lab 4 - Linhagem, Observabilidade, Qualidade, Enriquecimento e Governança de Dados no Data Lake",
        type: "Laboratório",
        description: "Implementação completa de práticas de governança incluindo linhagem, observabilidade e qualidade de dados no Data Lake.",
        technologies: ["Data Governance", "Data Quality", "Lineage", "Observability"],
        course: "pipelines-airflow",
        courseName: "Data Lake e Lakehouse",
        image: `${process.env.PUBLIC_URL}/projects/lake_lab4.png`,
        github: "https://github.com/tmarsbr/DL-Lakehouse-Lab-4-Linhagem-Observabilidade-Governanca",
        date: "2024"
    },

    // ========================================
    // CURSO 5: Big Data com PySpark e Kafka
    // ========================================
    {
        id: 501,
        title: "Projeto 1 - Pipeline PySpark Para Extrair, Transformar e Carregar Arquivos JSON em Banco de Dados",
        type: "Projeto",
        description: "Pipeline ETL completo com PySpark para processamento de arquivos JSON e carga em banco de dados.",
        technologies: ["PySpark", "JSON", "ETL", "PostgreSQL"],
        course: "pyspark-kafka",
        courseName: "Big Data com PySpark e Kafka",
        image: `${process.env.PUBLIC_URL}/projects/spark_projeto1.png`,
        github: "https://github.com/tmarsbr/Spark-Kafka-Projeto-1-Pipeline-JSON-DB",
        date: "2024"
    },
    {
        id: 502,
        title: "Projeto 2 - 50 Scripts de Otimização de Processamento e Análise de Dados em Cluster Spark",
        type: "Projeto",
        description: "Coleção de 50 scripts otimizados para processamento e análise de dados em clusters Spark.",
        technologies: ["PySpark", "Otimização", "Performance", "Big Data"],
        course: "pyspark-kafka",
        courseName: "Big Data com PySpark e Kafka",
        image: `${process.env.PUBLIC_URL}/projects/spark_projeto2.png`,
        github: "https://github.com/tmarsbr/Spark-Kafka-Projeto-2-50-Scripts-Otimizacao",
        date: "2024"
    },
    {
        id: 503,
        title: "Projeto 3 - Pipeline de Limpeza e Transformação Para Aplicações de IA com PySpark SQL",
        type: "Projeto",
        description: "Pipeline de preparação de dados para Machine Learning utilizando PySpark SQL para limpeza e transformação.",
        technologies: ["PySpark SQL", "Data Cleaning", "Feature Engineering", "ML"],
        course: "pyspark-kafka",
        courseName: "Big Data com PySpark e Kafka",
        image: `${process.env.PUBLIC_URL}/projects/spark_projeto3.png`,
        github: "https://github.com/tmarsbr/Spark-Kafka-Projeto-3-Pipeline-Limpeza-IA-PySparkSQL",
        date: "2024"
    },
    {
        id: 504,
        title: "Projeto 4 - Processamento e Análise de Dados em Tempo Real com PySpark Streaming",
        type: "Projeto",
        description: "Sistema de processamento de dados em tempo real utilizando PySpark Streaming e Apache Kafka.",
        technologies: ["PySpark Streaming", "Apache Kafka", "Real-time", "Big Data"],
        course: "pyspark-kafka",
        courseName: "Big Data com PySpark e Kafka",
        image: `${process.env.PUBLIC_URL}/projects/spark_projeto4.png`,
        github: "https://github.com/tmarsbr/Spark-Kafka-Projeto-4-Streaming-Tempo-Real",
        date: "2024"
    }
];
