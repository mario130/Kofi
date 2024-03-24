"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import useCart from "@/store/useCart";
import { useEffect } from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Homepage", href: "/" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Cart", href: "/cart" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const pathname = usePathname();
  const { loadItems, items } = useCart();

  useEffect(() => loadItems(), []);

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto p-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Link href={"/cart"}>
                  <Button
                    variant="ghost"
                    className="relative mr-3 rounded-md p-2 hover:bg-secondary hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <ShoppingCartIcon className="h-6 w-6" />
                    <span className="absolute -top-3 -right-3 bg-secondary rounded-full w-4 h-4 flex items-center justify-center p-3">
                      {items.length}
                    </span>
                  </Button>
                </Link>
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-secondary hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    href="/"
                    className="flex items-center"
                    aria-label="Homepage"
                  >
                    <Image
                      src="/kofi-logo.webp"
                      alt="Kofi logo"
                      width={125}
                      height={44}
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-base font-medium relative",
                          {
                            "bg-secondary": pathname === item.href,
                            "hover:bg-secondary hover:bg-opacity-60": pathname !== item.href,
                          },
                        )}
                      >
                        {item.name}
                        {item.name === "Cart" &&
                          <span className="absolute -top-2 -right-2 bg-secondary rounded-full w-4 h-4 flex items-center justify-center p-3">
                            {items.length}
                          </span>
                        }
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => item.name !== "Cart" && (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium",
                    {
                      "bg-secondary": pathname === item.href,
                      "hover:bg-secondary hover:bg-opacity-60": pathname !== item.href,
                    }
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
