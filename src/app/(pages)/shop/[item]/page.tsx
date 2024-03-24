"use client";

import { Coffee } from "@/interfaces/Coffee";
import Image from "next/image";
import React, { useEffect } from "react";

import ProductInfo from "@/app/_components/product/ProductInfo";
import ProductOptions from "@/app/_components/product/ProductOptions";
import ProductBreadcrump from "@/app/_components/product/ProductBreadcrump";

export default function Item({ params }: { params: { item: string } }) {
  const [coffee, setCoffee] = React.useState<Coffee>();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data: Coffee = await fetch(
          `/api/getCoffee?id=${params.item}`
        ).then((res) => res.json());
        console.log(data);
        setCoffee(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItem();
  }, [params.item]);

  return (
    <main className="mx-auto w-full max-w-[1440px] px-6">
      <ProductBreadcrump name={coffee?.name} />

      <div className="relative flex flex-col gap-16 sm:flex-row sm:items-start sm:py-6">
        <ProductInfo coffee={coffee} />

        <div className="relative block w-full">
          <div className="rounded-lg border bg-[#e9e3dd90]">
            <Image
              src={coffee?.imageUrl ?? ""}
              alt={coffee?.name ?? ""}
              width={800}
              height={800}
            />
          </div>
        </div>

        <ProductOptions coffee={coffee} />
      </div>
    </main>
  );
}
