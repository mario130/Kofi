import React from "react";
import useCoffeeStore, {
  AvailableIntensities,
  AvailableRoasts,
} from "@/store/useCoffeeStore";
import { FilterItem } from "./FilterItem";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function CoffeeFilters() {
  const { filters, setFilters } = useCoffeeStore();

  return (
    <>
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

      <h5 className="mb-3 mt-10 font-bold">Sort</h5>
      <RadioGroup
        onValueChange={(value) =>
          setFilters({ ...filters, sort: value as "asc" | "desc" })
        }
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="asc" id="sort-asc" />
          <label htmlFor="sort-asc">Ascending</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="desc" id="sort-desc" />
          <label htmlFor="sort-desc">Descending</label>
        </div>
      </RadioGroup>
    </>
  );
}
