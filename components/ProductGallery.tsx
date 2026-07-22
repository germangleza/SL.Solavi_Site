"use client";

import { useState } from "react";
import Image from "next/image";
import { COLOR_SWATCHES, type ProductColor } from "@/lib/products";
import styles from "./ProductGallery.module.css";

type Props = {
  colors: ProductColor[];
  alt: string;
};

/**
 * Foto del producto con selector de color. La primera variante es la que se
 * muestra al cargar. Al elegir un color, cambia la foto grande sin recargar.
 */
export function ProductGallery({ colors, alt }: Props) {
  const [active, setActive] = useState(0);
  const current = colors[active] ?? colors[0];

  return (
    <div className={styles.gallery}>
      <Image
        key={current.image}
        src={current.image}
        alt={`${alt} — color ${current.label.toLowerCase()}`}
        width={1448}
        height={1086}
        priority
        className={styles.photo}
      />

      <div className={styles.swatches} role="group" aria-label="Color del equipo">
        {colors.map((color, i) => {
          const selected = i === active;
          return (
            <button
              key={color.key}
              type="button"
              className={`${styles.swatch} ${selected ? styles.swatchActive : ""}`}
              style={{ "--swatch": COLOR_SWATCHES[color.key] ?? "#999" } as React.CSSProperties}
              aria-pressed={selected}
              aria-label={color.label}
              title={color.label}
              onClick={() => setActive(i)}
            >
              <span className={styles.dot} aria-hidden="true" />
            </button>
          );
        })}
        <span className={styles.currentLabel}>{current.label}</span>
      </div>
    </div>
  );
}
