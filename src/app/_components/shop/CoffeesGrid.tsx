"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import useCoffeeStore from "@/store/useCoffeeStore";
import { Coffee } from "@/interfaces/Coffee";
import { Badge } from "../ui/badge";
import { capitalize } from "@/utils/Capitalize";
import { cn } from "@/lib/utils";
import { generateBadgeClasses } from "@/utils/generateBadgeClasses";

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
      <p className="hidden text-center sm:block sm:text-left">
        Showing 1 - {coffees.length} of {coffees.length} Coffees
      </p>
      <section className="grid gap-6 sm:grid-cols-2 sm:py-5 lg:grid-cols-3">
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
                <Badge
                  variant="outline"
                  className={cn(
                    "text-black h-5 font-sans",
                    coffee.intensity === 'mild' && "bg-secondary",
                    coffee.intensity === 'medium' && "bg-[#c6cfd7]",
                    coffee.intensity === 'bold' && "bg-black text-white"
                  )}
                >
                  {capitalize(coffee.intensity)} intensity
                </Badge>
                <Badge
                  variant="default"
                  className={cn(
                    "text-black h-5 font-sans",
                    coffee.roast === 'light' && "bg-secondary",
                    coffee.roast === 'medium' && "bg-[#c6cfd7]",
                    coffee.roast === 'dark' && "bg-black text-white"
                  )}
                >
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
