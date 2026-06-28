const LANGUAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE = "pt-BR";
const DEFAULT_THEME = "dark";

const translations = {
  "pt-BR": {
    "home.title": "Portfólio Técnico - Infraestrutura, Automação e Desenvolvimento de Sistemas",
    "home.description": "Projetos técnicos em infraestrutura de TI, automação operacional, desenvolvimento de sistemas, integração de soluções, observabilidade e operações de suporte.",
    "cases.title": "Cases técnicos aplicados",
    "cases.description": "Projetos técnicos em infraestrutura de TI, automação operacional, desenvolvimento de sistemas, integração de soluções, observabilidade e operações de suporte.",
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
    "telegram.description": "Bot e automação em Python com menus, handlers e fluxo conversacional organizado.",
    "humhub.title": "HumHub Self-hosting",
    "humhub.description": "Self-hosting de aplicação web em stack LAMP.",
    "website.title": "Desenvolvimento Web e Presença Digital",
    "website.description": "Estruturação de interfaces web, páginas públicas e ativos digitais com foco em organização visual, responsividade, publicação e evolução técnica.",
    "nav.start": "Início",
    "nav.overview": "Apresentação",
    "nav.areas": "Áreas",
    "nav.projects": "Projetos",
    "nav.studies": "Estudos Técnicos",
    "nav.tracks": "Trilhas",
    "controls.preferences": "Preferências do site",
    "hero.linkedin": "LinkedIn",
    "hero.linkedin.aria": "Acessar perfil profissional no LinkedIn",
    "hero.viewProjects": "Ver projetos",
    "hero.viewCases": "Ver todos os cases",
    "linkedin.aria": "Acessar perfil profissional no LinkedIn",
    "footer.github": "Acessar perfil profissional no GitHub",
    "case.githubDoc": "Ver documentação do case no GitHub",
    "case.backToCases": "Voltar aos cases",
    "case.backToHome": "Voltar à página inicial",
    "gallery.title": "Capturas",
    "gallery.description": "Capturas e registros visuais utilizados para contextualizar a arquitetura, o fluxo e os resultados do projeto.",
    "gallery.previous": "Imagem anterior",
    "gallery.next": "Próxima imagem",
    "lightbox.close": "Fechar imagem ampliada",
    "lightbox.previous": "Imagem anterior",
    "lightbox.next": "Próxima imagem",
    "lightbox.label": "Visualização ampliada da imagem",
    "backToTop.label": "Voltar ao topo",
    "language.switchToEnglish": "Alternar idioma para inglês",
    "language.switchToPortuguese": "Alternar idioma para português"
  },
  "en-US": {
    "home.title": "Technical Portfolio - Infrastructure, Automation and Systems Development",
    "home.description": "Technical projects in IT infrastructure, operational automation, systems development, solution integration, observability and support operations.",
    "cases.title": "Applied Technical Cases",
    "cases.description": "Technical projects in IT infrastructure, operational automation, systems development, solution integration, observability and support operations.",
    "extensions.title": "Browser Extensions",
    "extensions.description": "Systems development through browser extensions focused on visual privacy and local productivity.",
    "wsl.title": "WSL2, Ubuntu and Docker Lab",
    "wsl.description": "Technical lab for running Linux services on Windows with WSL2, Ubuntu and Docker.",
    "support.title": "Technical Support Program",
    "support.description": "Support automation through a desktop application that centralizes Windows support routines, tools and operational scripts.",
    "process.title": "Process Control and Reporting System",
    "process.description": "Process automation with a relational database, Python scripts and reporting.",
    "windows.title": "Corporate Windows Server Environment",
    "windows.description": "Corporate Microsoft infrastructure with domain services, networking and technical governance.",
    "chatwoot.title": "Chatwoot with AI and Omnichannel Support",
    "chatwoot.description": "Omnichannel support architecture with channel centralization, response automation and auxiliary services.",
    "observability.title": "Observability with Zabbix and Grafana",
    "observability.description": "Observability through monitoring, dashboards, alerts and notification workflows using Zabbix and Grafana.",
    "telegram.title": "Telegram Bot",
    "telegram.description": "Bot and automation in Python with menus, handlers and an organized conversational flow.",
    "humhub.title": "HumHub Self-hosting",
    "humhub.description": "Self-hosting a web application on a LAMP stack.",
    "website.title": "Web Development and Digital Presence",
    "website.description": "Structuring web interfaces, public pages and digital assets with a focus on visual organization, responsiveness, publishing and technical evolution.",
    "nav.start": "Home",
    "nav.overview": "Overview",
    "nav.areas": "Areas",
    "nav.projects": "Projects",
    "nav.studies": "Technical Studies",
    "nav.tracks": "Tracks",
    "controls.preferences": "Site preferences",
    "hero.linkedin": "LinkedIn",
    "hero.linkedin.aria": "Open professional LinkedIn profile",
    "hero.viewProjects": "View projects",
    "hero.viewCases": "View all cases",
    "linkedin.aria": "Open professional LinkedIn profile",
    "footer.github": "Open professional GitHub profile",
    "case.githubDoc": "View case documentation on GitHub",
    "case.backToCases": "Back to cases",
    "case.backToHome": "Back to home",
    "gallery.title": "Screenshots",
    "gallery.description": "Screenshots and visual records used to contextualize the architecture, flow and results of the project.",
    "gallery.previous": "Previous image",
    "gallery.next": "Next image",
    "lightbox.close": "Close enlarged image",
    "lightbox.previous": "Previous image",
    "lightbox.next": "Next image",
    "lightbox.label": "Enlarged image view",
    "backToTop.label": "Back to top",
    "language.switchToEnglish": "Switch language to English",
    "language.switchToPortuguese": "Switch language to Portuguese"
  }
};

const ptToEn = {
  "Portfólio Técnico - Infraestrutura, Automação e Desenvolvimento de Sistemas": "Technical Portfolio - Infrastructure, Automation and Systems Development",
  "Portfólio Técnico": "Technical Portfolio",
  "Infraestrutura, Automação e Desenvolvimento de Sistemas": "Infrastructure, Automation and Systems Development",
  "Projetos técnicos em infraestrutura de TI, automação operacional, desenvolvimento de sistemas, integração de soluções, observabilidade e suporte técnico.": "Technical projects in IT infrastructure, operational automation, systems development, solution integration, observability and technical support.",
  "Projetos técnicos em infraestrutura de TI, automação operacional, desenvolvimento de sistemas, integração de soluções, observabilidade e operações de suporte.": "Technical projects in IT infrastructure, operational automation, systems development, solution integration, observability and support operations.",
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
  "Este portfólio reúne projetos, estudos aplicados e arquiteturas técnicas construídas para demonstrar domínio prático em infraestrutura de TI, automação operacional, desenvolvimento de sistemas, integração de soluções, observabilidade e operações de suporte.": "This portfolio brings together projects, applied studies and technical architectures built to demonstrate practical expertise in IT infrastructure, operational automation, systems development, solution integration, observability and support operations.",
  "Áreas de Atuação": "Areas of Practice",
  "Frentes técnicas": "Technical areas",
  "Infraestrutura Microsoft": "Microsoft Infrastructure",
  "Windows Server, serviços de domínio, rede, políticas e administração centralizada.": "Windows Server, domain services, networking, policies and centralized administration.",
  "Serviços de Domínio e Governança": "Domain Services and Governance",
  "Active Directory, DNS, DHCP, GPO, autenticação e padronização técnica.": "Active Directory, DNS, DHCP, GPO, authentication and technical standardization.",
  "Linux, Ubuntu e Containers": "Linux, Ubuntu and Containers",
  "Ambientes Linux, containers, serviços locais, troubleshooting e implantação técnica.": "Linux environments, containers, local services, troubleshooting and technical deployment.",
  "Scripting e Automação Operacional": "Scripting and Operational Automation",
  "Scripts, rotinas técnicas, automação de suporte e padronização de processos.": "Scripts, technical routines, support automation and process standardization.",
  "Observabilidade e Monitoramento": "Observability and Monitoring",
  "Métricas, dashboards, alertas, eventos e acompanhamento operacional.": "Metrics, dashboards, alerts, events and operational monitoring.",
  "Integração de Sistemas e APIs": "Systems Integration and APIs",
  "Chatwoot, bots, mensageria, webhooks, APIs e fluxos de integração.": "Chatwoot, bots, messaging, webhooks, APIs and integration flows.",
  "Desenvolvimento de Sistemas e Extensões": "Systems and Extension Development",
  "Interfaces, extensões, lógica de aplicação, automações e soluções próprias.": "Interfaces, extensions, application logic, automations and custom solutions.",
  "Automação de Dados e Relatórios": "Data and Reporting Automation",
  "MySQL, SQL, Excel, VBA, relatórios, estruturação e organização de dados.": "MySQL, SQL, Excel, VBA, reports, structuring and data organization.",
  "Área: Infraestrutura Microsoft": "Area: Microsoft Infrastructure",
  "Área: Observabilidade e Monitoramento": "Area: Observability and Monitoring",
  "Área: Scripting e Automação Operacional": "Area: Scripting and Operational Automation",
  "Área: Desenvolvimento de Sistemas e Extensões": "Area: Systems and Extension Development",
  "Área: Integração de Sistemas e APIs": "Area: Systems Integration and APIs",
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
  "Aplicação desktop para centralizar rotinas de suporte Windows com interface Python e automação local baseada em scripts.": "Desktop application that centralizes Windows support routines, tools and operational scripts through a Python interface.",
  "Automação de Processos": "Process Automation",
  "Sistema de Controle de Processos e Relatórios": "Process Control and Reporting System",
  "Automação administrativa com modelagem relacional, scripts Python, consultas estruturadas e apoio adicional em VBA e Excel.": "Administrative automation with relational modeling, Python scripts, structured queries and additional VBA and Excel support.",
  "Infraestrutura Corporativa": "Corporate Infrastructure",
  "Ambiente Windows Server Corporativo": "Corporate Windows Server Environment",
  "Arquitetura narrada de infraestrutura Microsoft com domínio, políticas, serviços de rede e organização técnica do ambiente.": "Microsoft infrastructure architecture covering domain services, policies, networking and technical environment organization.",
  "Chatwoot com IA e Atendimento Omnichannel": "Chatwoot with AI and Omnichannel Support",
  "Arquitetura documentada de atendimento omnichannel com centralização de canais, automação de resposta e integração entre serviços.": "Documented omnichannel support architecture with channel centralization, response automation and service integration.",
  "Observabilidade": "Observability",
  "Trilha de monitoramento, dashboards e alertas com integração entre observabilidade, mensageria e rotina operacional.": "Monitoring, dashboards and alerts integrated with observability, notification workflows and operational routines.",
  "Scripts de apoio": "Support scripts",
  "Zabbix | Grafana | Telegram | Scripts de apoio": "Zabbix | Grafana | Telegram | Support scripts",
  "Projetos complementares de aplicação prática": "Complementary projects with practical application",
  "Bot e Automação": "Bot and Automation",
  "Bot em Python com menus, handlers e fluxo conversacional organizado para automação em canal de mensageria.": "Python bot with menus, handlers and an organized conversational flow for messaging automation.",
  "Implantação de aplicação web self-hosted em stack LAMP com foco em organização técnica do ambiente.": "Deployment of a self-hosted web application on a LAMP stack with a focus on technical environment organization.",
  "Desenvolvimento Web": "Web Development",
  "Desenvolvimento Web e Presença Digital": "Web Development and Digital Presence",
  "Estruturação de interfaces web, páginas públicas e ativos digitais com foco em organização visual, responsividade, publicação e evolução técnica.": "Structuring web interfaces, public pages and digital assets with a focus on visual organization, responsiveness, publishing and technical evolution.",
  "HTML | CSS | JavaScript | UI responsiva | Publicação web": "HTML | CSS | JavaScript | Responsive UI | Web publishing",
  "Trilhas Técnicas": "Technical Tracks",
  "Competências técnicas demonstradas": "Demonstrated technical skills",
  "Governança técnica": "Technical governance",
  "Linux": "Linux",
  "Ubuntu": "Ubuntu",
  "Containers": "Containers",
  "Serviços locais": "Local services",
  "Scripts": "Scripts",
  "Padronização": "Standardization",
  "Eventos": "Events",
  "Webhooks": "Webhooks",
  "APIs": "APIs",
  "Fluxos de integração": "Integration flows",
  "Interfaces": "Interfaces",
  "Soluções próprias": "Custom solutions",
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
  "Área: Desenvolvimento Web": "Area: Web Development",
  "Voltar aos cases": "Back to cases",
  "Voltar à página inicial": "Back to home",
  "Visão Geral": "Overview",
  "Desafio Técnico": "Technical Challenge",
  "Solução Desenvolvida": "Developed Solution",
  "Arquitetura / Fluxo": "Architecture / Flow",
  "Capturas": "Screenshots",
  "Capturas e registros visuais utilizados para contextualizar a arquitetura, o fluxo e os resultados do projeto.": "Screenshots and visual records used to contextualize the architecture, flow and results of the project.",
  "Entregas Técnicas": "Technical Deliverables",
  "Competências Demonstradas": "Demonstrated Skills",
  "Resultado Técnico": "Technical Result",
  "Este case foi reorganizado para apresentação pública, preservando a arquitetura, as decisões técnicas e o valor demonstrativo da solução. Informações sensíveis, identificadores reais e artefatos operacionais não fazem parte da versão pública.": "This case was organized for public presentation while preserving the architecture, technical decisions and demonstrative value of the solution. Sensitive information, real identifiers and operational artifacts are not included in the public version.",
  "Coleção de extensões Chrome com foco em privacidade visual, produtividade local e organização da navegação.": "A collection of Chrome extensions focused on visual privacy, local productivity and browsing organization.",
  "Este projeto demonstra a construção de extensões de navegador voltadas a problemas concretos de uso diário, como proteção visual de interfaces, organização de fluxo e ganho de produtividade local sem dependência de backend.": "This project demonstrates browser extensions designed for practical daily-use needs, including visual interface protection, workflow organization and local productivity without backend dependencies.",
  "Interfaces web frequentemente expõem informações em tela, acumulam excesso de abas e carecem de controles diretos para ajustes locais de uso. O desafio era criar soluções reutilizáveis e instaláveis diretamente no navegador.": "Web interfaces often expose on-screen information, accumulate excessive tabs and lack direct controls for local adjustments. The challenge was to create reusable solutions that can be installed directly in the browser.",
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
  "Orquestração inicial com Docker Compose.": "Initial orchestration with Docker Compose.",
  "Troubleshooting de instalação e dependências.": "Installation and dependency troubleshooting.",
  "Configuração de serviços locais.": "Configuration of local services.",
  "Documentação técnica orientada a laboratório.": "Lab-oriented technical documentation.",
  "O material demonstra capacidade de preparar e manter um laboratório funcional com containers em WSL2, destacando configuração, validação e diagnóstico técnico.": "The material demonstrates the ability to prepare and maintain a functional container lab on WSL2, covering configuration, validation and technical diagnostics.",
  "O projeto demonstra a organização de um terminal de suporte para agrupar tarefas recorrentes de operação Windows em uma interface única, reduzindo dispersão entre scripts, atalhos e procedimentos manuais.": "This case presents a support console designed to centralize recurring Windows support routines in a single interface, reducing fragmentation across scripts, shortcuts and manual procedures.",
  "Rotinas de suporte estavam espalhadas entre múltiplos recursos locais, sem padronização clara para operadores diferentes. Isso cria retrabalho, aumenta o tempo de execução e dificulta distribuição controlada.": "Support routines were distributed across multiple local resources without a clear standard for different operators, increasing rework, execution time and operational inconsistency.",
  "A solução combina launcher em Python com interface Tkinter, scripts PowerShell organizados por categoria, recursos auxiliares e fluxo de empacotamento para distribuição controlada. A publicação foi mantida em formato técnico, priorizando a arquitetura do fluxo.": "The solution combines a Python launcher with a Tkinter interface, PowerShell scripts organized by category, supporting resources and a controlled packaging workflow for distribution.",
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
  "Área de recursos e utilidades técnicas para suporte Windows, manutenção local e apoio à operação.": "Technical resources and utilities area for Windows support, local maintenance and operational support.",
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
  "O material evidencia uma abordagem prática para transformar rotinas repetitivas de suporte em um fluxo centralizado, reutilizável e mais previsível.": "The case structures a reusable support workflow that centralizes routines, scripts and operational resources, improving execution standardization and providing a controlled foundation for Windows support automation.",
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
  "Arquitetura de atendimento omnichannel com centralização de canais, automação de resposta e serviços auxiliares.": "Omnichannel support architecture with channel centralization, response automation and auxiliary services.",
  "O case apresenta uma arquitetura de atendimento capaz de concentrar conversas, organizar regras de triagem e sustentar automação em um fluxo omnichannel de apresentação pública.": "This case presents a support architecture designed to centralize conversations, organize triage rules and support automation within an omnichannel workflow.",
  "O desafio era estruturar um fluxo de atendimento com múltiplos canais de entrada, regras de resposta e separação clara entre a plataforma de atendimento e a camada de automação.": "The challenge was to structure a support flow with multiple inbound channels, response rules and a clear separation between the support platform and the automation layer.",
  "A solução combina Chatwoot como núcleo operacional, canais externos de mensageria, camada de eventos, categorização de mensagens e um serviço auxiliar em Flask para decisões automatizadas. A publicação foi mantida em nível técnico para preservar segurança operacional.": "The solution combines Chatwoot as the operational core, external messaging channels, an event layer, message categorization and an auxiliary Flask service for automated decisions. The public version remains focused on the technical architecture.",
  "Canais de entrada": "Inbound channels",
  "Eventos de integração": "Integration events",
  "Serviço auxiliar": "Auxiliary service",
  "Regras e categorização": "Rules and categorization",
  "Resposta assistida": "Assisted response",
  "Recebimento centralizado de mensagens.": "Centralized message intake.",
  "Integração com múltiplos canais.": "Integration with multiple channels.",
  "Camada de regras para automação de resposta.": "Rules layer for response automation.",
  "Separação entre atendimento e serviço auxiliar.": "Separation between the support platform and the auxiliary service.",
  "Estrutura técnica preparada para evolução controlada.": "Technical structure prepared for controlled evolution.",
  "Desenho de integração omnichannel.": "Omnichannel integration design.",
  "Modelagem de fluxos conversacionais.": "Conversational workflow modeling.",
  "Arquitetura de serviços web em containers.": "Containerized web service architecture.",
  "Integração entre plataforma de atendimento e automação.": "Integration between the support platform and automation.",
  "Curadoria técnica para publicação pública segura.": "Technical curation for responsible public presentation.",
  "O material demonstra entendimento consistente de integração omnichannel e automação de resposta, preservando a segurança da publicação sem perder clareza técnica.": "The case consolidates an integrated omnichannel workflow with channel centralization, response automation, webhook-based integration and an auxiliary processing layer for technical support operations.",
  "Base técnica de monitoramento, dashboards e alertas apresentada em formato público seguro.": "Observability foundation with monitoring, dashboards, alerts and notification workflows presented in a responsible public format.",
  "O case consolida uma trilha de observabilidade com coleta, visualização e notificação, preservando apenas a camada técnica reutilizável da solução.": "This case consolidates an observability workflow with monitoring, visualization and notification layers, preserving the reusable technical structure of the solution for public presentation.",
  "O desafio era organizar monitoramento de hosts, criação de dashboards e regras de alerta em uma base coesa, capaz de apoiar operação técnica sem expor o ambiente monitorado.": "The challenge was to organize host monitoring, dashboard creation and alert rules into a cohesive structure capable of supporting technical operations without exposing the monitored environment.",
  "A solução combina Zabbix como plataforma de monitoramento, Grafana como camada de visualização e integrações auxiliares para notificação. A apresentação pública foi mantida em formato técnico e anonimizado.": "The solution combines Zabbix as the monitoring platform, Grafana as the visualization layer and auxiliary integrations for operational notifications. The public presentation remains technical, organized and anonymized.",
  "Hosts monitorados": "Monitored hosts",
  "Regras e triggers": "Rules and triggers",
  "Operação técnica": "Technical operations",
  "Dashboard de observabilidade com visão consolidada de monitoramento.": "Observability dashboard with a consolidated monitoring view.",
  "Fluxo de alertas e eventos para acompanhamento operacional.": "Alert and event workflow for operational monitoring.",
  "Integração entre coleta, visualização e notificação técnica.": "Integration across data collection, visualization and technical notifications.",
  "Cadastro e organização de hosts monitorados.": "Registration and organization of monitored hosts.",
  "Regras de alerta e notificação.": "Alert and notification rules.",
  "Dashboards para visualização de estado.": "Dashboards for status visualization.",
  "Integração com mensageria para avisos operacionais.": "Messaging integration for operational notification workflows.",
  "Scripts auxiliares de configuração e suporte.": "Supporting configuration and support scripts.",
  "Implantação de monitoramento.": "Monitoring implementation.",
  "Integração de camadas de observabilidade.": "Integration of observability layers.",
  "Configuração de alertas.": "Alert configuration.",
  "Documentação operacional.": "Operational documentation.",
  "Consolidação de dashboards e notificações.": "Consolidation of dashboards and notification workflows.",
  "O material comprova uma base prática de observabilidade com coleta, visualização e alerta, adequada para avaliação técnica e apresentação profissional.": "The case consolidates a reusable observability foundation with monitoring, dashboards, alerting and notification integration, supporting operational visibility, diagnostics and event response.",
  "Bot em Python com menus, handlers e fluxo conversacional para automação em canal Telegram.": "Python bot with menus, handlers and a conversational flow for Telegram automation.",
  "Projeto de automação conversacional com foco em estrutura de comandos, roteamento por botões e evolução incremental do fluxo.": "Conversational automation project focused on command structure, button-based routing and incremental workflow evolution.",
  "Era necessário construir um bot legível e expansível, capaz de oferecer menus e respostas organizadas sem aumentar a complexidade de manutenção.": "The goal was to build a readable and extensible bot capable of providing organized menus and responses without increasing maintenance complexity.",
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
  "Registro técnico de execução.": "Technical execution logging.",
  "Desenvolvimento de bot em Python.": "Bot development in Python.",
  "Modelagem de fluxo conversacional.": "Conversational workflow modeling.",
  "Uso de handlers e callbacks.": "Use of handlers and callbacks.",
  "Organização de comandos e respostas.": "Organization of commands and responses.",
  "O estudo demonstra uma base funcional para bots organizados, extensíveis e úteis em rotinas de automação no Telegram.": "The study demonstrates a functional foundation for organized, extensible bots used in Telegram automation routines.",
  "Implantação de aplicação web self-hosted em stack LAMP com foco em organização técnica do ambiente.": "Deployment of a self-hosted web application on a LAMP stack with a focus on technical environment organization.",
  "Projeto de implantação de aplicação web self-hosted, organizado como laboratório técnico de stack LAMP com foco em clareza técnica e operação controlada.": "Self-hosted web application deployment organized as a LAMP stack technical lab focused on clarity and controlled operations.",
  "O cenário técnico envolve disponibilizar uma aplicação web com servidor, camada PHP, banco relacional e rotinas de configuração e manutenção operacional.": "The technical scenario involves delivering a web application with a web server, PHP layer, relational database and operational configuration and maintenance routines.",
  "O roteiro técnico foi organizado em atualização do sistema, instalação de Apache e PHP, configuração de extensões, preparação do MariaDB, criação de banco e publicação da aplicação com diretório web e parâmetros do servidor.": "The technical workflow covers system updates, Apache and PHP installation, extension configuration, MariaDB preparation, database creation and application publishing with defined web directory and server parameters.",
  "Cliente web": "Web client",
  "Aplicação HumHub": "HumHub application",
  "Manutenção operacional": "Operational maintenance",
  "Preparação de stack LAMP.": "LAMP stack preparation.",
  "Configuração de aplicação social self-hosted.": "Configuration of a self-hosted social application.",
  "Organização de diretório web e permissões.": "Web directory and permission organization.",
  "Base para manutenção e operação local.": "Foundation for local maintenance and operations.",
  "Self-hosting de aplicação web.": "Web application self-hosting.",
  "Configuração de Apache e PHP.": "Apache and PHP configuration.",
  "Preparação de banco de dados.": "Database preparation.",
  "Operação inicial de serviço Linux.": "Initial Linux service operations.",
  "O estudo demonstra capacidade de instalar e organizar uma aplicação web self-hosted em infraestrutura Linux, com valor de portfólio como estudo técnico de implantação.": "The study demonstrates the ability to install and organize a self-hosted web application on Linux infrastructure as a technical deployment project.",
  "Este case apresenta uma frente de capacidade em desenvolvimento web e presença digital, com foco na estruturação de interfaces públicas, organização visual de conteúdo, responsividade, navegação e publicação web.": "This case presents a web development and digital presence capability track focused on public-facing interfaces, visual content organization, responsive structure, navigation and web publishing.",
  "A proposta não é apresentar o portfólio como um projeto isolado, mas consolidar a capacidade de transformar conteúdo técnico e profissional em uma experiência web organizada, legível e evolutiva.": "The goal is not to present the portfolio as a standalone project, but to consolidate the ability to turn technical and professional content into an organized, readable and evolvable web experience.",
  "O desafio consiste em estruturar uma base de apresentação web que seja clara, responsiva, publicável e preparada para evolução, permitindo incorporar futuramente novos projetos, interfaces e aplicações desenvolvidas.": "The challenge is to structure a public web presentation base that is clear, responsive, publishable and prepared for future evolution through new projects, interfaces and digital assets.",
  "A frente exige atenção a hierarquia visual, semântica, navegação, responsividade, consistência de conteúdo e organização técnica para publicação pública.": "This track requires attention to visual hierarchy, semantics, navigation, responsiveness, content consistency and technical organization for public web publishing.",
  "Publicação web": "Web publishing",
  "Organização visual": "Visual organization",
  "A solução foi reorganizada como uma frente técnica de desenvolvimento web, contemplando estruturação de páginas, composição visual, navegação, organização de conteúdo público, adaptação responsiva e publicação em ambiente web.": "The solution is organized as a web development track covering page structure, visual composition, navigation, public content organization, responsive adaptation and web publishing.",
  "A abordagem prioriza clareza, manutenibilidade, separação entre conteúdo público e materiais privados, além de uma base preparada para expansão com novos projetos web.": "The approach prioritizes clarity, maintainability, separation between public content and private materials, and a foundation prepared for expansion with new web projects.",
  "Conteúdo profissional": "Professional content",
  "Estrutura de página": "Page structure",
  "Interface responsiva": "Responsive structure",
  "Evolução por projetos": "Project-based evolution",
  "A versão web possui estrutura preparada para capturas futuras, mantendo a apresentação pública limpa e objetiva.": "The web version has a structure prepared for future screenshots, keeping the public presentation clean and objective.",
  "Estruturação de páginas públicas e navegação.": "Structuring public pages and navigation.",
  "Organização visual de conteúdo profissional.": "Visual organization of professional content.",
  "Base responsiva para leitura em diferentes dispositivos.": "Responsive structure for reading across different devices.",
  "Separação entre conteúdo público e materiais privados.": "Separation between public content and private materials.",
  "Preparação para incorporação futura de projetos web.": "Preparation to incorporate future web projects and digital assets.",
  "Consolidação de presença digital como ativo profissional.": "Consolidation of digital presence as a professional asset.",
  "Desenvolvimento de interfaces web.": "Web interface development.",
  "Organização de conteúdo para publicação pública.": "Content organization for public publishing.",
  "Estruturação visual e responsiva.": "Visual and responsive structuring.",
  "Curadoria técnica de apresentação profissional.": "Technical curation of professional presentation.",
  "Publicação e manutenção de página web.": "Web page publishing and maintenance.",
  "Planejamento de evolução incremental de projetos.": "Planning incremental project evolution.",
  "A frente consolida uma base profissional de desenvolvimento web aplicada à criação de interfaces públicas, organização visual, responsividade, publicação e evolução incremental, servindo como ativo demonstrável de capacidade técnica para futuros projetos web.": "This track consolidates a professional web development foundation for public-facing interfaces, visual organization, responsiveness, publishing and incremental evolution, prepared to incorporate future web projects and digital assets.",
  "O case apresenta uma infraestrutura Microsoft, cobrindo autenticação centralizada, serviços de rede, políticas de grupo e serviços de apoio para clientes Windows.": "The case presents a Microsoft infrastructure covering centralized authentication, network services, Group Policies and supporting services for Windows clients.",
  "O ambiente foi reorganizado como narrativa técnica segura: rede controlada, promoção de servidor a controlador de domínio, configuração de DNS e DHCP, ingresso de clientes no domínio e aplicação de políticas via GPO, com serviços adicionais de apoio.": "The environment was organized as a secure technical narrative: controlled network, server promotion to domain controller, DNS and DHCP configuration, client domain join and Group Policy application, with additional supporting services.",
  "O material demonstra domínio de tarefas de infraestrutura Microsoft e capacidade de organizar a implantação em uma narrativa segura e coerente.": "The material demonstrates command of Microsoft infrastructure tasks and the ability to organize the implementation into a secure and coherent narrative.",
  "Painel de configurações da extensão com proteção geral, senha local, bloqueio por inatividade e ajuste personalizado da intensidade do borrão.": "Extension settings panel with general protection, local password, inactivity lock and custom blur intensity adjustment.",
  "Extensão de navegador para centralização de acessos, organização por categorias, favoritos, anotações, lembretes e gerenciamento local de credenciais.": "Browser extension for centralized access, category organization, favorites, notes, reminders and local credential management.",
  "Extensão Loki para atualização automática de páginas, controle de temporizadores por aba ou domínio e limpeza rápida de cache, cookies e dados locais do navegador.": "Loki extension for automatic page refresh, timer control by tab or domain and quick cleanup of cache, cookies and local browser data.",
  "Extensão de controle rápido para navegador, reunindo atalhos de teclado, bloqueio de abas por senha, botão flutuante, realce de texto e notas fixas na página.": "Quick browser control extension combining keyboard shortcuts, password-protected tab locking, a floating button, text highlighting and sticky notes on the page.",
  "Painel de configurações da extensão de privacidade para WhatsApp Web com opções de proteção, senha local, bloqueio automático e controle de intensidade do borrão": "Privacy extension settings panel for WhatsApp Web with protection options, local password, automatic lock and blur intensity control",
  "Interface de extensão de navegador para organização de sites, atalhos, categorias, favoritos, anotações, lembretes e gerenciamento de credenciais locais": "Browser extension interface for organizing sites, shortcuts, categories, favorites, notes, reminders and local credential management",
  "Interface da extensão Loki para atualização automática de abas, seleção de intervalo em segundos, minutos ou horas e limpeza de cache, cookies e armazenamento local": "Loki extension interface for automatic tab refresh, interval selection in seconds, minutes or hours and cleanup of cache, cookies and local storage",
  "Interface de extensão de navegador para controle rápido com atalhos de teclado, bloqueio de abas por senha, botão flutuante, realce de texto e notas fixas": "Browser extension interface for quick control with keyboard shortcuts, password-protected tab locking, a floating button, text highlighting and sticky notes",
  "Navegação por ilustração": "Illustration navigation",
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
  const directDictionary = language === "en-US" ? ptToEn : enToPt;

  function keyedValue(key) {
    return languageDictionary?.[key] || directDictionary[key] || (language === "pt-BR" ? key : null);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = keyedValue(key);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const value = keyedValue(element.dataset.i18nTitle);
    if (!value) return;

    if (element.tagName === "TITLE") {
      element.textContent = value;
    } else {
      element.setAttribute("title", value);
    }
  });

  document.querySelectorAll("[data-i18n-meta-description]").forEach((element) => {
    const value = keyedValue(element.dataset.i18nMetaDescription);
    if (value) element.setAttribute("content", value);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = keyedValue(element.dataset.i18nAriaLabel);
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = keyedValue(element.dataset.i18nAlt);
    if (value) element.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = keyedValue(element.dataset.i18nPlaceholder);
    if (value) element.setAttribute("placeholder", value);
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
  updateLightboxLabels();
}

function applyTheme() {
  currentTheme = DEFAULT_THEME;
  document.documentElement.dataset.theme = DEFAULT_THEME;
  updateControlLabels();
}

function initFixedTheme() {
  applyTheme();
}

function updateControlLabels() {
  const isEnglish = currentLanguage === "en-US";

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.textContent = isEnglish ? "PT" : "EN";
    button.setAttribute("aria-label", isEnglish
      ? getTranslation("language.switchToPortuguese")
      : getTranslation("language.switchToEnglish"));
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

function getTranslation(key) {
  return translations[currentLanguage]?.[key] || translations[DEFAULT_LANGUAGE]?.[key] || key;
}

function updateLightboxLabels() {
  const lightbox = document.querySelector("[data-lightbox]");
  if (!lightbox) return;

  lightbox.setAttribute("aria-label", getTranslation("lightbox.label"));
  lightbox.querySelector("[data-lightbox-close]")?.setAttribute("aria-label", getTranslation("lightbox.close"));
  lightbox.querySelector("[data-lightbox-prev]")?.setAttribute("aria-label", getTranslation("lightbox.previous"));
  lightbox.querySelector("[data-lightbox-next]")?.setAttribute("aria-label", getTranslation("lightbox.next"));
}

function initGalleryLightbox() {
  const galleryImages = [...document.querySelectorAll(".case-gallery .gallery-slide img")];
  if (!galleryImages.length) return;

  let lightbox = document.querySelector("[data-lightbox]");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";
    lightbox.dataset.lightbox = "";
    lightbox.hidden = true;
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.dataset.i18nAriaLabel = "lightbox.label";
    lightbox.innerHTML = `
      <button class="image-lightbox__close" type="button" data-lightbox-close data-i18n-aria-label="lightbox.close">×</button>
      <button class="image-lightbox__nav image-lightbox__nav--prev" type="button" data-lightbox-prev data-i18n-aria-label="lightbox.previous">‹</button>
      <figure class="image-lightbox__figure">
        <img class="image-lightbox__image" src="" alt="">
        <figcaption class="image-lightbox__caption"></figcaption>
      </figure>
      <button class="image-lightbox__nav image-lightbox__nav--next" type="button" data-lightbox-next data-i18n-aria-label="lightbox.next">›</button>
    `;
    document.body.appendChild(lightbox);
  }

  updateLightboxLabels();

  const image = lightbox.querySelector(".image-lightbox__image");
  const caption = lightbox.querySelector(".image-lightbox__caption");
  const closeButton = lightbox.querySelector("[data-lightbox-close]");
  const previousButton = lightbox.querySelector("[data-lightbox-prev]");
  const nextButton = lightbox.querySelector("[data-lightbox-next]");
  let activeItems = [];
  let activeIndex = 0;
  let previousFocus = null;

  function getGalleryItems(gallery) {
    return [...gallery.querySelectorAll(".gallery-slide")]
      .map((slide, index) => {
        const slideImage = slide.querySelector("img");
        if (!slideImage || !slideImage.complete || slideImage.naturalWidth <= 0) return null;

        return {
          image: slideImage,
          index,
          src: slideImage.currentSrc || slideImage.getAttribute("src") || "",
          alt: slideImage.getAttribute("alt") || "",
          caption: normalizeText(slide.querySelector("figcaption")?.textContent || "")
        };
      })
      .filter(Boolean);
  }

  function showLightboxImage(index) {
    if (!activeItems.length) return;

    activeIndex = (index + activeItems.length) % activeItems.length;
    const item = activeItems[activeIndex];
    image.setAttribute("src", item.src);
    image.setAttribute("alt", item.alt);
    caption.textContent = item.caption;

    const hasMultipleImages = activeItems.length > 1;
    previousButton.hidden = !hasMultipleImages;
    nextButton.hidden = !hasMultipleImages;
  }

  function closeLightbox() {
    if (lightbox.hidden) return;

    lightbox.hidden = true;
    lightbox.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
    document.dispatchEvent(new Event("portfolio:lightbox-toggle"));
    image.removeAttribute("src");
    image.setAttribute("alt", "");
    caption.textContent = "";
    activeItems = [];
    previousFocus?.focus?.();
    previousFocus = null;
  }

  function openLightbox(gallery, index) {
    activeItems = getGalleryItems(gallery);
    if (!activeItems.length) return;

    activeIndex = Math.max(0, Math.min(index, activeItems.length - 1));
    previousFocus = document.activeElement;
    showLightboxImage(activeIndex);
    lightbox.hidden = false;
    lightbox.classList.add("is-open");
    document.body.classList.add("lightbox-open");
    document.dispatchEvent(new Event("portfolio:lightbox-toggle"));
    closeButton.focus();
  }

  function showNextLightboxImage() {
    showLightboxImage(activeIndex + 1);
  }

  function showPreviousLightboxImage() {
    showLightboxImage(activeIndex - 1);
  }

  galleryImages.forEach((galleryImage) => {
    if (galleryImage.dataset.lightboxBound === "true") return;

    galleryImage.dataset.lightboxBound = "true";
    galleryImage.addEventListener("click", () => {
      const gallery = galleryImage.closest(".case-gallery");
      if (!gallery) return;

      const galleryItems = getGalleryItems(gallery);
      const clickedIndex = galleryItems.findIndex((item) => item.image === galleryImage);
      openLightbox(gallery, clickedIndex >= 0 ? clickedIndex : 0);
    });
  });

  if (lightbox.dataset.lightboxInitialized === "true") return;
  lightbox.dataset.lightboxInitialized = "true";

  closeButton.addEventListener("click", closeLightbox);
  previousButton.addEventListener("click", showPreviousLightboxImage);
  nextButton.addEventListener("click", showNextLightboxImage);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") showNextLightboxImage();
    if (event.key === "ArrowLeft") showPreviousLightboxImage();
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
  const existingCanvas = document.querySelector(".ambient-network");
  const canvas = existingCanvas || document.createElement("canvas");

  if (!existingCanvas) {
    canvas.className = "ambient-network";
    canvas.setAttribute("aria-hidden", "true");
    document.body.prepend(canvas);
  }

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
  let nodes = [];
  let animationId = 0;

  function getGap() {
    if (width < 520) return 80;
    if (width < 900) return 45;
    if (width < 1360) return 25;
    return 30;
  }

  function createNodes() {
    const gap = getGap();
    const columns = Math.ceil(width / gap) + 4;
    const rows = Math.ceil(height / gap) + 4;
    nodes = [];

    for (let row = -2; row < rows; row += 1) {
      for (let column = -2; column < columns; column += 1) {
        const seed = Math.sin((row + 1) * 12.9898 + (column + 1) * 78.233);
        const seedB = Math.cos((row + 1) * 4.898 + (column + 1) * 21.17);

        nodes.push({
          row,
          column,
          baseX: column * gap + seed * 18,
          baseY: row * gap + seedB * 10,
          phase: seed * Math.PI * 2,
          depth: 0.45 + Math.abs(seed) * 0.55,
          pulse: 0.55 + Math.abs(seedB) * 0.45
        });
      }
    }
  }

  function getNodePosition(node, time) {
    const motionTime = motionQuery.matches ? 0 : time;
    const waveField = Math.sin(node.column * 0.42 + motionTime * 0.00042 + node.phase)
      + Math.cos(node.row * 0.36 - motionTime * 0.00034 + node.phase * 0.7);
    const waveX = Math.sin(motionTime * 0.00032 + node.phase + node.row * 0.28);
    const waveY = Math.cos(motionTime * 0.0003 - node.phase + node.column * 0.31);
    let x = node.baseX + waveX * 13 * node.depth;
    let y = node.baseY + waveY * 5 * node.depth + waveField * 3;

    if (pointer.active) {
      const dx = x - pointer.x;
      const dy = y - pointer.y;
      const distance = Math.hypot(dx, dy);
      const range = width < 720 ? 150 : 220;

      if (distance > 0 && distance < range) {
        const influence = 1 - distance / range;
        const ripple = Math.sin(distance * 0.055 - motionTime * 0.006) * influence;
        const force = influence * 18 + ripple * 10;
        x += (dx / distance) * force;
        y += (dy / distance) * force;
      }
    }

    return { x, y };
  }

  function buildPositionMap(time) {
    const positions = nodes.map((node) => ({
      node,
      ...getNodePosition(node, time)
    }));
    const map = new Map();

    positions.forEach((item) => {
      map.set(`${item.node.row}:${item.node.column}`, item);
    });

    return { positions, map };
  }

  function getNeighbor(map, node, rowOffset, columnOffset) {
    return map.get(`${node.row + rowOffset}:${node.column + columnOffset}`);
  }

  function drawBackgroundGlow() {
    const glowA = ctx.createRadialGradient(
      width * 0.18,
      height * 0.3,
      0,
      width * 0.18,
      height * 0.3,
      width * 0.55
    );
    glowA.addColorStop(0, "rgba(0, 180, 255, 0.1)");
    glowA.addColorStop(0.45, "rgba(0, 180, 255, 0.035)");
    glowA.addColorStop(1, "rgba(0, 180, 255, 0)");

    ctx.fillStyle = glowA;
    ctx.fillRect(0, 0, width, height);

    const glowB = ctx.createRadialGradient(
      width * 0.82,
      height * 0.7,
      0,
      width * 0.82,
      height * 0.62,
      width * 0.42
    );
    glowB.addColorStop(0, "rgba(120, 214, 201, 0.08)");
    glowB.addColorStop(0.48, "rgba(120, 214, 201, 0.025)");
    glowB.addColorStop(1, "rgba(120, 214, 201, 0)");

    ctx.fillStyle = glowB;
    ctx.fillRect(0, 0, width, height);
  }

  function drawTriangle(a, b, c) {
    const area = Math.abs(
      a.x * (b.y - c.y)
      + b.x * (c.y - a.y)
      + c.x * (a.y - b.y)
    ) / 2;

    if (area < 280 || area > 8500) {
      return;
    }

    const avgDepth = (a.node.depth + b.node.depth + c.node.depth) / 3;
    const alpha = 0.01 + avgDepth * 0.018;

    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.lineTo(c.x, c.y);
    ctx.closePath();
    ctx.fillStyle = `rgba(0, 175, 255, ${alpha})`;
    ctx.fill();
  }

  function drawTriangles(map) {
    nodes.forEach((node) => {
      const a = map.get(`${node.row}:${node.column}`);
      const b = getNeighbor(map, node, 0, 1);
      const c = getNeighbor(map, node, 1, 0);
      const d = getNeighbor(map, node, 1, 1);

      if (a && b && c) {
        drawTriangle(a, b, c);
      }

      if (b && c && d) {
        drawTriangle(b, d, c);
      }
    });
  }

  function drawConnections(map) {
    ctx.lineCap = "round";
    ctx.setLineDash([]);

    nodes.forEach((node) => {
      const current = map.get(`${node.row}:${node.column}`);
      if (!current) {
        return;
      }

      const neighbors = [
        getNeighbor(map, node, 0, 1),
        getNeighbor(map, node, 0, 2),
        getNeighbor(map, node, 1, 1),
        getNeighbor(map, node, -1, 1),
        getNeighbor(map, node, 1, 2),
        getNeighbor(map, node, -1, 2),
        getNeighbor(map, node, 0, 3)
      ].filter(Boolean);

      neighbors.forEach((neighbor) => {
        const distance = Math.hypot(current.x - neighbor.x, current.y - neighbor.y);
        const dx = neighbor.x - current.x;
        const dy = neighbor.y - current.y;

        if (Math.abs(dy) > Math.abs(dx) * 1.35) {
          return;
        }

        if (distance > getGap() * 2.55) {
          return;
        }

        let cursorBoost = 0;
        if (pointer.active) {
          const midX = (current.x + neighbor.x) / 2;
          const midY = (current.y + neighbor.y) / 2;
          const cursorDistance = Math.hypot(midX - pointer.x, midY - pointer.y);
          const range = width < 720 ? 150 : 220;
          cursorBoost = Math.max(0, 1 - cursorDistance / range);
        }

        const depth = Math.min(current.node.depth, neighbor.node.depth);
        const alpha = 0.045 + depth * 0.07 + cursorBoost * 0.16;

        ctx.strokeStyle = `rgba(80, 255, 230, ${alpha})`;
        ctx.lineWidth = 0.1 + depth * 0.8 + cursorBoost * 0.34;
        ctx.beginPath();
        ctx.moveTo(current.x, current.y);
        ctx.lineTo(neighbor.x, neighbor.y);
        ctx.stroke();
      });
    });
  }

  function drawNodes(positions, time) {
    const motionTime = motionQuery.matches ? 0 : time;

    positions.forEach((item, index) => {
      let cursorBoost = 0;

      if (pointer.active) {
        const distance = Math.hypot(item.x - pointer.x, item.y - pointer.y);
        const range = width < 720 ? 130 : 180;
        cursorBoost = Math.max(0, 1 - distance / range);
      }

      const pulse = motionQuery.matches
        ? 0.78
        : 0.78 + Math.sin(motionTime * 0.0016 + index * 0.41) * 0.18;
      const radius = 0.42 + item.node.depth * 0.62 + cursorBoost * 0.75;
      const alpha = 0.22 + item.node.depth * 0.14 + cursorBoost * 0.28;
      const glowRadius = radius * (3.4 + cursorBoost * 1.8);

      ctx.fillStyle = `rgba(0, 180, 255, ${alpha * 0.14 * pulse})`;
      ctx.beginPath();
      ctx.arc(item.x, item.y, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(155, 255, 245, ${Math.min(0.95, alpha * pulse)})`;
      ctx.beginPath();
      ctx.arc(item.x, item.y, radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function draw(time = 0) {
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "source-over";

    const { positions, map } = buildPositionMap(time);
    drawBackgroundGlow();

    ctx.globalCompositeOperation = "lighter";
    drawTriangles(map);
    drawConnections(map);
    drawNodes(positions, time);

    ctx.globalCompositeOperation = "source-over";
  }

  function resize() {
    width = window.innerWidth || document.documentElement.clientWidth || 1;
    height = window.innerHeight || document.documentElement.clientHeight || 1;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createNodes();
    draw(0);
  }

  function animate(time) {
    draw(time);
    animationId = window.requestAnimationFrame(animate);
  }

  function stop() {
    window.cancelAnimationFrame(animationId);
    animationId = 0;
  }

  function start() {
    stop();
    if (motionQuery.matches || document.hidden) {
      draw(0);
      return;
    }
    animationId = window.requestAnimationFrame(animate);
  }

  window.addEventListener("resize", () => {
    resize();
    start();
  }, { passive: true });

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

  window.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    if (!touch) {
      return;
    }

    pointer.x = touch.clientX;
    pointer.y = touch.clientY;
    pointer.active = true;
  }, { passive: true });

  window.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    if (!touch) {
      return;
    }

    pointer.x = touch.clientX;
    pointer.y = touch.clientY;
    pointer.active = true;
  }, { passive: true });

  window.addEventListener("touchend", () => {
    pointer.active = false;
  }, { passive: true });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });

  motionQuery.addEventListener?.("change", start);

  resize();
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

  initGalleryLightbox();
}

function initProjectShowcases() {
  const showcases = Array.from(document.querySelectorAll("[data-project-showcase]"));
  if (!showcases.length) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  showcases.forEach((showcase) => {
    if (showcase.dataset.projectShowcaseReady === "true") {
      return;
    }

    const cards = Array.from(showcase.querySelectorAll(".project-card"));
    if (!cards.length) {
      return;
    }

    showcase.dataset.projectShowcaseReady = "true";
    let activeIndex = 0;
    let autoplayTimer = 0;

    function scrollCardIntoShowcase(card) {
      if (!card || typeof showcase.scrollTo !== "function") {
        return;
      }

      const targetLeft = card.offsetLeft - (showcase.clientWidth - card.clientWidth) / 2;
      showcase.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: reducedMotion ? "auto" : "smooth"
      });
    }

    function setActiveCard(index, options = {}) {
      const { scroll = false } = options;
      activeIndex = (index + cards.length) % cards.length;

      cards.forEach((card, cardIndex) => {
        const isActive = cardIndex === activeIndex;
        card.classList.toggle("is-active", isActive);
        card.setAttribute("aria-current", isActive ? "true" : "false");
      });

      if (scroll) {
        scrollCardIntoShowcase(cards[activeIndex]);
      }
    }

    function stopAutoplay() {
      if (!autoplayTimer) {
        return;
      }

      window.clearInterval(autoplayTimer);
      autoplayTimer = 0;
    }

    function startAutoplay() {
      if (reducedMotion || cards.length < 2 || autoplayTimer) {
        return;
      }

      autoplayTimer = window.setInterval(() => {
        setActiveCard(activeIndex + 1);
      }, 4200);
    }

    cards.forEach((card, index) => {
      card.setAttribute("tabindex", "0");

      card.addEventListener("pointerenter", () => {
        stopAutoplay();
        setActiveCard(index, { scroll: true });
      });

      card.addEventListener("focusin", () => {
        stopAutoplay();
        setActiveCard(index, { scroll: true });
      });
    });

    showcase.addEventListener("pointerenter", stopAutoplay);
    showcase.addEventListener("pointerleave", startAutoplay);
    showcase.addEventListener("focusin", stopAutoplay);
    showcase.addEventListener("focusout", () => {
      window.setTimeout(() => {
        if (!showcase.contains(document.activeElement)) {
          startAutoplay();
        }
      }, 80);
    });

    setActiveCard(0);
    startAutoplay();
  });
}

function initBackToTop() {
  let button = document.querySelector("[data-back-to-top]");
  if (!button) {
    button = document.createElement("button");
    button.className = "back-to-top";
    button.type = "button";
    button.dataset.backToTop = "";
    button.dataset.i18nAriaLabel = "backToTop.label";
    button.setAttribute("aria-label", getTranslation("backToTop.label"));
    button.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 5.5 5.5 12l1.4 1.4L11 9.3V19h2V9.3l4.1 4.1 1.4-1.4L12 5.5z"/>
      </svg>
    `;
    document.body.appendChild(button);
  }

  applyKeyedTranslations(currentLanguage);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function updateBackToTopVisibility() {
    const shouldShow = window.scrollY > 420 && !document.body.classList.contains("lightbox-open");
    button.classList.toggle("is-visible", shouldShow);
  }

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth"
    });
  });

  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
  window.addEventListener("resize", updateBackToTopVisibility, { passive: true });
  document.addEventListener("portfolio:lightbox-toggle", updateBackToTopVisibility);
  updateBackToTopVisibility();
}

function initSite() {
  initFixedTheme();
  initAmbientNetwork();
  initLanguageToggle();
  initMenu();
  initSectionHighlight();
  initProjectShowcases();
  initCaseGalleries();
  initBackToTop();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSite, { once: true });
} else {
  initSite();
}
