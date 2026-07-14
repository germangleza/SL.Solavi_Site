import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { ProductCard } from "@/components/ProductCard";
import { IconWhatsApp } from "@/components/Icons";
import { solutions, getSolution } from "@/content/solutions";
import { getProductById } from "@/lib/products";
import { whatsappLink } from "@/lib/site";
import styles from "./page.module.css";

type Params = { sector: string };

export function generateStaticParams() {
  return solutions.map((s) => ({ sector: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { sector } = await params;
  const s = getSolution(sector);
  if (!s) return {};
  return {
    title: s.cardTitle,
    description: s.intro,
    alternates: { canonical: `/soluciones/${s.slug}` },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { sector } = await params;
  const s = getSolution(sector);
  if (!s) notFound();

  const recommended = s.recommendedProductIds
    .map((id) => getProductById(id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Soluciones", href: "/soluciones" },
              { label: s.shortTitle, href: `/soluciones/${s.slug}` },
            ]}
          />
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className="eyebrow">Solución por sector</span>
              <h1>{s.title}</h1>
              <p className="lead">{s.intro}</p>
              <div className={styles.heroActions}>
                <Link href="/contacto" className="btn btn--primary btn--lg">
                  {s.ctaLabel}
                </Link>
                <a
                  href={whatsappLink()}
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
              <MediaPlaceholder label={s.imageAlt} ratio="16/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Aspectos a evaluar */}
      <section className="section">
        <div className={`container ${styles.considerGrid}`}>
          <div className={styles.considerHead}>
            <h2>{s.considerationsTitle}</h2>
            <p className="muted">
              Con estos datos preparamos una recomendación de equipos y capacidades
              para tu proyecto.
            </p>
          </div>
          <ul className={styles.considerList}>
            {s.considerations.map((c) => (
              <li key={c} className={styles.considerItem}>
                <span className={styles.considerDot} aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {s.notice && (
          <div className="container">
            <p className={styles.notice}>
              <strong>Importante.</strong> {s.notice}
            </p>
          </div>
        )}
      </section>

      {/* Equipos recomendados */}
      {recommended.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className={styles.recommendedHead}>
              <span className="eyebrow">Equipos recomendados</span>
              <h2>Una base para configurar tu solución</h2>
            </div>
            <div className={styles.recommendedGrid}>
              {recommended.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Diseñemos tu solución</h2>
          <p className={styles.ctaText}>
            Cuéntanos sobre tu operación y recibe una recomendación de equipos y
            capacidades.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contacto" className="btn btn--primary btn--lg">
              {s.ctaLabel}
            </Link>
            <Link href="/soluciones" className="btn btn--secondary btn--lg">
              Ver otros sectores
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
