# Visto

Sitio estatico de Visto generado desde fuentes locales.

## Estructura

- `inputs/`: HTML, Markdown y YAML fuente usados por el generador.
- `work/build-visto-site.mjs`: generador del sitio.
- `outputs/visto-site/`: sitio generado listo para servir.

## Construir

```bash
node work/build-visto-site.mjs
```

## Servir localmente

```bash
cd outputs/visto-site
python -m http.server 4173 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:4173/`.

## Estado actual

- 120 paginas HTML generadas en la rama de rediseño.
- `outputs/visto-site/home-redesign.html` como variante orientada a facturacion local y conversion.
- 61 paginas de sector desde `inputs/sectores-contenido.yaml`.
- 48 paginas de pasos del metodo desde `inputs/metodo-completo.md`.
