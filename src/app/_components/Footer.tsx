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

      <footer className="bg-[#fcf3e7] border-t border-[#fbe6ca] mt-14">
        <div className="mx-auto  justify-between px-2 py-3 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative flex items-center justify-center w-full h-14 before:absolute before:w-full before:h-0.5 before:bg-[#fbe6ca] before:top-7 before:left-0">
            <div
              className="px-10 bg-[#fcf3e7] overflow-hidden z-10"
            >
              <Image
                src="/kofi-logo.webp"
                alt="Kofi logo"
                width={125}
                height={44}
              />
            </div>
          </div>

          <div className="justify-between items-center md:space-x-20 md:flex space-y-8 md:space-y-0 my-4">
            <h2 className="text-[#c7a579] text-center md:text-left font-medium">Embrace the coffee adventure today</h2>
            <div className="justify-center flex items-center space-x-6 ">
              <Link href="https://www.marioyonan.com" target="_blank">
                <Image src="/m.svg" alt="Instagram" width={26} height={26} />
              </Link>
              <Link href="https://www.linkedin.com/in/mario130/" target="_blank">
                <Image src="/linkedin.svg" alt="Instagram" width={26} height={26} />
              </Link>
            </div>
          </div>

          <div className="relative pt-4 mt-10 mx-4">
            <h6 className="text-right text-sm font-semibold text-[#c7a579] before:absolute before:w-full before:h-0.5 before:bg-[#fbe6ca] before:top-0 before:left-0">
              Copyright &copy; {new Date().getFullYear()}. Made by{" "}
              <Link href="https://marioyonan.com" className="underline">
                Mario
              </Link>{" "}
            </h6>
          </div>
        </div>
      </footer>
    </section>
  );
}
