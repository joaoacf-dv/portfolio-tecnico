# Stiq — Sticker Studio

## Categoria

Desenvolvimento Mobile · Edição de Mídia · Integração Android

## Visão geral

Stiq é um aplicativo Android nativo para criação, edição, organização e exportação de figurinhas estáticas e animadas. O produto reúne edição visual, composição por camadas, persistência local, gerenciamento de pacotes e integração com WhatsApp em um fluxo único de uso.

O projeto foi conduzido de ponta a ponta, abrangendo arquitetura de interface, manipulação de mídia, persistência, integração Android, exportação, validação física e engenharia de release.

## Recursos entregues

- criação de figurinhas a partir de imagens, GIFs e vídeos;
- criação a partir de composição própria com texto, emojis e imagens PNG;
- editor estático com enquadramento, pan, zoom e rotação;
- recortes geométricos, laço manual, borracha e restauração;
- múltiplas camadas de texto e imagens PNG com transformação independente;
- cores de texto predefinidas e personalizadas;
- desenho livre com lápis, seleção de cor e controle de espessura;
- borracha dedicada ao desenho, isolada da borracha utilizada sobre imagens;
- composição visual ordenada entre imagens, desenho e texto;
- editor animado com enquadramento, recorte, timeline e prévia;
- exportação WebP estática e Animated WebP;
- biblioteca local de projetos e figurinhas;
- gerenciamento visual de pacotes;
- integração com WhatsApp Consumer e Business;
- persistência versionada para retomada segura da edição.

## Stack

Kotlin · Jetpack Compose · Android SDK · Room · Gradle · GitHub Actions · NDK · CMake · libwebp

## Fluxo do produto

`Importar / criar -> editar -> compor -> pré-visualizar -> finalizar -> biblioteca -> pacote -> WhatsApp`

O editor mantém uma composição não destrutiva durante o projeto e consolida enquadramento, máscaras, imagens, desenho e texto no resultado final. A persistência local mantém projetos versionados, prévias renderizadas e artefatos de exportação para continuidade do fluxo entre editor, biblioteca e pacotes.

## Arquitetura e domínio técnico

O case envolve diferentes camadas de engenharia Android integradas em uma única aplicação:

- interface e gerenciamento de estado com Jetpack Compose;
- persistência local estruturada com Room;
- manipulação e composição de imagens e conteúdo animado;
- processamento WebP estático e animado;
- integração nativa por Android NDK e CMake;
- gerenciamento de biblioteca e pacotes;
- integração com APIs e contratos do ecossistema WhatsApp;
- controle de versão de projetos e retomada de edição;
- instrumentação, diagnóstico e validação em dispositivo físico.

## Engenharia de qualidade e release

A entrega foi submetida a gates técnicos de validação e empacotamento:

- testes unitários aprovados;
- lint aprovado;
- builds debug e release aprovados;
- validação de alinhamento ELF nativo de 16 KB;
- APK release assinado e validado com `zipalign` e `apksigner`;
- identidade do pacote e versão verificadas no artefato final;
- SHA-256 registrado para rastreabilidade do APK;
- homologação física em moto g56 5G com Android 16 / API 36;
- instalação limpa e inicialização validadas em dispositivo real;
- validação de cold start e foreground;
- scan físico final de crash/ANR com `ISSUE_COUNT=0`.

## Privacidade e operação

O processamento principal ocorre localmente no dispositivo. A aplicação trabalha com mídia selecionada pelo usuário e mantém projetos, prévias, exportações e pacotes dentro do fluxo Android.

## Resultado técnico

O Stiq demonstra domínio de desenvolvimento Android aplicado a um produto real, integrando interface, persistência, processamento de mídia, recursos nativos, empacotamento, assinatura e validação operacional. O resultado é uma aplicação móvel funcional, reconstruível, tecnicamente rastreável e homologada em hardware real.
