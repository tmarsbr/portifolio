/**
 * Informações Pessoais do Profissional
 * @description Dados básicos e contatos do portfólio
 */
export const personalInfo = {
  name: "Tiago da Silva E. Santo",
  fullName: "Tiago da Silva E. Santo",
  title: "Engenheiro de Dados",
  subtitle: "Mentalidade de Produção Sênior aplicada a pipelines de dados resilientes e confiáveis",
  location: "São Paulo, SP",
  email: "tiagomars233@gmail.com",
  phone: "+55 11 97542-9994",
  linkedin: "https://www.linkedin.com/in/tiagodados",
  github: "https://github.com/tmarsbr",
  whatsapp: "https://wa.me/5511975429994",
  resume: `${process.env.PUBLIC_URL}/certificates/Curriculo_Tiago_Santo_Formatado.pdf`,

  // Resumo para a página inicial (1-2 frases)
  homeIntro: "Engenheiro de Dados Jr. com Mentalidade de Produção Sênior. Minha base na usinagem de precisão me ensinou que um erro de milímetro compromete toda a produção. Hoje, aplico esse mesmo rigor técnico e disciplina operacional para construir pipelines de dados resilientes e confiáveis.",

  // Descrição expandida para a seção Sobre
  aboutDescription: `Da Oficina para os Dados
Tudo começou com barulho de torno, cheiro de óleo e precisão milimétrica. Na usinagem, aprendi que um erro de um décimo pode custar caro. Foi lá que desenvolvi o olhar clínico, a paciência e o gosto por resolver problemas com método.

Hoje, essa precisão virou código. Sou especialista em transformar ecossistemas de dados brutos em Data Warehouses modelados e testados, utilizando a Modern Data Stack (dbt, PySpark, Airflow) e gerenciando infraestrutura Cloud (AWS) via Infraestrutura como Código (Terraform).

Meu foco é em Data Quality, Idempotência e Observabilidade, garantindo que os dados sejam não apenas entregues, mas entregues com a tolerância apertada que o negócio exige.

Tolerância apertada e processo confiável geram qualidade — em aço e em dados.

Agora, busco oportunidades onde possa aplicar essa mentalidade para construir pipelines que fazem a diferença.`,


  // Avatar/Foto (deixe vazio para usar placeholder)
  avatar: `${process.env.PUBLIC_URL}/imagem/perfil.png`, // Adicione o caminho da sua foto aqui
};

/**
 * Experiências Profissionais e Educacionais
 * @description Timeline da carreira profissional e formação acadêmica
 * @structure Array de objetos com: id, type, title, company, period, description, skills, icon
 */
export const experiences = [
  {
    id: 1,
    type: "work",
    title: "Auxiliar de Produção",
    company: "LJ Correia Equipamentos LTDA",
    period: "01/02/2018 - 07/05/2021",
    description: "Aprendi a operar sob pressão e garantir qualidade em escala — habilidades que hoje aplico no design de pipelines de dados confiáveis e processos automatizados.",
    skills: ["Produção Industrial", "Controle de Qualidade", "Processos"],
    icon: "⚡"
  },
  {
    id: 2,
    type: "work",
    title: "Torneiro Mecânico",
    company: "Cilintec Cilindros para Impressões LTDA",
    period: "15/07/2022 - 02/09/2023",
    description: "Trabalhava com tolerâncias de centésimos de milímetro em peças de precisão. Esse rigor técnico hoje se traduz em validações de qualidade de dados e pipelines com zero margem para erro.",
    skills: ["Precisão Técnica", "Especificações Rigorosas", "Qualidade"],
    icon: "🔧"
  },
  {
    id: 3,
    type: "work",
    title: "Torneiro Mecânico Autônomo",
    company: "Trabalho Autônomo",
    period: "09/2023 - Presente",
    description: "Responsável pelo ciclo completo: do planejamento à entrega. Essa visão end-to-end é a mesma que aplico em projetos de dados — entender o problema, desenhar a solução e entregar com qualidade.",
    skills: ["Visão End-to-End", "Gestão de Projetos", "Entrega de Qualidade"],
    icon: "⚙️"
  },
  {
    id: 4,
    type: "education",
    title: "Transição para Data & Analytics",
    company: "Pod Academy",
    period: "12/2023 - 12/2025",
    description: "Formação intensiva Full Stack em Dados: do básico ao especialista em Engenharia de Dados, Cloud AWS, Analytics e Ciência de Dados. Onde a precisão da mecânica encontrou o poder dos dados.",
    skills: ["Engenharia de Dados", "Cloud AWS", "Analytics", "Python"],
    icon: "📊"
  }
];

/**
 * Certificações e Formações Acadêmicas
 * @description Certificados obtidos em cursos e formações
 * @structure Array com dados dos certificados e links para PDFs
 */
export const certificates = [
  {
    id: 1,
    title: "Formação Full Stack Dados & Analytics",
    institution: "PoD Academy",
    year: "2024",
    duration: "Completo",
    image: `${process.env.PUBLIC_URL}/certificates/fullstackdataanalytics.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/Formação-full-stack-data-analytics.pdf`,
    skills: ["Engenharia de Dados", "Ciência de Dados", "Analytics", "Business"]
  },
  {
    id: 2,
    title: "Formação Engenharia de Dados",
    institution: "PoD Academy",
    year: "2024",
    duration: "Especialização",
    image: `${process.env.PUBLIC_URL}/certificates/engenhariadedados.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/formação-engenheiro-de-dados.pdf`,
    skills: ["Big Data", "Spark", "Airflow", "Cloud AWS", "IaC"]
  },
  {
    id: 3,
    title: "Formação Ciência de Dados",
    institution: "PoD Academy",
    year: "2024",
    duration: "Especialização",
    image: `${process.env.PUBLIC_URL}/certificates/cienciadedados.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/Formação-em-ciencia-de-dados.pdf`,
    skills: ["Machine Learning", "Estatística", "Python", "Modelagem"]
  },
  {
    id: 4,
    title: "Formação Análise de Dados",
    institution: "PoD Academy",
    year: "2024",
    duration: "Especialização",
    image: `${process.env.PUBLIC_URL}/certificates/analisededados.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/Formação-analise-de-dados.pdf`,
    skills: ["Storytelling", "Visualização", "SQL", "KPIs"]
  }
];
