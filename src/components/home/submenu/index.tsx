"use client";
import Link from "next/link";
import styles from "./style.module.scss";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { MenuProps } from "@/utils/menu.type";

interface SubMenuProps {
  menu: MenuProps;
}

export default function Submenu({ menu }: SubMenuProps) {
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
        {menu.objects.map((item) => (
          <li>
            <Link href={`/post/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
