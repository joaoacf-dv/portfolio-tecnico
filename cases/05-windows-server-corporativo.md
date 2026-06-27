# Ambiente Windows Server Corporativo

## Categoria

Infraestrutura Microsoft

## Visão Geral

Ambiente corporativo baseado em Windows Server para centralizar autenticação, serviços de rede, políticas e administração de estações.

## Desafio Técnico

Ambientes Windows precisam de controle centralizado para usuários, nomes, endereçamento, políticas e acesso a recursos. O desafio foi organizar esses componentes em uma arquitetura coerente de domínio.

## Solução Desenvolvida

Foi implantado um servidor central com Active Directory, DNS, DHCP, políticas de grupo, armazenamento e validação de estação ingressada ao domínio.

## Stack Técnica

- Windows Server
- Active Directory
- DNS
- DHCP
- GPO
- Cliente Windows em domínio

## Arquitetura / Fluxo

Clientes Windows → Servidor central → Active Directory → DNS e DHCP → GPO e serviços de apoio → Administração contínua.

## Capturas

A versão web deste case possui galeria de capturas com registros visuais contextualizados do projeto.

* [Painel do Gerenciador do Servidor](../site/assets/cases/windows-server-corporativo/01-gerenciador-servidor-painel.webp)
* [Servidor local](../site/assets/cases/windows-server-corporativo/02-gerenciador-servidor-local.webp)
* [Todos os servidores](../site/assets/cases/windows-server-corporativo/03-gerenciador-todos-servidores.webp)
* [Active Directory Domain Services](../site/assets/cases/windows-server-corporativo/04-ad-ds-visao-geral.webp)
* [DNS](../site/assets/cases/windows-server-corporativo/06-dns-visao-geral.webp)
* [Arquivos e armazenamento](../site/assets/cases/windows-server-corporativo/07-arquivos-armazenamento-servicos.webp)
* [Zonas e registros DNS](../site/assets/cases/windows-server-corporativo/08-editor-registro-zonas-dns.webp)
* [Estrutura de GPO](../site/assets/cases/windows-server-corporativo/09-gpo-editor-estrutura.webp)
* [Delegação de política](../site/assets/cases/windows-server-corporativo/11-gpo-delegacao-politica.webp)
* [Ingresso no domínio](../site/assets/cases/windows-server-corporativo/12-dominio-ingresso-concluido.webp)

## Entregas Técnicas

- Controlador de domínio central.
- Serviços de nomes e endereçamento.
- Políticas de grupo para padronização.
- Estrutura de administração e recursos.
- Sequência documentada de implantação e operação.

## Competências Demonstradas

- Administração de domínio Microsoft.
- Planejamento de serviços de rede.
- Governança por políticas de grupo.
- Organização de infraestrutura corporativa.
- Documentação técnica de ambiente.

## Resultado Técnico

O projeto demonstra implantação e operação de componentes essenciais de infraestrutura Microsoft em cenário corporativo.
