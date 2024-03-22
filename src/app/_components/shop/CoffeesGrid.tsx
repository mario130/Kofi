"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import useCoffeeStore from "@/store/useCoffeeStore";
import { Coffee } from "@/interfaces/Coffee";
import { Badge } from "../ui/badge";

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
          <div key={coffee.id} className="mx-auto max-w-96 relative">
            <Image
              src={coffee.imageUrl}
              alt={coffee.name}
              width={400}
              height={280}
              className="rounded-lg bg-[#e9e3dd90]"
            />
            <div className="flex justify-between items-center">
              <h6 className="my-1 font-bold tracking-wide">{coffee.name}</h6>
              <div className="flex flex-col space-y-1 absolute top-2 right-2 items-end">
                <Badge variant="outline" className="font-sans h-5 bg-secondary">{coffee.intensity} intensity</Badge>
                <Badge variant="default" className="font-sans h-5">{coffee.roast} roast</Badge>
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
