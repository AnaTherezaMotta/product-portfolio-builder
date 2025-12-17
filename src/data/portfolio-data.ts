export interface Case {
  id: string;
  title: string;
  company: string;
  tags: string[];
  summary: string;
  context: string;
  action: string;
  result: string;
  metrics: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const profileData = {
  name: "Seu Nome",
  title: "Product Manager",
  tagline: "Transformando problemas complexos em produtos que geram impacto.",
  bio: "Product Manager com X+ anos de experiência em empresas de tecnologia. Apaixonado por descobrir necessidades reais dos usuários e traduzí-las em soluções que geram valor para o negócio. Experiência em Growth, Discovery e Delivery de produtos digitais.",
  email: "seu.email@exemplo.com",
  linkedin: "https://linkedin.com/in/seu-perfil",
  github: "https://github.com/seu-usuario",
  metrics: [
    { value: "X+", label: "Anos de experiência" },
    { value: "Y", label: "Produtos lançados" },
    { value: "Z%", label: "Crescimento médio" },
  ],
};

export const cases: Case[] = [
  {
    id: "case-1",
    title: "Otimização do Funil de Conversão",
    company: "Empresa A",
    tags: ["Growth", "Analytics", "A/B Testing"],
    summary: "Aumento de 35% na taxa de conversão do checkout através de redesign orientado por dados.",
    context: "O funil de conversão apresentava uma taxa de abandono de 70% no checkout. Análises mostravam que usuários desistiam principalmente na etapa de cadastro, gerando perda significativa de receita potencial.",
    action: "Conduzi discovery com 20 usuários para entender pontos de fricção. Implementei checkout simplificado com guest checkout, redesenhei o formulário reduzindo campos de 12 para 5, e criei sistema de progresso visual. Coordenei ciclos de A/B testing para validar cada mudança incrementalmente.",
    result: "Aumento de 35% na taxa de conversão em 3 meses. Redução de 50% no tempo médio de checkout. ROI do projeto estimado em R$ 2M/ano em receita recuperada.",
    metrics: ["+35% conversão", "-50% tempo checkout", "R$ 2M/ano ROI"],
  },
  {
    id: "case-2",
    title: "Lançamento de Feature de Colaboração",
    company: "Empresa B",
    tags: ["Discovery", "Delivery", "B2B"],
    summary: "Desenvolvimento e lançamento de funcionalidade de colaboração em tempo real que aumentou retenção em 25%.",
    context: "Clientes enterprise solicitavam constantemente recursos de colaboração. A falta dessa funcionalidade era o principal motivo de churn para competidores, impactando ~15% da receita recorrente.",
    action: "Liderei squad de 6 pessoas no desenvolvimento da feature. Realizei 30+ entrevistas com clientes para priorizar funcionalidades. Utilizei framework RICE para priorização e implementei release gradual com early adopters. Criei métricas de sucesso e dashboard de acompanhamento.",
    result: "Lançamento em 4 meses com NPS de 72 entre early adopters. Retenção de clientes enterprise aumentou 25%. Feature se tornou diferencial competitivo citado em 40% das vendas.",
    metrics: ["NPS 72", "+25% retenção", "4 meses delivery"],
  },
  {
    id: "case-3",
    title: "Migração de Plataforma Legacy",
    company: "Empresa C",
    tags: ["Estratégia", "Stakeholder Management", "Delivery"],
    summary: "Liderança na migração de sistema legado para nova arquitetura sem impacto na operação.",
    context: "Sistema legado de 10 anos limitava velocidade de desenvolvimento e causava instabilidades frequentes. Custo de manutenção consumia 60% do orçamento de tech, impedindo inovação.",
    action: "Desenvolvi roadmap de migração em 3 fases com quick wins iniciais. Alinhai expectativas com C-level através de business case detalhado. Implementei feature flags para migração gradual. Coordenei comunicação entre 4 squads e stakeholders de negócio.",
    result: "Migração completa em 8 meses sem downtime. Redução de 70% em incidentes. Velocidade de delivery aumentou 3x. Economia de R$ 500K/ano em custos de infraestrutura.",
    metrics: ["Zero downtime", "-70% incidentes", "3x velocidade"],
  },
  {
    id: "case-4",
    title: "Implementação de Produto Data-Driven",
    company: "Empresa D",
    tags: ["Analytics", "Product-Led Growth", "Experimentação"],
    summary: "Criação de cultura de experimentação que resultou em 50+ experimentos/quarter.",
    context: "Decisões de produto eram baseadas em opiniões e não em dados. Não havia infraestrutura de analytics nem cultura de experimentação, resultando em features de baixo impacto.",
    action: "Implementei stack de analytics (Amplitude + dbt). Criei playbook de experimentação com templates e processos. Treinei 3 squads em metodologia de discovery contínuo. Estabeleci métricas north star e KPIs por squad.",
    result: "De 0 para 50+ experimentos por quarter. Taxa de sucesso de features aumentou de 30% para 65%. Time de produto reconhecido internamente como referência em data-driven.",
    metrics: ["50+ experimentos/Q", "65% sucesso features", "3 squads treinados"],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Empresa Atual",
    role: "Senior Product Manager",
    period: "2022 - Presente",
    description: "Liderança de squad de produto focado em crescimento e retenção.",
    highlights: [
      "Gestão de roadmap para produto com X MAU",
      "Ownership de métricas de retenção e engagement",
      "Mentoria de 2 PMs júnior",
    ],
  },
  {
    id: "exp-2",
    company: "Empresa Anterior",
    role: "Product Manager",
    period: "2020 - 2022",
    description: "Responsável pelo produto core B2B da empresa.",
    highlights: [
      "Lançamento de 3 features major",
      "Crescimento de X% na base de clientes enterprise",
      "Implementação de processo de discovery",
    ],
  },
  {
    id: "exp-3",
    company: "Primeira Empresa",
    role: "Associate Product Manager",
    period: "2018 - 2020",
    description: "Início da carreira em produto, focado em features de engagement.",
    highlights: [
      "Primeira experiência em gestão de produto",
      "Participação em squad de growth",
      "Desenvolvimento de skills de analytics",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Product Management",
    items: ["Discovery", "Delivery", "Roadmapping", "Priorização (RICE, MoSCoW)", "OKRs", "Métricas de Produto"],
  },
  {
    category: "Analytics & Data",
    items: ["SQL", "Amplitude", "Google Analytics", "Mixpanel", "A/B Testing", "Análise de Cohort"],
  },
  {
    category: "Ferramentas",
    items: ["Jira", "Confluence", "Figma", "Miro", "Notion", "Linear"],
  },
  {
    category: "Soft Skills",
    items: ["Comunicação", "Stakeholder Management", "Liderança", "Facilitação", "Negociação", "Storytelling"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote: "Um dos melhores PMs com quem já trabalhei. Capacidade única de traduzir necessidades complexas em soluções elegantes.",
    author: "Nome do Colega",
    role: "Engineering Manager",
    company: "Empresa X",
  },
  {
    id: "test-2",
    quote: "Excelente em alinhar times diversos em torno de uma visão comum. Seus projetos sempre entregam resultados mensuráveis.",
    author: "Nome do Gestor",
    role: "Head of Product",
    company: "Empresa Y",
  },
  {
    id: "test-3",
    quote: "Combina rigor analítico com empatia genuína pelos usuários. Referência em product discovery.",
    author: "Nome do Designer",
    role: "Senior Product Designer",
    company: "Empresa Z",
  },
];
