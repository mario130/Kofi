import React from "react";
import useCoffeeStore, {
  AvailableIntensities,
  AvailableRoasts,
} from "@/store/useCoffeeStore";
import { FilterItem } from "./FilterItem";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { CheckIcon } from "@radix-ui/react-icons";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";

export default function CoffeeFilters() {
  const { filters, setFilters } = useCoffeeStore();

  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <div className="flex justify-center">
            <Button
              variant={"ghost"}
              className="flex w-full items-center space-x-2 hover:bg-secondary sm:hidden"
            >
              <AdjustmentsHorizontalIcon className="h-6 w-6" />
              <span>Filters</span>
            </Button>
          </div>
        </DrawerTrigger>
        <DrawerContent className="sm:hidden">
          <DrawerHeader>
            <DrawerTitle className="mb-4">
              <h2>Filters</h2>
            </DrawerTitle>
          </DrawerHeader>
          <DrawerDescription className="mb-8 px-4">
            <div className="grid grid-cols-2">
              <div>
                <h5 className="mb-3 font-bold">Intensity</h5>
                {AvailableIntensities.map((intensity) => (
                  <FilterItem
                    key={`intensity-${intensity}`}
                    filterFor="intensity"
                    id={`intensity-${intensity}`}
                    filterItem={intensity}
                  />
                ))}
              </div>
              <div>
                <h5 className="mb-3 font-bold">Roast</h5>
                {AvailableRoasts.map((roast) => (
                  <FilterItem
                    key={`roast-${roast}`}
                    filterFor="roast"
                    id={`roast-${roast}`}
                    filterItem={roast}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-8">
              <h5 className="font-bold">Price</h5>
              <RadioGroup
                onValueChange={(value) =>
                  setFilters({ ...filters, sort: value as "asc" | "desc" })
                }
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="asc" id="mob-sort-asc" />
                  <label htmlFor="mob-sort-asc">Low to high</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="desc" id="mob-sort-desc" />
                  <label htmlFor="mob-sort-desc">High to low</label>
                </div>
              </RadioGroup>
            </div>
          </DrawerDescription>
        </DrawerContent>
      </Drawer>
      <aside className="hidden sm:block">
        <h5 className="mb-3 font-bold">Intensity</h5>
        {AvailableIntensities.map((intensity) => (
          <FilterItem
            key={`intensity-${intensity}`}
            filterFor="intensity"
            id={`intensity-${intensity}`}
            filterItem={intensity}
          />
        ))}

        <h5 className="mb-3 mt-10 font-bold">Roast</h5>
        {AvailableRoasts.map((roast) => (
          <FilterItem
            key={`roast-${roast}`}
            filterFor="roast"
            id={`roast-${roast}`}
            filterItem={roast}
          />
        ))}

        <h5 className="mb-3 mt-10 font-bold">Price</h5>
        <RadioGroup
          onValueChange={(value) =>
            setFilters({ ...filters, sort: value as "asc" | "desc" })
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="asc" id="sort-asc" />
            <label htmlFor="sort-asc">Low to high</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="desc" id="sort-desc" />
            <label htmlFor="sort-desc">High to low</label>
          </div>
        </RadioGroup>
      </aside>
    </>
  );
}
