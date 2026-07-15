"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IconWhatsApp } from "./Icons";
import { whatsappLink } from "@/lib/site";
import styles from "./MobileCtaBar.module.css";

export function MobileCtaBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [heroPassed, setHeroPassed] = useState(false);
  const [finalCtaIn, setFinalCtaIn] = useState(false);

  // En home la barra aparece cuando el hero sale del viewport y se oculta
  // al llegar al CTA final (no duplicar la acción). En el resto de páginas
  // se mantiene siempre visible. Todo vía IntersectionObserver, nunca un
  // listener de scroll.
  useEffect(() => {
    if (!isHome) return;
    setHeroPassed(false);
    setFinalCtaIn(false);

    const heroEl = document.getElementById("hero");
    const ctaEl = document.getElementById("final-cta");
    if (!heroEl && !ctaEl) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === heroEl) {
            setHeroPassed(!entry.isIntersecting && entry.boundingClientRect.top < 0);
          }
          if (entry.target === ctaEl) {
            setFinalCtaIn(entry.isIntersecting);
          }
        }
      },
      { threshold: 0 },
    );
    if (heroEl) io.observe(heroEl);
    if (ctaEl) io.observe(ctaEl);
    return () => io.disconnect();
  }, [isHome]);

  const visible = isHome ? heroPassed && !finalCtaIn : true;

  return (
    <div
      className={`${styles.bar} ${visible ? styles.barVisible : ""}`}
      style={{
        transitionDuration: visible ? "300ms" : "240ms",
        transitionTimingFunction: visible ? "var(--ease-tambor)" : "var(--ease-estado)",
      }}
      inert={visible ? undefined : true}
    >
      <a
        href={whatsappLink()}
        className={styles.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        data-analytics="click_whatsapp"
      >
        <IconWhatsApp width={20} height={20} />
        WhatsApp
      </a>
      <Link href="/contacto" className={styles.quote} data-analytics="click_quote_header">
        Solicitar cotización
      </Link>
    </div>
  );
}
