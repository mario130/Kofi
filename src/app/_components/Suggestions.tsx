"use client"

import { Separator } from "@radix-ui/react-select";
import { ScrollArea, ScrollBar } from "@/app/_components/ui/scroll-area";
import { capitalize } from "@/utils/Capitalize";
import Link from "next/link";
import useCoffeeStore from "@/store/useCoffeeStore";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import { StarFilledIcon } from "@radix-ui/react-icons";
export default function Suggestions({
  currentCoffeeId,
  title,
  content,
  count,
  className,
}: {
  currentCoffeeId?: string;
  title?: string;
  content?: string;
  count?: number;
  className?: string;
}) {
  const { coffees, setCoffees } = useCoffeeStore();
  const [isLoading, setIsLoading] = useState(false);

  const fetchSuggestedCoffees = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/getCoffees");
      const data = await response.json();
      setCoffees(data);
    } catch (error) {
      console.error(`Error fetching suggested coffees: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [setCoffees]);

  useEffect(() => {
    if (coffees.length === 0) fetchSuggestedCoffees();
  }, [fetchSuggestedCoffees]);

  return (
    <section>
      <div className={cn(
        "mt-10 space-y-1",
        className ?? ""
      )}>
        <h4 className="text-center font-bold text-t-gray">{title ?? "You might also like"}</h4>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {isLoading ? (
              Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="w-[150px]">
                  <div className="animate-pulse bg-[#e9e3dd] h-44 w-full rounded-lg" />
                  <div className="animate-pulse bg-[#e9e3dd] h-3 w-2/3 mt-2 rounded-lg" />
                  <div className="animate-pulse bg-[#e9e3dd] h-3 w-1/4 mt-2 rounded-lg" />
                </div>
              ))
            )
              :
              coffees.slice(0, count ?? 7).map(
                (suggestedCoffee) =>
                  suggestedCoffee.id !== currentCoffeeId && (
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
                          className="rounded-lg border bg-[#e9e3dd90]"
                        />

                        <p className="mt-3 text-sm font-semibold flex items-center justify-between">
                          {suggestedCoffee.name}
                          <span className="flex space-x-1">
                            <StarFilledIcon color="orange" height={15} width={15} />
                            <span className="text-orange-400 text-xs">{suggestedCoffee.rating}</span>
                          </span>
                        </p>

                        <p className="text-xs text-t-gray">
                          {capitalize(suggestedCoffee.roast)} Roast
                        </p>
                      </div>
                    </Link>
                  )
              )
            }
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
