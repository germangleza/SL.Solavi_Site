import Link from "next/link";
import { Logo } from "./Logo";
import { productCategories, sectors, site } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <div className={styles.logoBadge}>
              <Logo />
            </div>
            <p className={styles.tagline}>
              Soluciones profesionales para lavandería comercial e industrial con
              equipos BLCC y la asesoría cercana de SV Solavi.
            </p>
            {site.contactEmail && (
              <a href={`mailto:${site.contactEmail}`} className={styles.contactLink}>
                {site.contactEmail}
              </a>
            )}
          </div>

          <nav className={styles.linksCol} aria-label="Equipos">
            <h2 className={styles.colTitle}>Equipos</h2>
            <ul>
              {productCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/productos/${cat.slug}`}>{cat.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linksCol} aria-label="Soluciones">
            <h2 className={styles.colTitle}>Soluciones</h2>
            <ul>
              {sectors.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linksCol} aria-label="Empresa">
            <h2 className={styles.colTitle}>Empresa</h2>
            <ul>
              <li>
                <Link href="/blcc">BLCC</Link>
              </li>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} {site.brand}. Equipos BLCC. Todos los derechos reservados.
          </p>
          <p className={styles.legal}>
            Las capacidades, dimensiones y consumos deben confirmarse con SV Solavi
            antes de cerrar una compra.
          </p>
        </div>
      </div>
    </footer>
  );
}
