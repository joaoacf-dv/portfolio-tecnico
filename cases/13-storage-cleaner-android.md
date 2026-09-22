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
- App Bundle de produção: gerado e preservado;
- APK instalável de release: gerado, preservado e assinatura verificada;
- signing de release: externo ao repositório;
- freeze técnico final em 22/09/2026: concluído;
- snapshot do código, Git bundle completo e manifesto de recuperação: validados;
- hashes SHA-256 dos artefatos de produção e preservação: consolidados.

## Freeze técnico final

O baseline funcional e de identidade foi preservado em referências dedicadas de freeze/archive/backup. O pacote offline final inclui o APK de preservação, o APK release assinado, o AAB de produção, snapshot do source, Git bundle completo, recovery manifest e inventário SHA-256.

Referências principais:

- fechamento funcional fisicamente homologado: `b741f50a23722118455189a473705566acf40482`;
- identidade física de release: `da94148485d3b71f6228369eb3952e2f57f9d4fa`;
- baseline canônico de release engineering: `9aad144398b97311612e5ccebb3f10ccde3db24c`;
- fechamento final de governança/preservação: `b1d8c585d7059d5b4906559948024daf1da07ae1`.

## Resultado técnico

Produto Android funcionalmente concluído e homologado, com release consolidado, artefatos de produção preservados, freeze técnico verificável e processo de recuperação offline testado de ponta a ponta.