import { Coffee } from "@/interfaces/Coffee";
import { create } from "zustand";

export const AvailableRoasts = ["light", "medium", "dark"];
export const AvailableIntensities = ["mild", "medium", "bold"];

interface CoffeeState {
  coffees: Coffee[];
  setCoffees: (coffees: Coffee[]) => void;
  loadCoffees: () => void;
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
  setCoffees: (coffees: Coffee[]) => {
    localStorage.setItem("coffees", JSON.stringify(coffees));
    set({ coffees });
  },
  loadCoffees: () => {
    const storedCoffees = JSON.parse(localStorage.getItem("coffees") || "[]");
    set({ coffees: storedCoffees });
  },

  filters: {
    roast: [],
    intensity: [],
  },
  setFilters: (filters) => set({ filters }),
}));

export default useCoffeeStore;
