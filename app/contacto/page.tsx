import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { IconWhatsApp } from "@/components/Icons";
import { site, whatsappLink } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contacto y cotización",
  description:
    "Cuéntanos sobre tu proyecto y un asesor de SV Solavi te recomendará equipos y capacidades. Solicita tu cotización.",
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <Breadcrumbs items={[{ label: "Contacto", href: "/contacto" }]} />
          <span className="eyebrow">Contacto</span>
          <h1>Cuéntanos sobre tu proyecto</h1>
          <p className="lead">
            Completa el formulario y un asesor de SV Solavi revisará tus necesidades
            para recomendarte equipos y capacidades.
          </p>

          <ul className={styles.benefits}>
            <li>Asesoría técnica sin costo.</li>
            <li>Recomendación de capacidades y configuración.</li>
            <li>Propuesta comercial y técnica para tu proyecto.</li>
          </ul>

          <div className={styles.directContact}>
            <a
              href={whatsappLink()}
              className={styles.whatsappCard}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="click_whatsapp"
            >
              <span className={styles.whatsappIcon}>
                <IconWhatsApp width={22} height={22} />
              </span>
              <span>
                <span className={styles.directLabel}>Escríbenos por WhatsApp</span>
                <span className={styles.directValue}>Respuesta rápida</span>
              </span>
            </a>
            {site.contactEmail && (
              <a href={`mailto:${site.contactEmail}`} className={styles.emailCard}>
                <span className={styles.directLabel}>Correo</span>
                <span className={styles.directValue}>{site.contactEmail}</span>
              </a>
            )}
          </div>
        </div>

        <div className={styles.formWrap}>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
