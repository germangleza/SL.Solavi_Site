import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IconArrow } from "@/components/Icons";
import { solutions } from "@/content/solutions";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Soluciones por sector",
  description:
    "Soluciones de lavandería para autoservicio, hoteles, hospitales, lavanderías industriales, tintorerías, escuelas y comunidades.",
  alternates: { canonical: "/soluciones" },
};

export default function SolutionsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs items={[{ label: "Soluciones", href: "/soluciones" }]} />
          <div className={styles.heroContent}>
            <span className="eyebrow">Soluciones</span>
            <h1>Soluciones para diferentes tipos de negocio</h1>
            <p className="lead">
              Cada operación tiene necesidades distintas. Combinamos equipos BLCC de
              lavado, secado, planchado y acabado según tu sector, volumen y espacio.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {solutions.map((s) => (
              <Link key={s.slug} href={`/soluciones/${s.slug}`} className={styles.card}>
                <h2 className={styles.cardTitle}>{s.cardTitle}</h2>
                <p className={styles.cardText}>{s.intro}</p>
                <span className={styles.cardLink}>
                  Ver solución
                  <IconArrow width={16} height={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
