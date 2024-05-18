import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Services({ object }: HomeProps) {
  return (
    <section className={styles.containerAbout}>
      <article className={styles.innerAbout}>
        <h1 className={styles.title}>Sobre</h1>
        <p>{object.metadata.about.description}</p>
      </article>
      <div className={styles.bannerAbout}>
        <Image
          className={styles.imageAbout}
          alt="Imagem lustrativa da empresa"
          fill={true}
          quality={100}
          src={object.metadata.about.banner.url}
        />
      </div>
    </section>
  );
}
