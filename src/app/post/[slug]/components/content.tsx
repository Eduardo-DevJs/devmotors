import Container from "@/components/container";
import Hero from "@/components/hero";
import Image from "next/image";
import React from "react";
import styles from "./content.module.scss";
import { PostProps } from "@/utils/post.type";
import { getItemBySlug } from "@/utils/actions/get-data";
import { Phone } from "lucide-react";

export default async function Content({ slug }: { slug: string }) {
  const { objects }: PostProps = await getItemBySlug(slug);
  return (
    <>
      <Hero
        heading={objects[0].title}
        buttonUrl={objects[0].metadata.button.url}
        buttonTitle={objects[0].metadata.button.title}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#fff" />}
      />

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1>{objects[0].metadata.description.title}</h1>
            <p>{objects[0].metadata.description.text}</p>

            {objects[0].metadata.description.button_active && (
              <a
                className={styles.link}
                target="_blank"
                href={objects[0].metadata.description.button_url as string}
              >
                {objects[0].metadata.button.title}
              </a>
            )}
          </article>

          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={objects[0].title}
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 480px) 100vw, (max-width: 75vw, 60vw)"
              src={objects[0].metadata.description.banner.url}
            />
          </div>
        </section>
      </Container>
    </>
  );
}
