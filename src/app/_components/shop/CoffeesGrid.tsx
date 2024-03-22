"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import useCoffeeStore from "@/store/useCoffeeStore";
import { Coffee } from "@/interfaces/Coffee";
import { Badge } from "../ui/badge";
import { capitalize } from "@/utils/Capitalize";

export default function CoffeesGrid({
  coffees: coffeesToBeSaved,
}: {
  coffees: Coffee[];
}) {
  useEffect(
    () => useCoffeeStore.setState({ coffees: coffeesToBeSaved }),
    [coffeesToBeSaved]
  );
  const coffees = useCoffeeStore((state) => state.coffees);

  return (
    <>
      <p className="text-center sm:text-left">
        Showing 1 - {coffees.length} of {coffees.length} Coffees
      </p>
      <section className="grid gap-6 py-5 sm:grid-cols-2 lg:grid-cols-3">
        {coffees.map((coffee) => (
          <div key={coffee.id} className="relative mx-auto max-w-96">
            <Image
              src={coffee.imageUrl}
              alt={coffee.name}
              width={400}
              height={280}
              className="rounded-lg bg-[#e9e3dd90]"
            />
            <div className="flex items-center justify-between">
              <h6 className="my-1 font-bold tracking-wide">{coffee.name}</h6>
              <div className="absolute right-2 top-2 flex flex-col items-end space-y-1">
                <Badge variant="outline" className="h-5 bg-secondary font-sans">
                  {capitalize(coffee.intensity)} intensity
                </Badge>
                <Badge variant="default" className="h-5 font-sans">
                  {capitalize(coffee.roast)} roast
                </Badge>
              </div>
            </div>
            <p className="line-clamp-1">{coffee.description}</p>
            <p>${coffee.price}</p>
          </div>
        ))}
      </section>
    </>
  );
}
