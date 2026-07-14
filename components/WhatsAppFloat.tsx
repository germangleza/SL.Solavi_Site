import { IconWhatsApp } from "./Icons";
import { whatsappLink } from "@/lib/site";
import styles from "./WhatsAppFloat.module.css";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      className={styles.float}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics="click_whatsapp"
      aria-label="Escríbenos por WhatsApp"
    >
      <IconWhatsApp width={26} height={26} />
    </a>
  );
}
