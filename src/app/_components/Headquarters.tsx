import Image from "next/image";
import React from "react";

export default function Headquarters() {
  const countries = [
    {
      name: "United Kingdom",
      address: "68 Asfordby Rd",
      city: "Alcaston",
      postal: "SY6 1YA",
      phone: "+44 1241 918425",
      icon: "/uk.svg",
    },
    {
      name: "Canada",
      address: "1528 Eglinton Avenue",
      city: "Toronto",
      postal: "Ontario M4P 1A6",
      phone: "+1 416 485 2997",
      icon: "/canada.svg",
    },
    {
      name: "Australia",
      address: "36 Swanston Street",
      city: "Kewell",
      postal: "Victoria",
      phone: "+61 3 8627 8616",
      icon: "/australia.svg",
    },
  ];

  return (
    <section className="mx-8 mt-16 lg:mx-auto lg:max-w-5xl">
      <h4 className="text-center font-bold text-t-gray">Our headquarters</h4>
      <div className="md:flex justify-around">
        {countries.map((country, index) => (
          <div
            key={index}
            className="mt-20 flex flex-col items-center justify-center md:mt-14 md:items-start"
          >
            <Image
              src={country.icon}
              alt={country.name}
              width={50}
              height={50}
            />
            <h4 className="mb-4 mt-8 font-bold">{country.name}</h4>
            <address className="not-italic text-gray-500">
              <p>{country.address}</p>
              <p>{country.city}</p>
              <p>{country.postal}</p>
              <p>{country.phone}</p>
            </address>
          </div>
        ))}
      </div>
    </section>
  );
}
