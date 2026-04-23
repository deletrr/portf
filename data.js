/* Dados do portfólio */
const GH = "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png";
const GOOGLE = "https://cdn-icons-png.flaticon.com/512/2991/2991148.png";
const AWS = "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg";
const CISCO = "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg";
const CPS = "https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2022/09/logo-cps-2022.svg";

const projects = [
  {
    title: "ESP32 CaosForge",
    description: "Gerador de entropia física com sorteio criptográfico, Node-RED e Google Sheets.",
    url: "https://github.com/deletrr/esp32caosforge",
    image: GH,
    details: [
      "**Objetivo:** Sistema de geração de aleatoriedade baseada em entropia física real do hardware.",
      "**Tecnologias:** ESP32, C++ (FreeRTOS), Node-RED, Google Apps Script, Criptografia (HMAC-SHA256).",
    ],
  },
  {
    title: "PI 1º DSM - Konoha",
    description: "Plataforma de ONG ambiental focada em cursos de consciencialização sustentável.",
    url: "https://github.com/deletrr/PI1",
    image: GH,
    isPI: true,
    details: [
      "**Objetivo:** Informar e consciencializar as pessoas sobre as alterações climáticas e desenvolvimento sustentável.",
      "**Público:** Estudantes, profissionais, empresas e governos através de cursos online.",
    ],
  },
  {
    title: "Loja de Brinquedos",
    description: "Sistema de e-commerce completo para gestão e vendas de brinquedos.",
    url: "https://github.com/Rogue-s-Haven/loja_brinquedos",
    image: GH,
    details: ["**Objetivo:** Criar um sistema completo de gerenciamento e vendas."],
  },
  {
    title: "PI - Interdisciplinar Ágil",
    description: "Projeto acadêmico focado em metodologias ágeis (Scrum/Kanban).",
    url: "https://github.com/Rogue-s-Haven/Interdisciplinar_agil",
    image: GH,
    isPI: true,
    details: ["Aplicação de Scrum e organização de equipe."],
  },
  {
    title: "COP 30",
    description: "Projeto voltado para soluções tecnológicas para a conferência climática.",
    url: "https://github.com/Rogue-s-Haven/cop30",
    image: GH,
    details: ["Contexto ecológico e tecnológico do projeto COP 30."],
  },
  {
    title: "Acesso via QR Code",
    description: "Controle de entrada e acesso a eventos via QR Code.",
    url: "https://github.com/Rogue-s-Haven/CEventoAcessoQR",
    image: GH,
    details: ["Integração de biblioteca QR e validação."],
  },
  {
    title: "PI - Aparecida",
    description: "Sistema desenvolvido para o cliente Aparecida.",
    url: "https://github.com/Rogue-s-Haven/PI-aparecida",
    image: GH,
    isPI: true,
    details: ["Detalhes do sistema acadêmico personalizado."],
  },
  {
    title: "PI 4º DSM - MatematicaRio",
    description: "Reformulação do frontend do site MatematiCaRio.",
    url: "https://github.com/deletrr/PI4",
    image: GH,
    isPI: true,
    details: ["Framework: HTML, CSS e JS."],
  },
  {
    title: "PI 4º DSM - IoT Cidade Conectada",
    description: "Gestão de vagas urbanas com sensores IoT e monitoramento real-time.",
    url: "https://github.com/deletrr/PI4iot",
    image: GH,
    isPI: true,
    details: ["Monitoramento de vagas com hardware embarcado."],
  },
  {
    title: "PI 5º DSM - React Native",
    description: "App educativo de matemática com lógica de gamificação.",
    url: "https://github.com/deletrr/PI5",
    image: GH,
    isPI: true,
    details: ["Desenvolvido com React Native e Expo."],
  },
];

const skills = [
  {
    title: "IoT & Embedded Systems",
    description: "Programação C/C++, microcontroladores e integração de hardware físico.",
    image: "https://cdn-icons-png.flaticon.com/512/8750/8750809.png",
    details: [
      "**Conhecimentos:** Programação em C/C++ usando FreeRTOS.",
      "Domínio em microcontroladores como ESP32 e Raspberry Pi Pico, e integração com diversos sensores.",
      "Expertise em escrita de firmware e manipulação avançada de memórias NAND (ex: Rockchip RK322x).",
    ],
  },
  {
    title: "Virtualização & Home Lab",
    description: "Containers, orquestração e gerenciamento avançado de servidores locais.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
    details: [
      "**Conhecimentos:** Gerenciamento avançado de containers (Docker) e clusters via Kubernetes (K3s).",
      "Virtualização de ambientes utilizando Proxmox.",
      "Sólida experiência em administração e configuração de servidores baseados em Linux, especificamente Armbian.",
    ],
  },
  {
    title: "Desenvolvimento de Software",
    description: "Aplicações multiplataforma, formatações rigorosas e frontend.",
    image: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
    details: [
      "**Conhecimentos:** Criação de aplicações escaláveis usando Java, Python e React Native.",
      "Desenvolvimento em Kotlin Multiplatform (KMP), com foco em lógica de negócios precisa, como formatação de máscaras rigorosas.",
      "Estruturação e estilização web com HTML, CSS e JS.",
    ],
  },
  {
    title: "Dados, Backend & APIs",
    description: "Modelagem relacional, orquestração de dados e APIs RESTful.",
    image: "https://cdn-icons-png.flaticon.com/512/17365/17365482.png",
    details: [
      "**Conhecimentos:** Projetos de banco de dados e modelagem relacional usando PostgreSQL.",
      "Orquestração de fluxos complexos e regras de negócio com Node-RED.",
      "Criação de scripts automáticos no Google Apps Script e construção de payloads robustos com validação JSON segura.",
    ],
  },
  {
    title: "Segurança e Redes",
    description: "Fundamentos de cibersegurança e criptografia em dispositivos.",
    image: "https://cdn-icons-png.flaticon.com/512/2716/2716612.png",
    details: [
      "**Conhecimentos:** Base sólida em cibersegurança, firewalls e proteção de endpoints.",
      "Experiência prática na implementação de algoritmos criptográficos diretamente no hardware (como geração e validação de hashes HMAC-SHA256).",
    ],
  },
  {
    title: "DIY & Modding de Hardware",
    description: "Soluções criativas, consertos e adaptações de hardware eletrônico.",
    image: "https://cdn-icons-png.flaticon.com/512/675/675846.png",
    details: [
      "**Conhecimentos:** Reparo em eletrônicos diversos e interpretação de esquemas elétricos.",
      "Modelagem e impressão 3D para projetos úteis, como gabinetes personalizados para controle térmico e secagem de filamentos.",
      "Telemetria e testes práticos em campo.",
    ],
  },
];

const certificates = [
  { title: "Escalonamento com as Operações do Google Cloud", issuer: "Google", date: "Abr 2026", url: "https://www.skills.google/public_profiles/e71ad3de-3b23-46c7-b391-d3e0d180aebd/badges/23752603", image: GOOGLE },
  { title: "Confiança e segurança com o Google Cloud", issuer: "Google", date: "Abr 2026", url: "https://www.skills.google/public_profiles/e71ad3de-3b23-46c7-b391-d3e0d180aebd/badges/23752595", image: GOOGLE },
  { title: "Modernização de infraestrutura e aplicativos com o Google Cloud", issuer: "Google", date: "Abr 2026", url: "https://www.skills.google/public_profiles/e71ad3de-3b23-46c7-b391-d3e0d180aebd/badges/23752505", image: GOOGLE },
  { title: "Como inovar com a inteligência artificial do Google Cloud", issuer: "Google", date: "Abr 2026", url: "https://www.skills.google/public_profiles/e71ad3de-3b23-46c7-b391-d3e0d180aebd/badges/23752169", image: GOOGLE },
  { title: "Inspect Rich Documents with Gemini...", issuer: "Google", date: "Nov 2025", url: "https://www.credly.com/badges/25408347-a5b1-49a7-83e1-c9f6277cf5ac/linked_in_profile", image: GOOGLE },
  { title: "Develop GenAI Apps with Gemini...", issuer: "Google", date: "Nov 2025", url: "https://www.credly.com/badges/6278a500-634a-4f05-a3cc-bd095c408a2a/linked_in_profile", image: GOOGLE },
  { title: "Gemini for Data Scientists and Analysts", issuer: "Google", date: "Out 2025", url: "https://www.skills.google/public_profiles/e71ad3de-3b23-46c7-b391-d3e0d180aebd/badges/19646570", image: GOOGLE },
  { title: "Prompt Design in Vertex AI Skill Badge", issuer: "Google", date: "Out 2025", url: "https://www.credly.com/badges/8e2be021-b92a-4a6e-b272-ba9e740139b9/linked_in_profile", image: GOOGLE },
  { title: "AWS Academy Machine Learning", issuer: "Amazon Web Services (AWS)", date: "Set 2025", url: "https://www.credly.com/badges/37001286-c7b8-4ed1-a6fa-01023c925609/linked_in_profile", image: AWS, whiteBg: true },
  { title: "Cybersecurity Essentials", issuer: "Cisco", date: "Out 2023", url: "https://www.credly.com/badges/2de969f1-61e5-4a66-a762-85410cd77a1f/linked_in_profile", image: CISCO, whiteBg: true },
  { title: "Endpoint Security", issuer: "Cisco", date: "Mar 2024", url: "https://www.credly.com/badges/56963de0-f822-4aaf-ae42-8d2bec6ac03d/linked_in_profile", image: CISCO, whiteBg: true },
  { title: "IT Essentials", issuer: "Cisco", date: "Dez 2023", url: "https://www.credly.com/badges/c16a05a8-991d-435f-8e9d-3a98a154ca48/linked_in_profile", image: CISCO, whiteBg: true },
  { title: "Networking Academy Learn-A-Thon 2024", issuer: "Cisco", date: "Mar 2024", url: "https://www.credly.com/badges/3ccfb95d-c469-48c8-b18d-351d879e6438/linked_in_profile", image: CISCO, whiteBg: true },
  { title: "Front-End Básico", issuer: "Centro Paula Souza", date: "Jun 2024", url: "https://badge.cps.sp.gov.br/view.aspx?4cc7ba7d-3399-45be-917d-947546e3bbd4", image: CPS, whiteBg: true },
  { title: "Desenvolvedor Front-End", issuer: "Centro Paula Souza", date: "Mai 2025", url: "https://siga.cps.sp.gov.br/cartorio/autenticador.aspx?4a147534-d761-411d-bfcc-86087b6d708f", image: CPS, whiteBg: true },
];

const aboutMe = {
  name: "Danilo Paulino",
  role: "Desenvolvedor Full-Stack & Entusiasta de IoT",
  avatar: "https://i.scdn.co/image/ab6775700000ee857bbe4aebb43f8cf1ede4803a",
  bio: [
    "Desenvolvedor apaixonado por unir software e hardware, transformando ideias em sistemas concretos. Tenho como diferencial o gosto pelo trabalho de baixo nível: firmware, FreeRTOS, criptografia em microcontroladores e modding de hardware.",
    "Atuo do frontend ao backend, passando por bancos de dados relacionais, orquestração com Node-RED e infraestrutura local com Proxmox, Docker e K3s. Acredito que aprender fazendo é o caminho mais curto para a maestria — meu home lab é prova viva disso.",
    "Estou sempre buscando desafios que combinem rigor técnico, curiosidade e impacto real, seja em IoT, dados ou desenvolvimento de aplicações multiplataforma.",
  ],
  stats: [
    { label: "Projetos", value: "10+" },
    { label: "Certificados & Badges", value: "15+" },
  ],
  highlights: [
    { icon: "code", label: "Full-Stack Dev", description: "React, Java, Python, KMP" },
    { icon: "cpu", label: "IoT & Firmware", description: "ESP32, C++, FreeRTOS" },
    { icon: "server", label: "Home Lab", description: "Proxmox, Docker, K3s" },
    { icon: "shield", label: "Segurança", description: "Criptografia & Redes" },
  ],
};

const navItems = [
  { key: "inicio", label: "Início", icon: "home" },
  { key: "pi", label: "Projeto Integrador", icon: "folder" },
  { key: "skills", label: "Skills & Certificados", icon: "award" },
  { key: "about", label: "Quem sou eu", icon: "user" },
];
