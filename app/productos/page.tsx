import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CatalogBrowser } from "@/components/CatalogBrowser";
import { getAllProducts, productCategoriesMeta } from "@/lib/products";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Catálogo de equipos BLCC",
  description:
    "Explora equipos profesionales para lavado, secado, autoservicio, tintorería, planchado, doblado y acabado.",
  alternates: { canonical: "/productos" },
};

export default function CatalogPage() {
  const products = getAllProducts();

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs items={[{ label: "Equipos", href: "/productos" }]} />
          <div className={styles.heroContent}>
            <span className="eyebrow">Catálogo</span>
            <h1>Catálogo de equipos BLCC</h1>
            <p className="lead">
              Explora soluciones para lavado, secado, autoservicio, tintorería,
              planchado, doblado y acabado profesional.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.categoriesBar}>
        <div className="container">
          <ul className={styles.categoryChips}>
            {productCategoriesMeta.map((c) => (
              <li key={c.slug}>
                <Link href={`/productos/${c.slug}`} className={styles.categoryChip}>
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section ${styles.browserSection}`}>
        <div className="container">
          <CatalogBrowser products={products} categories={productCategoriesMeta} />
        </div>
      </section>
    </>
  );
}
