import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <main className="px-6">
      <section className="relative mx-4 mt-4 max-h-[550px] max-w-7xl overflow-hidden rounded-xl xl:mx-auto">
        <picture>
          <source
            srcSet="/about/desktop-hero-whitecup.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="/about/tablet-hero-whitecup.jpg"
            media="(min-width: 800px)"
          />
          <Image
            src="/about/mobile-hero-whitecup.jpg"
            alt=""
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            layout="responsive"
            objectFit="cover"
            priority
          />
        </picture>
        <div className="absolute top-0 flex h-full w-full flex-col justify-center text-center text-white sm:w-auto md:text-left">
          <h1 className="text-4xl font-bold xs:text-5xl md:mx-6 md:w-[400px] md:text-6xl xl:w-[700px]">
            About Us
          </h1>
          <p className="mx-6 mt-5 text-lg font-extralight  leading-8 sm:w-96 md:w-[450px] xl:w-[600px]">
            Kofi began its journey of exotic discovery in 1999, highlighting
            stories of coffee from around the world. We have since been
            dedicated to bring the perfect cup - from bean to brew - in every
            shipment.
          </p>
        </div>
      </section>
      <section className="mx-4 mt-12 justify-center space-x-4 md:flex xl:mx-auto items-center">
        <picture>
          <source
            srcSet="/about/desktop-commitment.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="/about/tablet-commitment.jpg"
            media="(min-width: 640px)"
          />
          <Image
            src="/about/mobile-commitment.jpg"
            alt=""
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            layout="responsive"
            className="rounded-xl"
          />
        </picture>
        <div>
          <h2 className="mt-8 text-center text-3xl font-bold text-t-dark">
            Our commitment
          </h2>
          <p className="mx-6 mt-5 text-left text-lg font-extralight leading-8  md:w-96 xl:w-[600px] xl:px-10">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>
    </main>
  );
}
