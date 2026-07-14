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

const maintenanceServices = [
  {
    title: "Mantenimiento preventivo",
    description:
      "Revisiones programadas para conservar el desempeño de los equipos y reducir paros no planificados.",
  },
  {
    title: "Mantenimiento correctivo",
    description:
      "Diagnóstico y reparación de fallas para devolver los equipos a su operación normal.",
  },
  {
    title: "Pólizas de mantenimiento",
    description:
      "Planes de servicio con visitas y cobertura definidas para dar continuidad a tu operación.",
  },
  {
    title: "Reconstrucción de equipos",
    description:
      "Rehabilitación de maquinaria para extender su vida útil y recuperar su capacidad de trabajo.",
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
    title: "Refacciones",
    description:
      "Suministro de refacciones para tus equipos; cobertura y tiempos se confirman según la operación.",
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
              cotización, el suministro y el mantenimiento de los equipos, con
              servicio preventivo, correctivo, pólizas y reconstrucción de
              maquinaria.
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
            <span className="eyebrow">Mantenimiento y soporte</span>
            <h2>Servicio para que tus equipos sigan trabajando</h2>
            <p className="muted">
              Además de la venta, damos soporte a la operación de tus equipos a lo
              largo de su vida útil.
            </p>
          </div>
          <div className={styles.coreGrid}>
            {maintenanceServices.map((s) => (
              <article key={s.title} className={styles.coreCard}>
                <h3 className={styles.coreTitle}>{s.title}</h3>
                <p className={styles.coreDesc}>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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
