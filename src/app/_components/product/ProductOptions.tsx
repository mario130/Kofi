"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { Button } from "../ui/button";
import { Coffee } from "@/interfaces/Coffee";
import { useEffect, useState } from "react";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useCart from "@/store/useCart";
import { MotionDiv } from "../MotionDiv";

export default function ProductOptions({ coffee }: { coffee?: Coffee }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("250");
  const [grind, setGrind] = useState("whole");
  const [price, setPrice] = useState(0);
  const router = useRouter();
  const { addToCart } = useCart();

  const calculatePrice = () => {
    setPrice(
      Number(((coffee?.price || 0) * quantity * (+size / 250)).toFixed(2))
    );
  };
  useEffect(() => {
    calculatePrice();
  }, [quantity, size]);

  useEffect(() => setPrice(coffee?.price ?? 0), [coffee]);

  const addItem = () => {
    addToCart({
      id: Math.random(),
      coffee: coffee!,
      size,
      beanType: grind === "whole" ? "Whole Bean" : "Fine Grind",
      quantity,
      total: price,
    });

    toast("Item added to cart.", {
      position: "top-right",
      important: true,
      className: "bg-secondary",
      action: {
        label: "View Cart",
        onClick: () => {
          router.push("/cart");
        },
      },
    });
  };

  return (
    <div className="flex w-full flex-col gap-y-12 py-8 sm:sticky sm:top-48 sm:max-w-[300px] sm:py-0">
      <div className="flex flex-col gap-y-2">
        <MotionDiv
          layout
          transition={{ ease: "easeInOut", duration: 0.4, delay: 0.5 }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex flex-col space-y-4">
            <div>
              <p className="mb-2 text-sm font-medium">Select Size</p>
              <Select onValueChange={(v) => setSize(v)} value={size}>
                <SelectTrigger className="rounded-md border" id="color">
                  <SelectValue placeholder="250" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="250">250g</SelectItem>
                  <SelectItem value="500">500g</SelectItem>
                  <SelectItem value="1000">1k</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">Whole Bean or Ground?</p>
              <Select onValueChange={(v) => setGrind(v)} value={grind}>
                <SelectTrigger className="rounded-md border" id="color">
                  <SelectValue placeholder="Whole Bean" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="whole">Whole Bean</SelectItem>
                  <SelectItem value="ground">Fine Grind</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">Quantity</p>
              <Select
                onValueChange={(v) => setQuantity(+v)}
                value={quantity.toString()}
              >
                <SelectTrigger className="rounded-md border" id="color">
                  <SelectValue placeholder="1" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="1" onSelect={() => setQuantity(1)}>
                    1
                  </SelectItem>
                  <SelectItem value="2" onSelect={() => setQuantity(2)}>
                    2
                  </SelectItem>
                  <SelectItem value="3" onSelect={() => setQuantity(3)}>
                    3
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-2xl font-semibold">
                {coffee ? `$${price}` : ""}
              </p>
            </div>
            <Button
              className="mt-4 py-5 font-sans text-sm"
              onClick={addItem}
              disabled={!coffee}
            >
              Add to Cart
            </Button>
          </div>
        </MotionDiv>
      </div>
      <Toaster />
    </div>
  );
}
