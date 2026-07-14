import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { whatsappLink } from "@/lib/site";
import { IconWhatsApp, IconArrow } from "@/components/Icons";
import { productCategoriesMeta } from "@/lib/products";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "BLCC: equipos profesionales de lavandería",
  description:
    "Conoce el fabricante BLCC y su portafolio de soluciones para lavandería comercial e industrial.",
  alternates: { canonical: "/blcc" },
};

const principles = [
  "Calidad y consistencia de fabricación.",
  "Equipos para operaciones de distintas escalas.",
  "Configuraciones personalizables.",
  "Soluciones integrales de lavandería.",
  "Control de calidad y estándares CE.",
  "Planeación de equipos y flujos de trabajo.",
];

const stats = [
  { value: "Desde 2008", label: "Fabricando equipos de lavandería" },
  { value: "50+", label: "Países con presencia" },
  { value: "200,000 m²", label: "Base industrial" },
  { value: "300+", label: "Integrantes en investigación y desarrollo" },
];

export default function BlccPage() {
  return (
    <div className={styles.blccBrand}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs items={[{ label: "BLCC", href: "/blcc" }]} />
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className="eyebrow">Fabricante internacional</span>
              <h1>Equipos profesionales para lavandería comercial e industrial</h1>
              <p className="lead">
                BLCC desarrolla y fabrica soluciones para lavado, secado,
                autoservicio, planchado, doblado y acabado.
              </p>
              <div className={styles.heroActions}>
                <Link href="/productos" className="btn btn--primary btn--lg">
                  Ver el catálogo
                </Link>
                <Link href="/contacto" className="btn btn--secondary btn--lg">
                  Solicitar cotización
                </Link>
              </div>
            </div>
            <div className={styles.heroMedia}>
              <Image
                src="/images/blcc/facilities.jpg"
                alt="Instalaciones de la fábrica BLCC"
                width={1600}
                height={1201}
                priority
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Datos destacados */}
      <section className={styles.statsSection}>
        <div className="container">
          <ul className={styles.statGrid}>
            {stats.map((stat) => (
              <li key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Perfil */}
      <section className="section">
        <div className={`container ${styles.profileGrid}`}>
          <div className={styles.profileHead}>
            <span className="eyebrow">Perfil</span>
            <h2>Investigación, desarrollo y producción integrados</h2>
          </div>
          <div className={styles.profileBody}>
            <p className="lead">
              BLCC forma parte de Spruce Group Ltd y desarrolla equipos comerciales
              e industriales de lavandería. La empresa integra investigación,
              desarrollo y producción, con un portafolio que abarca lavadoras
              extractoras, secadoras, sistemas de autoservicio, equipos de lavado en
              seco, calandras, dobladoras y maquinaria de acabado.
            </p>
          </div>
        </div>
      </section>

      {/* Principios de producto */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Principios de producto</span>
            <h2>Cómo se diseñan y fabrican los equipos</h2>
          </div>
          <ul className={styles.principleGrid}>
            {principles.map((principle) => (
              <li key={principle} className={styles.principleItem}>
                <span className={styles.check} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                    <path
                      d="m5 12.5 4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Líneas de producto */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Portafolio</span>
            <h2>Líneas de producto BLCC</h2>
            <p className="muted">
              Un portafolio integral que cubre cada etapa del proceso de lavandería,
              desde el lavado y el secado hasta el planchado y el acabado.
            </p>
          </div>
          <div className={styles.portfolioGrid}>
            {productCategoriesMeta.map((cat) => (
              <Link
                key={cat.slug}
                href={`/productos/${cat.slug}`}
                className={styles.portfolioCard}
              >
                <span className={styles.portfolioTitle}>{cat.title}</span>
                <span className={styles.portfolioLink} aria-hidden="true">
                  <IconArrow width={18} height={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="section section--alt">
        <div className={`container ${styles.certGrid}`}>
          <div className={styles.certContent}>
            <span className="eyebrow">Certificaciones</span>
            <h2>Estándares de calidad</h2>
            <p className="muted">
              Los logotipos o fotografías de certificaciones se mostrarán únicamente
              cuando SV Solavi cuente con los archivos legibles y la autorización
              correspondiente para publicarlos.
            </p>
          </div>
          <div className={styles.certMedia}>
            <MediaPlaceholder label="Certificaciones BLCC" ratio="16/10" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>
            ¿Quieres equipos BLCC para tu operación?
          </h2>
          <p className={styles.ctaText}>
            SV Solavi te ayuda a seleccionar capacidades y configuraciones, y a
            preparar tu cotización.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contacto" className="btn btn--primary btn--lg">
              Solicitar cotización
            </Link>
            <a
              href={whatsappLink()}
              className="btn btn--whatsapp btn--lg"
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="click_whatsapp"
            >
              <IconWhatsApp width={20} height={20} />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
