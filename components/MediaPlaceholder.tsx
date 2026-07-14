import styles from "./MediaPlaceholder.module.css";

type Props = {
  label: string;
  ratio?: "4/3" | "16/10" | "16/9" | "1/1";
  className?: string;
};

/**
 * Reserva el espacio para una imagen pendiente respetando la relación de
 * aspecto indicada en el documento maestro. Se reemplazará por <Image>
 * cuando existan las fotografías definitivas.
 */
export function MediaPlaceholder({ label, ratio = "4/3", className }: Props) {
  return (
    <div
      className={`${styles.media} ${className ?? ""}`}
      style={{ aspectRatio: ratio.replace("/", " / ") }}
      role="img"
      aria-label={`${label} (imagen pendiente)`}
    >
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="m4 17 4.5-4.5 3 3L15 12l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
