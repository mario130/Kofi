
import CoffeeFilters from "@/app/_components/shop/CoffeeFilters";
import CoffeesGrid from "@/app/_components/shop/CoffeesGrid";


export default function Shop() {

  return (
    <main className="mx-4 mt-10 max-w-8xl gap-10 sm:grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 2xl:mx-auto">
      <aside className="w-full sm:w-72">
        <CoffeeFilters />
      </aside>

      <div className="col-span-3 mt-5 sm:mt-0">
        <CoffeesGrid />
      </div>
    </main>
  );
}
