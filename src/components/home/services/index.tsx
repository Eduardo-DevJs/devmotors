import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Services({ object }: HomeProps) {
  return (
    <>
      <section id="servicos" className={styles.containerAbout}>
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
            sizes="(max-width: 480px) 100vw, (max-width: 75vw, 60vw)"
            src={object.metadata.about.banner.url}
          />
        </div>
      </section>
      <h2 className={styles.serviceTitle}>Conheça nosso serviços</h2>
      <section className={styles.services}>
        {object.metadata.services.map((service) => (
          <article key={service.description}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                alt="Imagem do serviço"
                fill={true}
                sizes="(max-width: 480px) 100vw, (max-width: 75vw, 60vw)"
                quality={100}
                src={service.image.url}
              />
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
