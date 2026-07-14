import type { SpecTable } from "@/lib/products";
import styles from "./ModelComparisonTable.module.css";

export function ModelComparisonTable({ table }: { table: SpecTable }) {
  const singleModel = table.columns.length === 1;

  return (
    <figure className={styles.wrapper}>
      {table.title && <figcaption className={styles.caption}>{table.title}</figcaption>}
      <div className={styles.scroll} tabIndex={0} role="group" aria-label={table.title ?? "Especificaciones"}>
        <table className={`${styles.table} ${singleModel ? styles.single : ""}`}>
          <thead>
            <tr>
              <th scope="col" className={styles.cornerCell}>
                Especificación
              </th>
              {table.columns.map((col) => (
                <th scope="col" key={col} className={styles.modelHead}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.label}>
                <th scope="row" className={styles.rowHead}>
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td key={`${row.label}-${i}`} className={styles.cell}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
