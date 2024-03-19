import Image from "next/image";

export default function CTA() {
  return (
    <section className="max-h-[550px] overflow-hidden relative mx-4 rounded-xl mt-4 xl:mx-10">
      <picture>
        <source srcSet="/hero-desktop.jpg"
          media="(min-width: 1024px)" />
        <source srcSet="/hero-tablet.jpg"
          media="(min-width: 800px)" />
        <Image src="/hero-mobile.jpg" alt=""
          width={0}
          height={0}
          style={{ width: '100%', height: '100%' }}
          layout="responsive"
          objectFit="cover" />
      </picture>
      <div className="absolute top-0 p-4 text-center md:text-left text-white h-full flex flex-col justify-center">
        <div className="h-96 2xl:h-80 flex flex-col justify-between items-center md:items-start md:pl-8">
          <h1 className="text-6xl font-bold md:w-[400px] xl:w-[700px] 2xl:w-[1000px]">Great coffee made simple.</h1>
          <p className="text-lg font-extralight mt-5 leading-8 w-96 md:w-[450px] xl:w-[600px]">Start your mornings with the world’s best coffees. Try our expertly curated artisan
            coffees from our best roasters delivered directly to your door, at your schedule.</p>
          <button className="text-2xl bg-gray-700 p-4 rounded-lg w-80 md:w-72">Create your plan</button>
        </div>
      </div>
    </section>);
}