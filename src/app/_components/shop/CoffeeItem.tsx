import { Coffee } from '@/interfaces/Coffee';
import React from 'react'
import { MotionDiv } from '../MotionDiv';
import Link from 'next/link';
import Image from 'next/image';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { motion } from "framer-motion";

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
          className="rounded-lg bg-[#e9e3dd90] relative" />
        <h6 className="my-1 font-bold flex items-center justify-between space-x-2">
          <span>{coffee.name}</span>
          <motion.span
            className="flex space-x-1 rounded-full bg-orange-100 border border-orange-200 px-2 py-[3px] absolute top-2 right-2"
            whileHover={{ scale: 1.1 }}
          >
            <StarFilledIcon color="orange" height={15} width={15} />
            <span className="text-orange-400 text-xs">{coffee.rating}</span>
          </motion.span>
        </h6>
        <p className="line-clamp-1 text-sm text-gray-500">
          {coffee.description}
        </p>
        <p className="font-semibold">${coffee.price}</p>
      </div>
    </MotionDiv>
  </Link>;
}