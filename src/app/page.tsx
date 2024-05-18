import Hero from "@/components/hero";
import Submenu from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import {Phone} from "lucide-react"


export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <main>
      <Submenu />
      <Hero
        buttonUrl={object.metadata.cta_button.url}
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#fff"/>}
      />
    </main>
  );
}
