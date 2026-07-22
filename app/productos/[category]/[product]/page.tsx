import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { ModelComparisonTable } from "@/components/ModelComparisonTable";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { IconWhatsApp, IconArrow } from "@/components/Icons";
import {
  getAllProducts,
  getCategory,
  getProduct,
  getProductById,
} from "@/lib/products";
import {
  site,
  whatsappLink,
  productWhatsappMessage,
} from "@/lib/site";
import styles from "./page.module.css";

type Params = { category: string; product: string };

export function generateStaticParams() {
  return getAllProducts().map((p) => ({
    category: p.category,
    product: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, product } = await params;
  const p = getProduct(category, product);
  if (!p) return {};
  const fullName = p.series ? `${p.series} — ${p.name}` : p.name;
  return {
    title: `${fullName} BLCC`,
    description: `Conoce capacidades, beneficios y especificaciones de ${p.name}. Solicita asesoría y cotización con SV Solavi.`,
    alternates: { canonical: `/productos/${p.category}/${p.slug}` },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, product } = await params;
  const p = getProduct(category, product);
  if (!p) notFound();

  const cat = getCategory(p.category);
  const fullName = p.series ? `${p.series} — ${p.name}` : p.name;
  const related = (p.relatedProductIds ?? [])
    .map((id) => getProductById(id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${p.name} BLCC${p.series ? ` ${p.series.replace("Serie ", "")}` : ""}`,
    brand: { "@type": "Brand", name: "BLCC" },
    manufacturer: { "@type": "Organization", name: "BLCC" },
    description: p.summary,
    category: cat?.title ?? "Equipo de lavandería",
    image: `${site.baseUrl}${p.image ?? "/images/placeholders/product-4x3.webp"}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Equipos", href: "/productos" },
              ...(cat
                ? [{ label: cat.shortTitle, href: `/productos/${cat.slug}` }]
                : []),
              { label: p.series ?? p.name, href: `/productos/${p.category}/${p.slug}` },
            ]}
          />
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              {cat && <span className="eyebrow">{cat.title}</span>}
              <h1>{fullName}</h1>
              <p className="lead">{p.summary}</p>

              {p.capacities && p.capacities.length > 0 && (
                <div className={styles.chips}>
                  {p.capacities.map((c) => (
                    <span key={c} className={styles.chip}>
                      {c}
                    </span>
                  ))}
                </div>
              )}

              <div className={styles.heroActions}>
                <Link href="/contacto" className="btn btn--primary btn--lg">
                  Solicitar cotización
                </Link>
                <a
                  href={whatsappLink(productWhatsappMessage(fullName))}
                  className="btn btn--whatsapp btn--lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="click_whatsapp"
                >
                  <IconWhatsApp width={20} height={20} />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className={styles.heroMedia}>
              {p.colors && p.colors.length > 0 ? (
                <ProductGallery colors={p.colors} alt={p.imageAlt} />
              ) : p.image ? (
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  width={1448}
                  height={1086}
                  priority
                  className={styles.heroPhoto}
                />
              ) : (
                <MediaPlaceholder label={p.imageAlt} ratio="4/3" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      {p.applications && p.applications.length > 0 && (
        <section className={styles.applications}>
          <div className="container">
            <h2 className={styles.blockTitle}>Aplicaciones recomendadas</h2>
            <ul className={styles.appList}>
              {p.applications.map((a) => (
                <li key={a} className={styles.appItem}>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Beneficios */}
      <section className="section">
        <div className="container">
          <h2 className={styles.blockTitle}>Beneficios principales</h2>
          <ul className={styles.benefitGrid}>
            {p.benefits.map((b) => (
              <li key={b} className={styles.benefitItem}>
                <span className={styles.benefitDot} aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Especificaciones */}
      <section className="section section--alt">
        <div className="container">
          <h2 className={styles.blockTitle}>Especificaciones técnicas</h2>
          <p className={styles.specNote}>
            Las capacidades, dimensiones y consumos pueden variar según mercado,
            voltaje, combustible o configuración. Confirma los datos con SV Solavi
            antes de cerrar una compra.
          </p>
          <div className={styles.tables}>
            {p.specTables.map((table, i) => (
              <ModelComparisonTable key={table.title ?? i} table={table} />
            ))}
          </div>

          {p.technicalNotice && (
            <p className={styles.technicalNotice}>
              <strong>Aviso técnico.</strong> {p.technicalNotice}
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className={styles.ctaTitle}>¿Qué capacidad necesita tu lavandería?</h2>
            <p className={styles.ctaText}>
              Comparte tu volumen de procesamiento, tipo de prendas y condiciones de
              instalación para recibir una recomendación.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contacto" className="btn btn--primary btn--lg">
              {p.ctaLabel}
            </Link>
            <a
              href={whatsappLink(productWhatsappMessage(fullName))}
              className="btn btn--secondary btn--lg"
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="click_whatsapp"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <div className={styles.relatedHead}>
              <h2 className={styles.blockTitle}>Equipos relacionados</h2>
              {cat && (
                <Link href={`/productos/${cat.slug}`} className={styles.relatedLink}>
                  Ver toda la categoría
                  <IconArrow width={16} height={16} />
                </Link>
              )}
            </div>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <ProductCard key={r.id} product={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
