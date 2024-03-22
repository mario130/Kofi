import { Coffee } from "@/interfaces/Coffee";
import { create } from "zustand";

export const AvailableRoasts = ["light", "medium", "dark"];
export const AvailableIntensities = ["mild", "medium", "bold"];

interface CoffeeState {
  coffees: Coffee[];
  setCoffees: (coffees: Coffee[]) => void;
  filters: {
    roast?: string[];
    intensity?: string[];
    sort?: "asc" | "desc";
  };
  setFilters: (filters: {
    roast?: string[];
    intensity?: string[];
    sort?: "asc" | "desc";
  }) => void;
}

const useCoffeeStore = create<CoffeeState>()((set) => ({
  coffees: [],
  setCoffees: (coffees: Coffee[]) => set({ coffees }),

  filters: {
    roast: [],
    intensity: [],
  },
  setFilters: (filters) => set({ filters }),
}));

export default useCoffeeStore;
