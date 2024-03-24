import React from 'react'

import { Separator } from "@radix-ui/react-select";
import { ScrollArea, ScrollBar } from "@/app/_components/ui/scroll-area";
import { capitalize } from "@/utils/Capitalize";
import Link from "next/link";
import useCoffeeStore from '@/store/useCoffeeStore';
import Image from 'next/image';
export default function Suggestions({ currentCoffeeId }: { currentCoffeeId?: string }) {
  const { coffees } = useCoffeeStore();

  return coffees.length > 0 && (
    <section>
      <div className="mt-10 space-y-1 ">
        <h2 className="text-2xl font-semibold tracking-tight">
          You might also like
        </h2>
        <p className="text-sm text-muted-foreground">
          Here are some other coffees you might like
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {coffees.slice(0, 7).map((suggestedCoffee) => suggestedCoffee.id !== currentCoffeeId && (
              <Link
                key={suggestedCoffee.id}
                href={`/shop/${suggestedCoffee.id}`}
              >
                <div key={suggestedCoffee.id} className="w-[150px]">
                  <Image
                    src={suggestedCoffee.imageUrl}
                    alt={suggestedCoffee.name}
                    width={150}
                    height={150}
                    className="bg-[#e9e3dd90] rounded-lg border"
                  />

                  <p className="text-sm font-semibold mt-3">{suggestedCoffee.name}</p>

                  <p className="text-xs text-t-gray">
                    {capitalize(suggestedCoffee.roast)} Roast
                  </p>

                </div>
              </Link>
            ))}

          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  )
}
