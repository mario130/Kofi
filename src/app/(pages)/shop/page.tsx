"use client";
import { useEffect } from "react";

import CoffeeFilters from "@/app/_components/shop/CoffeeFilters";
import CoffeesGrid from "@/app/_components/shop/CoffeesGrid";
import useCoffeeStore from "@/store/useCoffeeStore";

export default function Shop() {
  const { filters, setCoffees, coffees } = useCoffeeStore();

  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        const { roast, intensity, sort } = filters;
        const queryParams = new URLSearchParams();

        if (roast && roast.length > 0)
          queryParams.append("roast", roast.join(","));
        if (intensity && intensity.length > 0)
          queryParams.append("intensity", intensity.join(","));
        if (sort) queryParams.append("sort", sort);

        const queryString = queryParams.toString();

        const data = await fetch(
          `/api/getCoffees${queryString ? `?${queryString}` : ""}`
        ).then((res) => res.json());

        setCoffees(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors
      }
    };

    fetchFilteredData();
  }, [filters, setCoffees]);

  return (
    <main className="mx-4 mt-10 max-w-8xl gap-10 sm:grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:mx-auto">
      <aside className="w-72">
        <CoffeeFilters />
      </aside>

      <div className="col-span-3 md:col-span-3">
        <CoffeesGrid coffees={coffees} />
      </div>
    </main>
  );
}
