import CTA from "./_components/Homepage/CTA";
import OurCollection from "./_components/Homepage/OurCollection";
import PopularItem from "./_components/Homepage/PopularItem";

export default async function Home() {
  return (
    <main>
      <CTA />
      <OurCollection />
      <PopularItem />
    </main>
  );
}
