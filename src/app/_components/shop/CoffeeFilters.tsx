"use client";

import React, { useEffect } from "react";
import { Checkbox } from "../ui/checkbox";
import useCoffeeStore from "@/store/useCoffeeStore";

export default function CoffeeFilters() {
  const { filters, setFilters } = useCoffeeStore();

  return (
    <>
      <h5 className="mb-3 font-bold">Intensity</h5>

      <div className="flex items-center">
        <Checkbox
          onClick={() => setFilters({ intensity: ["mild"] })}
          id="intensity-mild"
        />
        <label
          htmlFor="intensity-mild"
          className="ml-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-500"
        >
          Mild
        </label>
      </div>

      <div className="flex items-center">
        <Checkbox id="intensity-medium" />
        <label
          htmlFor="intensity-medium"
          className="ml-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-500"
        >
          Medium
        </label>
      </div>

      <div className="flex items-center">
        <Checkbox id="intensity-bold" />
        <label
          htmlFor="intensity-bold"
          className="ml-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-500"
        >
          Bold
        </label>
      </div>
    </>
  );
}
