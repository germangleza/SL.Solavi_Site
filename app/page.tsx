import Link from "next/link";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { whatsappLink } from "@/lib/site";
import { solutions } from "@/content/solutions";
import {
  IconWasher,
  IconDryer,
  IconCoin,
  IconDrop,
  IconIron,
  IconTools,
  IconShield,
  IconChip,
  IconScale,
  IconLayers,
  IconArrow,
  IconWhatsApp,
} from "@/components/Icons";
import styles from "./page.module.css";

const trustChips = [
  "Fabricante de equipos desde 2008",
  "Presencia internacional",
  "Equipos bajo estándares CE",
  "Configuraciones para distintos niveles de operación",
];

const categories = [
  {
    slug: "lavado-industrial",
    title: "Lavado industrial",
    description:
      "Lavadoras extractoras, equipos de barrera sanitaria y sistemas horizontales para diferentes volúmenes de procesamiento.",
    Icon: IconWasher,
  },
  {
    slug: "secado-industrial",
    title: "Secado industrial",
    description:
      "Secadoras de distintas capacidades y alternativas de calentamiento para operaciones comerciales e industriales.",
    Icon: IconDryer,
  },
  {
    slug: "autoservicio",
    title: "Lavanderías de autoservicio",
    description:
      "Lavadoras, secadoras y torres apiladas con opciones de operación mediante monedas, tarjeta o QR, según configuración.",
    Icon: IconCoin,
  },
  {
    slug: "lavado-en-seco",
    title: "Lavado en seco",
    description:
      "Equipos para procesos con hidrocarburo o percloroetileno, orientados a tintorerías y cuidado profesional de prendas.",
    Icon: IconDrop,
  },
  {
    slug: "planchado-y-doblado",
    title: "Planchado y doblado",
    description:
      "Calandras, dobladoras y alimentadoras para el procesamiento eficiente de blancos y textiles planos.",
    Icon: IconIron,
  },
  {
    slug: "equipos-complementarios",
    title: "Acabado y equipos complementarios",
    description:
      "Mesas de planchado, prensas, maniquíes, transportadores, centrífugas y accesorios para completar la operación.",
    Icon: IconTools,
  },
];

const sectors = solutions.map((s) => ({
  slug: s.slug,
  title: s.cardTitle,
  imageAlt: s.imageAlt,
}));

const advantages = [
  {
    title: "Durabilidad",
    description:
      "Construcción orientada a trabajo comercial e industrial, con uso de acero inoxidable en componentes clave según el modelo.",
    Icon: IconShield,
  },
  {
    title: "Control y automatización",
    description:
      "Paneles programables y controles por microcomputadora para facilitar la configuración de ciclos y procesos.",
    Icon: IconChip,
  },
  {
    title: "Diferentes capacidades",
    description:
      "Alternativas desde equipos compactos hasta maquinaria para operaciones de gran volumen.",
    Icon: IconScale,
  },
  {
    title: "Configuración del proyecto",
    description:
      "Selecciona capacidades, alimentación eléctrica, método de calentamiento y combinación de equipos según tu proyecto.",
    Icon: IconLayers,
  },
];

const steps = [
  {
    number: "1",
    title: "Conocemos tu operación",
    description:
      "Revisamos el tipo de negocio, volumen estimado, instalaciones y objetivos.",
  },
  {
    number: "2",
    title: "Seleccionamos los equipos",
    description: "Proponemos capacidades, configuraciones y equipos complementarios.",
  },
  {
    number: "3",
    title: "Preparamos tu cotización",
    description: "Integramos una propuesta comercial y técnica para el proyecto.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 5.1 Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className="eyebrow">Equipos profesionales BLCC</span>
            <h1 className={styles.heroTitle}>
              Soluciones de lavandería para cada escala de operación
            </h1>
            <p className="lead">
              Equipos para lavado, secado, autoservicio, planchado con acabado
              comercial e industrial.
            </p>
            <div className={styles.heroActions}>
              <Link href="/productos" className="btn btn--primary btn--lg">
                Explorar equipos
              </Link>
              <Link href="/contacto" className="btn btn--secondary btn--lg">
                Solicitar cotización
              </Link>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <MediaPlaceholder label="Composición de equipos BLCC" ratio="4/3" />
          </div>
        </div>

        <div className={`container ${styles.trustBar}`}>
          <ul className={styles.trustChips}>
            {trustChips.map((chip) => (
              <li key={chip} className={styles.trustChip}>
                <span className={styles.dot} aria-hidden="true" />
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5.2 Presentación de BLCC */}
      <section className="section">
        <div className="container">
          <div className={styles.blccContent}>
            <span className="eyebrow">Respaldo tecnológico</span>
            <h2>Tecnología internacional para lavanderías profesionales</h2>
            <p className="lead">
              BLCC es un fabricante especializado en equipos para lavandería
              comercial e industrial. Cuenta con presencia en +50 países y 18 años
              de experiencia.
            </p>
            <p className="muted">
              Integra investigación, desarrollo y producción con soluciones
              configurables para hoteles, hospitales, lavanderías comerciales,
              autoservicios y plantas industriales.
            </p>
            <Link href="/blcc" className={styles.textLink}>
              Conocer BLCC
              <IconArrow width={18} height={18} />
            </Link>
          </div>
          <div className={styles.blccMedia}>
            <MediaPlaceholder label="Instalaciones o fábrica BLCC" ratio="16/9" />
          </div>
        </div>
      </section>

      {/* 5.3 Categorías */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Catálogo</span>
            <h2>Encuentra el equipo que necesita tu operación</h2>
          </div>
          <div className={styles.cardGrid}>
            {categories.map(({ slug, title, description, Icon }) => (
              <Link key={slug} href={`/productos/${slug}`} className={styles.categoryCard}>
                <span className={styles.categoryIcon}>
                  <Icon width={26} height={26} />
                </span>
                <h3 className={styles.categoryTitle}>{title}</h3>
                <p className={styles.categoryDesc}>{description}</p>
                <span className={styles.categoryLink}>
                  Ver equipos
                  <IconArrow width={16} height={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5.4 Sectores */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Sectores</span>
            <h2>Soluciones para diferentes tipos de negocio</h2>
          </div>
          <div className={styles.sectorGrid}>
            {sectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/soluciones/${sector.slug}`}
                className={styles.sectorCard}
              >
                <MediaPlaceholder
                  label={sector.imageAlt}
                  ratio="16/10"
                  className={styles.sectorMedia}
                />
                <span className={styles.sectorBody}>
                  <span className={styles.sectorName}>{sector.title}</span>
                  <span className={styles.sectorLink}>
                    Ver solución
                    <IconArrow width={16} height={16} />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 Ventajas */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Por qué BLCC</span>
            <h2>Equipos diseñados para una operación confiable</h2>
          </div>
          <div className={styles.advantageGrid}>
            {advantages.map(({ title, description, Icon }) => (
              <article key={title} className={styles.advantageCard}>
                <span className={styles.advantageIcon}>
                  <Icon width={24} height={24} />
                </span>
                <h3 className={styles.advantageTitle}>{title}</h3>
                <p className={styles.advantageDesc}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5.6 SV Solavi */}
      <section className="section">
        <div className="container">
          <div className={styles.logoSlot} role="img" aria-label="Logo de SV Solavi (pendiente)">
            <span>Logo SV Solavi</span>
          </div>
          <div className={styles.sectionHead}>
            <span className="eyebrow">SV Solavi</span>
            <h2>La tecnología de BLCC con atención cercana</h2>
            <p className="lead">
              SV Solavi te ayuda a evaluar las necesidades de tu operación,
              identificar capacidades y construir una propuesta de equipos adecuada
              para tu proyecto. Y después de la venta te damos servicio con
              mantenimiento preventivo, correctivo, pólizas y reconstrucción de
              equipos.
            </p>
          </div>
          <ol className={styles.stepGrid}>
            {steps.map((step) => (
              <li key={step.number} className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </li>
            ))}
          </ol>
          <div className={styles.stepAction}>
            <Link href="/contacto" className="btn btn--primary btn--lg">
              Hablar con un asesor
            </Link>
            <Link href="/servicios" className="btn btn--secondary btn--lg">
              Conocer nuestros servicios
            </Link>
          </div>
        </div>
      </section>

      {/* 5.7 CTA final */}
      <section className={styles.finalCta}>
        <div className={`container ${styles.finalCtaInner}`}>
          <h2 className={styles.finalCtaTitle}>
            Encuentra la solución adecuada para tu lavandería
          </h2>
          <p className={styles.finalCtaText}>
            Cuéntanos sobre tu operación y recibe una recomendación de equipos y
            capacidades.
          </p>
          <div className={styles.finalCtaActions}>
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
    </>
  );
}
