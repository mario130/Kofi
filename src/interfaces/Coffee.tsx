export interface Coffee {
  id: string;
  description: string;
  imageUrl: string;
  intensity: "mild" | "medium" | "bold";
  name: string;
  price: number;
  roast: "light" | "medium" | "dark";
  stock: number;
  rating: number;
}
