"use client";

import React, { useCallback, useEffect } from "react";

import useCoffeeStore from "@/store/useCoffeeStore";
import CoffeeItem from "./CoffeeItem";
import CoffeeSkeleton from "./CoffeeSkeleton";

export default function CoffeesGrid() {
  const { filters, setCoffees, coffees } = useCoffeeStore();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const fetchFilteredData = useCallback(async () => {
    try {
      setIsLoading(true);
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

      // await delay(5000);
      setCoffees(data);
    } catch (error) {
      setError(`Error fetching data, ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchFilteredData();
  }, [fetchFilteredData]);

  return (
    <>
      <p className="hidden text-center sm:block sm:text-left">
        {isLoading ? "Loading..." : `Showing 1 - ${coffees.length} of ${coffees.length} Coffees`}
      </p>
      <section className="grid gap-6 sm:grid-cols-2 sm:py-5 lg:grid-cols-3">
        {isLoading
          ? <CoffeeSkeleton />
          : coffees.map((coffee, index) => (
            <CoffeeItem key={coffee.id} coffee={coffee} index={index} />
          ))}
      </section>
      {error && <div className="text-center">
        <h3 className="font-sans">Error fetching data</h3>
        <p>{error}</p>
      </div>}
    </>
  );
}


