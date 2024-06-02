import { PostProps } from "@/utils/post.type";
import styles from "./style.module.scss";
import { getItemBySlug } from "@/utils/actions/get-data";

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { object }: PostProps = await getItemBySlug(slug);

  return (
    <div>
      <h1>Página {slug}</h1>
    </div>
  );
}
