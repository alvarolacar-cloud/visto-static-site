# Visto Home/Header/Footer Update

## Goal
Update the six-page Visto static site using `inputs/home-C-mezcla.html` as the source for the new home, shared header, shared footer, and the updated "SEO basado en datos" section.

## Phases
- [completed] Inspect the new home and current generated pages.
- [completed] Extract reusable header, footer, CSS, and the replacement data-section from the new home.
- [completed] Update the generator and rebuild `outputs/visto-site`.
- [completed] Verify six pages only, internal links, shared header/footer, palette/font, and responsive rendering.

## Constraints
- Do not create any new pages.
- Footer links may point only to the six built pages; all other footer links stay `#`.
- Header and footer must be a single shared component reused in every page.

## Method Expansion
- [completed] Read `inputs/metodo-completo.md`.
- [completed] Generate the four method action pages from the markdown: `metodo-fase1.html` through `metodo-fase4.html`.
- [completed] Link the method subnavigation and shared footer only to built pages.
- [completed] Rebuild and verify 11 HTML pages, internal links, shared header/footer, and method task counts.

## Updated Constraints
- The original six-page limit was superseded by the later request to build the pages implied by `metodo-completo.md`.
- Per-step pages are now required for the method.

## Step Pages
- [completed] Generate one page for each of the 48 method steps.
- [completed] Reuse the existing `paso-categoria.html` as the page for Identidad step 04.
- [completed] Link all method phase step cards to their own pages.
- [completed] Verify 58 unique HTML pages, route status, internal links, and shared header/footer.

## Sector Content YAML
- [completed] Read `sectores-contenido.yaml` and map it to the existing sector page structure.
- [completed] Generate one static page per sector, preserving the current sector layout.
- [completed] Update `sectores.html` links so every sector points to its generated page.
- [completed] Rebuild and verify sector routes.
