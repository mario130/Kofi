import { Coffee } from "@/interfaces/Coffee";
import { create } from "zustand";

interface CoffeeState {
  coffees: Coffee[];
  setCoffees: (coffees: Coffee[]) => void;
  filters: {
    roast?: string[];
    intensity?: string[];
    sort?: "ASC" | "DESC";
  };
  setFilters: (filters: {
    roast?: string[];
    intensity?: string[];
    sort?: "ASC" | "DESC";
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
