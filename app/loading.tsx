import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={`${styles.block} ${styles.hero}`} />
      <div className="container">
        <div className={styles.lines}>
          <div className={styles.block} style={{ width: "35%", height: 14 }} />
          <div className={styles.block} style={{ width: "65%", height: 32 }} />
          <div className={styles.block} style={{ width: "90%", height: 14 }} />
          <div className={styles.block} style={{ width: "80%", height: 14 }} />
        </div>
      </div>
    </div>
  );
}
