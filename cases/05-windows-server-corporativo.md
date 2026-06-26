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

Clientes Windows -> Servidor central -> Active Directory -> DNS e DHCP -> GPO e serviços de apoio -> Administração contínua.

## Ilustrações Técnicas

A versão web deste case possui galeria de ilustrações técnicas com Server Manager, AD DS, DNS, armazenamento, GPO e ingresso de estação no domínio.

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

## Evolução

Ampliar políticas, monitoramento, rotinas de backup e documentação de recuperação operacional.
