import Image from "next/image";

export default function PopularItem() {
  const leftSide = [
    {
      name: "Croissant",
      description:
        "A croissant is a buttery, flaky, viennoiserie pastry of Austrian origin.",
      icon: "/homepage/croissant.svg",
    },
    {
      name: "French Toast",
      description:
        "French toast is a dish made of sliced bread soaked in beaten eggs and typically milk, then pan fried.",
      icon: "/homepage/hot-dog.svg",
    },
    {
      name: "Pancake",
      description: "A pancake is a flat cake, often thin and round.",
      icon: "/homepage/cup-cake.svg",
    },
    {
      name: "Chocolate",
      description:
        "Chocolate is a food product made from roasted and ground cacao pods.",
      icon: "/homepage/donut.svg",
    },
  ];
  const rightSide = [
    {
      name: "Turkish Coffee",
      description: "Turkish coffee is a method of preparing unfiltered coffee.",
      icon: "/homepage/coffee-mug.svg",
    },
    {
      name: "Coffee To Go",
      description:
        "Coffee to go is a coffee that is sold to be consumed away from the shop.",
      icon: "/homepage/coffee-pot.svg",
    },
    {
      name: "Morning Coffee",
      description:
        "Morning coffee is a coffee that is consumed in the morning.",
      icon: "/homepage/coffee-alt.svg",
    },
    {
      name: "Coffee Break",
      description: "Coffee break is a coffee that is consumed during a break.",
      icon: "/homepage/coffee-cup.svg",
    },
  ];

  return (
    <section className="mx-4 mt-28">
      <div className="text-center">
        <h4 className="text-center font-bold text-t-gray">BUILD YOUR BASE.</h4>
      </div>
      <main className="mt-10 space-y-10 lg:flex lg:space-x-2 lg:space-y-0">
        <aside className="ml-auto">
          {leftSide.map((item, index) => (
            <div
              key={index}
              className="mt-8 flex items-start justify-between space-x-4 lg:max-w-xl"
            >
              <div className="flex flex-1 flex-col items-end">
                <h6 className="font-bold">{item.name}</h6>
                <p className="mt-2 text-right">{item.description}</p>
              </div>
              <Image
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
                className="opacity-80"
              />
            </div>
          ))}
        </aside>
        <div className="flex justify-center lg:block">
          <Image
            src="/homepage/cup.webp"
            alt="Popular Item"
            width={400}
            height={500}
          />
        </div>
        <aside>
          {rightSide.map((item, index) => (
            <div
              key={index}
              className="mt-8 flex items-start justify-between space-x-4 lg:max-w-xl"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
                className="opacity-80"
              />
              <div className="flex flex-1 flex-col items-start">
                <h6 className="font-bold">{item.name}</h6>
                <p className="mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </aside>
      </main>
    </section>
  );
}
