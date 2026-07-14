export type Solution = {
  slug: string;
  /** Etiqueta corta para navegación y migas. */
  shortTitle: string;
  /** Encabezado H1 de la página. */
  title: string;
  /** Título usado en tarjetas y SEO. */
  cardTitle: string;
  intro: string;
  imageAlt: string;
  /** Ruta en /public de la fotografía del sector; si falta, se usa un placeholder. */
  image?: string;
  /** IDs de productos recomendados (deben existir en el catálogo). */
  recommendedProductIds: string[];
  /** Título del bloque de evaluación. */
  considerationsTitle: string;
  considerations: string[];
  notice?: string;
  ctaLabel: string;
};

export const solutions: Solution[] = [
  {
    slug: "lavanderias-autoservicio",
    shortTitle: "Autoservicio",
    cardTitle: "Lavanderías de autoservicio",
    title: "Equipos para construir una lavandería de autoservicio eficiente",
    intro:
      "Combina lavadoras, secadoras y torres apiladas con capacidades adaptadas al perfil de tus clientes y al espacio disponible.",
    imageAlt: "Lavandería de autoservicio con equipos BLCC",
    image: "/images/sectors/lavanderias-autoservicio.jpg",
    recommendedProductIds: ["swq", "hgq", "shg", "xth"],
    considerationsTitle: "Aspectos a evaluar",
    considerations: [
      "Número de usuarios.",
      "Mezcla de capacidades.",
      "Número de ciclos por día.",
      "Espacio disponible.",
      "Alimentación eléctrica.",
      "Disponibilidad de gas o vapor.",
      "Ventilación y ductos.",
      "Sistema de cobro.",
      "Área de espera y doblado.",
    ],
    ctaLabel: "Solicitar diseño preliminar",
  },
  {
    slug: "hoteles",
    shortTitle: "Hoteles",
    cardTitle: "Hoteles y centros de hospedaje",
    title: "Procesamiento de blancos para hoteles y centros de hospedaje",
    intro:
      "Soluciones para lavado, secado, planchado y doblado de sábanas, toallas, mantelería y uniformes.",
    imageAlt: "Lavandería de hotel con equipos BLCC",
    image: "/images/sectors/hoteles.jpg",
    recommendedProductIds: ["xgq", "xsx", "hg", "yp", "zd3300-v", "ings-3300"],
    considerationsTitle: "Datos que consideramos",
    considerations: [
      "Número de habitaciones.",
      "Ocupación promedio.",
      "Kilogramos diarios estimados.",
      "Tipo de blancos.",
      "Horas disponibles para operación.",
      "Espacio y servicios existentes.",
    ],
    ctaLabel: "Solicitar propuesta para hotelería",
  },
  {
    slug: "hospitales-y-clinicas",
    shortTitle: "Hospitales y clínicas",
    cardTitle: "Hospitales y clínicas",
    title: "Lavandería con separación sanitaria y control de procesos",
    intro:
      "Equipos orientados al procesamiento de ropa hospitalaria y textiles que requieren separación entre áreas sucia y limpia.",
    imageAlt: "Lavandería hospitalaria con equipos BLCC",
    image: "/images/sectors/hospitales-y-clinicas.jpg",
    recommendedProductIds: ["bw", "hg", "yp", "zd3300-v", "ings-3300"],
    considerationsTitle: "Aspectos a evaluar",
    considerations: [
      "Protocolos internos de higiene.",
      "Separación entre áreas sucia y limpia.",
      "Volumen diario de ropa hospitalaria.",
      "Tipo de textiles y prendas.",
      "Requerimientos de bioseguridad.",
      "Espacio y servicios existentes.",
    ],
    notice:
      "La solución debe diseñarse de acuerdo con protocolos internos, normativa sanitaria local y requerimientos de bioseguridad. El equipo por sí mismo no garantiza esterilización.",
    ctaLabel: "Evaluar una solución sanitaria",
  },
  {
    slug: "lavanderias-industriales",
    shortTitle: "Industriales",
    cardTitle: "Lavanderías industriales",
    title: "Equipos para operaciones de alto volumen",
    intro:
      "Configura líneas de lavado, extracción, secado, planchado y doblado para procesar grandes cantidades de textiles.",
    imageAlt: "Lavandería industrial de alto volumen con equipos BLCC",
    image: "/images/sectors/lavanderias-industriales.jpg",
    recommendedProductIds: ["xgq", "hg", "yp", "zd3300-v", "ings-3300", "xgb", "mg-tl"],
    considerationsTitle: "Aspectos a evaluar",
    considerations: [
      "Kilogramos diarios de procesamiento.",
      "Tipo de textiles y prendas.",
      "Turnos y horas de operación.",
      "Alimentación eléctrica y servicios (vapor, gas).",
      "Espacio disponible para líneas de proceso.",
      "Flujo de trabajo entre lavado, secado y planchado.",
    ],
    ctaLabel: "Configurar una línea industrial",
  },
  {
    slug: "tintorerias",
    shortTitle: "Tintorerías",
    cardTitle: "Tintorerías",
    title: "Cuidado profesional y acabado de prendas",
    intro:
      "Sistemas de limpieza en seco, desmanchado, planchado, acabado, transportación y empaque.",
    imageAlt: "Tintorería profesional con equipos BLCC",
    image: "/images/sectors/tintorerias.jpg",
    recommendedProductIds: ["swh", "gxzq", "sws", "jtj-1", "rxj-1", "ct", "bzt-50"],
    considerationsTitle: "Aspectos a evaluar",
    considerations: [
      "Tipo de solvente (hidrocarburo o percloroetileno).",
      "Volumen y tipo de prendas.",
      "Requisitos de ventilación y normativa local.",
      "Procesos de desmanchado y acabado.",
      "Espacio y flujo de trabajo.",
      "Necesidades de transporte y empaque.",
    ],
    notice:
      "La instalación, operación, ventilación y manejo de solventes deben cumplir la normativa local aplicable.",
    ctaLabel: "Hablar con un especialista en tintorería",
  },
  {
    slug: "escuelas-residencias-y-comunidades",
    shortTitle: "Escuelas y residencias",
    cardTitle: "Escuelas, residencias y comunidades",
    title: "Lavandería práctica para operaciones compartidas",
    intro:
      "Equipos compactos y configurables para residencias estudiantiles, complejos habitacionales y servicios comunitarios.",
    imageAlt: "Lavandería compartida para residencias y comunidades con equipos BLCC",
    image: "/images/sectors/escuelas-residencias-y-comunidades.jpg",
    recommendedProductIds: ["swq", "hgq", "shg", "xth"],
    considerationsTitle: "Aspectos a evaluar",
    considerations: [
      "Número de usuarios y residentes.",
      "Ciclos estimados por día.",
      "Espacio disponible.",
      "Alimentación eléctrica y servicios.",
      "Modelo de operación (compartido o con cobro).",
      "Ventilación y ductos.",
    ],
    ctaLabel: "Solicitar una propuesta",
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
