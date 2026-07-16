"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { IconArrow } from "./Icons";
import { mainNav } from "@/lib/site";
import styles from "./Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Encabezado que se compacta al salir el sentinel del viewport.
  // Nunca un listener de scroll.
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Bloquea el scroll del cuerpo cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Focus trap + cierre con Esc + devolver foco al botón que abrió el menú.
  useEffect(() => {
    if (!menuOpen) return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusables = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.logoWrap}>
            <Logo />
          </div>

          <nav className={styles.desktopNav} aria-label="Navegación principal">
            <ul className={styles.navList}>
              {mainNav.map((item) => (
                <li
                  key={item.href}
                  className={styles.navItem}
                  onMouseEnter={() => {
                    if (item.children && window.matchMedia("(hover: hover)").matches) {
                      setOpenGroup(item.href);
                    }
                  }}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                    {item.children && <span className={styles.caret} aria-hidden="true" />}
                  </Link>
                  {item.children && openGroup === item.href && (
                    <div className={styles.dropdown}>
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className={styles.dropdownLink}>
                              <span className={styles.dropdownLabel}>{child.label}</span>
                              {child.description && (
                                <span className={styles.dropdownDesc}>{child.description}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Link href="/contacto" className={`btn btn--primary ${styles.headerCta}`}>
              Solicitar cotización
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className={styles.menuToggle}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="visually-hidden">{menuOpen ? "Cerrar menú" : "Abrir menú"}</span>
              <span
                className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div
          className={`${styles.backdrop} ${menuOpen ? styles.backdropOpen : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <div
          ref={panelRef}
          id="mobile-menu"
          className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ""}`}
          style={{
            transitionDuration: menuOpen ? "320ms" : "240ms",
            transitionTimingFunction: menuOpen ? "var(--ease-tambor)" : "var(--ease-estado)",
          }}
          inert={!menuOpen || undefined}
        >
          <nav aria-label="Navegación móvil">
            <ul className={`${styles.mobileList} ${menuOpen ? styles.mobileListOpen : ""}`}>
              {mainNav.map((item, i) => (
                <li
                  key={item.href}
                  className={styles.mobileItem}
                  style={{ transitionDelay: menuOpen ? `${120 + i * 50}ms` : "0ms" }}
                >
                  <Link href={item.href} className={styles.mobileLink} onClick={closeMenu}>
                    {item.label}
                    <IconArrow width={18} height={18} />
                  </Link>
                  {item.children && (
                    <ul className={styles.mobileSubList}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={styles.mobileSubLink}
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/contacto"
            className="btn btn--primary btn--block btn--lg"
            onClick={closeMenu}
          >
            Solicitar cotización
          </Link>
        </div>
      </header>
    </>
  );
}
