import { products } from "@/content/products";

export type SpecRow = {
  label: string;
  values: string[];
};

export type SpecTable = {
  title?: string;
  columns: string[];
  rows: SpecRow[];
};

export type ProductColor = {
  /** Clave estable del color (ej. "azul"). Debe existir en COLOR_SWATCHES. */
  key: string;
  /** Etiqueta visible (ej. "Azul"). */
  label: string;
  /** Ruta a la foto del equipo en ese color. */
  image: string;
};

/** Muestra de color para los selectores de la ficha de producto. */
export const COLOR_SWATCHES: Record<string, string> = {
  azul: "#3c629e",
  celeste: "#7dc3d1",
  aqua: "#4f9aab",
  amarillo: "#e0a94f",
  rosa: "#b54b7e",
};

export type Product = {
  /** Identificador corto y estable. */
  id: string;
  /** Slug final de la ruta (después de la categoría). */
  slug: string;
  /** Slug de la categoría. */
  category: string;
  name: string;
  series?: string;
  summary: string;
  applications?: string[];
  benefits: string[];
  capacities?: string[];
  heatingMethods?: string[];
  imageAlt: string;
  /** Ruta a una foto real del equipo en /public. Si falta, se usa un placeholder. */
  image?: string;
  /**
   * Variantes de color disponibles. Cada una apunta a su propia foto.
   * La primera de la lista es la que se muestra por defecto en la ficha.
   */
  colors?: ProductColor[];
  specTables: SpecTable[];
  technicalNotice?: string;
  ctaLabel: string;
  featured?: boolean;
  relatedProductIds?: string[];
};

export type ProductCategory = {
  slug: string;
  title: string;
  /** Nombre corto para migas y etiquetas. */
  shortTitle: string;
  description: string;
};

export const productCategoriesMeta: ProductCategory[] = [
  {
    slug: "lavado-industrial",
    title: "Lavado industrial",
    shortTitle: "Lavado industrial",
    description:
      "Lavadoras extractoras, equipos de barrera sanitaria y sistemas horizontales para diferentes volúmenes de procesamiento.",
  },
  {
    slug: "secado-industrial",
    title: "Secado industrial",
    shortTitle: "Secado industrial",
    description:
      "Secadoras de distintas capacidades y alternativas de calentamiento para operaciones comerciales e industriales.",
  },
  {
    slug: "autoservicio",
    title: "Autoservicio",
    shortTitle: "Autoservicio",
    description:
      "Lavadoras, secadoras y torres apiladas con opciones de operación mediante monedas, tarjeta o QR, según configuración.",
  },
  {
    slug: "lavado-en-seco",
    title: "Lavado en seco",
    shortTitle: "Lavado en seco",
    description:
      "Equipos para procesos con hidrocarburo o percloroetileno, orientados a tintorerías y cuidado profesional de prendas.",
  },
  {
    slug: "planchado-y-doblado",
    title: "Planchado y doblado",
    shortTitle: "Planchado y doblado",
    description:
      "Calandras, dobladoras y alimentadoras para el procesamiento eficiente de blancos y textiles planos.",
  },
  {
    slug: "equipos-complementarios",
    title: "Acabado y equipos complementarios",
    shortTitle: "Equipos complementarios",
    description:
      "Mesas de planchado, prensas, maniquíes, transportadores, centrífugas y accesorios para completar la operación.",
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProduct(category: string, slug: string): Product | undefined {
  return products.find((p) => p.category === category && p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getCategory(slug: string): ProductCategory | undefined {
  return productCategoriesMeta.find((c) => c.slug === slug);
}

export function productHref(product: Product): string {
  return `/productos/${product.category}/${product.slug}`;
}

/** Devuelve la lista única de capacidades presentes en el catálogo. */
export function allCapacities(): string[] {
  const set = new Set<string>();
  for (const p of products) {
    for (const cap of p.capacities ?? []) set.add(cap);
  }
  return [...set];
}

/** Devuelve la lista única de métodos de calentamiento del catálogo. */
export function allHeatingMethods(): string[] {
  const set = new Set<string>();
  for (const p of products) {
    for (const m of p.heatingMethods ?? []) set.add(m);
  }
  return [...set];
}
