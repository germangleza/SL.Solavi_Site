import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import {
  getCategory,
  getProductsByCategory,
  productCategoriesMeta,
} from "@/lib/products";
import styles from "./page.module.css";

type Params = { category: string };

export function generateStaticParams() {
  return productCategoriesMeta.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return {
    title: `${cat.title} BLCC`,
    description: cat.description,
    alternates: { canonical: `/productos/${cat.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const products = getProductsByCategory(category);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Equipos", href: "/productos" },
              { label: cat.shortTitle, href: `/productos/${cat.slug}` },
            ]}
          />
          <div className={styles.heroContent}>
            <span className="eyebrow">Categoría</span>
            <h1>{cat.title}</h1>
            <p className="lead">{cat.description}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className={styles.otherCategories}>
            <h2 className={styles.otherTitle}>Otras categorías</h2>
            <ul className={styles.otherList}>
              {productCategoriesMeta
                .filter((c) => c.slug !== cat.slug)
                .map((c) => (
                  <li key={c.slug}>
                    <Link href={`/productos/${c.slug}`} className={styles.otherLink}>
                      {c.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
