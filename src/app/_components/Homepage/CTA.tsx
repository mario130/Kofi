import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative mx-4 mt-4 max-h-[550px] max-w-7xl overflow-hidden rounded-xl xl:mx-auto">
      <picture>
        <source
          srcSet="/homepage/hero-desktop.jpg"
          media="(min-width: 1024px)"
        />
        <source srcSet="/homepage/hero-tablet.jpg" media="(min-width: 800px)" />
        <Image
          src="/homepage/hero-mobile.jpg"
          alt=""
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          layout="responsive"
          objectFit="cover"
          priority
        />
      </picture>
      <div className="absolute top-0 flex h-full flex-col justify-center text-center text-white md:text-left">
        <div className="flex h-full flex-col items-center justify-between py-10 sm:h-96 sm:py-0 md:items-start md:pl-8">
          <h1 className="text-4xl font-bold xs:text-5xl md:w-[400px] md:text-6xl xl:w-[700px]">
            Great coffee made simple.
          </h1>
          <p className="mt-5 w-72 text-lg font-extralight leading-8 xs:w-80 sm:w-96 md:w-[450px] xl:w-[600px]">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Link href="/shop" aria-label="Start shopping">
            <Button
              variant="default"
              className="h-14 w-72 rounded-lg bg-gray-700 p-4 text-xl text-white hover:bg-gray-600 sm:w-80 md:w-72"
            >
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
