import Image from "next/image";
import React from "react";

export default function Quality() {
  return (
    <section className="mx-auto  max-w-7xl">
      <div className="mx-4 rounded-xl bg-gray-800 px-8 pb-20 text-center text-t-cream md:px-14 mt-48  lg:flex lg:flex-row-reverse lg:items-center lg:px-10 lg:pb-0">
        <picture>
          <source srcSet="/quality-desktop.jpg" media="(min-width: 1024px)" />
          <source srcSet="/quality-tablet.jpg" media="(min-width: 800px)" />
          <Image
            src="/quality-mobile.jpg"
            alt=""
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            layout="responsive"
            objectFit="cover"
            className="relative -top-24 mt-32 rounded-xl brightness-95 md:-top-40 md:mt-60 lg:-top-20 lg:mt-0"
          />
        </picture>
        <div className="relative md:-top-10 lg:top-0 lg:w-[540px] lg:flex-1 lg:px-10">
          <h2 className="font-bold">Uncompromising quality</h2>
          <p className="mt-10 text-lg leading-8 text-neutral-400">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
}
