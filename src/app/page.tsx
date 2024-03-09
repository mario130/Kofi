export default async function Home() {
  const coffees = await fetch(process.env.GET_COFFEES_URL!).then((res) => res.json());
  const wantedCoffee = await fetch(`${process.env.GET_COFFEES_URL}?coffeeId=coffee-1`).then((res) => res.json());

  return (
    <main className="mx-4 mt-4">
      <h1 className="text-4xl mb-8">My Coffees</h1>
      <ul className="space-y-10">
        {coffees.map((coffee: any) => (
          <li key={coffee.id}>

            <h2 className="font-bold">{coffee.name}</h2>
            <p>{coffee.description}</p>
            <p>${coffee.price}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl mt-8">Wanted Coffee</h2>
      <p>{wantedCoffee.name}</p>
    </main>
  );
}
