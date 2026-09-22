# Stiq — Sticker Studio

## Categoria

Desenvolvimento Mobile · Edição de Mídia · Integração Android

## Visão geral

Stiq é um aplicativo Android nativo para criação, edição, organização e exportação de figurinhas estáticas e animadas. O produto combina edição visual, composição por camadas, biblioteca local, gerenciamento de pacotes e integração com WhatsApp em um fluxo centrado no usuário.

A etapa funcional foi consolidada e homologada fisicamente em Android 16 / API 36. O baseline final inclui desenho livre no Text Studio, borracha exclusiva para rabiscos, composição por camadas e persistência sem abertura de uma nova arquitetura de dados.

## Recursos entregues

- criação de figurinhas a partir de imagens, GIFs e vídeos;
- criação de figurinhas somente com texto, emojis e imagens PNG;
- editor estático com enquadramento, pan, zoom e rotação;
- recortes geométricos, laço manual, borracha e restauração;
- múltiplas camadas de texto e imagens PNG;
- cores de texto predefinidas e personalizadas;
- desenho livre no Text Studio com lápis, seleção de cor e controle de espessura;
- borracha dedicada ao desenho, isolada da borracha utilizada sobre imagens;
- ordem visual consolidada entre PNGs, desenho e texto;
- editor animado com enquadramento, recorte, timeline e prévia;
- exportação WebP estática e Animated WebP;
- biblioteca local de projetos e figurinhas;
- gerenciamento visual de pacotes;
- integração com WhatsApp Consumer e Business por pacote;
- persistência versionada de projetos e retomada de edição.

## Stack

Kotlin · Jetpack Compose · Android SDK · Room · Gradle · GitHub Actions · NDK · CMake · libwebp

## Fluxo de produto

`Importar / criar -> editar -> compor -> pré-visualizar -> finalizar -> biblioteca -> pacote -> WhatsApp`

O Text Studio permite combinar PNGs, desenho livre e texto sobre a mesma composição. A ferramenta de desenho usa uma camada interna transparente de 512×512 e reutiliza a infraestrutura de `ImageLayer` já existente, preservando o Project Document V3 e evitando novas migrations de banco, schema ou codec.

## Engenharia de qualidade

A consolidação funcional foi conduzida com validação incremental, CI e regressão sobre dispositivo físico. O estado final possui:

- testes unitários aprovados;
- lint aprovado;
- build Android aprovado;
- APK de instrumentação compilado;
- verificação de alinhamento ELF nativo de 16 KB;
- instrumentação focada da ferramenta de desenho aprovada em dispositivo físico;
- homologação física em moto g56 5G, Android 16 / API 36;
- cold start e validação de foreground aprovados;
- scan final de crash/ANR com `ISSUE_COUNT=0`;
- baseline funcional final preservado em referências dedicadas de freeze, backup e archive;
- integração canônica no `main` após validação física.

## Congelamento funcional

A última linha funcional validada foi encerrada antes da evolução visual da interface.

Autoridades técnicas da etapa:

- candidato fisicamente homologado: `9a6236682d6fe17e5a1fd89e0b0d513ba459f83d`;
- integração canônica: `4b8e36f607c6df82034c94105b197c20fe6fae9d`;
- árvore Git comum: `d4e97f33b8efefa4f0cefff7ca35ae28f515884a`.

O candidato e a integração canônica possuem a mesma árvore de produto. A próxima etapa é dedicada a interface/design, usando este baseline como referência de regressão funcional.

## Privacidade e operação

O processamento principal ocorre localmente no dispositivo. A aplicação trabalha com mídia escolhida pelo usuário e organiza projetos, exports e pacotes no próprio fluxo Android.

## Estado

- funcionalidade principal: concluída;
- último upgrade funcional — desenho livre: concluído;
- homologação física: aprovada;
- estabilidade funcional: congelada;
- integração do baseline ao `main`: concluída;
- backup e recuperação: formalizados;
- fase seguinte: evolução visual e de interface, preservando os contratos funcionais homologados.

## Resultado técnico

Aplicativo Android funcional, estável, operacional e reconstruível, com editores estático e animado, composição avançada, desenho livre isolado, persistência local, biblioteca, pacotes e integração com WhatsApp consolidados em um baseline validado.
