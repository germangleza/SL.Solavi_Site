import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "SV Solavi comercializa soluciones de lavandería comercial e industrial con equipos BLCC, con atención cercana para cada operación.",
  alternates: { canonical: "/nosotros" },
};

const values = [
  {
    title: "Atención cercana",
    description:
      "Acompañamos cada proyecto para identificar la capacidad y configuración adecuadas.",
  },
  {
    title: "Enfoque técnico",
    description:
      "Traducimos el volumen y las condiciones de tu operación en una propuesta de equipos.",
  },
  {
    title: "Respaldo BLCC",
    description:
      "Trabajamos con el portafolio de equipos BLCC para lavado, secado, autoservicio, tintorería, planchado y acabado.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs items={[{ label: "Nosotros", href: "/nosotros" }]} />
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className="eyebrow">Nosotros</span>
              <h1>Soluciones profesionales con atención cercana</h1>
              <p className="lead">
                SV Solavi comercializa soluciones de lavandería comercial e
                industrial con equipos BLCC. Nuestro objetivo es ayudar a cada
                cliente a identificar la capacidad y configuración adecuadas para su
                operación.
              </p>
              <Link href="/contacto" className="btn btn--primary btn--lg">
                Hablar con un asesor
              </Link>
            </div>
            <div className={styles.heroMedia}>
              <Image
                src="/images/logo/logo-color.png"
                alt="SV Solavi — Soluciones para lavanderías industriales"
                width={900}
                height={201}
                className={styles.heroLogo}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <article key={v.title} className={styles.valueCard}>
                <h2 className={styles.valueTitle}>{v.title}</h2>
                <p className={styles.valueDesc}>{v.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className={`container ${styles.relationGrid}`}>
          <div>
            <span className="eyebrow">Relación con BLCC</span>
            <h2>Trabajamos con el portafolio de equipos BLCC</h2>
          </div>
          <div className={styles.relationBody}>
            <blockquote className={styles.quote}>
              “Trabajamos con el portafolio de equipos BLCC para ofrecer soluciones
              de lavado, secado, autoservicio, tintorería, planchado y acabado.”
            </blockquote>
            <p className="muted">
              Para conocer más sobre el fabricante y su portafolio, visita la página
              de <Link href="/blcc" className={styles.inlineLink}>BLCC</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>¿Listo para tu proyecto?</h2>
          <p className={styles.ctaText}>
            Cuéntanos sobre tu operación y recibe una recomendación de equipos y
            capacidades.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contacto" className="btn btn--primary btn--lg">
              Solicitar cotización
            </Link>
            <Link href="/productos" className="btn btn--secondary btn--lg">
              Ver el catálogo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
