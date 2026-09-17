# Storage Cleaner — Android Storage Utility

## Categoria

Desenvolvimento Mobile e Engenharia de Release

## Visão geral

Storage Cleaner é um aplicativo Android nativo para análise e organização do armazenamento do dispositivo, construído com APIs oficiais da plataforma e foco em transparência e controle do usuário.

A V1.0.0 foi concluída, homologada fisicamente em Android 16 / API 36 e congelada em estado de pré-publicação após fechamento funcional, CI, identidade de release, monetização, signing e geração dos artefatos de produção.

## Recursos entregues

- visão geral do armazenamento;
- categorias de imagens, vídeos e áudios;
- busca, filtros e ordenação;
- identificação de arquivos grandes e antigos;
- detecção local de duplicados por conteúdo;
- seleção segura de cópias preservando um exemplar;
- miniaturas nativas;
- MediaStore e Storage Access Framework;
- exclusão mediada pelos fluxos oficiais do Android;
- inventário de aplicativos dentro da visibilidade concedida pela plataforma;
- delegação de gerenciamento ao Android Settings.

## Stack

Kotlin · Jetpack Compose · Android SDK · MediaStore · Storage Access Framework · ContentResolver · Google Mobile Ads · Google UMP · Gradle · GitHub Actions

## Engenharia de qualidade

O desenvolvimento foi conduzido por gates incrementais: especificação, JOBs isolados, testes, lint, build, CI, homologação física, fechamento funcional, identidade de release, signing externo, monetização de produção, AAB e freeze offline.

## Guardrails

A V1 não utiliza MANAGE_EXTERNAL_STORAGE, QUERY_ALL_PACKAGES, REQUEST_DELETE_PACKAGES, PACKAGE_USAGE_STATS, root, Shizuku ou AccessibilityService.

O aplicativo não promete boost de CPU/RAM, limpeza silenciosa de cache de terceiros ou acesso irrestrito ao sistema de arquivos.

## Estado

- V1.0.0: desenvolvimento concluído;
- homologação física Android 16/API 36: aprovada;
- App Bundle de produção: gerado;
- APK instalável de release: gerado;
- freeze e recuperação offline: concluídos;
- publicação Google Play: temporariamente pausada para ciclo coordenado de lançamento.

## Resultado técnico

O projeto demonstra a entrega de um produto Android desde a especificação até o estado de Release Candidate, com validação em hardware real, artefatos de release preservados e processo de recuperação documentado.