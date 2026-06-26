const LANGUAGE_KEY = "portfolio-language";
const THEME_KEY = "portfolio-theme";
const DEFAULT_LANGUAGE = "pt-BR";
const DEFAULT_THEME = "light";

const translations = {
  "pt-BR": {
    "home.title": "Portfólio Técnico - Infraestrutura, Automação e Desenvolvimento de Sistemas",
    "home.description": "Projetos técnicos em infraestrutura de TI, automação operacional, desenvolvimento de sistemas, integração de soluções, observabilidade e suporte técnico.",
    "cases.title": "Cases técnicos aplicados",
    "cases.description": "Projetos técnicos em infraestrutura de TI, automação operacional, desenvolvimento de sistemas, integração de soluções, observabilidade e suporte técnico.",
    "extensions.title": "Extensões de Navegador",
    "extensions.description": "Desenvolvimento de sistemas com extensões de navegador focadas em privacidade visual e produtividade local.",
    "wsl.title": "Laboratório WSL2, Ubuntu e Docker",
    "wsl.description": "Laboratório Técnico para execução de serviços Linux em Windows com WSL2, Ubuntu e Docker.",
    "support.title": "Programa de Suporte Técnico",
    "support.description": "Automação de suporte com aplicação desktop para centralizar rotinas de suporte Windows.",
    "process.title": "Sistema de Controle de Processos e Relatórios",
    "process.description": "Automação de processos com base relacional, scripts Python e relatórios.",
    "windows.title": "Ambiente Windows Server Corporativo",
    "windows.description": "Infraestrutura corporativa Microsoft com domínio, serviços de rede e governança técnica.",
    "chatwoot.title": "Chatwoot com IA e Atendimento Omnichannel",
    "chatwoot.description": "Integração de sistemas para atendimento omnichannel com centralização de canais e automação de resposta.",
    "observability.title": "Observabilidade com Zabbix e Grafana",
    "observability.description": "Observabilidade com monitoramento, dashboards e alertas em Zabbix e Grafana.",
    "telegram.title": "Telegram Bot",
    "telegram.description": "Bot e automação em Python com menus, handlers e fluxo conversacional simples.",
    "humhub.title": "HumHub Self-hosting",
    "humhub.description": "Self-hosting de aplicação web em stack LAMP.",
    "website.title": "Site Estático e Presença Digital",
    "website.description": "Presença digital com página estática, organização visual e publicação web simples.",
    "nav.start": "Início",
    "controls.preferences": "Preferências do site",
    "hero.linkedin": "LinkedIn",
    "hero.linkedin.aria": "Acessar perfil profissional no LinkedIn",
    "linkedin.aria": "Acessar perfil profissional no LinkedIn"
  },
  "en-US": {
    "home.title": "Technical Portfolio - Infrastructure, Automation and Systems Development",
    "home.description": "Technical projects in IT infrastructure, operational automation, systems development, solution integration, observability and technical support.",
    "cases.title": "Applied Technical Cases",
    "cases.description": "Technical projects in IT infrastructure, operational automation, systems development, solution integration, observability and technical support.",
    "extensions.title": "Browser Extensions",
    "extensions.description": "Systems development through browser extensions focused on visual privacy and local productivity.",
    "wsl.title": "WSL2, Ubuntu and Docker Lab",
    "wsl.description": "Technical lab for running Linux services on Windows with WSL2, Ubuntu and Docker.",
    "support.title": "Technical Support Program",
    "support.description": "Support automation through a desktop application that centralizes Windows support routines.",
    "process.title": "Process Control and Reporting System",
    "process.description": "Process automation with a relational database, Python scripts and reporting.",
    "windows.title": "Corporate Windows Server Environment",
    "windows.description": "Corporate Microsoft infrastructure with domain services, networking and technical governance.",
    "chatwoot.title": "Chatwoot with AI and Omnichannel Support",
    "chatwoot.description": "Systems integration for omnichannel support with centralized channels and response automation.",
    "observability.title": "Observability with Zabbix and Grafana",
    "observability.description": "Observability through monitoring, dashboards and alerts with Zabbix and Grafana.",
    "telegram.title": "Telegram Bot",
    "telegram.description": "Bot and automation in Python with menus, handlers and a straightforward conversational flow.",
    "humhub.title": "HumHub Self-hosting",
    "humhub.description": "Self-hosting a web application on a LAMP stack.",
    "website.title": "Static Website and Digital Presence",
    "website.description": "Digital presence through a static page, visual organization and lightweight web publishing.",
    "nav.start": "Home",
    "controls.preferences": "Site preferences",
    "hero.linkedin": "LinkedIn",
    "hero.linkedin.aria": "Open professional LinkedIn profile",
    "linkedin.aria": "Open professional LinkedIn profile"
  }
};

const ptToEn = {
  "Portfólio Técnico - Infraestrutura, Automação e Desenvolvimento de Sistemas": "Technical Portfolio - Infrastructure, Automation and Systems Development",
  "Portfólio Técnico": "Technical Portfolio",
  "Infraestrutura, Automação e Desenvolvimento de Sistemas": "Infrastructure, Automation and Systems Development",
  "Projetos técnicos em infraestrutura de TI, automação operacional, desenvolvimento de sistemas, integração de soluções, observabilidade e suporte técnico.": "Technical projects in IT infrastructure, operational automation, systems development, solution integration, observability and technical support.",
  "Ver projetos": "View projects",
  "Ver todos os cases": "View all cases",
  "Menu": "Menu",
  "Apresentação": "Overview",
  "Áreas": "Areas",
  "Projetos": "Projects",
  "Estudos Técnicos": "Technical Studies",
  "Trilhas": "Tracks",
  "Curadoria": "Curation",
  "Soluções técnicas aplicadas à operação": "Technical solutions applied to operations",
  "Este portfólio reúne projetos, estudos aplicados e arquiteturas técnicas construídas para demonstrar domínio prático em infraestrutura de TI, automação operacional, desenvolvimento de sistemas, integração de soluções, observabilidade e suporte técnico.": "This portfolio brings together projects, applied studies and technical architectures built to demonstrate practical expertise in IT infrastructure, operational automation, systems development, solution integration, observability and technical support.",
  "Áreas de Atuação": "Areas of Practice",
  "Frentes técnicas": "Technical areas",
  "Infraestrutura Windows Server": "Windows Server Infrastructure",
  "Domínio, políticas, serviços de rede e organização de ambiente.": "Domain services, policies, networking and environment organization.",
  "Active Directory, DNS, DHCP e GPO": "Active Directory, DNS, DHCP and GPO",
  "Autenticação centralizada, nomes, endereçamento e governança.": "Centralized authentication, naming, addressing and governance.",
  "Observabilidade com Zabbix e Grafana": "Observability with Zabbix and Grafana",
  "Monitoramento, visualização, alertas e operação.": "Monitoring, visualization, alerts and operations.",
  "Automação com Python e PowerShell": "Automation with Python and PowerShell",
  "Automação de suporte, integrações e rotinas operacionais.": "Support automation, integrations and operational routines.",
  "Docker, WSL2 e Linux": "Docker, WSL2 and Linux",
  "Laboratórios locais, containers e troubleshooting.": "Local labs, containers and troubleshooting.",
  "Desenvolvimento de Extensões": "Extension Development",
  "Manifest V3, produtividade local e controle de interface.": "Manifest V3, local productivity and interface control.",
  "Dados, Relatórios e Automação": "Data, Reporting and Automation",
  "MySQL, SQL, VBA, Excel e geração de relatórios.": "MySQL, SQL, VBA, Excel and report generation.",
  "Integração de Sistemas": "Systems Integration",
  "Chatwoot, bots, mensageria e fluxos de automação.": "Chatwoot, bots, messaging and automation workflows.",
  "Projetos Principais": "Main Projects",
  "Projetos técnicos em destaque": "Featured technical projects",
  "Desenvolvimento de Sistemas": "Systems Development",
  "Extensões de Navegador": "Browser Extensions",
  "Desenvolvimento de extensões Chrome com foco em privacidade visual, produtividade local, controle de interface e organização de navegação.": "Chrome extension development focused on visual privacy, local productivity, interface control and browsing organization.",
  "Ver case": "View case",
  "Laboratório Técnico": "Technical Lab",
  "Laboratório WSL2, Ubuntu e Docker": "WSL2, Ubuntu and Docker Lab",
  "Estruturação de ambiente híbrido para serviços Linux em Windows, containers, banco de dados e troubleshooting de instalação.": "A hybrid environment for Linux services on Windows, containers, databases and installation troubleshooting.",
  "Automação de Suporte": "Support Automation",
  "Programa de Suporte Técnico": "Technical Support Program",
  "Aplicação desktop para centralizar rotinas de suporte Windows com interface Python e automação local baseada em scripts.": "Desktop application that centralizes Windows support routines through a Python interface and local script-based automation.",
  "Automação de Processos": "Process Automation",
  "Sistema de Controle de Processos e Relatórios": "Process Control and Reporting System",
  "Automação administrativa com modelagem relacional, scripts Python, consultas estruturadas e apoio adicional em VBA e Excel.": "Administrative automation with relational modeling, Python scripts, structured queries and additional VBA and Excel support.",
  "Infraestrutura Corporativa": "Corporate Infrastructure",
  "Ambiente Windows Server Corporativo": "Corporate Windows Server Environment",
  "Arquitetura narrada de infraestrutura Microsoft com domínio, políticas, serviços de rede e organização técnica do ambiente.": "Microsoft infrastructure architecture covering domain services, policies, networking and technical environment organization.",
  "Chatwoot com IA e Atendimento Omnichannel": "Chatwoot with AI and Omnichannel Support",
  "Arquitetura documentada de atendimento omnichannel com centralização de canais, automação de resposta e integração entre serviços.": "Documented omnichannel support architecture with centralized channels, response automation and service integration.",
  "Observabilidade": "Observability",
  "Trilha de monitoramento, dashboards e alertas com integração entre observabilidade, mensageria e rotina operacional.": "Monitoring, dashboards and alerts integrated with messaging and operational workflows.",
  "Scripts de apoio": "Support scripts",
  "Zabbix | Grafana | Telegram | Scripts de apoio": "Zabbix | Grafana | Telegram | Support scripts",
  "Projetos complementares de aplicação prática": "Complementary projects with practical application",
  "Bot e Automação": "Bot and Automation",
  "Bot em Python com menus, handlers e fluxo conversacional simples para automação em canal de mensageria.": "Python bot with menus, handlers and a straightforward conversational flow for messaging automation.",
  "Implantação de aplicação web self-hosted em stack LAMP com foco em organização técnica do ambiente.": "Deployment of a self-hosted web application on a LAMP stack with a focus on technical environment organization.",
  "Presença Digital": "Digital Presence",
  "Site Estático e Presença Digital": "Static Website and Digital Presence",
  "Estruturação de presença digital com página estática, organização visual e publicação web.": "A digital presence built with a static page, visual organization and web publishing.",
  "HTML estático": "Static HTML",
  "Carrd | Ereemby | HTML estático": "Carrd | Ereemby | Static HTML",
  "Trilhas Técnicas": "Technical Tracks",
  "Competências técnicas demonstradas": "Demonstrated technical skills",
  "Infraestrutura corporativa": "Corporate infrastructure",
  "Observabilidade e operação": "Observability and operations",
  "Alertas": "Alerts",
  "Mensageria": "Messaging",
  "Automação de suporte": "Support automation",
  "Empacotamento": "Packaging",
  "Rotinas Windows": "Windows routines",
  "Dados e relatórios": "Data and reporting",
  "Relatórios": "Reports",
  "Bots": "Bots",
  "Sistemas": "Systems",
  "Integração de sistemas": "Systems integration",
  "Fluxos conversacionais": "Conversational workflows",
  "Automação": "Automation",
  "Curadoria Técnica": "Technical Curation",
  "Os projetos foram organizados para demonstrar arquitetura, raciocínio técnico, domínio operacional e capacidade de entrega.": "The projects were organized to demonstrate architecture, technical reasoning, operational expertise and delivery capability.",
  "Página inicial": "Home",
  "Cases": "Cases",
  "Cases técnicos aplicados": "Applied Technical Cases",
  "Área: Desenvolvimento de Sistemas": "Area: Systems Development",
  "Área: Laboratório Técnico": "Area: Technical Lab",
  "Área: Automação de Suporte": "Area: Support Automation",
  "Área: Automação de Processos": "Area: Process Automation",
  "Área: Infraestrutura Corporativa": "Area: Corporate Infrastructure",
  "Área: Integração de Sistemas": "Area: Systems Integration",
  "Área: Observabilidade": "Area: Observability",
  "Área: Bot e Automação": "Area: Bot and Automation",
  "Área: Self-hosting": "Area: Self-hosting",
  "Área: Presença Digital": "Area: Digital Presence",
  "Voltar aos cases": "Back to cases",
  "Voltar à página inicial": "Back to home",
  "Visão Geral": "Overview",
  "Desafio Técnico": "Technical Challenge",
  "Solução Desenvolvida": "Developed Solution",
  "Arquitetura / Fluxo": "Architecture / Flow",
  "Ilustrações Técnicas": "Technical Illustrations",
  "Ilustrações": "Illustrations",
  "Registros visuais, diagramas ou representações técnicas utilizados para contextualizar a arquitetura, o fluxo e os resultados do projeto.": "Visual records, diagrams or technical representations used to contextualize the architecture, flow and results of the project.",
  "Entregas Técnicas": "Technical Deliverables",
  "Competências Demonstradas": "Demonstrated Skills",
  "Resultado Técnico": "Technical Result",
  "Este case foi reorganizado para apresentação pública, preservando a arquitetura, as decisões técnicas e o valor demonstrativo da solução. Informações sensíveis, identificadores reais e artefatos operacionais não fazem parte da versão pública.": "This case was organized for public presentation while preserving the architecture, technical decisions and demonstrative value of the solution. Sensitive information, real identifiers and operational artifacts are not included in the public version.",
  "Coleção de extensões Chrome com foco em privacidade visual, produtividade local e organização da navegação.": "A collection of Chrome extensions focused on visual privacy, local productivity and browsing organization.",
  "Este projeto demonstra a construção de extensões de navegador voltadas a problemas concretos de uso diário, como proteção visual de interfaces, organização de fluxo e ganho de produtividade local sem dependência de backend.": "This project demonstrates browser extensions designed for practical daily-use needs, including visual interface protection, workflow organization and local productivity without backend dependencies.",
  "Interfaces web frequentemente expõem informações em tela, acumulam excesso de abas e carecem de controles simples para ajustes locais de uso. O desafio era criar soluções leves, reaproveitáveis e instaláveis diretamente no navegador.": "Web interfaces often expose on-screen information, accumulate excessive tabs and lack simple controls for local adjustments. The challenge was to create lightweight, reusable solutions that can be installed directly in the browser.",
  "Foi estruturado um conjunto de extensões independentes com popup, scripts de conteúdo, service workers e persistência local. A frente mais representativa utiliza blur seletivo, bloqueio local e preferências salvas para proteger a visualização sem alterar o serviço original.": "A set of independent extensions was structured with popups, content scripts, service workers and local persistence. The leading implementation uses selective blur, local locking and saved preferences to protect the view without modifying the original service.",
  "Usuário aciona extensão": "User activates extension",
  "Popup ou atalho local": "Popup or local shortcut",
  "Preferências no navegador": "Browser preferences",
  "Content script aplica regras": "Content script applies rules",
  "Interface recebe ajustes visuais": "Interface receives visual adjustments",
  "Blur seletivo de elementos sensíveis.": "Selective blur for sensitive elements.",
  "Persistência local de configurações.": "Local persistence of settings.",
  "Menus e ações rápidas embutidas na página.": "Menus and quick actions embedded in the page.",
  "Estrutura modular para múltiplas extensões.": "Modular structure for multiple extensions.",
  "Recursos de organização de abas e favoritos.": "Tab and bookmark organization features.",
  "Desenvolvimento de extensões Chrome em Manifest V3.": "Chrome extension development with Manifest V3.",
  "Manipulação de DOM em páginas de terceiros.": "DOM manipulation on third-party pages.",
  "Modelagem de estado local no cliente.": "Client-side local state modeling.",
  "UX aplicada a privacidade e produtividade.": "UX applied to privacy and productivity.",
  "Organização modular de frontend.": "Modular frontend organization.",
  "O conjunto comprova capacidade de construir extensões de navegador úteis, modulares e alinhadas a problemas reais de privacidade visual e produtividade local.": "The project demonstrates the ability to build useful, modular browser extensions aligned with real visual privacy and local productivity needs.",
  "Ambiente híbrido para serviços Linux em Windows com containers, banco de dados e troubleshooting de instalação.": "Hybrid environment for Linux services on Windows with containers, databases and installation troubleshooting.",
  "O laboratório documenta a preparação de um ambiente Linux sobre host Windows para subir serviços locais com containers, testar integrações e registrar procedimentos de troubleshooting.": "The lab documents the preparation of a Linux environment on a Windows host to run local containerized services, test integrations and record troubleshooting procedures.",
  "Era necessário estruturar um ambiente reproduzível para serviços Linux e banco de dados em Windows, com isolamento suficiente para testes, ajustes de dependência e validação técnica sem depender de infraestrutura externa.": "A reproducible environment was required for Linux services and databases on Windows, with enough isolation for testing, dependency adjustments and technical validation without external infrastructure.",
  "O ambiente foi organizado com WSL2 e Ubuntu como camada base, Docker e Compose para orquestração local e banco MySQL para apoiar serviços dependentes. A apresentação pública foi mantida em nível de laboratório técnico.": "The environment uses WSL2 and Ubuntu as its base layer, Docker and Compose for local orchestration, and MySQL to support dependent services. The public presentation remains focused on the technical lab.",
  "Host Windows": "Windows host",
  "Containers de serviço": "Service containers",
  "Banco e validação local": "Database and local validation",
  "Preparação de ambiente Linux em host Windows.": "Preparation of a Linux environment on a Windows host.",
  "Organização de serviços em containers.": "Organization of containerized services.",
  "Registro de troubleshooting de instalação.": "Documentation of installation troubleshooting.",
  "Base documentada para testes locais.": "Documented foundation for local testing.",
  "Fluxo de inicialização e validação de serviços.": "Service startup and validation workflow.",
  "Administração de ambiente híbrido Windows/Linux.": "Administration of a hybrid Windows/Linux environment.",
  "Orquestração básica com Docker Compose.": "Basic orchestration with Docker Compose.",
  "Troubleshooting de instalação e dependências.": "Installation and dependency troubleshooting.",
  "Configuração de serviços locais.": "Configuration of local services.",
  "Documentação técnica orientada a laboratório.": "Lab-oriented technical documentation.",
  "O material demonstra capacidade de preparar e manter um laboratório funcional com containers em WSL2, destacando configuração, validação e diagnóstico técnico.": "The material demonstrates the ability to prepare and maintain a functional container lab on WSL2, covering configuration, validation and technical diagnostics.",
  "O projeto demonstra a organização de um terminal de suporte para agrupar tarefas recorrentes de operação Windows em uma interface única, reduzindo dispersão entre scripts, atalhos e procedimentos manuais.": "The project organizes a support console that brings recurring Windows operational tasks into a single interface, reducing fragmentation across scripts, shortcuts and manual procedures.",
  "Rotinas de suporte estavam espalhadas entre múltiplos recursos locais, sem padronização clara para operadores diferentes. Isso cria retrabalho, aumenta o tempo de execução e dificulta distribuição controlada.": "Support routines were spread across multiple local resources without clear standardization for different operators. This creates rework, increases execution time and complicates controlled distribution.",
  "A solução combina launcher em Python com interface Tkinter, scripts PowerShell organizados por categoria, recursos auxiliares e fluxo de empacotamento para distribuição controlada. A publicação foi mantida em formato técnico, priorizando a arquitetura do fluxo.": "The solution combines a Python launcher with a Tkinter interface, category-based PowerShell scripts, supporting resources and a packaging workflow for controlled distribution. The public version prioritizes the technical workflow architecture.",
  "Operador": "Operator",
  "Launcher desktop": "Desktop launcher",
  "Menus por categoria": "Category-based menus",
  "Scripts PowerShell": "PowerShell scripts",
  "Recursos de suporte": "Support resources",
  "Empacotamento controlado": "Controlled packaging",
  "Interface do programa de suporte técnico com menu principal e área de configuração do sistema": "Technical support program interface with main menu and system configuration area",
  "Menu principal do terminal de suporte, com módulos de configuração, diagnóstico e execução centralizada de rotinas técnicas.": "Main support terminal menu with configuration, diagnostics and centralized execution of technical routines.",
  "Interface do programa de suporte técnico com programas padrões e ferramentas de apoio organizadas": "Technical support program interface with organized standard programs and support tools",
  "Organização de programas padrões e ferramentas de apoio para instalação, manutenção e padronização operacional.": "Organization of standard programs and support tools for installation, maintenance and operational standardization.",
  "Interface do programa de suporte técnico com recursos, utilidades e ferramentas operacionais": "Technical support program interface with resources, utilities and operational tools",
  "Área de recursos e utilidades técnicas para suporte Windows, manutenção local e apoio à operação.": "Technical resources and utilities area for Windows support, local maintenance and operational assistance.",
  "Menu centralizado para tarefas de suporte.": "Centralized menu for support tasks.",
  "Separação de rotinas por categoria.": "Routines separated by category.",
  "Acionamento de scripts administrativos e operacionais.": "Execution of administrative and operational scripts.",
  "Base de recursos para instalação e manutenção.": "Resource base for installation and maintenance.",
  "Documentação de empacotamento e distribuição.": "Packaging and distribution documentation.",
  "Automação de suporte Windows.": "Windows support automation.",
  "Integração Python + PowerShell.": "Python and PowerShell integration.",
  "Projeto de interface desktop.": "Desktop interface design.",
  "Organização operacional por menus e scripts.": "Operational organization through menus and scripts.",
  "Empacotamento e documentação técnica.": "Packaging and technical documentation.",
  "O material evidencia uma abordagem prática para transformar rotinas repetitivas de suporte em um fluxo centralizado, reutilizável e mais previsível.": "The material demonstrates a practical approach to turning repetitive support routines into a centralized, reusable and more predictable workflow.",
  "Projeto de automação administrativa com persistência relacional, scripts Python e apoio adicional em VBA e Excel.": "Administrative automation project with relational persistence, Python scripts and additional VBA and Excel support.",
  "O projeto demonstra a organização de um fluxo documental com base relacional, rotinas de operação e consolidação de relatórios em um cenário administrativo.": "The project demonstrates a document workflow supported by a relational database, operational routines and consolidated reporting in an administrative setting.",
  "Documentos e registros precisavam ser controlados por processo, tipo, categoria, atribuição e datas, com consulta estruturada e geração de relatórios mais consistente que soluções isoladas em planilha.": "Documents and records needed to be managed by process, type, category, assignment and date, with structured queries and reporting more consistent than isolated spreadsheet solutions.",
  "A solução combina schema SQL dedicado, tabela principal de documentos, índices para busca e scripts Python para operações de CRUD e relatórios. Em pontos específicos, o fluxo é complementado por planilha e macros VBA.": "The solution combines a dedicated SQL schema, a main document table, search indexes and Python scripts for CRUD and reporting operations. At specific points, spreadsheets and VBA macros complement the workflow.",
  "Entrada de dados": "Data entry",
  "Scripts e macros": "Scripts and macros",
  "Banco MySQL": "MySQL database",
  "Consultas e filtros": "Queries and filters",
  "Relatórios consolidados": "Consolidated reports",
  "Modelagem de dados para controle documental.": "Data modeling for document control.",
  "Operações de cadastro, edição, consulta e remoção.": "Create, edit, query and delete operations.",
  "Índices para busca e filtragem.": "Indexes for search and filtering.",
  "Geração de relatórios consolidados.": "Generation of consolidated reports.",
  "Integração entre banco, scripts e ferramentas de escritório.": "Integration across the database, scripts and office tools.",
  "Modelagem relacional de dados.": "Relational data modeling.",
  "Escrita de schema SQL e índices.": "SQL schema and index design.",
  "Automação administrativa com Python.": "Administrative automation with Python.",
  "Integração entre banco, planilha e macros.": "Integration across database, spreadsheets and macros.",
  "Organização de fluxo documental.": "Document workflow organization.",
  "O case demonstra uma implementação coerente de automação administrativa com persistência relacional e consolidação de relatórios, adequada para apresentação em portfólio aplicado.": "The case demonstrates a coherent administrative automation implementation with relational persistence and consolidated reporting, suitable for an applied technical portfolio.",
  "Infraestrutura Microsoft com domínio, políticas, serviços de rede e governança técnica.": "Microsoft infrastructure with domain services, policies, networking and technical governance.",
  "O case apresenta uma base de infraestrutura Microsoft descrita como ambiente fictício, cobrindo autenticação centralizada, serviços de rede, políticas de grupo e serviços de apoio para clientes Windows.": "The case presents a fictional Microsoft infrastructure environment covering centralized authentication, network services, group policies and supporting services for Windows clients.",
  "O cenário exige estruturar uma base confiável de identidade, nomes, endereçamento e governança técnica para padronizar operação, acesso e serviços essenciais em ambiente corporativo.": "The scenario requires a reliable foundation for identity, naming, addressing and technical governance to standardize operations, access and essential corporate services.",
  "O ambiente foi reorganizado como narrativa técnica segura: rede controlada, promoção de servidor a controlador de domínio, configuração de DNS e DHCP, ingresso de clientes no domínio e aplicação de políticas via GPO, com serviços adicionais de apoio quando necessários.": "The environment is presented as a controlled technical architecture: managed networking, server promotion to domain controller, DNS and DHCP configuration, client domain enrollment and GPO application, with supporting services when required.",
  "Clientes Windows": "Windows clients",
  "Servidor central": "Central server",
  "DNS e DHCP": "DNS and DHCP",
  "GPO e serviços de apoio": "GPO and supporting services",
  "Administração contínua": "Ongoing administration",
  "Estrutura de domínio centralizado.": "Centralized domain structure.",
  "Serviços de nomes e distribuição de endereços.": "Naming and address distribution services.",
  "Políticas de grupo para padronização.": "Group policies for standardization.",
  "Base para acesso remoto e serviços web.": "Foundation for remote access and web services.",
  "Sequência técnica de implantação e operação.": "Technical deployment and operations sequence.",
  "Administração de domínio Windows.": "Windows domain administration.",
  "Planejamento de rede interna.": "Internal network planning.",
  "Governança por GPO.": "Governance through GPO.",
  "Configuração de serviços de infraestrutura.": "Infrastructure service configuration.",
  "Documentação técnica orientada a ambiente corporativo.": "Technical documentation for a corporate environment.",
  "O material demonstra domínio de tarefas clássicas de infraestrutura Microsoft e capacidade de organizar a implantação em uma narrativa pública segura e coerente.": "The material demonstrates command of core Microsoft infrastructure tasks and the ability to organize deployment into a clear, responsible public technical narrative.",
  "Arquitetura de atendimento omnichannel com centralização de canais, automação de resposta e serviços auxiliares.": "Omnichannel support architecture with centralized channels, response automation and supporting services.",
  "O case apresenta uma arquitetura de atendimento capaz de concentrar conversas, organizar regras de triagem e sustentar automação em um fluxo omnichannel de apresentação pública.": "The case presents a support architecture that centralizes conversations, organizes triage rules and supports automation within an omnichannel workflow.",
  "O desafio era estruturar um fluxo de atendimento com múltiplos canais de entrada, regras de resposta e separação clara entre a plataforma de atendimento e a camada de automação.": "The challenge was to structure a support workflow with multiple inbound channels, response rules and clear separation between the support platform and the automation layer.",
  "A solução combina Chatwoot como núcleo operacional, canais externos de mensageria, camada de eventos, categorização de mensagens e um serviço auxiliar em Flask para decisões automatizadas. A publicação foi mantida em nível técnico para preservar segurança operacional.": "The solution combines Chatwoot as the operational core, external messaging channels, an event layer, message categorization and a Flask service for automated decisions. The public version remains focused on the technical architecture.",
  "Canais de entrada": "Inbound channels",
  "Eventos de integração": "Integration events",
  "Serviço auxiliar": "Supporting service",
  "Regras e categorização": "Rules and categorization",
  "Resposta assistida": "Assisted response",
  "Recebimento centralizado de mensagens.": "Centralized message intake.",
  "Integração com múltiplos canais.": "Integration with multiple channels.",
  "Camada de regras para automação de resposta.": "Rules layer for response automation.",
  "Separação entre atendimento e serviço auxiliar.": "Separation between support and the supporting service.",
  "Estrutura técnica preparada para evolução controlada.": "Technical structure prepared for controlled evolution.",
  "Desenho de integração omnichannel.": "Omnichannel integration design.",
  "Modelagem de fluxos conversacionais.": "Conversational workflow modeling.",
  "Arquitetura de serviços web em containers.": "Containerized web service architecture.",
  "Integração entre plataforma de atendimento e automação.": "Integration between the support platform and automation.",
  "Curadoria técnica para publicação pública segura.": "Technical curation for responsible public presentation.",
  "O material demonstra entendimento consistente de integração omnichannel e automação de resposta, preservando a segurança da publicação sem perder clareza técnica.": "The material demonstrates a consistent understanding of omnichannel integration and response automation while maintaining technical clarity in the public presentation.",
  "Base técnica de monitoramento, dashboards e alertas apresentada em formato público seguro.": "Technical foundation for monitoring, dashboards and alerts presented in a responsible public format.",
  "O case consolida uma trilha de observabilidade com coleta, visualização e notificação, preservando apenas a camada técnica reutilizável da solução.": "The case consolidates an observability workflow for collection, visualization and notification while preserving the reusable technical layer of the solution.",
  "O desafio era organizar monitoramento de hosts, criação de dashboards e regras de alerta em uma base coesa, capaz de apoiar operação técnica sem expor o ambiente monitorado.": "The challenge was to organize host monitoring, dashboard creation and alert rules into a cohesive foundation that supports technical operations.",
  "A solução combina Zabbix como plataforma de monitoramento, Grafana como camada de visualização e integrações auxiliares para notificação. A apresentação pública foi mantida em formato técnico e anonimizado.": "The solution combines Zabbix as the monitoring platform, Grafana as the visualization layer and supporting integrations for notifications. The public presentation remains technical and anonymized.",
  "Hosts monitorados": "Monitored hosts",
  "Regras e triggers": "Rules and triggers",
  "Operação técnica": "Technical operations",
  "Dashboard de observabilidade com visão consolidada de monitoramento.": "Observability dashboard with a consolidated monitoring view.",
  "Fluxo de alertas e eventos para acompanhamento operacional.": "Alert and event flow for operational monitoring.",
  "Integração entre coleta, visualização e notificação técnica.": "Integration across collection, visualization and technical notification.",
  "Cadastro e organização de hosts monitorados.": "Registration and organization of monitored hosts.",
  "Regras de alerta e notificação.": "Alert and notification rules.",
  "Dashboards para visualização de estado.": "Dashboards for status visualization.",
  "Integração com mensageria para avisos operacionais.": "Messaging integration for operational notifications.",
  "Scripts auxiliares de configuração e suporte.": "Supporting configuration and support scripts.",
  "Implantação de monitoramento.": "Monitoring implementation.",
  "Integração de camadas de observabilidade.": "Integration of observability layers.",
  "Configuração de alertas.": "Alert configuration.",
  "Documentação operacional.": "Operational documentation.",
  "Consolidação de dashboards e notificações.": "Consolidation of dashboards and notifications.",
  "O material comprova uma base prática de observabilidade com coleta, visualização e alerta, adequada para avaliação técnica e apresentação profissional.": "The material demonstrates a practical observability foundation with collection, visualization and alerting, suitable for technical evaluation and professional presentation.",
  "Bot em Python com menus, handlers e fluxo conversacional simples para automação em canal Telegram.": "Python bot with menus, handlers and a straightforward conversational flow for Telegram automation.",
  "Projeto de automação conversacional com foco em estrutura de comandos, roteamento por botões e evolução incremental do fluxo.": "Conversational automation project focused on command structure, button-based routing and incremental workflow evolution.",
  "Era necessário construir um bot simples, legível e facilmente expansível, capaz de oferecer menus e respostas organizadas sem aumentar a complexidade de manutenção.": "The goal was to build a simple, readable and easily extensible bot capable of providing organized menus and responses without increasing maintenance complexity.",
  "O projeto usa": "The project uses",
  "para registrar comandos, processar callbacks de botões e responder ao usuário com mensagens definidas por função. A estrutura favorece separação clara entre entrada, roteamento e resposta.": "to register commands, process button callbacks and respond with function-based messages. The structure provides clear separation between input, routing and response.",
  "Usuário no Telegram": "Telegram user",
  "Comando inicial": "Initial command",
  "Menu com botões": "Button menu",
  "Handler de callback": "Callback handler",
  "Resposta por fluxo": "Workflow response",
  "Mensagem inicial de boas-vindas.": "Initial welcome message.",
  "Menu de serviços com botões.": "Button-based service menu.",
  "Handlers para callbacks.": "Callback handlers.",
  "Estrutura preparada para novos fluxos.": "Structure prepared for new workflows.",
  "Registro técnico básico.": "Basic technical logging.",
  "Desenvolvimento de bot em Python.": "Bot development in Python.",
  "Modelagem de fluxo conversacional.": "Conversational workflow modeling.",
  "Uso de handlers e callbacks.": "Use of handlers and callbacks.",
  "Organização de comandos e respostas.": "Organization of commands and responses.",
  "O material demonstra uma base funcional para bots simples e extensíveis no Telegram, adequada como estudo técnico de automação conversacional.": "The material demonstrates a functional foundation for simple, extensible Telegram bots as a technical conversational automation project.",
  "Implantação básica de aplicação web self-hosted em stack LAMP com foco em organização técnica do ambiente.": "Basic deployment of a self-hosted web application on a LAMP stack with a focus on technical environment organization.",
  "Projeto de implantação de aplicação web self-hosted, organizado como laboratório técnico de stack LAMP com foco em clareza técnica e operação básica.": "Self-hosted web application deployment organized as a LAMP stack technical lab focused on clarity and essential operations.",
  "O cenário técnico envolve disponibilizar uma aplicação web com servidor, camada PHP, banco relacional e rotinas básicas de configuração e manutenção.": "The technical scenario involves delivering a web application with a web server, PHP layer, relational database and essential configuration and maintenance routines.",
  "O roteiro técnico foi organizado em atualização do sistema, instalação de Apache e PHP, configuração de extensões, preparação do MariaDB, criação de banco e publicação da aplicação com diretório web e parâmetros do servidor.": "The technical workflow covers system updates, Apache and PHP installation, extension configuration, MariaDB preparation, database creation and application publishing with defined web directory and server parameters.",
  "Cliente web": "Web client",
  "Aplicação HumHub": "HumHub application",
  "Manutenção básica": "Basic maintenance",
  "Preparação de stack LAMP.": "LAMP stack preparation.",
  "Configuração de aplicação social self-hosted.": "Configuration of a self-hosted social application.",
  "Organização de diretório web e permissões.": "Web directory and permission organization.",
  "Base para manutenção e operação local.": "Foundation for local maintenance and operations.",
  "Self-hosting de aplicação web.": "Web application self-hosting.",
  "Configuração de Apache e PHP.": "Apache and PHP configuration.",
  "Preparação de banco de dados.": "Database preparation.",
  "Operação básica de serviço Linux.": "Basic Linux service operations.",
  "O material demonstra capacidade de instalar e organizar uma aplicação web self-hosted em infraestrutura básica, com bom valor de portfólio como estudo técnico de implantação.": "The material demonstrates the ability to install and organize a self-hosted web application on essential infrastructure as a technical deployment project.",
  "Estruturação de presença digital com página estática, organização visual e publicação web simples.": "Digital presence built with a static page, visual organization and lightweight web publishing.",
  "Publicação web": "Web publishing",
  "Organização visual": "Visual organization",
  "Este estudo técnico demonstra a capacidade de estruturar uma presença digital objetiva, leve e adequada à leitura pública, organizando conteúdo profissional em uma página estática simples, clara e funcional.": "This technical study demonstrates the ability to build a focused, lightweight digital presence by organizing professional content into a simple, clear and functional static page.",
  "Criar uma presença digital enxuta, apresentável e de rápida publicação, sem backend dedicado e sem dependência de infraestrutura complexa, mantendo separação entre conteúdo público e materiais privados.": "The challenge was to create a concise, presentable digital presence that could be published quickly without a dedicated backend or complex infrastructure, while separating public content from private material.",
  "A solução utiliza ferramentas leves de página estática e organização visual para construir uma apresentação profissional com foco em clareza, navegação simples e entrega rápida. O trabalho demonstra curadoria de conteúdo, escolha adequada de ferramenta e capacidade de transformar informações soltas em uma página pública estruturada.": "The solution uses lightweight static-page and visual organization tools to build a professional presentation focused on clarity, simple navigation and rapid delivery. It demonstrates content curation, appropriate tool selection and the ability to turn scattered information into a structured public page.",
  "Conteúdo profissional": "Professional content",
  "Curadoria visual": "Visual curation",
  "Página estática": "Static page",
  "Revisão pública": "Public review",
  "Estrutura de página simples.": "Simple page structure.",
  "Organização visual de conteúdo profissional.": "Visual organization of professional content.",
  "Publicação web leve.": "Lightweight web publishing.",
  "Separação entre conteúdo público e material privado.": "Separation between public content and private material.",
  "Base reutilizável para presença digital.": "Reusable foundation for a digital presence.",
  "Curadoria de conteúdo público.": "Public content curation.",
  "Estruturação de presença digital.": "Digital presence development.",
  "Publicação web simples.": "Simple web publishing.",
  "Clareza de apresentação.": "Presentation clarity.",
  "Uso de ferramentas leves para entrega rápida.": "Use of lightweight tools for rapid delivery.",
  "O estudo técnico apresenta apenas a estrutura e a abordagem técnica da publicação, sem expor arquivos originais, links internos, dados reais ou materiais privados.": "The technical study presents only the publishing structure and approach without exposing original files, internal links, real data or private material.",
  "O resultado demonstra capacidade de organizar e publicar uma presença digital simples, segura e funcional, com foco em apresentação profissional e entrega objetiva.": "The result demonstrates the ability to organize and publish a simple, responsible and functional digital presence focused on professional presentation and clear delivery.",
  "Controles da galeria": "Gallery controls",
  "Imagem anterior": "Previous image",
  "Próxima imagem": "Next image",
  "Acessar perfil profissional no LinkedIn": "Open professional LinkedIn profile",
  "Representação visual de dashboard de observabilidade com Zabbix e Grafana": "Visual representation of an observability dashboard with Zabbix and Grafana",
  "Representação visual de alertas e eventos de monitoramento": "Visual representation of monitoring alerts and events",
  "Representação visual do fluxo técnico entre monitoramento, dashboards e notificações": "Visual representation of the technical flow across monitoring, dashboards and notifications",
  "Painel do Gerenciador do Servidor exibindo visão geral do ambiente Windows Server": "Server Manager dashboard showing an overview of the Windows Server environment",
  "Tela de servidor local no Gerenciador do Servidor com informações de configuração do Windows Server": "Local server screen in Server Manager with Windows Server configuration information",
  "Gerenciador do Servidor exibindo todos os servidores administrados no ambiente": "Server Manager showing all servers managed in the environment",
  "Visão geral dos Serviços de Domínio Active Directory no Gerenciador do Servidor": "Overview of Active Directory Domain Services in Server Manager",
  "Visão geral do serviço DNS no ambiente Windows Server": "Overview of the DNS service in the Windows Server environment",
  "Área de arquivos e serviços de armazenamento no Windows Server": "Files and storage services area in Windows Server",
  "Editor ou console de registros DNS com zonas e entradas configuradas": "DNS record editor or console with configured zones and entries",
  "Editor de Política de Grupo exibindo estrutura de configuração de GPO": "Group Policy Editor showing the GPO configuration structure",
  "Tela de delegação de política de grupo no ambiente Windows Server": "Group Policy delegation screen in the Windows Server environment",
  "Tela de ingresso concluído de cliente Windows ao domínio": "Completed Windows client domain join screen",
  "Painel geral do Windows Server com visão consolidada das funções, serviços e estado operacional do ambiente.": "General Windows Server dashboard with a consolidated view of roles, services and operational status.",
  "Visão do servidor local com informações de configuração, administração e parâmetros centrais do ambiente.": "Local server view with configuration, administration and core environment parameters.",
  "Organização dos servidores administrados, permitindo acompanhamento centralizado da infraestrutura Microsoft.": "Organization of managed servers, enabling centralized monitoring of the Microsoft infrastructure.",
  "Serviços de Domínio Active Directory organizados como base de identidade, autenticação e administração centralizada.": "Active Directory Domain Services organized as the foundation for identity, authentication and centralized administration.",
  "Serviço DNS estruturado para resolução de nomes e suporte aos serviços de domínio do ambiente.": "DNS service structured for name resolution and support for domain services.",
  "Camada de arquivos e armazenamento organizada como recurso de apoio à infraestrutura corporativa.": "File and storage layer organized as a support resource for the corporate infrastructure.",
  "Estrutura de zonas e registros DNS utilizada para organização da resolução interna de nomes.": "DNS zone and record structure used to organize internal name resolution.",
  "Estrutura de Política de Grupo utilizada para padronização, governança e aplicação de configurações no ambiente.": "Group Policy structure used for standardization, governance and configuration enforcement across the environment.",
  "Delegação e controle de políticas de grupo, apoiando administração organizada e governança técnica.": "Delegation and control of Group Policies, supporting organized administration and technical governance.",
  "Cliente Windows integrado ao domínio, validando a estrutura de autenticação centralizada.": "Windows client integrated into the domain, validating the centralized authentication structure."
};

const enToPt = Object.fromEntries(Object.entries(ptToEn).map(([pt, en]) => [en, pt]));
let currentLanguage = DEFAULT_LANGUAGE;
let currentTheme = DEFAULT_THEME;

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function getStoredValue(key, allowedValues, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return allowedValues.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function storeValue(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // The site remains functional when storage is unavailable.
  }
}

function translateTextNodes(language) {
  const dictionary = language === "en-US" ? ptToEn : enToPt;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;
    if (!parent || ["SCRIPT", "STYLE", "SVG", "PATH"].includes(parent.tagName)) continue;

    const normalized = normalizeText(node.nodeValue || "");
    const translated = dictionary[normalized];
    if (!translated) continue;

    const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
    const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translated}${trailing}`;

    if (parent.childNodes.length === 1 && !parent.dataset.i18n) {
      parent.dataset.i18n = normalized;
    }
  }
}

function translateAttributes(language) {
  const dictionary = language === "en-US" ? ptToEn : enToPt;

  document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
    ["aria-label", "alt", "title"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      const translated = value ? dictionary[normalizeText(value)] : null;
      if (translated) element.setAttribute(attribute, translated);
    });
  });
}

function applyKeyedTranslations(language) {
  const languageDictionary = translations[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = languageDictionary[key]
      || (language === "en-US" ? ptToEn[key] : key);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const value = languageDictionary[element.dataset.i18nTitle];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-meta-description]").forEach((element) => {
    const value = languageDictionary[element.dataset.i18nMetaDescription];
    if (value) element.setAttribute("content", value);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = languageDictionary[element.dataset.i18nAriaLabel];
    if (value) element.setAttribute("aria-label", value);
  });
}

function applyLanguage(language) {
  currentLanguage = language === "en-US" ? "en-US" : "pt-BR";
  document.documentElement.lang = currentLanguage;
  translateTextNodes(currentLanguage);
  translateAttributes(currentLanguage);
  applyKeyedTranslations(currentLanguage);
  updateControlLabels();
  updateGalleryLabels();
}

function applyTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = currentTheme;
  updateControlLabels();
}

function updateControlLabels() {
  const isEnglish = currentLanguage === "en-US";
  const isDark = currentTheme === "dark";

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.textContent = isEnglish ? "PT" : "EN";
    button.setAttribute("aria-label", isEnglish ? "Switch language to Portuguese" : "Alternar idioma para inglês");
  });

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.textContent = isDark ? "☀" : "☾";
    const label = isEnglish
      ? (isDark ? "Enable light mode" : "Enable dark mode")
      : (isDark ? "Ativar modo claro" : "Ativar modo escuro");
    button.setAttribute("aria-label", label);
  });

  document.querySelectorAll(".menu-toggle").forEach((button) => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-label", isEnglish
      ? (isOpen ? "Close navigation" : "Open navigation")
      : (isOpen ? "Fechar navegação" : "Abrir navegação"));
  });
}

function initLanguageToggle() {
  currentLanguage = getStoredValue(LANGUAGE_KEY, ["pt-BR", "en-US"], DEFAULT_LANGUAGE);
  applyLanguage(currentLanguage);

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = currentLanguage === "pt-BR" ? "en-US" : "pt-BR";
      storeValue(LANGUAGE_KEY, nextLanguage);
      applyLanguage(nextLanguage);
    });
  });
}

function initThemeToggle() {
  currentTheme = getStoredValue(THEME_KEY, ["light", "dark"], DEFAULT_THEME);
  applyTheme(currentTheme);

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      storeValue(THEME_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  });
}

function initMenu() {
  const menuButton = document.querySelector(".menu-toggle");
  const menuLinks = document.querySelector(".topnav__links");

  if (!menuButton || !menuLinks) return;

  menuButton.addEventListener("click", () => {
    const isOpen = menuLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    updateControlLabels();
  });
}

function initSectionHighlight() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".topnav__links a[href^='#']")];

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", active);
      });
    });
  }, { rootMargin: "-40% 0px -45% 0px", threshold: 0.01 });

  sections.forEach((section) => observer.observe(section));
}

function waitForGalleryImage(image) {
  return new Promise((resolve) => {
    if (!image) {
      resolve(false);
      return;
    }

    if (image.complete) {
      resolve(image.naturalWidth > 0);
      return;
    }

    image.addEventListener("load", () => resolve(image.naturalWidth > 0), { once: true });
    image.addEventListener("error", () => resolve(false), { once: true });
  });
}

function updateGalleryLabels() {
  const isEnglish = currentLanguage === "en-US";
  document.querySelectorAll(".gallery-dot").forEach((dot) => {
    const index = Number(dot.dataset.galleryIndex || "0") + 1;
    dot.setAttribute("aria-label", isEnglish ? `Go to image ${index}` : `Ir para imagem ${index}`);
  });

  document.querySelectorAll(".gallery-rail__button").forEach((button) => {
    const index = Number(button.dataset.galleryIndex || "0") + 1;
    const title = isEnglish && button.dataset.galleryTitleEn
      ? button.dataset.galleryTitleEn
      : button.dataset.galleryTitle || `${isEnglish ? "Image" : "Imagem"} ${index}`;
    button.dataset.galleryLabel = title;
    button.textContent = title;
    button.setAttribute("aria-label", isEnglish ? `Show ${title}` : `Exibir ${title}`);
    button.setAttribute("title", title);
  });
}

function getGallerySlideTitle(slide, index, language = currentLanguage) {
  const fallback = language === "en-US" ? `Image ${index + 1}` : `Imagem ${index + 1}`;
  return language === "en-US" && slide.dataset.galleryTitleEn
    ? slide.dataset.galleryTitleEn
    : slide.dataset.galleryTitle || fallback;
}

function getGalleryGroupTitle(group, language = currentLanguage) {
  return language === "en-US" && group.titleEn ? group.titleEn : group.title;
}

function revealRailTemporarily(rail) {
  if (!rail) return;
  rail.classList.add("is-open");
  window.clearTimeout(rail._hideTimer);
  rail._hideTimer = window.setTimeout(() => {
    rail.classList.remove("is-open");
  }, 2600);
}

function initAmbientNetwork() {
  if (document.querySelector(".ambient-network")) return;

  const canvas = document.createElement("canvas");
  canvas.className = "ambient-network";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    canvas.remove();
    return;
  }

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = { x: 0, y: 0, active: false };
  let width = 0;
  let height = 0;
  let dpr = 1;
  let points = [];
  let animationId = 0;
  let scrollInfluence = window.scrollY || 0;
  let lastFrame = 0;

  function getPointCount() {
    if (width < 560) return 22;
    if (width < 960) return 36;
    return 52;
  }

  function getColors() {
    const isDark = document.documentElement.dataset.theme === "dark";
    return isDark
      ? {
          line: "rgba(210, 245, 238, 0.16)",
          point: "rgba(120, 214, 201, 0.42)",
          accent: "rgba(244, 240, 232, 0.35)"
        }
      : {
          line: "rgba(12, 92, 85, 0.13)",
          point: "rgba(12, 92, 85, 0.28)",
          accent: "rgba(164, 101, 45, 0.22)"
        };
  }

  function createPoints() {
    const count = getPointCount();
    points = Array.from({ length: count }, (_, index) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.06 + Math.random() * 0.14;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: index % 7 === 0 ? 1.8 : 1.15 + Math.random() * 0.9,
        accent: index % 8 === 0
      };
    });
  }

  function resize() {
    width = window.innerWidth || document.documentElement.clientWidth || 1;
    height = window.innerHeight || document.documentElement.clientHeight || 1;
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.ceil(width * dpr);
    canvas.height = Math.ceil(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createPoints();
    draw(0, true);
  }

  function updatePoints(delta) {
    const scrollShift = (scrollInfluence % Math.max(height, 1)) * 0.0008;

    points.forEach((point) => {
      point.x += point.vx * delta;
      point.y += (point.vy + scrollShift) * delta;

      if (pointer.active) {
        const dx = point.x - pointer.x;
        const dy = point.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        const range = width < 720 ? 95 : 135;

        if (distance > 0 && distance < range) {
          const force = (1 - distance / range) * 0.22;
          point.x += (dx / distance) * force * delta;
          point.y += (dy / distance) * force * delta;
        }
      }

      if (point.x < -20) point.x = width + 20;
      if (point.x > width + 20) point.x = -20;
      if (point.y < -20) point.y = height + 20;
      if (point.y > height + 20) point.y = -20;
    });
  }

  function drawConnections(colors) {
    const maxDistance = width < 720 ? 118 : 155;

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const a = points[i];
        const b = points[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.hypot(dx, dy);
        if (distance > maxDistance) continue;

        ctx.globalAlpha = (1 - distance / maxDistance) * 0.72;
        ctx.strokeStyle = colors.line;
        ctx.lineWidth = 0.65;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    ctx.globalAlpha = 1;
  }

  function drawPoints(colors) {
    points.forEach((point) => {
      ctx.fillStyle = point.accent ? colors.accent : colors.point;
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function draw(timestamp = 0, staticFrame = false) {
    const delta = Math.min((timestamp - lastFrame) / 16.67 || 1, 2.4);
    lastFrame = timestamp;

    if (!staticFrame && !motionQuery.matches) updatePoints(delta);

    ctx.clearRect(0, 0, width, height);
    const colors = getColors();
    drawConnections(colors);
    drawPoints(colors);
  }

  function animate(timestamp) {
    draw(timestamp);
    animationId = window.requestAnimationFrame(animate);
  }

  function start() {
    if (motionQuery.matches || animationId || document.hidden) return;
    lastFrame = performance.now();
    animationId = window.requestAnimationFrame(animate);
  }

  function stop() {
    if (!animationId) return;
    window.cancelAnimationFrame(animationId);
    animationId = 0;
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  }, { passive: true });
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  }, { passive: true });
  window.addEventListener("pointercancel", () => {
    pointer.active = false;
  }, { passive: true });
  window.addEventListener("scroll", () => {
    scrollInfluence = window.scrollY || 0;
  }, { passive: true });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else {
      draw(0, true);
      start();
    }
  });

  motionQuery.addEventListener?.("change", () => {
    stop();
    draw(0, true);
    start();
  });

  resize();
  draw(0, true);
  start();
}

async function initCaseGalleries() {
  const gallerySections = [...document.querySelectorAll(".case-gallery-section")];
  if (!gallerySections.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gallerySections.forEach((section) => {
    if (section.dataset.galleryActive !== "true") section.classList.add("is-hidden");
  });

  const activeSections = gallerySections.filter((section) => section.dataset.galleryActive === "true");

  await Promise.all(activeSections.map(async (section) => {
    const gallery = section.querySelector("[data-gallery]");
    const track = section.querySelector(".gallery-track");
    const controls = section.querySelector(".gallery-controls");
    const previousButton = section.querySelector("[data-gallery-prev]");
    const nextButton = section.querySelector("[data-gallery-next]");
    const dotsContainer = section.querySelector("[data-gallery-dots]");
    const railContainer = section.dataset.galleryLayout === "with-rail"
      ? section.querySelector("[data-gallery-rail]")
      : null;
    const railElement = railContainer?.closest(".gallery-rail") || null;
    const slides = [...section.querySelectorAll(".gallery-slide")];

    if (!gallery || !track || !slides.length) {
      section.classList.add("is-hidden");
      return;
    }

    const slideResults = await Promise.all(slides.map(async (slide) => ({
      slide,
      isValid: await waitForGalleryImage(slide.querySelector("img"))
    })));

    slideResults.forEach(({ slide, isValid }) => {
      if (!isValid) slide.remove();
    });

    const validSlides = slideResults.filter(({ isValid }) => isValid).map(({ slide }) => slide);

    if (!validSlides.length) {
      section.classList.add("is-hidden");
      section.classList.remove("is-ready");
      return;
    }

    section.classList.remove("is-hidden");
    section.classList.add("is-ready");

    let activeIndex = 0;
    let autoplayId = null;
    let railButtons = [];

    if (railContainer) {
      railContainer.textContent = "";
      const groups = [];
      validSlides.forEach((slide, index) => {
        const key = slide.dataset.galleryGroup || `slide-${index}`;
        if (groups.some((group) => group.key === key)) return;

        const title = slide.dataset.galleryGroupTitle || slide.dataset.galleryTitle || `Imagem ${index + 1}`;
        const titleEn = slide.dataset.galleryGroupTitleEn || slide.dataset.galleryTitleEn || title;
        groups.push({ key, title, titleEn, firstSlideIndex: index });
      });

      railButtons = groups.map((group) => {
        const title = getGalleryGroupTitle(group);
        const button = document.createElement("button");
        button.className = "gallery-rail__button";
        button.type = "button";
        button.dataset.galleryGroup = group.key;
        button.dataset.galleryIndex = String(group.firstSlideIndex);
        button.dataset.galleryTitle = group.title;
        button.dataset.galleryTitleEn = group.titleEn;
        button.dataset.galleryLabel = title;
        button.textContent = title;
        button.setAttribute("aria-label", currentLanguage === "en-US" ? `Show ${title}` : `Exibir ${title}`);
        button.setAttribute("title", title);
        button.addEventListener("click", () => {
          showSlide(group.firstSlideIndex);
          restartAutoplay();
          revealRailTemporarily(railElement);
        });
        railContainer.appendChild(button);
        return button;
      });
    }

    if (validSlides.length === 1) {
      validSlides[0].classList.add("is-active");
      railButtons[0]?.classList.add("is-active");
      railButtons[0]?.setAttribute("aria-current", "true");
      controls?.classList.add("is-hidden");
      updateGalleryLabels();
      return;
    }

    controls?.classList.remove("is-hidden");
    if (dotsContainer) dotsContainer.textContent = "";

    const dots = validSlides.map((_, index) => {
      const dot = document.createElement("button");
      dot.className = "gallery-dot";
      dot.type = "button";
      dot.dataset.galleryIndex = String(index);
      dot.addEventListener("click", () => {
        showSlide(index);
        restartAutoplay();
      });
      dotsContainer?.appendChild(dot);
      return dot;
    });

    function showSlide(nextIndex) {
      activeIndex = (nextIndex + validSlides.length) % validSlides.length;
      validSlides.forEach((slide, index) => slide.classList.toggle("is-active", index === activeIndex));
      dots.forEach((dot, index) => {
        const isActive = index === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
      const activeGroup = validSlides[activeIndex]?.dataset.galleryGroup || `slide-${activeIndex}`;
      railButtons.forEach((button) => {
        const isActive = button.dataset.galleryGroup === activeGroup;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-current", isActive ? "true" : "false");
      });
    }

    function stopAutoplay() {
      if (!autoplayId) return;
      window.clearInterval(autoplayId);
      autoplayId = null;
    }

    function startAutoplay() {
      if (prefersReducedMotion || autoplayId) return;
      autoplayId = window.setInterval(() => showSlide(activeIndex + 1), 5000);
    }

    function restartAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    previousButton?.addEventListener("click", () => {
      showSlide(activeIndex - 1);
      restartAutoplay();
    });

    nextButton?.addEventListener("click", () => {
      showSlide(activeIndex + 1);
      restartAutoplay();
    });

    gallery.addEventListener("mouseenter", stopAutoplay);
    gallery.addEventListener("mouseleave", startAutoplay);
    gallery.addEventListener("focusin", stopAutoplay);
    gallery.addEventListener("focusout", startAutoplay);

    showSlide(0);
    updateGalleryLabels();
    startAutoplay();
  }));
}

function initSite() {
  initThemeToggle();
  initAmbientNetwork();
  initLanguageToggle();
  initMenu();
  initSectionHighlight();
  initCaseGalleries();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSite, { once: true });
} else {
  initSite();
}
