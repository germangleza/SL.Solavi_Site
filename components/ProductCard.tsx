import Link from "next/link";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { IconArrow } from "./Icons";
import { productHref, getCategory, type Product } from "@/lib/products";
import styles from "./ProductCard.module.css";

export function ProductCard({ product }: { product: Product }) {
  const href = productHref(product);
  const category = getCategory(product.category);
  const capacityLabel =
    product.capacities && product.capacities.length > 0
      ? product.capacities.length > 1
        ? `${product.capacities[0]} – ${product.capacities[product.capacities.length - 1]}`
        : product.capacities[0]
      : undefined;

  return (
    <article className={styles.card}>
      <Link href={href} className={styles.mediaLink} tabIndex={-1} aria-hidden="true">
        <MediaPlaceholder label={product.imageAlt} ratio="4/3" className={styles.media} />
      </Link>
      <div className={styles.body}>
        {category && <span className={styles.category}>{category.shortTitle}</span>}
        <h3 className={styles.name}>
          <Link href={href} className={styles.nameLink}>
            {product.series ? `${product.series} — ${product.name}` : product.name}
          </Link>
        </h3>
        <p className={styles.desc}>{product.summary}</p>
        {capacityLabel && (
          <p className={styles.capacity}>
            <span className={styles.capacityLabel}>Capacidades</span>
            {capacityLabel}
          </p>
        )}
        <div className={styles.actions}>
          <Link href={href} className={styles.viewLink}>
            Ver equipo
            <IconArrow width={16} height={16} />
          </Link>
          <Link href="/contacto" className={`btn btn--secondary ${styles.quoteBtn}`}>
            Cotizar
          </Link>
        </div>
      </div>
    </article>
  );
}
