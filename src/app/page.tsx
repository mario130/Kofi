import Headquarters from "./_components/Headquarters";
import CTA from "./_components/Homepage/CTA";
import OurCollection from "./_components/Homepage/OurCollection";
import PopularItem from "./_components/Homepage/PopularItem";
import Quality from "./_components/Quality";

export default async function Home() {
  return (
    <main>
      <CTA />
      <OurCollection />
      <PopularItem />
    </main>
  );
}
