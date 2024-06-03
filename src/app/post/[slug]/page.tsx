import { Suspense } from "react";
import { PostProps } from "@/utils/post.type";
import { getItemBySlug } from "@/utils/actions/get-data";
import { Metadata } from "next";
import Content from "./components/content";
import LoadingPost from "./components/loading";

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
      keywords: ["devmotors", "troca de oleo", "devmotors troca de oleo"],
      openGraph: {
        title: `DevMotors - ${objects[0].title}`,
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
  return (
    <>
      <Suspense fallback={<LoadingPost />}>
        <Content slug={slug} />
      </Suspense>
    </>
  );
}
