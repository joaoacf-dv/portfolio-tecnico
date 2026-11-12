# CIOP Manager AD — Gestão de Identidades e Governança

## Categoria
Engenharia Windows · Aplicação Desktop · Governança de Identidades

## Visão geral
O CIOP Manager AD é uma aplicação desktop de gestão controlada de identidades Active Directory, organizada em torno de consultas, revisão de ações administrativas e validação de resultados. O projeto combina uma interface Qt/C++ com automação PowerShell e distribuição Windows por MSI.

A arquitetura de operação foi desenhada para execução a partir de estação autorizada, com autenticação por operador e permissões efetivas determinadas pelo domínio. Este case descreve a engenharia do sistema em nível conceitual, sem divulgar a infraestrutura ou os dados da organização.

## Problema e solução
A diversidade de consoles e scripts de administração dificulta uniformizar procedimentos, auditar ações, visualizar o estado das contas e reduzir erros em tarefas recorrentes. A solução organiza uma camada de interface com fluxo explícito de leitura, seleção de escopo, revisão, confirmação, execução autorizada e verificação.

## Stack
- **Interface:** C++17 e Qt 6 para Windows.
- **Integração:** Windows PowerShell e módulo Active Directory (RSAT).
- **Segurança:** identidade de operador, direitos delegados pelo AD, proteção de contas e confirmações.
- **Instalação:** WiX Toolset 5, pacote MSI x64 e assistente de pré-requisitos.
- **Qualidade:** CMake, MSVC, CTest, GitHub Actions e SHA-256.

## Fluxo conceitual
`Identidade do operador → Interface Qt/C++ → Políticas e confirmação → Backend PowerShell → Consulta/operação AD → Verificação e auditoria`

## Capacidades de engenharia
- Dashboard de indicadores, estado de contas e navegação para registros;
- Consultas estruturadas de usuários e unidades organizacionais;
- Fluxos de provisionamento e operações individuais sob autorização delegada;
- Tratamento de ações em lote com confirmação e resultado por conta;
- Registro de atividades administrativas e diagnóstico classificado por falha;
- Tratamento explícito de estados desconhecidos e sessões sem fonte de evidência suficiente.

## Empacotamento Windows v1.3.0
A distribuição prevê MSI com arquivos da aplicação, backend, iniciador de credenciais e atalhos. O assistente de preparação é separado da transação MSI e contempla:

1. Verificação da integridade do instalador por SHA-256;
2. Checagem de pré-requisitos Windows, PowerShell e Visual C++;
3. Verificação e instalação autorizada do RSAT Active Directory, com progresso originado do DISM;
4. Classificação de erros de recursos opcionais, dependências, permissões e Windows Installer;
5. Registro de resultados por componente e ausência de reinicialização automática.

O RSAT é um recurso do Windows e **não é incorporado como binário ao MSI**.

## Evidências e maturidade
O pipeline Windows concluiu compilação MSVC, testes automatizados, smoke test demonstrativo, construção WiX, extração administrativa do MSI e checagem dos arquivos obrigatórios. O pacote final teve checksum SHA-256 conferido.

**Limite:** esses resultados de CI não equivalem à homologação de instalação, autenticação, delegação ou escrita em um Active Directory real. A implantação em infraestrutura institucional depende de autorização, políticas de TI e testes controlados.

## Curadoria e confidencialidade
O código operacional, scripts de domínio, configurações, capturas reais, logs, instaladores, identificadores, endereços e dados de usuários não são publicados neste repositório. O conteúdo é exclusivamente um case técnico descritivo e sanitizado, produzido para fins profissionais.

## Resultado
Demonstra competências de arquitetura Windows, integração entre linguagens, governança operacional, construção de interfaces desktop, controle de risco em operações administrativas e engenharia de build e distribuição.

[Ver apresentação do case no portfólio](../site/cases/ciop-manager-ad.html)
