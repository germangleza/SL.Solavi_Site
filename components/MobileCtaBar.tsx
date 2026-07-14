import Link from "next/link";
import { IconWhatsApp } from "./Icons";
import { whatsappLink } from "@/lib/site";
import styles from "./MobileCtaBar.module.css";

export function MobileCtaBar() {
  return (
    <div className={styles.bar}>
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
