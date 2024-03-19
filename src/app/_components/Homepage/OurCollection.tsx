import Image from "next/image";

export default function OurCollection() {
  const mainKofis = [
    {
      name: "Gran Espresso",
      description: "Light and flavorful blend with cocoa and black pepper for an intense experience",
      image: "/image-gran-espresso.png",
    },
    {
      name: "Planalto",
      description: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
      image: "/image-planalto.png",
    },
    {
      name: "Piccollo",
      description: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
      image: "/image-piccollo.png",
    },
    {
      name: "Danche",
      description: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
      image: "/image-danche.png",
    }
  ]

  return <div className="mt-12">
    <h3 className="font-black text-4xl sm:text-7xl xl:text-9xl text-center bg-gradient-to-b from-gray-900/50 to-gray-100/90 sm:to-gray-100/10 xl:from-gray-400 bg-clip-text text-transparent">Our collection</h3>
    <div className="sm:-mt-16 xl:-mt-20 xl:flex xl:w-full max-w-7xl mx-auto">
      {mainKofis.map((kofi, index) => (
        <section key={index} className="flex flex-col items-center sm:justify-center mt-12 sm:flex-row xl:flex-col xl:justify-between xl:w-full">
          <Image src={kofi.image} alt="" width={200} height={150} />
          <div className="flex flex-col items-center sm:items-start sm:justify-center xl:items-center">
            <h3 className="mt-4 font-bold">{kofi.name}</h3>
            <p className="text-center sm:text-left mt-2 w-80 xl:w-60 xl:text-center font-light text-t-dark">{kofi.description}</p>
          </div>
        </section>
      ))}
    </div>
  </div>;
}