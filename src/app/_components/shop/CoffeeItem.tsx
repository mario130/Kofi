import { Coffee } from '@/interfaces/Coffee';
import React from 'react'
import { MotionDiv } from '../MotionDiv';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { capitalize } from '@/utils/Capitalize';
import { cn } from '@/lib/utils';

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

export default function CoffeeItem({ coffee, index }: { coffee: Coffee; index: number }) {
  return <Link key={coffee.id} href={`/shop/${coffee.id}`}>
    <MotionDiv
      key={coffee.id}
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{ once: true }}
    >
      <div key={coffee.id} className="relative mx-auto max-w-96">
        <Image
          src={coffee.imageUrl}
          alt={coffee.name}
          width={400}
          height={280}
          className="rounded-lg bg-[#e9e3dd90]" />
        <div className="flex items-center justify-between">
          <div className="absolute right-2 top-2 flex flex-col items-end space-y-1">
            <Badge
              variant="outline"
              className={cn(
                "h-5 font-sans text-black",
                coffee.intensity === "mild" && "bg-secondary",
                coffee.intensity === "medium" && "bg-[#c6cfd7]",
                coffee.intensity === "bold" && "bg-black text-white"
              )}
            >
              {capitalize(coffee.intensity)} intensity
            </Badge>
            <Badge
              variant="default"
              className={cn(
                "h-5 font-sans text-black",
                coffee.roast === "light" && "bg-secondary",
                coffee.roast === "medium" && "bg-[#c6cfd7]",
                coffee.roast === "dark" && "bg-black text-white"
              )}
            >
              {capitalize(coffee.roast)} roast
            </Badge>
          </div>
        </div>
        <h6 className="my-1 font-bold">{coffee.name}</h6>
        <p className="line-clamp-1 text-sm text-gray-500">
          {coffee.description}
        </p>
        <p className="font-semibold">${coffee.price}</p>
      </div>
    </MotionDiv>
  </Link>;
}