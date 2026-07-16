import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

const ALT = "SV Solavi — Soluciones para lavanderías industriales";

export function Logo({
  variant = "image",
}: {
  variant?: "image" | "text";
}) {
  if (variant === "text") {
    return (
      <Link href="/" className={styles.logo} aria-label="SV Solavi — inicio">
        <span className={styles.mark} aria-hidden="true">
          SV
        </span>
        <span className={styles.text}>
          <span className={styles.brand}>SV Solavi</span>
          <span className={styles.seal}>Equipos BLCC</span>
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" className={styles.logo} aria-label="SV Solavi — inicio">
      <Image
        src="/images/logo/logo-color.png"
        alt={ALT}
        width={900}
        height={201}
        priority
        className={styles.image}
      />
    </Link>
  );
}
