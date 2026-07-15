export const site = {
  brand: "SV Solavi",
  productBrand: "BLCC",
  descriptor: "Soluciones profesionales para lavandería comercial e industrial",
  // Puede sobreescribirse con variables de entorno; el valor por defecto es
  // el número de contacto público de SV Solavi (México).
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "524793916632",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  baseUrl: "https://svsolavi.com",
} as const;

export const defaultWhatsappMessage =
  "Hola, me gustaría recibir asesoría y una cotización de equipos de lavandería.";

/**
 * Construye un enlace a WhatsApp con mensaje precargado.
 * Si no hay número configurado, devuelve un ancla a la sección de contacto
 * para no romper la navegación durante el desarrollo.
 */
export function whatsappLink(message: string = defaultWhatsappMessage): string {
  if (!site.whatsappNumber) return "/contacto";
  const digits = site.whatsappNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function productWhatsappMessage(productName: string): string {
  return `Hola, vi el equipo ${productName} en el sitio de SV Solavi. Me gustaría recibir asesoría y una cotización.`;
}

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const mainNav: NavItem[] = [
  {
    label: "Equipos",
    href: "/productos",
    children: [
      {
        label: "Lavado industrial",
        href: "/productos/lavado-industrial",
        description: "Extractoras, barrera sanitaria y horizontales.",
      },
      {
        label: "Secado industrial",
        href: "/productos/secado-industrial",
        description: "Secadoras de distintas capacidades.",
      },
      {
        label: "Autoservicio",
        href: "/productos/autoservicio",
        description: "Lavadoras, secadoras y torres apiladas.",
      },
      {
        label: "Lavado en seco",
        href: "/productos/lavado-en-seco",
        description: "Hidrocarburo y percloroetileno.",
      },
      {
        label: "Planchado y doblado",
        href: "/productos/planchado-y-doblado",
        description: "Calandras, dobladoras y alimentadoras.",
      },
      {
        label: "Equipos complementarios",
        href: "/productos/equipos-complementarios",
        description: "Mesas, prensas, maniquíes y accesorios.",
      },
    ],
  },
  {
    label: "Soluciones",
    href: "/soluciones",
    children: [
      { label: "Lavanderías de autoservicio", href: "/soluciones/lavanderias-autoservicio" },
      { label: "Hoteles", href: "/soluciones/hoteles" },
      { label: "Hospitales y clínicas", href: "/soluciones/hospitales-y-clinicas" },
      { label: "Lavanderías industriales", href: "/soluciones/lavanderias-industriales" },
      { label: "Tintorerías", href: "/soluciones/tintorerias" },
      {
        label: "Escuelas, residencias y comunidades",
        href: "/soluciones/escuelas-residencias-y-comunidades",
      },
    ],
  },
  { label: "BLCC", href: "/blcc" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
];

export const productCategories = [
  {
    slug: "lavado-industrial",
    title: "Lavado industrial",
    description:
      "Lavadoras extractoras, equipos de barrera sanitaria y sistemas horizontales para diferentes volúmenes de procesamiento.",
  },
  {
    slug: "secado-industrial",
    title: "Secado industrial",
    description:
      "Secadoras de distintas capacidades y alternativas de calentamiento para operaciones comerciales e industriales.",
  },
  {
    slug: "autoservicio",
    title: "Lavanderías de autoservicio",
    description:
      "Lavadoras, secadoras y torres apiladas con opciones de operación mediante monedas, tarjeta o QR, según configuración.",
  },
  {
    slug: "lavado-en-seco",
    title: "Lavado en seco",
    description:
      "Equipos para procesos con hidrocarburo o percloroetileno, orientados a tintorerías y cuidado profesional de prendas.",
  },
  {
    slug: "planchado-y-doblado",
    title: "Planchado y doblado",
    description:
      "Calandras, dobladoras y alimentadoras para el procesamiento eficiente de blancos y textiles planos.",
  },
  {
    slug: "equipos-complementarios",
    title: "Acabado y equipos complementarios",
    description:
      "Mesas de planchado, prensas, maniquíes, transportadores, centrífugas y accesorios para completar la operación.",
  },
] as const;

export const sectors = [
  { label: "Lavanderías de autoservicio", href: "/soluciones/lavanderias-autoservicio" },
  { label: "Hoteles y centros de hospedaje", href: "/soluciones/hoteles" },
  { label: "Hospitales y clínicas", href: "/soluciones/hospitales-y-clinicas" },
  { label: "Lavanderías industriales", href: "/soluciones/lavanderias-industriales" },
  { label: "Tintorerías", href: "/soluciones/tintorerias" },
  {
    label: "Escuelas, residencias y comunidades",
    href: "/soluciones/escuelas-residencias-y-comunidades",
  },
] as const;
