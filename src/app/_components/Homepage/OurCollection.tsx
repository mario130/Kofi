import Image from "next/image";

export default function OurCollection() {
  const mainKofis = [
    {
      name: "Gran Espresso",
      description:
        "Light and flavorful blend with cocoa and black pepper for an intense experience",
      image: "/homepage/image-gran-espresso.png",
    },
    {
      name: "Planalto",
      description:
        "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
      image: "/homepage/image-planalto.png",
    },
    {
      name: "Piccollo",
      description:
        "Mild and smooth blend featuring notes of toasted almond and dried cherry",
      image: "/homepage/image-piccollo.png",
    },
    {
      name: "Danche",
      description:
        "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
      image: "/homepage/image-danche.png",
    },
  ];

  return (
    <section className="mt-28">
      <h3 className="bg-gradient-to-b from-gray-900/50 to-gray-100/90 bg-clip-text text-center text-4xl font-black text-transparent sm:to-gray-100/10 sm:text-7xl xl:from-gray-400 xl:text-9xl">
        Our collection
      </h3>
      <div className="mx-auto max-w-7xl sm:-mt-16 xl:-mt-20 xl:flex xl:w-full">
        {mainKofis.map((kofi, index) => (
          <section
            key={index}
            className="mt-12 flex flex-col items-center sm:flex-row sm:justify-center xl:w-full xl:flex-col xl:justify-between"
          >
            <Image src={kofi.image} alt="" width={200} height={150} />
            <div className="flex flex-col items-center sm:items-start sm:justify-center xl:items-center">
              <h3 className="mt-4 font-bold">{kofi.name}</h3>
              <p className="mt-2 w-80 text-center font-light text-t-dark sm:text-left xl:w-60 xl:text-center">
                {kofi.description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
