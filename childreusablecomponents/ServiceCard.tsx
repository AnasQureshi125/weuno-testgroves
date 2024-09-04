import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface cardsProps {
  cards: {
    id: number;
    title: string;
    tag: string;
    imageUrl: string;
  };
}
const ServiceCard = ({ cards }: cardsProps) => {
  return (
    <div
      className="relative bg-[#293914] rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-auto w-full max-w-2xl p-2.5"
      key={cards.id}
    >
      <div className="relative w-full h-56 sm:h-72 md:h-64 lg:h-56 xl:h-64">
        <Image
          src={cards.imageUrl}
          alt={cards.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-4">
        <h2 className="text-white font-thin text-left font-serif text-3xl">
          {cards.title}
        </h2>
        <div className="flex justify-between items-center mt-2">
          <span className="bg-[#b28851] text-white text-sm px-4 py-1 rounded-full">
            {cards.tag}
          </span>
          <FaArrowRight className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
