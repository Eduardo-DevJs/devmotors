import { ReactNode } from "react";
import styles from "./style.module.css";
import Image from "next/image";

interface HeroProps {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
  icon: ReactNode;
}
export default function Hero({
  bannerUrl,
  buttonTitle,
  icon,
  buttonUrl,
  heading,
}: HeroProps) {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>

        <a className={styles.link} target="_blank" href={buttonUrl}>
          {icon}
          {buttonTitle}
        </a>
      </div>

      <div className={styles.contentBanner}>
        <Image
          className={styles.banner}
          src={bannerUrl}
          priority={true}
          quality={100}
          fill={true}
          alt={heading}
        />
      </div>
    </main>
  );
}
