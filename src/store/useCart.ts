import create from "zustand";
import { Coffee } from "@/interfaces/Coffee";

type CartItem = {
  id: number;
  coffee: Coffee;
  size: string;
  beanType: string;
  quantity: number;
  total: number;
};

type CartStore = {
  items: CartItem[];
  addToCart: (coffee: CartItem) => void;
  removeFromCart: (coffeeId: number) => void;
  loadItems: () => void;
  emptyCart: () => void;
};

const useCart = create<CartStore>((set) => ({
  items: [],
  addToCart: (coffee) => {
    set((state) => {
      const newItems = [...state.items, coffee];
      localStorage.setItem("cart", JSON.stringify(newItems));
      return { items: newItems };
    });
  },
  removeFromCart: (coffeeId) => {
    set((state) => {
      const newItems = state.items.filter((coffee) => coffee.id !== coffeeId);
      localStorage.setItem("cart", JSON.stringify(newItems));
      return { items: newItems };
    });
  },
  loadItems: () => {
    const storedItems = JSON.parse(localStorage.getItem("cart") || "[]");
    set({ items: storedItems });
  },
  emptyCart: () => {
    localStorage.removeItem("cart");
    set({ items: [] });
  },
}));

export default useCart;
