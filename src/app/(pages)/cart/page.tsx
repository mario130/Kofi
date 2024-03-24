"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import useIsMobile from "@/hooks/useIsMobile";
import useCart from "@/store/useCart";
import { GiftIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Cart() {
  const { items, removeFromCart } = useCart();

  const deleteItem = (id: number) => {
    removeFromCart(id);
  };

  return (
    <main className="mx-auto max-w-[1440px] items-start gap-10 space-y-10 px-6 md:flex md:space-y-0">
      <Card className="w-full basis-2/3">
        <CardHeader>
          <CardTitle>Shopping Cart</CardTitle>
          <CardDescription>Your selected items</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="border-t">
            <Table className="w-[650px] overflow-x-auto md:w-auto">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="w-[100px] text-right">
                    <span className="sr-only">Remove</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id} className="group">
                    <TableCell>
                      <Image
                        alt={item.coffee.name}
                        className="aspect-square rounded-md object-cover"
                        height="80"
                        src={item.coffee.imageUrl}
                        width="80"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {item.coffee.name}
                    </TableCell>
                    <TableCell>${item.coffee.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.size}</TableCell>
                    <TableCell>${item.total}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => deleteItem(item.id)}
                      >
                        <TrashIcon className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <aside className="w-full basis-1/3">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
            <CardDescription>Details of your order</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Subtotal</TableCell>
                  <TableCell className="text-right">
                    ${items.reduce((acc, item) => acc + item.total, 0)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shipping</TableCell>
                  <TableCell className="text-right">$4.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tax</TableCell>
                  <TableCell className="text-right">$2.49</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell className="text-right">
                    $
                    {Number(
                      (
                        items.reduce((acc, item) => acc + item.total, 0) +
                        4.99 +
                        2.49
                      ).toFixed(2)
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Proceed to Checkout</Button>
          </CardFooter>
        </Card>
      </aside>
    </main>
  );
}
