import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Servicios de SV Solavi",
  description:
    "Acompañamiento para seleccionar e implementar tus equipos: diagnóstico, selección, diseño de solución, cotización y suministro.",
  alternates: { canonical: "/servicios" },
};

const coreServices = [
  {
    number: "01",
    title: "Diagnóstico del proyecto",
    description:
      "Revisión de volumen, tipo de textiles, espacio, servicios y objetivos de operación.",
  },
  {
    number: "02",
    title: "Selección de equipos",
    description:
      "Definición de familias, capacidades y configuraciones recomendadas.",
  },
  {
    number: "03",
    title: "Diseño de solución",
    description:
      "Propuesta de combinación de lavado, secado, planchado, doblado y acabado.",
  },
  {
    number: "04",
    title: "Cotización y suministro",
    description:
      "Preparación de propuesta comercial y coordinación de adquisición.",
  },
];

const additionalServices = [
  {
    title: "Instalación",
    description:
      "Disponible cuando SV Solavi la ofrece directamente o mediante aliados. Confirma el alcance con un asesor.",
  },
  {
    title: "Capacitación",
    description:
      "Alcance, modalidad y duración se definen según el proyecto y los equipos seleccionados.",
  },
  {
    title: "Refacciones y servicio",
    description:
      "Cobertura, tiempos y condiciones se confirman de acuerdo con cada operación.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs items={[{ label: "Servicios", href: "/servicios" }]} />
          <div className={styles.heroContent}>
            <span className="eyebrow">Servicios</span>
            <h1>Acompañamiento para seleccionar e implementar tus equipos</h1>
            <p className="lead">
              Te acompañamos desde el diagnóstico de tu operación hasta la
              cotización y el suministro de los equipos adecuados para tu proyecto.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.coreGrid}>
            {coreServices.map((s) => (
              <article key={s.number} className={styles.coreCard}>
                <span className={styles.coreNumber}>{s.number}</span>
                <h2 className={styles.coreTitle}>{s.title}</h2>
                <p className={styles.coreDesc}>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Según el proyecto</span>
            <h2>Servicios complementarios</h2>
            <p className="muted">
              Estos servicios se confirman de acuerdo con cada operación y con la
              disponibilidad de SV Solavi.
            </p>
          </div>
          <div className={styles.additionalGrid}>
            {additionalServices.map((s) => (
              <article key={s.title} className={styles.additionalCard}>
                <h3 className={styles.additionalTitle}>{s.title}</h3>
                <p className={styles.additionalDesc}>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Empecemos por tu diagnóstico</h2>
          <p className={styles.ctaText}>
            Cuéntanos sobre tu operación y recibe una recomendación de equipos y
            capacidades.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contacto" className="btn btn--primary btn--lg">
              Hablar con un asesor
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
