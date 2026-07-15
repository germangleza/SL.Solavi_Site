"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Un solo IntersectionObserver compartido por toda la app. Se dispara una
 * vez por elemento y hace unobserve; nunca revierte al scrollear hacia
 * arriba.
 */
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          sharedObserver?.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -12% 0px" },
    );
  }
  return sharedObserver;
}

/**
 * Hook de bajo nivel: da un ref + className + style para aplicar el reveal
 * a cualquier elemento (incluyendo componentes que reenvían ref, como
 * `next/link`). Úsalo cuando `<Reveal>` no pueda envolver el nodo
 * directamente (por ejemplo, tarjetas que son enlaces completos).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(index = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    const io = getSharedObserver();
    if (!el || !io) return;
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return {
    ref,
    className: "reveal",
    style: { "--i": index } as CSSProperties,
  };
}

type RevealProps = {
  children: ReactNode;
  index?: number;
  className?: string;
};

/**
 * Envoltorio simple para bloques de contenido: encabezados de sección,
 * imágenes, bloques de CTA. Para tarjetas/enlaces usa `useReveal`.
 */
export function Reveal({ children, index = 0, className = "" }: RevealProps) {
  const { ref, style } = useReveal<HTMLDivElement>(index);

  return (
    <div ref={ref} className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
