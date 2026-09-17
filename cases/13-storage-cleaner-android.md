# Storage Cleaner — Android Storage Utility

## Categoria

Desenvolvimento Mobile e Engenharia de Release

## Visão geral

Storage Cleaner é um aplicativo Android nativo para análise e organização do armazenamento do dispositivo, construído com APIs oficiais da plataforma e foco em transparência e controle do usuário.

A V1.0.0 foi concluída e homologada fisicamente em Android 16 / API 36, com fechamento funcional, CI, identidade de release, monetização, signing, AAB de produção, APK instalável e pacote de recuperação offline consolidados.

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

O desenvolvimento foi conduzido por gates incrementais: especificação, JOBs isolados, testes, lint, build, CI, homologação física, fechamento funcional, identidade de release, signing externo, monetização de produção, AAB, APK instalável e freeze offline.

## Guardrails

A V1 não utiliza MANAGE_EXTERNAL_STORAGE, QUERY_ALL_PACKAGES, REQUEST_DELETE_PACKAGES, PACKAGE_USAGE_STATS, root, Shizuku ou AccessibilityService.

O aplicativo não promete boost de CPU/RAM, limpeza silenciosa de cache de terceiros ou acesso irrestrito ao sistema de arquivos.

## Estado

- V1.0.0: desenvolvimento concluído;
- homologação física Android 16/API 36: aprovada;
- App Bundle de produção: gerado;
- APK instalável de release: gerado e assinatura verificada;
- signing de release: externo ao repositório;
- freeze e recuperação offline: concluídos;
- hashes SHA-256 e artefatos de recuperação: consolidados.

## Resultado técnico

Produto Android funcionalmente concluído e homologado, com release consolidado, artefatos de produção preservados e processo de recuperação documentado.