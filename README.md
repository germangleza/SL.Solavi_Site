# SV Solavi — Sitio web

Sitio de equipos profesionales de lavandería BLCC, con SV Solavi como
distribuidor y punto de contacto comercial.

Construido con **Next.js 15 (App Router)** + **TypeScript**. El sistema de
diseño (colores, tipografía, retícula) sigue el documento maestro
[`SV_Solavi_BLCC_estructura_catalogo_web.md`](./SV_Solavi_BLCC_estructura_catalogo_web.md).

## Requisitos

- Node.js 20+ (probado con 22)

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # completar variables
npm run dev                  # http://localhost:3000
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilación de producción |
| `npm start` | Servir la compilación |
| `npm run lint` | Linter de Next.js |

## Variables de entorno

Definidas en `.env.example`:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=   # número de WhatsApp (con lada, solo dígitos)
NEXT_PUBLIC_CONTACT_EMAIL=     # correo comercial
NEXT_PUBLIC_GA_ID=             # Google Analytics
FORM_ENDPOINT=                 # endpoint del formulario de cotización
```

Mientras `NEXT_PUBLIC_WHATSAPP_NUMBER` esté vacío, los botones de WhatsApp
enlazan a `/contacto` para no romper la navegación.

## Estructura

```
app/            Rutas (App Router) + estilos globales
components/     Componentes reutilizables (Header, Footer, tarjetas, iconos…)
lib/            Configuración del sitio (navegación, CTAs, WhatsApp)
content/        Datos de productos (JSON/MDX) — por poblar
public/images/  Imágenes y placeholders
```

## Estado

- [x] Sistema de diseño y layout base (encabezado fijo, footer, WhatsApp
      flotante, barra de CTA en móvil).
- [x] Página de inicio (secciones 5.1–5.7 del documento maestro).
- [x] Página BLCC (sección 6).
- [x] Catálogo `/productos`, categorías y 24 fichas de producto (secciones 7, 8, 14).
- [x] Soluciones por sector `/soluciones` y sus 6 páginas (sección 9).
- [x] Servicios (sección 10).
- [x] Nosotros (sección 11).
- [x] Contacto con formulario de cotización (secciones 4.5 y 12).
- [ ] Contenido pendiente por SV Solavi (datos corporativos, fotos reales,
      fichas técnicas descargables) y revisión previa a publicación (sección 15).

## Nota de contenido

Las capacidades, dimensiones, consumos y configuraciones deben confirmarse con
SV Solavi antes de cerrar una venta. No se publican precios; cada equipo cierra
con una llamada a la acción para solicitar asesoría y cotización.
