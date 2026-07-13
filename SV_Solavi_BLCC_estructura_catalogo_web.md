# SV Solavi — Sitio web de equipos profesionales BLCC

> Documento maestro de contenido, arquitectura y especificaciones de diseño para implementar el sitio web.
>
> **Marca comercial principal:** SV Solavi  
> **Marca de producto / fabricante:** BLCC  
> **Objetivo principal:** presentar el respaldo, experiencia y tecnología de BLCC; mostrar el catálogo completo; generar solicitudes de asesoría y cotización para SV Solavi.
>
> **Nota de implementación:** no publicar precios directamente. Todos los equipos deben cerrar con una llamada a la acción para solicitar asesoría y cotización.
>
> **Nota técnica:** las capacidades, dimensiones, consumos y configuraciones deben confirmarse con SV Solavi antes de cerrar una venta. Algunos datos del catálogo original pueden depender del mercado, voltaje, combustible o configuración solicitada.

---

# 1. Principios del sitio

## 1.1 Jerarquía de marca

El sitio debe comunicar a **SV Solavi como distribuidor y punto de contacto comercial**, mientras que **BLCC funciona como el respaldo tecnológico y fabricante**.

Uso recomendado en encabezados:

- Logo principal: **SV Solavi**
- Sello secundario: **Equipos BLCC**
- Descriptor: **Soluciones profesionales para lavandería comercial e industrial**

Evitar afirmar “distribuidor autorizado” mientras no exista validación documental para usar esa expresión.

## 1.2 Objetivos de conversión

La página debe facilitar que una persona pueda:

1. Entender qué tipo de equipos ofrece SV Solavi.
2. Conocer el respaldo industrial de BLCC.
3. Encontrar un producto por categoría, aplicación o capacidad.
4. Comparar modelos de una misma familia.
5. Solicitar asesoría técnica y una cotización.

## 1.3 Llamadas a la acción

Usar consistentemente:

- **Solicitar cotización**
- **Hablar con un asesor**
- **Encontrar el equipo adecuado**
- **Cotizar este modelo**
- **Descargar ficha técnica**
- **Ver todos los equipos**

No utilizar:

- Comprar ahora.
- Agregar al carrito.
- Precio desde.
- Pago en línea.

---

# 2. Mapa del sitio

```text
/
├── /blcc
├── /productos
│   ├── /productos/lavado-industrial
│   │   ├── /lavadora-extractora-xgq
│   │   ├── /lavadora-extractora-xsx
│   │   ├── /lavadora-barrera-sanitaria-bw
│   │   └── /lavadora-horizontal-xgb
│   ├── /productos/secado-industrial
│   │   └── /secadora-industrial-hg
│   ├── /productos/autoservicio
│   │   ├── /lavadora-autoservicio-swq
│   │   ├── /secadora-autoservicio-hgq
│   │   ├── /secadora-doble-apilada-shg
│   │   └── /torre-lavadora-secadora-xth
│   ├── /productos/lavado-en-seco
│   │   ├── /lavado-seco-hidrocarburo-swh
│   │   └── /lavado-seco-percloroetileno-gxzq
│   ├── /productos/planchado-y-doblado
│   │   ├── /calandra-industrial-yp
│   │   ├── /dobladora-zd3300-v
│   │   └── /alimentadora-ings-3300
│   ├── /productos/equipos-complementarios
│   │   ├── /centrifuga-mg-tl
│   │   ├── /mesa-planchado-ytt-1475
│   │   ├── /generador-vapor-ldr3-04r
│   │   ├── /mesa-planchado-deluxe-hxgt-1
│   │   ├── /transportador-prendas-ct
│   │   ├── /prensa-utilitaria-jtj-1
│   │   ├── /mesa-desmanchado-sws
│   │   ├── /maniqui-acabado-rxj-1
│   │   ├── /lavadora-calzado-bzd-1
│   │   └── /empacadora-prendas-bzt-50
├── /soluciones
│   ├── /lavanderias-autoservicio
│   ├── /hoteles
│   ├── /hospitales-y-clinicas
│   ├── /lavanderias-industriales
│   ├── /tintorerias
│   └── /escuelas-residencias-y-comunidades
├── /servicios
├── /nosotros
└── /contacto
```

---

# 3. Especificaciones generales de diseño

## 3.1 Dirección visual

El sitio debe sentirse:

- Industrial.
- Profesional.
- Técnico, pero fácil de entender.
- Limpio y contemporáneo.
- Con suficiente espacio en blanco.
- Más parecido a una empresa de ingeniería y soluciones que a una tienda en línea.

## 3.2 Paleta sugerida

```css
:root {
  --color-primary: #D62828;
  --color-primary-dark: #A7191F;
  --color-primary-light: #FCEBEC;

  --color-ink: #161616;
  --color-ink-soft: #3F4348;
  --color-muted: #6B7280;

  --color-surface: #FFFFFF;
  --color-surface-alt: #F5F6F7;
  --color-border: #E3E5E8;

  --color-success: #167D4C;
  --color-whatsapp: #25D366;
}
```

El rojo se utiliza como acento y no como fondo dominante en todas las secciones.

## 3.3 Tipografía

Recomendadas:

- Encabezados: **Manrope**, **Inter Tight** o **Montserrat**.
- Cuerpo: **Inter**, **Source Sans 3** o **Manrope**.

Escala base:

```css
h1: clamp(2.5rem, 5vw, 5rem);
h2: clamp(2rem, 3.5vw, 3.5rem);
h3: clamp(1.35rem, 2vw, 2rem);
body: clamp(1rem, 1.2vw, 1.125rem);
small: 0.875rem;
```

## 3.4 Retícula y espacios

```css
--container-max: 1280px;
--container-wide: 1440px;
--section-y-desktop: 112px;
--section-y-mobile: 72px;
--card-radius: 18px;
--button-radius: 10px;
```

- Contenido principal máximo: 1280 px.
- Tablas técnicas: permitir ancho completo.
- Tarjetas de producto: 3 columnas en escritorio, 2 en tableta, 1 en móvil.
- No usar sombras intensas; preferir bordes ligeros.

## 3.5 Tratamiento de imágenes

Cada producto debe reservar un espacio para:

1. Imagen principal recortada sobre fondo blanco o gris muy claro.
2. Imagen alternativa o lateral.
3. Detalles del panel, tambor o componentes.
4. Imagen contextual en lavandería cuando exista.

Formato recomendado:

```text
Producto principal: 1600 × 1200 px, PNG/WebP con fondo transparente o blanco.
Tarjeta: 1200 × 900 px, WebP.
Aplicación: 1600 × 1000 px, WebP.
Detalles: 1000 × 750 px, WebP.
```

Placeholder estándar:

```md
![Imagen principal del producto — pendiente](PLACEHOLDER_IMAGE_PRODUCTO)
```

Componente sugerido:

```tsx
<ProductImage
  src={product.heroImage ?? "/images/placeholders/product-4x3.webp"}
  alt={product.imageAlt}
  aspectRatio="4/3"
  objectFit="contain"
/>
```

## 3.6 Interacciones

- Encabezado fijo después de 100 px de scroll.
- Filtros del catálogo con actualización sin recargar.
- Tablas comparativas con desplazamiento horizontal en móvil.
- Acordeones para especificaciones secundarias.
- Barra fija inferior en móvil con:
  - WhatsApp.
  - Solicitar cotización.
- Botón flotante de WhatsApp discreto.
- Animaciones suaves de 150–250 ms.
- Respetar `prefers-reduced-motion`.

## 3.7 Accesibilidad

- Contraste AA.
- Todo botón debe tener texto visible.
- Tablas con encabezados `<th>`.
- Estados de foco visibles.
- Imágenes con texto alternativo.
- Formularios con etiquetas permanentes.
- No utilizar texto dentro de imágenes como única fuente de información.

---

# 4. Componentes reutilizables

## 4.1 ProductCard

Campos:

```ts
type ProductCard = {
  name: string;
  series: string;
  category: string;
  shortDescription: string;
  capacityLabel?: string;
  image: string;
  imageAlt: string;
  href: string;
  featured?: boolean;
};
```

Diseño:

```text
[IMAGEN 4:3]
Categoría
Nombre del producto
Descripción de 2–3 líneas
Capacidades disponibles
[Ver equipo] [Cotizar]
```

## 4.2 ProductHero

```text
Breadcrumbs
Etiqueta de categoría
H1 Nombre del producto
Resumen comercial
Chips con capacidades / funciones
[Solicitar cotización] [Descargar ficha]
[ESPACIO PARA IMAGEN PRINCIPAL]
```

## 4.3 FeatureGrid

Máximo seis beneficios por vista. Utilizar iconos lineales.

## 4.4 ModelComparisonTable

- Primera columna fija en escritorio y móvil.
- Cabecera roja.
- Filas alternadas blanco/gris.
- Botón para ocultar o mostrar variables secundarias.
- Nunca reducir el texto por debajo de 14 px.

## 4.5 QuoteForm

Campos:

```text
Nombre*
Empresa
Correo*
Teléfono / WhatsApp*
Ciudad y estado*
Tipo de operación*
Equipo de interés
Capacidad estimada
Volumen diario aproximado
Método de calentamiento disponible
Comentarios
Aceptación de privacidad*
```

Mensaje final:

> Gracias. Un asesor de SV Solavi revisará tu proyecto y se pondrá en contacto contigo.

---

# 5. Página de inicio

## 5.1 Hero

**Eyebrow:** Equipos profesionales BLCC

# Soluciones de lavandería para cada escala de operación

Equipos para lavado, secado, autoservicio, planchado y acabado comercial e industrial, con asesoría y atención de SV Solavi.

**CTA principal:** Explorar equipos  
**CTA secundario:** Solicitar cotización

```md
![Composición de equipos BLCC — pendiente](PLACEHOLDER_HOME_HERO)
```

### Chips de confianza

- Fabricante de equipos desde 2008.
- Presencia internacional.
- Equipos bajo estándares CE.
- Configuraciones para distintos niveles de operación.

## 5.2 Presentación de BLCC

## Tecnología internacional para lavanderías profesionales

BLCC es un fabricante especializado en equipos para lavandería comercial e industrial. Su portafolio integra sistemas de lavado, secado, autoservicio, lavado en seco, planchado, doblado y acabado para operaciones de diferentes tamaños.

La compañía integra investigación, desarrollo y producción, y trabaja con soluciones configurables para hoteles, hospitales, lavanderías comerciales, autoservicios y plantas industriales.

**CTA:** Conocer BLCC

```md
![Instalaciones o fábrica BLCC — pendiente](PLACEHOLDER_BLCC_FACTORY)
```

## 5.3 Categorías

## Encuentra el equipo que necesita tu operación

### Lavado industrial

Lavadoras extractoras, equipos de barrera sanitaria y sistemas horizontales para diferentes volúmenes de procesamiento.

### Secado industrial

Secadoras de distintas capacidades y alternativas de calentamiento para operaciones comerciales e industriales.

### Lavanderías de autoservicio

Lavadoras, secadoras y torres apiladas con opciones de operación mediante monedas, tarjeta o QR, según configuración.

### Lavado en seco

Equipos para procesos con hidrocarburo o percloroetileno, orientados a tintorerías y cuidado profesional de prendas.

### Planchado y doblado

Calandras, dobladoras y alimentadoras para el procesamiento eficiente de blancos y textiles planos.

### Acabado y equipos complementarios

Mesas de planchado, prensas, maniquíes, transportadores, centrífugas y accesorios para completar la operación.

## 5.4 Sectores

## Soluciones para diferentes tipos de negocio

- Lavanderías de autoservicio.
- Hoteles y centros de hospedaje.
- Hospitales y clínicas.
- Lavanderías industriales.
- Tintorerías.
- Escuelas, residencias y comunidades.

## 5.5 Ventajas

## Equipos diseñados para una operación confiable

### Durabilidad

Construcción orientada a trabajo comercial e industrial, con uso de acero inoxidable en componentes clave según el modelo.

### Control y automatización

Paneles programables y controles por microcomputadora para facilitar la configuración de ciclos y procesos.

### Diferentes capacidades

Alternativas desde equipos compactos hasta maquinaria para operaciones de gran volumen.

### Configuración del proyecto

Posibilidad de seleccionar capacidades, alimentación eléctrica, método de calentamiento y combinación de equipos de acuerdo con las condiciones del proyecto.

## 5.6 SV Solavi

## La tecnología de BLCC con atención cercana

SV Solavi te ayuda a evaluar las necesidades de tu operación, identificar capacidades y construir una propuesta de equipos adecuada para tu proyecto.

### 1. Conocemos tu operación

Revisamos el tipo de negocio, volumen estimado, instalaciones y objetivos.

### 2. Seleccionamos los equipos

Proponemos capacidades, configuraciones y equipos complementarios.

### 3. Preparamos tu cotización

Integramos una propuesta comercial y técnica para el proyecto.

**CTA:** Hablar con un asesor

## 5.7 CTA final

# Encuentra la solución adecuada para tu lavandería

Cuéntanos sobre tu operación y recibe una recomendación de equipos y capacidades.

**CTA principal:** Solicitar cotización  
**CTA secundario:** Contactar por WhatsApp

---

# 6. Página BLCC

## Hero

**Eyebrow:** Fabricante internacional

# Equipos profesionales para lavandería comercial e industrial

BLCC desarrolla y fabrica soluciones para lavado, secado, autoservicio, planchado, doblado y acabado.

```md
![Imagen institucional BLCC — pendiente](PLACEHOLDER_BLCC_ABOUT_HERO)
```

## Perfil

BLCC forma parte de Spruce Group Ltd y desarrolla equipos comerciales e industriales de lavandería. La empresa integra investigación, desarrollo y producción, con un portafolio que abarca lavadoras extractoras, secadoras, sistemas de autoservicio, equipos de lavado en seco, calandras, dobladoras y maquinaria de acabado.

El catálogo corporativo comunica una base industrial de aproximadamente 200,000 m², un equipo de investigación y desarrollo de más de 300 personas y una operación orientada a proyectos nacionales e internacionales.

## Principios de producto

- Calidad y consistencia de fabricación.
- Equipos para operaciones de distintas escalas.
- Configuraciones personalizables.
- Soluciones integrales de lavandería.
- Control de calidad y estándares CE.
- Planeación de equipos y flujos de trabajo.

## Datos destacados

```text
Desde 2008
50+ países
200,000 m² de base industrial*
300+ integrantes en investigación y desarrollo*
```

\* Datos comunicados en materiales corporativos de BLCC; validar vigencia antes de publicar.

## Certificaciones

Mostrar logotipos o fotografías de certificaciones únicamente cuando SV Solavi cuente con archivos legibles y autorización para publicarlos.

```md
![Certificaciones BLCC — pendiente](PLACEHOLDER_BLCC_CERTIFICATIONS)
```

---

# 7. Catálogo general

## Hero

# Catálogo de equipos BLCC

Explora soluciones para lavado, secado, autoservicio, tintorería, planchado, doblado y acabado profesional.

## Filtros

```text
Categoría
Aplicación
Capacidad
Método de calentamiento
Tipo de operación
```

## Categorías y productos

### Lavado industrial

- Serie XGQ — Lavadora extractora automática.
- Serie XSX — Lavadora extractora automática suspendida.
- Serie BW — Lavadora de barrera sanitaria.
- Serie XGB — Lavadora horizontal.

### Secado industrial

- Serie HG — Secadora automática.

### Autoservicio

- Serie SWQ — Lavadora operada por monedas.
- Serie HGQ — Secadora operada por monedas.
- Serie SHG — Secadora doble apilada con monedas/QR.
- Serie XTH — Torre lavadora-secadora con monedas/QR.

### Lavado en seco

- Serie SWH — Máquina de lavado en seco con hidrocarburo.
- Serie GXZQ — Máquina cerrada de lavado en seco con percloroetileno.

### Planchado y doblado

- Serie YP — Calandra industrial.
- ZD3300-V — Máquina dobladora.
- INGS-3300 — Alimentadora de textiles.

### Equipos complementarios y acabado

- Serie MG-TL — Centrífuga de tres patas.
- YTT-1475 — Mesa de planchado.
- LDR3-0.4R — Generador de vapor.
- HXGT-1 — Mesa de planchado deluxe.
- CT — Transportador de prendas.
- JTJ-1 — Prensa utilitaria.
- SWS — Mesa de desmanchado.
- RXJ-1 — Maniquí de acabado.
- BZD-1 — Lavadora comercial de calzado.
- BZT-50 — Empacadora de prendas.

---

# 8. Productos

---

## 8.1 Serie XGQ — Lavadora extractora automática

**Slug:** `/productos/lavado-industrial/lavadora-extractora-xgq`  
**Categoría:** Lavado industrial  
**Capacidades:** 15, 20, 25, 30, 50, 100, 130 y 150 kg

```md
![Lavadora extractora XGQ — imagen principal pendiente](PLACEHOLDER_XGQ_HERO)
```

### Resumen

La serie XGQ integra lavado y extracción en un solo equipo para lavanderías comerciales e industriales. Está disponible en capacidades desde 15 hasta 150 kg, permitiendo configurar soluciones para operaciones medianas o plantas de mayor volumen.

### Aplicaciones recomendadas

- Hoteles.
- Hospitales y clínicas.
- Lavanderías industriales.
- Centros de hospedaje.
- Procesamiento de uniformes.
- Operaciones con altos volúmenes de blancos.

### Beneficios principales

- Tambor interior fabricado en acero inoxidable SUS304.
- Control mediante microcomputadora.
- Variación de velocidad para diferentes etapas del ciclo.
- Sistema de suspensión y absorción de vibraciones.
- Puerta de gran apertura para carga, descarga e inspección.
- Compartimiento de detergente separado.
- Motor de frecuencia variable.
- Versiones configurables en diferentes colores.

### Modelos compactos y medianos

| Especificación | XGQ-15 | XGQ-20 | XGQ-25 | XGQ-30 |
|---|---:|---:|---:|---:|
| Capacidad | 15 kg | 20 kg | 25 kg | 30 kg |
| Voltaje nominal | 220/380 V | 220/380 V | 220/380 V | 220/380 V |
| Frecuencia | 50/60 Hz | 50/60 Hz | 50/60 Hz | 50/60 Hz |
| Calentamiento | Electricidad / vapor | Electricidad / vapor | Electricidad / vapor | Electricidad / vapor |
| Tambor | 730 × 400 mm | 730 × 550 mm | 800 × 500 mm | 800 × 600 mm |
| Velocidad de lavado | 45 rpm | 45 rpm | 45 rpm | 45 rpm |
| Velocidad de distribución | 400 rpm | 400 rpm | 400 rpm | 350 rpm |
| Alta extracción | 800 rpm | 800 rpm | 800 rpm | 700 rpm |
| Potencia de motor | 2.2 kW | 2.2 kW | 3 kW | 4 kW |
| Presión de vapor | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa |
| Entrada agua fría | Ø20 mm | Ø20 mm | Ø20 mm | Ø20 mm |
| Entrada agua caliente | Ø20 mm | Ø20 mm | Ø20 mm | Ø20 mm |
| Entrada de vapor | Ø20 mm | Ø20 mm | Ø20 mm | Ø20 mm |
| Drenaje | Ø50 mm | Ø50 mm | Ø60 mm | Ø60 mm |
| Peso neto | 670 kg | 810 kg | 850 kg | 930 kg |
| Dimensiones | 1220 × 1040 × 1730 mm | 1220 × 1115 × 1730 mm | 1220 × 1090 × 1730 mm | 1220 × 1280 × 1730 mm |

### Modelos de gran capacidad

| Especificación | XGQ-50 | XGQ-100 | XGQ-130 | XGQ-150 |
|---|---:|---:|---:|---:|
| Capacidad | 50 kg | 100 kg | 130 kg | 150 kg |
| Voltaje nominal | AC 110/220/380/415/440 V | AC 110/220/380/415/440 V | AC 110/220/380/415/440 V | AC 110/220/380/415/440 V |
| Frecuencia | 50/60 Hz | 50/60 Hz | 50/60 Hz | 50/60 Hz |
| Calentamiento | Electricidad / vapor | Electricidad / vapor | Electricidad / vapor | Electricidad / vapor |
| Tambor | 1080 × 600 mm | 1250 × 840 mm | 1350 × 920 mm | 1450 × 920 mm |
| Velocidad de lavado | 36 rpm | 36 rpm | 36 rpm | 36 rpm |
| Velocidad de distribución | 350 rpm | 350 rpm | 350 rpm | 350 rpm |
| Alta extracción | 700 rpm | 700 rpm | 700 rpm | 700 rpm |
| Potencia de motor | 5.5 kW | 7.5 kW | 15 kW | 18 kW |
| Potencia de calentamiento | 24 kW | 30 kW | 30 kW | 30 kW |
| Presión de vapor | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa |
| Entrada agua fría | Ø40 mm | Ø40 mm | Ø40 mm | Ø60 mm |
| Entrada agua caliente | Ø40 mm | Ø40 mm | Ø40 mm | Ø60 mm |
| Entrada de vapor | Ø40 mm | Ø40 mm | Ø40 mm | Ø60 mm |
| Drenaje | Ø110 mm | Ø140 mm | 2 × Ø110 mm | 2 × Ø110 mm |
| Peso neto | 1910 kg | 3030 kg | 4650 kg | 6100 kg |
| Dimensiones | 1650 × 1680 × 2050 mm | 1860 × 2160 × 2000 mm | 2000 × 2670 × 2050 mm | 2400 × 2850 × 2220 mm |

### CTA

**Título:** ¿Qué capacidad necesita tu lavandería?  
**Texto:** Comparte tu volumen de procesamiento, tipo de prendas y condiciones de instalación para recibir una recomendación.  
**Botón:** Cotizar serie XGQ

---

## 8.2 Serie XSX — Lavadora extractora automática suspendida

**Slug:** `/productos/lavado-industrial/lavadora-extractora-xsx`  
**Categoría:** Lavado industrial  
**Capacidades:** 15, 20 y 25 kg

```md
![Lavadora extractora XSX — imagen principal pendiente](PLACEHOLDER_XSX_HERO)
```

### Resumen

La serie XSX es una lavadora extractora compacta con sistema suspendido, diseñada para reducir vibraciones y facilitar su integración en lavanderías comerciales, hoteles y operaciones con capacidades de 15 a 25 kg.

### Beneficios principales

- Diseño suspendido para mejorar el balance operativo.
- Sistema de resortes y absorción de impactos.
- Amortiguadores hidráulicos para estabilización.
- Velocidad máxima cercana a 900 rpm según modelo.
- Tambor y panel exterior en acero inoxidable 304.
- Iluminación interior azul.
- Control electrónico programable.

### Especificaciones

| Especificación | XSX-15 | XSX-20 | XSX-25 |
|---|---:|---:|---:|
| Capacidad | 15 kg | 20 kg | 25 kg |
| Voltaje nominal | 220/380 V | 220/380 V | 220/380 V |
| Frecuencia | 50/60 Hz | 50/60 Hz | 50/60 Hz |
| Calentamiento | Electricidad / vapor | Electricidad / vapor | Electricidad / vapor |
| Velocidad de lavado | 45 rpm | 45 rpm | 45 rpm |
| Velocidad de distribución | 400 rpm | 400 rpm | 400 rpm |
| Alta extracción | 900 rpm | 900 rpm | 900 rpm |
| Potencia de motor | 2.2 kW | 2.2 kW | 3 kW |
| Potencia de calentamiento | 12 kW a 220/380 V | 12 kW a 220/380 V | 14 kW a 220/380 V |
| Consumo de agua | 180 L | 220 L | 280 L |
| Consumo de gas indicado | ≤20 kg | ≤20 kg | ≤20 kg |
| Presión de vapor | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa |
| Entrada agua fría | Ø20 mm | Ø20 mm | Ø20 mm |
| Entrada agua caliente | Ø20 mm | Ø20 mm | Ø20 mm |
| Entrada de vapor | Ø20 mm | Ø20 mm | Ø20 mm |
| Drenaje | Ø75 mm | Ø75 mm | Ø75 mm |
| Peso neto | 520 kg | 530 kg | 560 kg |
| Dimensiones | 980 × 1200 × 1400 mm | 980 × 1250 × 1400 mm | 980 × 1250 × 1400 mm |

### CTA

**Botón:** Solicitar cotización de XSX

---

## 8.3 Serie HG — Secadora automática industrial

**Slug:** `/productos/secado-industrial/secadora-industrial-hg`  
**Categoría:** Secado industrial  
**Capacidades:** 15, 20, 25, 35, 50, 70, 100 y 150 kg

```md
![Secadora industrial HG — imagen principal pendiente](PLACEHOLDER_HG_HERO)
```

### Resumen

La serie HG ofrece secado profesional para lavanderías comerciales e industriales. Está disponible en capacidades de 15 a 150 kg y admite distintas fuentes de calentamiento según configuración.

### Aplicaciones

- Hoteles.
- Hospitales.
- Lavanderías industriales.
- Procesamiento de uniformes.
- Lavanderías comerciales.
- Centros deportivos y residencias.

### Beneficios principales

- Tambor de acero inoxidable SUS304.
- Control por microcomputadora.
- Programación de tiempo, temperatura y enfriamiento.
- Operación suave y de bajo ruido.
- Puerta de gran apertura.
- Colector de pelusa extraíble.
- Flujo de aire de alta densidad.
- Colores personalizables.
- Calentamiento eléctrico, vapor, gas licuado, gas o gas natural, según modelo.

### Modelos de 15 a 35 kg

| Especificación | HG-15 | HG-20 | HG-25 | HG-35 |
|---|---:|---:|---:|---:|
| Capacidad | 15 kg | 20 kg | 25 kg | 35 kg |
| Voltaje nominal | 220/380 V | 220/380 V | 220/380 V | 380 V |
| Frecuencia | 50/60 Hz | 50/60 Hz | 50/60 Hz | 50/60 Hz |
| Calentamiento | Electricidad / vapor / gas LP / gas / gas natural | Igual | Igual | Igual |
| Tambor | 750 × 475 mm | 750 × 575 mm | 750 × 675 mm | 970 × 900 mm |
| Velocidad de secado | 36 rpm | 36 rpm | 36 rpm | 36 rpm |
| Potencia de motor | 0.12 kW | 0.12 kW | 0.75 kW | 0.75 kW |
| Ventilador | 0.55 kW | 0.55 kW | 0.55 kW | 0.75 kW |
| Presión de vapor | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa |
| Ducto de salida | 110 mm | 110 mm | 110 mm | 160 mm |
| Peso neto | 240 kg | 240 kg | 240 kg | 480 kg |
| Dimensiones | 900 × 1010 × 1700 mm | 900 × 1060 × 1700 mm | 900 × 1160 × 1700 mm | 1060 × 1500 × 1900 mm |

### Modelos de 50 a 150 kg

| Especificación | HG-50 | HG-70 | HG-100 | HG-150 |
|---|---:|---:|---:|---:|
| Capacidad | 50 kg | 70 kg | 100 kg | 150 kg |
| Voltaje nominal | 380 V | 380 V | 380 V | 380 V |
| Frecuencia | 50/60 Hz | 50/60 Hz | 50/60 Hz | 50/60 Hz |
| Calentamiento | Electricidad / vapor / gas LP / gas / gas natural | Igual | Igual | Igual |
| Tambor | 1140 × 970 mm | 1140 × 1070 mm | 1460 × 1220 mm | 1810 × 1260 mm |
| Velocidad de secado | 36 rpm | 36 rpm | 36 rpm | 36 rpm |
| Potencia de motor | 1.1 kW | 1.1 kW | 2.2 kW | 4 kW |
| Ventilador | 1.5 kW | 1.5 kW | 2 × 1.5 kW | 2 × 1.5 kW |
| Presión de vapor | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa |
| Ducto de salida | 160 mm | 160 mm | 260 mm | 260 mm |
| Peso neto | 640 kg | 640 kg | 1200 kg | 2200 kg |
| Dimensiones | 1305 × 1650 × 2130 mm | 1305 × 1750 × 2130 mm | 1700 × 2050 × 2700 mm | 2050 × 2330 × 3000 mm |

### CTA

**Botón:** Cotizar secadora HG

---

## 8.4 Serie SWQ — Lavadora de autoservicio

**Slug:** `/productos/autoservicio/lavadora-autoservicio-swq`  
**Categoría:** Autoservicio  
**Capacidades:** 12, 15, 20 y 25 kg

```md
![Lavadora de autoservicio SWQ — imagen principal pendiente](PLACEHOLDER_SWQ_HERO)
```

### Resumen

La serie SWQ está diseñada para lavanderías de autoservicio y operaciones que requieren cobro por ciclo. Según configuración, puede integrar monedas, tarjeta u otros sistemas compatibles.

### Beneficios principales

- Sistema de control cableado.
- Posibilidad de configurar monedas y tarjeta.
- Contenedor de detergente.
- Tambor interior de acero inoxidable SUS304.
- Control por microcomputadora.
- Seguro de puerta con interbloqueo.
- Alternativas de color.
- Adecuada para hoteles, residencias, lavanderías y escuelas.

### Especificaciones

| Especificación | SWQ-12 | SWQ-15 | SWQ-20 | SWQ-25 |
|---|---:|---:|---:|---:|
| Capacidad | 12 kg | 15 kg | 20 kg | 25 kg |
| Voltaje | AC 110/220/380/415/440 V | Igual | Igual | Igual |
| Frecuencia | 50/60 Hz | 50/60 Hz | 50/60 Hz | 50/60 Hz |
| Tambor | 670 × 364 mm | 670 × 450 mm | 670 × 524 mm | 670 × 600 mm |
| Ruido indicado | ≤70 dB | ≤70 dB | ≤70 dB | ≤70 dB |
| Calentamiento | Electricidad / vapor | Electricidad / vapor | Electricidad / vapor | Electricidad / vapor |
| Velocidad de lavado | 45 rpm | 45 rpm | 45 rpm | 45 rpm |
| Distribución | 350 rpm | 350 rpm | 350 rpm | 350 rpm |
| Alta extracción | 700 rpm | 700 rpm | 700 rpm | 700 rpm |
| Potencia de motor | 2.2 kW | 2.2 kW | 2.2 kW | 2.2 kW |
| Potencia de calentamiento | 8 kW | 8 kW | 8 kW | 8 kW |
| Consumo de agua | 115 L | 130 L | 165 L | 200 L |
| Presión de vapor | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa |
| Entradas agua/vapor | Ø20 mm | Ø20 mm | Ø20 mm | Ø20 mm |
| Drenaje | Ø75 mm | Ø75 mm | Ø75 mm | Ø75 mm |
| Peso neto | 360 kg | 380 kg | 380 kg | 410 kg |
| Dimensiones | 900 × 1050 × 1330 mm | 900 × 1050 × 1330 mm | 900 × 1110 × 1330 mm | 900 × 1160 × 1330 mm |

### CTA

**Botón:** Diseñar mi lavandería de autoservicio

---

## 8.5 Serie HGQ — Secadora de autoservicio

**Slug:** `/productos/autoservicio/secadora-autoservicio-hgq`  
**Categoría:** Autoservicio  
**Capacidades:** 15, 20 y 25 kg

```md
![Secadora de autoservicio HGQ — imagen principal pendiente](PLACEHOLDER_HGQ_HERO)
```

### Resumen

Secadora comercial para lavanderías de autoservicio, con panel de control y sistema de cobro configurable. Permite seleccionar diferentes métodos de calentamiento de acuerdo con la instalación.

### Beneficios principales

- Tambor de acero inoxidable SUS304.
- Control programable de tiempo, temperatura y enfriamiento.
- Operación de bajo ruido.
- Puerta amplia.
- Filtro colector de pelusa.
- Flujo de aire de alta densidad.
- Colores personalizables.

### Especificaciones

| Especificación | HGQ-15 | HGQ-20 | HGQ-25 |
|---|---:|---:|---:|
| Capacidad | 15 kg | 20 kg | 25 kg |
| Voltaje | 220/380 V | 220/380 V | 220/380 V |
| Frecuencia | 50/60 Hz | 50/60 Hz | 50/60 Hz |
| Tambor | 750 × 475 mm | 750 × 575 mm | 750 × 675 mm |
| Velocidad de secado | 36 rpm | 36 rpm | 36 rpm |
| Calentamiento | Electricidad / vapor / gas LP / gas / gas natural | Igual | Igual |
| Potencia de motor | 0.12 kW | 0.12 kW | 0.75 kW |
| Ventilador | 0.55 kW | 0.55 kW | 0.55 kW |
| Potencia de secado | 6 kW | 8 kW | 10 kW |
| Presión de vapor | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa |
| Ducto de salida | 110 mm | 110 mm | 110 mm |
| Peso neto | 240 kg | 240 kg | 240 kg |
| Dimensiones | 900 × 1010 × 1700 mm | 900 × 1100 × 1800 mm | 900 × 1160 × 1700 mm |

### CTA

**Botón:** Cotizar secadora HGQ

---

## 8.6 Serie SHG — Secadora doble apilada con monedas o QR

**Slug:** `/productos/autoservicio/secadora-doble-apilada-shg`  
**Categoría:** Autoservicio  
**Capacidades:** 15, 20 y 25 kg por nivel, según modelo

```md
![Secadora doble SHG — imagen principal pendiente](PLACEHOLDER_SHG_HERO)
```

### Resumen

La serie SHG integra dos secadoras en una misma huella de piso para maximizar la capacidad de atención en lavanderías de autoservicio. Puede configurarse con sistemas de cobro por moneda, tarjeta o QR según el proyecto.

### Beneficios principales

- Dos módulos de secado independientes en formato vertical.
- Reducción del espacio ocupado.
- Tambor de acero inoxidable SUS304.
- Operación configurable mediante sistemas de cobro.
- Control por microcomputadora.
- Sistema de circulación térmica.
- Opciones de color.
- Alternativas de calentamiento eléctrico o gas, según configuración.

### Especificaciones

| Especificación | SHG-15 | SHG-20 | SHG-25 |
|---|---:|---:|---:|
| Capacidad indicada | 15 kg | 20 kg | 25 kg |
| Voltaje | AC 220/380 V | AC 220/380 V | AC 220/380 V |
| Frecuencia | 50/60 Hz | 50/60 Hz | 50/60 Hz |
| Tambor | 760 × 695 mm | 760 × 695 mm | 760 × 855 mm |
| Calentamiento | Electricidad / gas LP / gas / gas natural | Igual | Igual |
| Velocidad de secado | 40 rpm | 40 rpm | 36 rpm |
| Potencia de motor | 0.37 kW | 0.37 kW | 0.37 kW |
| Ventilador | 0.55 kW | 0.55 kW | 0.55 kW |
| Potencia de secado | 9 kW | 9 kW | 9 kW |
| Consumo de aire indicado | 20–30 kg | 30–35 kg | 30–35 kg |
| Presión de vapor indicada | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa |
| Ducto de salida | Ø160 mm | Ø160 mm | Ø160 mm |
| Peso neto | 290 kg | 290 kg | 420 kg |
| Dimensiones | 800 × 1160 × 1920 mm | 800 × 1160 × 1920 mm | 800 × 1330 × 1920 mm |

### Nota

Confirmar con fábrica si la capacidad indicada corresponde a cada tambor o a la capacidad comercial total del equipo.

### CTA

**Botón:** Cotizar secadora doble SHG

---

## 8.7 Serie XTH — Torre lavadora-secadora con monedas o QR

**Slug:** `/productos/autoservicio/torre-lavadora-secadora-xth`  
**Categoría:** Autoservicio  
**Capacidades:** 12, 15, 20 y 25 kg

```md
![Torre lavadora-secadora XTH — imagen principal pendiente](PLACEHOLDER_XTH_HERO)
```

### Resumen

La serie XTH combina una lavadora y una secadora en una sola columna. Está orientada a lavanderías de autoservicio que buscan aumentar el número de equipos disponibles sin ampliar su superficie.

### Beneficios principales

- Lavado y secado en una misma huella de piso.
- Tambor interior de acero inoxidable SUS304.
- Procesos controlados por microcomputadora.
- Compatibilidad configurable con monedas, tarjeta, código o QR.
- Configuración compacta.
- Diferentes métodos de calentamiento.
- Opciones de color.

### Especificaciones

| Especificación | XTH-12 | XTH-15 | XTH-20 | XTH-25 |
|---|---:|---:|---:|---:|
| Capacidad | 12 kg | 15 kg | 20 kg | 25 kg |
| Voltaje | AC 110/220/380/415/440 V | Igual | Igual | Igual |
| Frecuencia | 50/60 Hz | 50/60 Hz | 50/60 Hz | 50/60 Hz |
| Tambor de lavado | 670 × 364 mm | 670 × 450 mm | 670 × 524 mm | 670 × 575 mm |
| Tambor de secado | 760 × 696 mm | 760 × 696 mm | 760 × 696 mm | 760 × 855 mm |
| Velocidad de lavado | 45 rpm | 45 rpm | 45 rpm | 45 rpm |
| Velocidad de secado | 36 rpm | 36 rpm | 36 rpm | 36 rpm |
| Motor de lavado | 2.2 kW | 2.2 kW | 2.2 kW | 2.2 kW |
| Motor de secado | 0.37 kW | 0.37 kW | 0.37 kW | 0.37 kW |
| Ventilador de secado | 0.55 kW | 0.55 kW | 0.55 kW | 0.55 kW |
| Calentamiento de lavado | 8 kW | 8 kW | 8 kW | 8 kW |
| Método de calentamiento | Electricidad / vapor / gas LP / gas / gas natural | Igual | Igual | Igual |
| Potencia de secado | 9 kW | 9 kW | 9 kW | 9 kW |
| Consumo de agua | 115 L | 130 L | 165 L | 200 L |
| Consumo de gas indicado | ≤16 kg | ≤18 kg | ≤20 kg | ≤25 kg |
| Consumo de aire indicado | 15–18 kg | 20–30 kg | 30–35 kg | 36–45 kg |
| Presión de vapor | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa |
| Entradas agua/vapor | Ø20 mm | Ø20 mm | Ø20 mm | Ø20 mm |
| Drenaje | Ø75 mm | Ø75 mm | Ø75 mm | Ø75 mm |
| Peso neto | 520 kg | 520 kg | 530 kg | 550 kg |
| Dimensiones | 900 × 1180 × 2080 mm | 900 × 1180 × 2080 mm | 900 × 1180 × 2080 mm | 900 × 1330 × 2080 mm |

### CTA

**Botón:** Diseñar una lavandería con torres XTH

---

## 8.8 Serie SWH — Máquina de lavado en seco con hidrocarburo

**Slug:** `/productos/lavado-en-seco/lavado-seco-hidrocarburo-swh`  
**Categoría:** Lavado en seco  
**Capacidades:** 10, 12 y 15 kg

```md
![Equipo de hidrocarburo SWH — imagen principal pendiente](PLACEHOLDER_SWH_HERO)
```

### Resumen

La serie SWH utiliza hidrocarburo para el cuidado profesional de prendas. Su configuración está orientada a tintorerías que requieren ciclos automáticos o manuales y recuperación del solvente para reutilización.

### Beneficios principales

- Tambor interior de acero inoxidable SUS304.
- Operación automática o manual.
- Diferentes modos de lavado.
- Sistema suspendido de absorción de vibraciones.
- Puerta y visor amplios.
- Tanques dobles de líquido.
- Sistema de filtración para recuperación y reutilización del solvente.
- Diferentes colores disponibles.

### Especificaciones

| Especificación | SWH-10 | SWH-12 | SWH-15 |
|---|---:|---:|---:|
| Capacidad | 10 kg | 12 kg | 15 kg |
| Voltaje | 220/380 V | 220/380 V | 220/380 V |
| Frecuencia | 50/60 Hz | 50/60 Hz | 50/60 Hz |
| Velocidad de lavado | 40 rpm | 40 rpm | 40 rpm |
| Potencia de motor | 1.5 kW | 1.5 kW | 1.5 kW |
| Material exterior | Acero al carbón con recubrimiento plástico | Igual | Igual |
| Tambor | Acero inoxidable 304 | Acero inoxidable 304 | Acero inoxidable 304 |
| Peso neto | 630 kg | 630 kg | 630 kg |
| Dimensiones | 1580 × 1040 × 1730 mm | 1580 × 1040 × 1730 mm | 1580 × 1040 × 1730 mm |

### CTA

**Botón:** Cotizar equipo SWH

---

## 8.9 Serie GXZQ — Máquina cerrada de lavado en seco con percloroetileno

**Slug:** `/productos/lavado-en-seco/lavado-seco-percloroetileno-gxzq`  
**Categoría:** Lavado en seco  
**Capacidades:** 10, 12 y 15 kg

```md
![Equipo GXZQ — imagen principal pendiente](PLACEHOLDER_GXZQ_HERO)
```

### Resumen

La serie GXZQ es una solución cerrada para tintorería profesional con percloroetileno. Integra lavado, filtración y recuperación de solvente en un sistema compacto.

### Beneficios principales

- Tambor de acero inoxidable SUS304.
- Control por microcomputadora con pantalla amplia.
- Diferentes programas de lavado.
- Sistema de recuperación por refrigeración.
- Recuperación de solvente comunicada por el fabricante superior al 99%.
- Puerta de gran apertura.
- Sistema de adsorción con carbón activado.
- Tres tanques de solvente.
- Sistema de autolimpieza y doble filtración.

### Especificaciones

| Especificación | GXZQ-10 | GXZQ-12 | GXZQ-15 |
|---|---:|---:|---:|
| Capacidad | 10 kg | 12 kg | 15 kg |
| Voltaje | 220/380 V | 220/380 V | 220/380 V |
| Volumen de tambor | 200 L | 320 L | 450 L |
| Ruido indicado | ≤75 dB | ≤75 dB | ≤75 dB |
| Acabado exterior | Pintura horneada | Pintura horneada | Pintura horneada |
| Tambor | Acero inoxidable 304 | Acero inoxidable 304 | Acero inoxidable 304 |
| Peso neto | 560 kg | 580 kg | 600 kg |
| Dimensiones | 1600 × 1300 × 2050 mm | 1600 × 1300 × 2050 mm | 1600 × 1300 × 2050 mm |

### Aviso técnico

La instalación, operación, ventilación y manejo de solventes deben cumplir la normativa local aplicable. SV Solavi debe validar los requisitos regulatorios y de seguridad antes de ofrecer este equipo.

### CTA

**Botón:** Hablar con un especialista en tintorería

---

## 8.10 Serie YP — Calandra industrial para textiles planos

**Slug:** `/productos/planchado-y-doblado/calandra-industrial-yp`  
**Categoría:** Planchado y doblado  
**Configuraciones:** Uno, dos, tres o cuatro rodillos

```md
![Calandra industrial YP — imagen principal pendiente](PLACEHOLDER_YP_HERO)
```

### Resumen

Calandra industrial para planchado y secado continuo de sábanas, mantelería y textiles planos. Las configuraciones con mayor número de rodillos incrementan la velocidad y capacidad de procesamiento.

### Beneficios principales

- Construcción en acero inoxidable en componentes principales.
- Calentamiento rápido.
- Diferentes configuraciones de rodillos.
- Tecnología orientada a alta velocidad y eficiencia.
- Extracción de humedad mediante presión y temperatura.
- Ajuste continuo de velocidad.
- Sistema de bandas para estabilizar el transporte del textil.
- Control de temperatura para operación segura.

### Especificaciones

| Especificación | YPI-3000 | YPII-3000 | YPIII-3000 | YPIV-3000 |
|---|---:|---:|---:|---:|
| Configuración | Un rodillo | Dos rodillos | Tres rodillos | Cuatro rodillos |
| Diámetro de rodillo | 600–800 mm | 600–800 mm | 600–800 mm | 600–800 mm |
| Calentamiento | Eléctrico / gas | Eléctrico / gas | Eléctrico / gas | Eléctrico / gas |
| Ancho máximo | 3000 mm | 3000 mm | 3000 mm | 3000 mm |
| Velocidad de planchado | 0–25 m/min | 0–40 m/min | 0–60 m/min | 0–80 m/min |
| Capacidad con vapor indicada | 100 kg/h | 200 kg/h | 300 kg/h | 400 kg/h |
| Presión de vapor | 0.3–0.5 MPa | 0.3–0.5 MPa | 0.3–0.5 MPa | 0.3–0.5 MPa |
| Potencia eléctrica de calentamiento | 36 kW | 72 kW | 108 kW | 144 kW |
| Potencia de motor | 1.1 kW | 2.2 kW | 3 kW | 3 kW |
| Consumo de gas indicado | 5 m³/h | 10 m³/h | 15 m³/h | 20 m³/h |
| Material de rodillo | 304 | 304 | 304 | 304 |
| Voltaje | 380 V | 380 V | 380 V | 380 V |
| Peso neto | 1400 kg | 2800 kg | 3000 kg | 4000 kg |
| Dimensiones | 4150 × 1420 × 1500 mm | 4150 × 2370 × 1500 mm | 4200 × 3300 × 1500 mm | 4200 × 4300 × 1500 mm |

### CTA

**Botón:** Cotizar una línea de planchado

---

## 8.11 ZD3300-V — Máquina dobladora

**Slug:** `/productos/planchado-y-doblado/dobladora-zd3300-v`  
**Categoría:** Planchado y doblado  
**Ancho máximo:** 3300 mm

```md
![Máquina dobladora ZD3300-V — imagen principal pendiente](PLACEHOLDER_ZD3300_HERO)
```

### Resumen

Máquina automática para doblado de textiles planos, diseñada para integrarse con una línea de planchado y reducir trabajo manual.

### Beneficios principales

- Sistema de diagnóstico, protección y alarmas.
- Doblado horizontal y vertical.
- Configuración de cuatro canales.
- Posicionamiento preciso del transporte.
- Medición y cálculo de longitud.
- Integración directa con calandra.
- Pantalla de control.
- Hasta 30 programas de doblado.
- Sistema de velocidad variable.
- Función antiestática.

### Especificaciones

| Especificación | ZD3300-V |
|---|---:|
| Ancho máximo de doblado | 3300 mm |
| Capas máximas por proceso | 5/32 |
| Velocidad máxima | 50 m/min |
| Voltaje | 380 V |
| Potencia de motor | 1.3 kW |
| Diámetro de entrada | G 1/2" |
| Peso neto | 1650 kg |
| Dimensiones | 1760 × 2800 × 4116 mm |

### CTA

**Botón:** Cotizar dobladora ZD3300-V

---

## 8.12 INGS-3300 — Alimentadora de textiles

**Slug:** `/productos/planchado-y-doblado/alimentadora-ings-3300`  
**Categoría:** Planchado y doblado  
**Ancho de alimentación:** 3300 mm

```md
![Alimentadora INGS-3300 — imagen principal pendiente](PLACEHOLDER_INGS_HERO)
```

### Resumen

Alimentadora para introducir sábanas y textiles planos de forma estable en una línea de planchado, mejorando la seguridad y reduciendo la necesidad de alimentación manual.

### Beneficios principales

- Alimentación segura hacia la calandra.
- Estructura compacta.
- Alta eficiencia.
- Ventilador centrífugo de alto flujo.
- Transporte estable del textil.
- Regulación continua de velocidad.
- Sincronización con el equipo de planchado.
- Botón de paro de emergencia.

### Especificaciones

| Especificación | INGS-3300 |
|---|---:|
| Ancho de alimentación | 3300 mm |
| Velocidad de alimentación | 52 m/min |
| Voltaje | 380 V |
| Frecuencia | 50 Hz |
| Velocidad indicada | 4.6 rpm |
| Peso neto | 900 kg |
| Dimensiones | 3450 × 1180 × 1310 mm |

### CTA

**Botón:** Cotizar alimentadora INGS-3300

---

## 8.13 Serie BW — Lavadora de barrera sanitaria

**Slug:** `/productos/lavado-industrial/lavadora-barrera-sanitaria-bw`  
**Categoría:** Lavado industrial  
**Capacidades:** 20, 30, 50 y 100 kg

```md
![Lavadora de barrera BW — imagen principal pendiente](PLACEHOLDER_BW_HERO)
```

### Resumen

Lavadora de barrera sanitaria con acceso por dos lados, diseñada para separar físicamente el área de carga sucia y el área de descarga limpia. Es una solución especialmente relevante para hospitales, clínicas, laboratorios y operaciones con protocolos de higiene estrictos.

### Beneficios principales

- Cámara interna y estructura exterior en acero inoxidable 304.
- Diseño de doble acceso.
- Separación entre zona contaminada y zona limpia.
- Sistema automático de bloqueo de puertas.
- Control mediante interruptores de proximidad.
- Diseño de alta resistencia.
- Absorción de vibraciones.
- Pantalla táctil con interfaz de operación.
- Monitoreo del proceso.

### Especificaciones

| Especificación | BW-20 | BW-30 | BW-50 | BW-100 |
|---|---:|---:|---:|---:|
| Capacidad | 20 kg | 30 kg | 50 kg | 100 kg |
| Alimentación | 380 V / 3 fases / 50 Hz | Igual | Igual | Igual |
| Tambor interno | 730 × 490 mm | 900 × 500 mm | 970 × 720 mm | 1200 × 890 mm |
| Potencia de motor | 2.2 kW | 4 kW | 5.5 kW | 11 kW |
| Velocidad de lavado | 35 rpm | 35 rpm | 35 rpm | 32 rpm |
| Rotación uniforme | 70 rpm | 70 rpm | 70 rpm | 65 rpm |
| Distribución | 440 rpm | 400 rpm | 370 rpm | 350 rpm |
| Alta extracción | 920 rpm | 800 rpm | 750 rpm | 750 rpm |
| Tubería de vapor | DN20 | DN20 | DN20 | DN25 |
| Entrada | DN40 | DN40 | DN40 | DN50 |
| Drenaje | Ø89 mm | Ø89 mm | Ø89 mm | Ø140 mm |
| Presión de entrada | 0.2–0.3 MPa | 0.2–0.3 MPa | 0.2–0.3 MPa | 0.2–0.3 MPa |
| Presión de vapor | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa | 0.4–0.6 MPa |
| Calentamiento eléctrico | 18 kW | 24 kW | 36 kW | 48 kW |
| Consumo de agua indicado | 300 kg | 450 kg | 700 kg | 1650 kg |
| Consumo de gas indicado | 15 kg | 25 kg | 45 kg | 50 kg |
| Peso neto | 800 kg | 1140 kg | 2000 kg | 3000 kg |
| Dimensiones | 1250 × 1360 × 1690 mm | 1400 × 1370 × 1800 mm | 1500 × 1640 × 1880 mm | 1720 × 1810 × 2150 mm |

### CTA

**Botón:** Evaluar una solución de barrera sanitaria

---

## 8.14 Serie MG-TL — Centrífuga de tres patas

**Slug:** `/productos/equipos-complementarios/centrifuga-mg-tl`  
**Categoría:** Equipos complementarios  
**Capacidades:** 25, 35, 50, 70 y 100 kg

```md
![Centrífuga MG-TL — imagen principal pendiente](PLACEHOLDER_MGTL_HERO)
```

### Resumen

Centrífuga independiente para extracción mecánica de agua después del lavado. Su estructura de tres patas busca reducir vibraciones y facilitar una operación estable.

### Beneficios principales

- Suspensión de tres patas.
- Reducción de vibración.
- Cubierta y carcasa de acero inoxidable.
- Eje principal tratado térmicamente.
- Transmisión por banda.
- Arranque suave.
- Frenado rápido.

### Especificaciones

| Especificación | MG-TL25 | MG-TL35 | MG-TL50 | MG-TL70 | MG-TL100 |
|---|---:|---:|---:|---:|---:|
| Capacidad | 25 kg | 35 kg | 50 kg | 70 kg | 100 kg |
| Velocidad de extracción | 850 rpm | 830 rpm | 786 rpm | 780 rpm | 780 rpm |
| Voltaje | 380 V | 380 V | 380 V | 380 V | 380 V |
| Tambor | 570 × 310 mm | 640 × 350 mm | 850 × 370 mm | 950 × 400 mm | 1000 × 400 mm |
| Potencia | 1.1 kW | 3 kW | 4 kW | 5.5 kW | 7.5 kW |
| Peso neto | 238 kg | 342 kg | 512 kg | 758 kg | 878 kg |
| Dimensiones | 900 × 900 × 680 mm | 1100 × 1100 × 750 mm | 1250 × 1250 × 880 mm | 1500 × 1500 × 880 mm | 1600 × 1600 × 900 mm |

### CTA

**Botón:** Cotizar centrífuga

---

## 8.15 Serie XGB — Lavadora horizontal

**Slug:** `/productos/lavado-industrial/lavadora-horizontal-xgb`  
**Categoría:** Lavado industrial  
**Capacidades:** 30, 50, 70 y 100 kg

```md
![Lavadora horizontal XGB — imagen principal pendiente](PLACEHOLDER_XGB_HERO)
```

### Resumen

Lavadora horizontal para procesos de lavado por lotes. Es una alternativa sencilla para operaciones que utilizan una centrífuga independiente para la extracción posterior.

### Beneficios principales

- Tambor de acero inoxidable.
- Resistencia a corrosión.
- Control de tiempo y temperatura mediante microcomputadora.
- Estructura sencilla.
- Operación y mantenimiento accesibles.
- Bajo ruido.
- Sellos resistentes al desgaste.

### Especificaciones

| Especificación | XGB-30 | XGB-50 | XGB-70 | XGB-100 |
|---|---:|---:|---:|---:|
| Capacidad | 30 kg | 50 kg | 70 kg | 100 kg |
| Alimentación | 380 V | 380 V | 380 V | 380 V |
| Velocidad de lavado | 35 rpm | 35 rpm | 35 rpm | 32 rpm |
| Ciclo de lavado | 30–40 min | 30–40 min | 30–40 min | 30–40 min |
| Potencia de motor | 1.1 kW | 2.2 kW | 3 kW | 4 kW |
| Peso neto | 324 kg | 450 kg | 550 kg | 950 kg |
| Dimensiones | 1250 × 1400 × 1200 mm | 1400 × 1500 × 1400 mm | 1500 × 1880 × 1490 mm | 1600 × 2250 × 1750 mm |

### CTA

**Botón:** Cotizar lavadora horizontal XGB

---

## 8.16 YTT-1475 — Mesa de planchado

**Slug:** `/productos/equipos-complementarios/mesa-planchado-ytt-1475`

```md
![Mesa de planchado YTT-1475 — imagen pendiente](PLACEHOLDER_YTT_HERO)
```

### Resumen

Mesa profesional para planchado de algodón, lana, lino, fibras sintéticas y otras prendas. Incorpora succión para ayudar a fijar y enfriar el tejido durante el acabado.

### Beneficios

- Superficie de planchado con succión.
- Cambio mediante pedal entre mesa y brazo.
- Sistema de succión de alta potencia.
- Operación de bajo ruido.
- Configuración compacta.

### Especificaciones

| Especificación | YTT-1475 |
|---|---:|
| Voltaje | 220 V |
| Mesa | 1400 × 800 mm |
| Potencia | 0.37 kW |
| Dimensiones | 1400 × 800 × 1050 mm |
| Peso neto | 25 kg |

---

## 8.17 LDR3-0.4R — Generador de vapor

**Slug:** `/productos/equipos-complementarios/generador-vapor-ldr3-04r`

```md
![Generador de vapor LDR3-0.4R — imagen pendiente](PLACEHOLDER_LDR_HERO)
```

### Resumen

Generador compacto de vapor para alimentar equipos de planchado y acabado.

### Beneficios

- Corte automático por falta de agua.
- Protección contra funcionamiento en seco.
- Sistema de protección en tres niveles.
- Control mediante sonda.
- Formato compacto.

### Especificaciones

| Especificación | LDR3-0.4R |
|---|---:|
| Voltaje | 220 V |
| Potencia | 3 kW |
| Presión máxima | 0.3 MPa |
| Peso neto | 45 kg |

---

## 8.18 HXGT-1 — Mesa de planchado deluxe

**Slug:** `/productos/equipos-complementarios/mesa-planchado-deluxe-hxgt-1`

```md
![Mesa deluxe HXGT-1 — imagen pendiente](PLACEHOLDER_HXGT_HERO)
```

### Resumen

Estación de acabado profesional con mesa, brazo y funciones de vapor y vacío para prendas de mayor complejidad.

### Especificaciones

| Especificación | HXGT-1 |
|---|---:|
| Voltaje | 220 V |
| Presión de vacío indicada | ≤ -150 Pa |
| Potencia | 0.75 kW |
| Evaporación nominal indicada | 4.3 kg |
| Presión de vapor | 0.4 MPa |
| Peso neto | 180 kg |
| Dimensiones | 1700 × 500 × 1930 mm |

---

## 8.19 CT — Transportador de prendas

**Slug:** `/productos/equipos-complementarios/transportador-prendas-ct`

```md
![Transportador de prendas CT — imagen pendiente](PLACEHOLDER_CT_HERO)
```

### Resumen

Sistema transportador para organizar, almacenar y mover prendas dentro de una tintorería o centro de acabado.

### Especificaciones

| Especificación | CT |
|---|---:|
| Voltaje | 220 V |
| Potencia de motor | 0.85 kW |
| Estructura | Acero |
| Automatización | Semiautomática |
| Peso neto | 180 kg |

---

## 8.20 JTJ-1 — Prensa utilitaria

**Slug:** `/productos/equipos-complementarios/prensa-utilitaria-jtj-1`

```md
![Prensa utilitaria JTJ-1 — imagen pendiente](PLACEHOLDER_JTJ_HERO)
```

### Resumen

Prensa profesional para acabado de prendas y piezas textiles mediante presión y vapor.

### Especificaciones

| Especificación | JTJ-1 |
|---|---:|
| Voltaje | 220 V |
| Potencia de motor | 0.3 kW |
| Presión de vapor | 0.4–0.6 MPa |
| Consumo de vapor indicado | 18 |
| Presión de aire | 0.4–0.6 MPa |
| Consumo de aire | 100 L/min |
| Dimensiones | 1200 × 1280 × 1600 mm |
| Peso neto | 260 kg |

---

## 8.21 SWS — Mesa de desmanchado

**Slug:** `/productos/equipos-complementarios/mesa-desmanchado-sws`

```md
![Mesa de desmanchado SWS — imagen pendiente](PLACEHOLDER_SWS_HERO)
```

### Resumen

Estación para tratamiento localizado de manchas antes o después del proceso de limpieza.

### Especificaciones

| Especificación | SWS |
|---|---:|
| Voltaje | 220 V |
| Potencia de motor | 0.55 kW |
| Presión de vapor | 0.15–0.5 MPa |
| Presión de aire indicada | 0.15–0.7 MPa |
| Dimensiones | 1000 × 450 × 1630 mm |
| Peso neto | 76 kg |

---

## 8.22 RXJ-1 — Maniquí de acabado

**Slug:** `/productos/equipos-complementarios/maniqui-acabado-rxj-1`

```md
![Maniquí de acabado RXJ-1 — imagen pendiente](PLACEHOLDER_RXJ_HERO)
```

### Resumen

Equipo de acabado por aire y vapor para dar forma a prendas superiores después del lavado o limpieza en seco.

### Especificaciones

| Especificación | RXJ-1 |
|---|---:|
| Voltaje | 220 V |
| Potencia de motor | 0.55 kW |
| Presión de vapor | 0.15–0.5 MPa |
| Dimensiones | 1000 × 450 × 1630 mm |
| Peso neto | 76 kg |

---

## 8.23 BZD-1 — Lavadora comercial de calzado

**Slug:** `/productos/equipos-complementarios/lavadora-calzado-bzd-1`

```md
![Lavadora comercial de calzado BZD-1 — imagen pendiente](PLACEHOLDER_BZD_HERO)
```

### Resumen

Estación comercial orientada a limpieza especializada de calzado.

### Especificaciones

| Especificación | BZD-1 |
|---|---:|
| Voltaje | 220 V |
| Potencia de motor | 0.28 kW |
| Frecuencia | 50 Hz |
| Corriente nominal | 3 A |
| Dimensiones | 1200 × 550 × 1230 mm |
| Peso neto | 68 kg |

---

## 8.24 BZT-50 — Empacadora de prendas

**Slug:** `/productos/equipos-complementarios/empacadora-prendas-bzt-50`

```md
![Empacadora BZT-50 — imagen pendiente](PLACEHOLDER_BZT_HERO)
```

### Resumen

Equipo para cubrir y empacar prendas terminadas, protegiéndolas durante almacenamiento, traslado y entrega.

### Especificaciones

| Especificación | BZT-50 |
|---|---:|
| Potencia de motor | 0.45 kW |
| Tamaño de película | 500/600 mm |
| Voltaje | 220 V |
| Dimensiones | 690 × 600 × 1750 mm |
| Peso neto | 53 kg |

---

# 9. Soluciones por sector

## 9.1 Lavanderías de autoservicio

### Hero

# Equipos para construir una lavandería de autoservicio eficiente

Combina lavadoras, secadoras y torres apiladas con capacidades adaptadas al perfil de tus clientes y al espacio disponible.

```md
![Lavandería de autoservicio — pendiente](PLACEHOLDER_SOLUTION_LAUNDROMAT)
```

### Equipos recomendados

- Lavadora SWQ.
- Secadora HGQ.
- Secadora doble SHG.
- Torre lavadora-secadora XTH.

### Aspectos a evaluar

- Número de usuarios.
- Mezcla de capacidades.
- Número de ciclos por día.
- Espacio disponible.
- Alimentación eléctrica.
- Disponibilidad de gas o vapor.
- Ventilación y ductos.
- Sistema de cobro.
- Área de espera y doblado.

### CTA

**Solicitar diseño preliminar**

---

## 9.2 Hoteles

# Procesamiento de blancos para hoteles y centros de hospedaje

Soluciones para lavado, secado, planchado y doblado de sábanas, toallas, mantelería y uniformes.

```md
![Lavandería de hotel — pendiente](PLACEHOLDER_SOLUTION_HOTEL)
```

### Equipos recomendados

- XGQ o XSX.
- Secadora HG.
- Calandra YP.
- Dobladora ZD3300-V.
- Alimentadora INGS-3300.
- Mesas y prensas de acabado.

### Datos que debe pedir el formulario

- Número de habitaciones.
- Ocupación promedio.
- Kilogramos diarios estimados.
- Tipo de blancos.
- Horas disponibles para operación.
- Espacio y servicios existentes.

---

## 9.3 Hospitales y clínicas

# Lavandería con separación sanitaria y control de procesos

Equipos orientados al procesamiento de ropa hospitalaria y textiles que requieren separación entre áreas sucia y limpia.

```md
![Lavandería hospitalaria — pendiente](PLACEHOLDER_SOLUTION_HEALTHCARE)
```

### Equipos recomendados

- Lavadora de barrera BW.
- Secadora HG.
- Calandra YP.
- Dobladora ZD3300-V.
- Alimentadora INGS-3300.

### Aviso

La solución debe diseñarse de acuerdo con protocolos internos, normativa sanitaria local y requerimientos de bioseguridad. No afirmar que el equipo por sí mismo garantiza esterilización.

---

## 9.4 Lavanderías industriales

# Equipos para operaciones de alto volumen

Configura líneas de lavado, extracción, secado, planchado y doblado para procesar grandes cantidades de textiles.

```md
![Lavandería industrial — pendiente](PLACEHOLDER_SOLUTION_INDUSTRIAL)
```

### Equipos recomendados

- XGQ de 50–150 kg.
- HG de 50–150 kg.
- Calandras de múltiples rodillos.
- Dobladora.
- Alimentadora.
- Lavadora horizontal XGB y centrífuga MG-TL para configuraciones específicas.

---

## 9.5 Tintorerías

# Cuidado profesional y acabado de prendas

Sistemas de limpieza en seco, desmanchado, planchado, acabado, transportación y empaque.

```md
![Tintorería profesional — pendiente](PLACEHOLDER_SOLUTION_DRY_CLEANING)
```

### Equipos recomendados

- SWH.
- GXZQ.
- Mesa SWS.
- Prensa JTJ-1.
- Maniquí RXJ-1.
- Transportador CT.
- Empacadora BZT-50.

---

## 9.6 Escuelas, residencias y comunidades

# Lavandería práctica para operaciones compartidas

Equipos compactos y configurables para residencias estudiantiles, complejos habitacionales y servicios comunitarios.

### Equipos recomendados

- SWQ.
- HGQ.
- SHG.
- XTH.

---

# 10. Servicios de SV Solavi

> Mostrar únicamente los servicios confirmados por SV Solavi.

# Acompañamiento para seleccionar e implementar tus equipos

## Diagnóstico del proyecto

Revisión de volumen, tipo de textiles, espacio, servicios y objetivos de operación.

## Selección de equipos

Definición de familias, capacidades y configuraciones recomendadas.

## Diseño de solución

Propuesta de combinación de lavado, secado, planchado, doblado y acabado.

## Cotización y suministro

Preparación de propuesta comercial y coordinación de adquisición.

## Instalación

Incluir solo si SV Solavi la ofrece directamente o mediante aliados.

## Capacitación

Incluir alcance, modalidad y duración cuando se confirme.

## Refacciones y servicio

Definir cobertura, tiempos y condiciones antes de publicar.

---

# 11. Nosotros — SV Solavi

# Soluciones profesionales con atención cercana

SV Solavi comercializa soluciones de lavandería comercial e industrial con equipos BLCC. Nuestro objetivo es ayudar a cada cliente a identificar la capacidad y configuración adecuadas para su operación.

## Contenido pendiente de SV Solavi

Completar antes de publicación:

```text
Año de fundación:
Ciudad base:
Zonas atendidas:
Experiencia del equipo:
Servicios incluidos:
Cobertura de instalación:
Cobertura de mantenimiento:
Tiempo habitual de respuesta:
Teléfono:
WhatsApp:
Correo:
Dirección:
```

## Relación con BLCC

Comunicar:

> Trabajamos con el portafolio de equipos BLCC para ofrecer soluciones de lavado, secado, autoservicio, tintorería, planchado y acabado.

No comunicar:

> Somos distribuidores exclusivos o autorizados.

Hasta que exista confirmación formal.

---

# 12. Contacto

# Cuéntanos sobre tu proyecto

Completa el formulario y un asesor de SV Solavi revisará tus necesidades para recomendarte equipos y capacidades.

## Formulario

- Nombre.
- Empresa.
- Correo.
- Teléfono / WhatsApp.
- Ciudad y estado.
- Sector.
- Tipo de equipo.
- Capacidad aproximada.
- Kilogramos diarios.
- Servicios disponibles.
- Comentarios.

## Opciones de sector

```text
Lavandería de autoservicio
Hotel
Hospital o clínica
Lavandería industrial
Tintorería
Escuela o residencia
Otro
```

## Opciones de servicios disponibles

```text
Electricidad 220 V
Electricidad 380 V trifásica
Vapor
Gas LP
Gas natural
No estoy seguro
```

---

# 13. SEO

## 13.1 Títulos y descripciones

### Inicio

**Title:** Equipos para lavandería comercial e industrial | SV Solavi  
**Description:** Lavadoras, secadoras, equipos de autoservicio, tintorería, planchado y doblado BLCC. Recibe asesoría y cotización con SV Solavi.

### Productos

**Title:** Catálogo de equipos BLCC | SV Solavi  
**Description:** Explora equipos profesionales para lavado, secado, autoservicio, tintorería, planchado, doblado y acabado.

### BLCC

**Title:** BLCC: equipos profesionales de lavandería | SV Solavi  
**Description:** Conoce el fabricante BLCC y su portafolio de soluciones para lavandería comercial e industrial.

### Plantilla de producto

```text
Title: [Nombre del producto] BLCC | SV Solavi
Description: Conoce capacidades, beneficios y especificaciones de [nombre]. Solicita asesoría y cotización con SV Solavi.
```

## 13.2 Datos estructurados

Implementar:

- `Organization`.
- `LocalBusiness`, cuando exista dirección pública.
- `Product` sin precio ni oferta.
- `BreadcrumbList`.
- `FAQPage`, únicamente si las preguntas son visibles.
- `ContactPoint`.

Ejemplo:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Lavadora extractora automática BLCC XGQ",
  "brand": {
    "@type": "Brand",
    "name": "BLCC"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "BLCC"
  },
  "description": "Lavadora extractora industrial disponible en capacidades de 15 a 150 kg.",
  "category": "Equipo de lavandería industrial"
}
```

No incluir `offers` hasta tener precios y condiciones públicas verificadas.

---

# 14. Requerimientos técnicos para la IA programadora

## 14.1 Modelo de datos

```ts
type ProductModelSpec = {
  label: string;
  value: string;
};

type ProductModel = {
  model: string;
  capacity?: string;
  specs: ProductModelSpec[];
};

type Product = {
  id: string;
  slug: string;
  name: string;
  series?: string;
  category: string;
  subcategory?: string;
  summary: string;
  applications: string[];
  benefits: string[];
  capacities?: string[];
  heatingMethods?: string[];
  heroImage: string;
  gallery: string[];
  imageAlt: string;
  models: ProductModel[];
  technicalNotice?: string;
  featured?: boolean;
  relatedProductIds?: string[];
};
```

## 14.2 Fuente de contenido

Guardar productos en archivos separados:

```text
/content/products/xgq.json
/content/products/xsx.json
/content/products/hg.json
...
```

O utilizar MDX:

```text
/content/products/xgq.mdx
```

Separar datos tabulares del contenido narrativo para facilitar actualizaciones.

## 14.3 Rutas y filtros

Los filtros deben generarse desde el contenido, no escribirse manualmente.

Ejemplo:

```ts
const categories = [...new Set(products.map(p => p.category))];
const capacities = [...new Set(products.flatMap(p => p.capacities ?? []))];
```

## 14.4 Rendimiento

- Imágenes WebP o AVIF.
- `srcset` y `sizes`.
- Carga diferida debajo del primer viewport.
- Precargar solo imagen principal.
- No cargar todas las tablas de todos los productos en la página del catálogo.
- Objetivo Lighthouse:
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 95+

## 14.5 Analítica

Eventos recomendados:

```text
click_whatsapp
click_quote_header
submit_quote_form
view_product
download_datasheet
filter_catalog
click_related_product
```

Parámetros:

```text
product_name
product_series
product_category
page_path
cta_location
```

## 14.6 Integraciones

Preparar variables de entorno:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_GA_ID=
FORM_ENDPOINT=
```

Mensaje precargado de WhatsApp:

```text
Hola, vi el equipo [NOMBRE DEL PRODUCTO] en el sitio de SV Solavi. Me gustaría recibir asesoría y una cotización.
```

---

# 15. Revisión previa a publicación

## Contenido

- [ ] Confirmar nombre legal y comercial de SV Solavi.
- [ ] Confirmar relación comercial que puede comunicarse con BLCC.
- [ ] Confirmar datos corporativos de BLCC.
- [ ] Revisar traducción técnica.
- [ ] Validar cada tabla con la ficha más reciente.
- [ ] Confirmar si capacidades de equipos apilados son por módulo.
- [ ] Confirmar unidades ambiguas de consumo.
- [ ] Añadir fotos originales en alta resolución.
- [ ] Añadir fichas técnicas descargables.
- [ ] Definir garantías.
- [ ] Definir servicios posventa.

## Legal

- [ ] Aviso de privacidad.
- [ ] Consentimiento de formulario.
- [ ] Política de cookies, si aplica.
- [ ] Términos de uso.
- [ ] Avisos sobre instalación y requisitos técnicos.
- [ ] Validar normativa para solventes de lavado en seco.

## Conversión

- [ ] WhatsApp visible.
- [ ] CTA en cada producto.
- [ ] Formulario probado.
- [ ] Mensajes de confirmación.
- [ ] Seguimiento comercial definido.
- [ ] Respuesta automática al prospecto.

---

# 16. Fuentes utilizadas

- Catálogo de productos BLCC proporcionado por el usuario, 22 páginas.
- Sitio corporativo y comercial de BLCC: `https://www.blcc-group.com/es`.
- La información técnica debe revisarse contra las fichas vigentes antes de utilizarse para instalación, compra o ingeniería.
