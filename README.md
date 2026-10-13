# Dr. Rafael Sousa · rascunho de landing page (Pontoweb)

Rascunho de proposta para apresentação ao cliente. `noindex, nofollow`.

- `site/index.html`: página única, sem build. CSS no `<head>`; ~100 linhas de JavaScript no fim (menu do celular,
  revelação ao rolar, paralaxe leve). Sem JavaScript o site continua completo.
- `site/fonts/`: Newsreader e Inter, locais (sem Google Fonts), recortadas para os caracteres do português
- `site/img/`: fotos do consultório (origem: perfil público no Google Maps; confirmar uso com o profissional)
  - `consultorio-*.jpg`: originais. O site usa só os recortes WebP (`arco-*`, `recepcao-*`, `espera-*`, `monograma-*`) e o `og-image.jpg`
- `tools/`: script de contraste (`node tools/contraste.js`) e servidor local (`node tools/serve.js`, porta 8765)

Itens `[PENDENTE]` e `[CONFERIR]` na página dependem do profissional. A lista completa está em `PENDENCIAS.md`.

## Identidade visual

Paleta tirada do próprio consultório: parede marfim, letreiro escuro, monograma champanhe, madeira e mármore.
O arco iluminado da recepção virou o elemento gráfico do site (moldura do hero, retrato, favicon).
Movimento só com CSS + IntersectionObserver, desligado com `prefers-reduced-motion`.
