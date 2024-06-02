import styles from "./style.module.scss";

export default function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>Página {slug}</h1>
    </div>
  );
}
