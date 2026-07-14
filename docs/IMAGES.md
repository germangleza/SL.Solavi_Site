# Guía de imágenes

Todas las imágenes van dentro de `public/images/`. Lo que se guarda en
`public/` se sirve desde la raíz del sitio, por eso las rutas empiezan en
`/images/...` (sin `public`).

**Formato recomendado:** WebP (o AVIF). Fondo blanco o transparente para
producto; foto para sectores e instalaciones. Nombres en minúsculas, sin
espacios ni acentos.

---

## 1. Logo — `public/images/logo/`

| Archivo | Uso | Recomendación |
|---|---|---|
| `sv-solavi.svg` | Logo SV Solavi (encabezado, footer, sección SV Solavi) | SVG ideal; si no, PNG con fondo transparente, alto ~200 px |

> Si subes PNG en vez de SVG, nómbralo `sv-solavi.png`.

## 2. Home — `public/images/home/`

| Archivo | Uso | Tamaño |
|---|---|---|
| `hero.webp` | Imagen principal del hero | 1600 × 1200 (4:3) |

## 3. BLCC — `public/images/blcc/`

| Archivo | Uso | Tamaño |
|---|---|---|
| `about-hero.webp` | Imagen del hero de la página BLCC | 1600 × 1200 (4:3) |
| `facilities.webp` | Instalaciones o fábrica (Home y página BLCC) | 1600 × 900 (16:9) |

## 4. Sectores — `public/images/sectors/`

Una imagen por sector. **El nombre del archivo debe coincidir exactamente con
el slug del sector** (así se conectan solas). Tamaño: 1600 × 1000 (16:10).

| Archivo | Sector |
|---|---|
| `lavanderias-autoservicio.webp` | Lavanderías de autoservicio |
| `hoteles.webp` | Hoteles y centros de hospedaje |
| `hospitales-y-clinicas.webp` | Hospitales y clínicas |
| `lavanderias-industriales.webp` | Lavanderías industriales |
| `tintorerias.webp` | Tintorerías |
| `escuelas-residencias-y-comunidades.webp` | Escuelas, residencias y comunidades |

## 5. Productos del catálogo — `public/images/products/`

Una **carpeta por producto**, nombrada con el `id` del producto (ver tabla).
Dentro de cada carpeta:

```
public/images/products/<id>/
├── hero.webp        (obligatoria) imagen principal — 1600 × 1200 (4:3)
├── card.webp        (opcional)    para la tarjeta   — 1200 × 900 (4:3)
├── gallery-1.webp   (opcional)    vistas / detalles — 1000 × 750
├── gallery-2.webp   (opcional)
└── ...
```

Si no subes `card.webp`, la tarjeta usará `hero.webp`.

### IDs de producto (nombre de carpeta)

**Lavado industrial**
`xgq` · `xsx` · `bw` · `xgb`

**Secado industrial**
`hg`

**Autoservicio**
`swq` · `hgq` · `shg` · `xth`

**Lavado en seco**
`swh` · `gxzq`

**Planchado y doblado**
`yp` · `zd3300-v` · `ings-3300`

**Equipos complementarios y acabado**
`mg-tl` · `ytt-1475` · `ldr3-04r` · `hxgt-1` · `ct` · `jtj-1` · `sws` ·
`rxj-1` · `bzd-1` · `bzt-50`

Ejemplo:

```
public/images/products/xgq/hero.webp
public/images/products/hg/hero.webp
public/images/products/mg-tl/hero.webp
```

---

## Después de subir

Cuando las imágenes estén en el repo con estos nombres, avísame y las conecto:
reemplazo los `MediaPlaceholder` por el componente `<Image>` de Next
(optimización automática, `srcset` y carga diferida) en el hero, la sección
BLCC, las tarjetas de sector, el logo y las fichas de producto.

Si algún archivo no sigue exactamente el slug/id, dímelo y ajusto el mapeo.
