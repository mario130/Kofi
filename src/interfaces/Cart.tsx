import { Coffee } from "./Coffee";

export default interface Cart {
  items: {
    coffee: Coffee;
    quantity: number;
  }[];
}
