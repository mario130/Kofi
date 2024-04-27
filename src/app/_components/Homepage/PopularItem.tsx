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
      name: "Pancake",
      description: "A pancake is a flat cake, often thin and round, can be useda as a dessert.",
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
      name: "Morning Coffee",
      description:
        "Coffee to go is a coffee that is sold to be consumed away from the shop.",
      icon: "/homepage/coffee-pot.svg",
    },
    {
      name: "Coffee To Go",
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
    <section className="mx-4 mt-28 max-w-7xl xl:mx-auto">
      <h4 className=" font-semibold tracking-tight">Build Your Base</h4>
      <p>Choose your favorite base and we will deliver it to you.</p>
      <main className="mt-10 space-y-4 flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0">
        <aside className="lg:ml-auto order-2 lg:order-1">
          {leftSide.map((item, index) => (
            <div
              key={index}
              className="mt-8 flex space-x-4 items-start lg:max-w-xl"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
                className="opacity-80"
              />
              <div className="flex flex-1 flex-col">
                <h6 className="font-bold">{item.name}</h6>
                <p className="mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </aside>
        <div className="flex justify-center lg:block order-1 lg:order-2">
          <Image
            src="/homepage/cup.webp"
            alt="Popular Item"
            width={400}
            height={500}
          />
        </div>
        <aside className="order-3">
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
