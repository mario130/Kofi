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
import { GiftIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Toaster } from "@/app/_components/ui/sonner";

export default function Cart() {
  const { items, removeFromCart, emptyCart } = useCart();
  const router = useRouter();

  const deleteItem = (id: number) => {
    removeFromCart(id);
  };

  const makeOrder = () => {
    toast("Order placed successfully!", {
      position: "top-right",
      description: "Thank you for shopping with us, your coffee is on the way!",
      important: true,
      className: "bg-secondary",
    });

    setTimeout(() => {
      emptyCart();
      router.push("/");
    }, 3000);
  };

  return (
    <main className="px-4 sm:px-6">
      <Toaster />
      {items.length === 0 && (
        <Card className="mx-auto mt-6 w-full max-w-7xl">
          <CardHeader>
            <CardTitle>Your Cart</CardTitle>
            <CardDescription>Your cart is empty</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <ShoppingCartIcon className="h-12 w-12 text-slate-500 dark:text-slate-400" />
            {/* Link to continue shopping */}
            <Link href="/shop">
              <Button className="font-sans" variant="outline">
                Continue Shopping
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {items.length > 0 && (
        <section className="mx-auto max-w-7xl items-start gap-10 space-y-10 md:flex md:space-y-0">
          <Card className="w-full basis-2/3">
            <CardHeader>
              <CardTitle>Shopping Cart</CardTitle>
              <CardDescription>Your selected items</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="border-t">
                <Table className="w-[650px] overflow-x-auto md:w-full">
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
                        $
                        {items
                          .reduce((acc, item) => acc + item.total, 0)
                          .toFixed(2)}
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
                <Button className="w-full font-sans" onClick={makeOrder}>
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </aside>
        </section>
      )}

      {items.length > 0 && (
        <section className="mx-auto mt-10 w-full max-w-7xl">
          <div className="items-center justify-between rounded-md bg-gray-200 px-6 py-8 sm:flex sm:px-10 sm:py-12">
            <div className="flex items-center space-x-2">
              <div>
                <h5>Continue Shopping</h5>
                <h6 className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Discover more coffees and get the best deals!
                </h6>
              </div>
            </div>
            <Link href="/shop">
              <Button className="mt-6 font-sans sm:mt-0" variant="default">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
