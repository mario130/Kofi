import Image from "next/image";
import Link from "next/link";
import React from "react";
import Quality from "./Quality";
import Headquarters from "./Headquarters";

export default function Footer() {
  return (
    <section>
      <Quality />
      <Headquarters />

      <footer className="mx-auto mt-14 flex items-center justify-between bg-gradient-to-br from-gray-300/60 to-slate-300 px-2 py-3 sm:px-6 lg:px-8">
        <Image
          src="/kofi-logo.webp"
          alt="Kofi logo"
          width={125}
          height={44}
          className=""
        />

        <p className="hidden text-t-gray sm:block">
          &copy; {new Date().getFullYear()} Kofi. Made by{" "}
          <Link href="https://marioyonan.com" className="text-black underline">
            Mario
          </Link>{" "}
          .
        </p>

        <div className="mr-3 flex items-center space-x-6">
          <Link href="https://www.linkedin.com/in/mario130/" target="_blank">
            <Image src="/linkedin.svg" alt="Instagram" width={24} height={24} />
          </Link>
          <Link href="https://www.marioyonan.com" target="_blank">
            <Image src="/m.svg" alt="Instagram" width={24} height={24} />
          </Link>
        </div>
      </footer>
    </section>
  );
}
