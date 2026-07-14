"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import type { Product, ProductCategory } from "@/lib/products";
import styles from "./CatalogBrowser.module.css";

type Props = {
  products: Product[];
  categories: ProductCategory[];
};

const ALL = "todas";

export function CatalogBrowser({ products, categories }: Props) {
  const [category, setCategory] = useState<string>(ALL);
  const [capacity, setCapacity] = useState<string>(ALL);
  const [heating, setHeating] = useState<string>(ALL);

  const capacities = useMemo(() => {
    const set = new Set<string>();
    for (const p of products) for (const c of p.capacities ?? []) set.add(c);
    return [...set];
  }, [products]);

  const heatingMethods = useMemo(() => {
    const set = new Set<string>();
    for (const p of products) for (const m of p.heatingMethods ?? []) set.add(m);
    return [...set];
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== ALL && p.category !== category) return false;
      if (capacity !== ALL && !(p.capacities ?? []).includes(capacity)) return false;
      if (heating !== ALL && !(p.heatingMethods ?? []).includes(heating)) return false;
      return true;
    });
  }, [products, category, capacity, heating]);

  const hasFilters = category !== ALL || capacity !== ALL || heating !== ALL;

  return (
    <div>
      <div className={styles.filters}>
        <div className={styles.field}>
          <label htmlFor="filter-category">Categoría</label>
          <select
            id="filter-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value={ALL}>Todas las categorías</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="filter-capacity">Capacidad</label>
          <select
            id="filter-capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          >
            <option value={ALL}>Cualquier capacidad</option>
            {capacities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="filter-heating">Método de calentamiento</label>
          <select
            id="filter-heating"
            value={heating}
            onChange={(e) => setHeating(e.target.value)}
          >
            <option value={ALL}>Cualquier método</option>
            {heatingMethods.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {hasFilters && (
          <button
            type="button"
            className={styles.reset}
            onClick={() => {
              setCategory(ALL);
              setCapacity(ALL);
              setHeating(ALL);
            }}
          >
            Limpiar filtros
          </button>
        )}
      </div>

      <p className={styles.count} role="status" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "equipo" : "equipos"}
      </p>

      {filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>
          No hay equipos que coincidan con estos filtros. Ajusta la selección o{" "}
          <a href="/contacto">solicita asesoría</a>.
        </p>
      )}
    </div>
  );
}
