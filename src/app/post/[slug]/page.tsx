import { PostProps } from "@/utils/post.type";
import styles from "./style.module.scss";
import { getItemBySlug } from "@/utils/actions/get-data";
import Hero from "@/components/hero";
import { Phone } from "lucide-react";
import Container from "@/components/container";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { objects }: PostProps = await getItemBySlug(slug).catch(() => {
      return {
        title: "DevMotors - Sua oficina especializada",
        description: "Oficina ed carros no Espirito Santo",
      };
    });

    return {
      title: `DevMotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      keywords: ['devmotors', 'troca de oleo','devmotors troca de oleo'],
      openGraph: {
        title:  `DevMotors - ${objects[0].title}`,
        images: [objects[0].metadata.banner.url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
        },
      },
    };
  } catch (error) {
    return {
      title: "DevMotors - Sua oficina especializada",
    };
  }
}

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
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
