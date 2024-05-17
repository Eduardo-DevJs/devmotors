import Link from "next/link";
import styles from "./style.module.scss";
import { X, Menu } from "lucide-react";

export default function Submenu() {
  return (
    <section className={styles.submenu}>
        <div className={styles.submenuIcon}>
            <Menu size={34} color="#121212" />
            Menu
        </div>
      <ul className={styles.list}>
        <li>
          <Link href={"/post/pagina-1"}>Página 1</Link>
          <Link href={"/post/pagina-2"}>Página 2</Link>
        </li>
      </ul>
    </section>
  );
}
