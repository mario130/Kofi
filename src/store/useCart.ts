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
};

const useCart = create<CartStore>((set) => ({
  items: [],
  addToCart: (coffee) => {
    set((state) => ({
      items: [...state.items, coffee],
    }));
  },
  removeFromCart: (coffeeId) => {
    set((state) => ({
      items: state.items.filter((coffee) => coffee.id !== coffeeId),
    }));
  },
}));

export default useCart;
