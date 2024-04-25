import CTA from "./_components/Homepage/CTA";
import OurCollection from "./_components/Homepage/OurCollection";
import PopularItem from "./_components/Homepage/PopularItem";
import Suggestions from "./_components/Suggestions";

export default async function Home() {
  return (
    <main className="px-6 max-w-7xl mx-auto">
      <CTA />
      <OurCollection />
      <PopularItem />
      <Suggestions title="Top selling coffees" content="Based on the last 3 months" count={6} className="mt-24" />
    </main>
  );
}
