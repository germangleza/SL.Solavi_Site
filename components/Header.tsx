"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { IconArrow } from "./Icons";
import { mainNav } from "@/lib/site";
import styles from "./Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del cuerpo cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Logo />

        <nav className={styles.desktopNav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {mainNav.map((item) => (
              <li
                key={item.href}
                className={styles.navItem}
                onMouseEnter={() => item.children && setOpenGroup(item.href)}
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
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="visually-hidden">
              {menuOpen ? "Cerrar menú" : "Abrir menú"}
            </span>
            <span className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobilePanel} id="mobile-menu">
          <nav aria-label="Navegación móvil">
            <ul className={styles.mobileList}>
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.mobileLink}
                    onClick={() => setMenuOpen(false)}
                  >
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
                            onClick={() => setMenuOpen(false)}
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
            onClick={() => setMenuOpen(false)}
          >
            Solicitar cotización
          </Link>
        </div>
      )}
    </header>
  );
}
