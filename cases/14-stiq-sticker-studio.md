# Stiq — Sticker Studio

## Categoria

Desenvolvimento Mobile · Edição de Mídia · Integração Android

## Visão geral

Stiq é um aplicativo Android nativo para criação, edição, organização e exportação de figurinhas estáticas e animadas. O produto combina edição visual, composição por camadas, biblioteca local, gerenciamento de pacotes e integração com WhatsApp em um fluxo centrado no usuário.

O baseline funcional foi consolidado e homologado fisicamente em Android 16 / API 36, com build, testes unitários, lint, compilação de instrumentação, validação nativa e regressão física concluídos.

## Recursos entregues

- criação de figurinhas a partir de imagens, GIFs e vídeos;
- criação de figurinhas somente com texto, emojis e imagens PNG;
- editor estático com enquadramento, pan, zoom e rotação;
- recortes geométricos, laço manual, borracha e restauração;
- múltiplas camadas de texto e imagens PNG;
- cores de texto predefinidas e personalizadas;
- editor animado com enquadramento, recorte, timeline e prévia;
- exportação WebP estática e Animated WebP;
- biblioteca local de projetos e figurinhas;
- gerenciamento visual de pacotes;
- integração com WhatsApp Consumer e Business por pacote;
- persistência versionada de projetos e retomada de edição.

## Stack

Kotlin · Jetpack Compose · Android SDK · Room · Gradle · GitHub Actions · NDK · CMake · libwebp

## Fluxo de produto

`Importar / criar -> editar -> pré-visualizar -> finalizar -> biblioteca -> pacote -> WhatsApp`

A interface mantém o canvas como superfície principal e apresenta ferramentas contextuais para recorte, laço, borracha, texto, imagens e ajustes de enquadramento.

## Engenharia de qualidade

A consolidação funcional foi conduzida com validação incremental e regressão sobre dispositivo físico. O estado final possui:

- testes unitários aprovados;
- lint aprovado;
- build Android aprovado;
- APK de instrumentação compilado;
- verificação de alinhamento ELF nativo de 16 KB;
- homologação física em moto g56 5G, Android 16 / API 36;
- baseline funcional congelado e preservado para rollback;
- `main` consolidado após CI pós-integração.

## Privacidade e operação

O processamento principal ocorre localmente no dispositivo. A aplicação trabalha com mídia escolhida pelo usuário e organiza projetos, exports e pacotes no próprio fluxo Android.

## Estado

- funcionalidade principal: concluída;
- homologação física: aprovada;
- estabilidade funcional: congelada;
- integração do baseline ao `main`: concluída;
- fase seguinte: identidade comercial e evolução visual, sem alteração funcional por padrão.

## Resultado técnico

Aplicativo Android funcional, estável, operacional e reconstruível, com editores estático e animado, composição avançada, persistência local, biblioteca, pacotes e integração com WhatsApp consolidados em um baseline validado.
