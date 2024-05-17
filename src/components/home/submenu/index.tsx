"use client";
import Link from "next/link";
import styles from "./style.module.scss";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Submenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.submenu}>
      <div onClick={toggleMenu} className={styles.submenuIcon}>
        <Menu size={34} color="#121212" />
        Serviços 
      </div>
      <ul className={`${styles.list} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <button className={styles.closeButton} onClick={toggleMenu}>
            <X size={54} color="#121212" />
          </button>
        )}
        <li>
          <Link href={"/post/pagina-1"}>Página 1</Link>
        </li>
        <li>
          <Link href={"/post/pagina-2"}>Página 2</Link>
        </li>
      </ul>
    </section>
  );
}
