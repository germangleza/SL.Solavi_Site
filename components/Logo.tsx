import Link from "next/link";
import styles from "./Logo.module.css";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className={styles.logo} aria-label="SV Solavi — inicio">
      <span className={styles.mark} aria-hidden="true">
        SV
      </span>
      <span className={styles.text}>
        <span className={styles.brand}>SV Solavi</span>
        {!compact && <span className={styles.seal}>Equipos BLCC</span>}
      </span>
    </Link>
  );
}
