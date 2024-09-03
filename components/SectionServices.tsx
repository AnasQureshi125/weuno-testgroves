import image from "next/image";
import Image from "next/image";
import { title } from "process";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const cardsList = {
  imgUrl: "/slider1.jpeg",
  title: "Vida Vera",
  tag: "100 SR PER REQUEST",
};

const servicesCards = [
  {
    id: 1,
    imgUrl: "/slider1.jpeg",
    title: "Vida Vera",
    tag: "100 SR PER REQUEST",
  },
  {
    id: 2,
    imgUrl: "/slider2.jpg",
    title: "Zama Zulu",
    tag: "100 SR PER REQUEST",
  },
  {
    id: 3,
    imgUrl: "/slider3.jpg",
    title: "Khawaja Yanni",
    tag: "100 SR PER REQUEST",
  },
  {
    id: 4,
    imgUrl: "/slider1.jpeg",
    title: "Yamagata",
    tag: "100 SR PER REQUEST",
  },
];

const SectionServices = () => {
  return (
    <section className="text-center container mx-auto px-6 md:px-24 lg:px-32">
      <div className="md:max-w-5xl md:mx-auto w-full md:py-12 pt-12 pb-6 md:px-5">
        <h1 className="text-5xl font-medium font-serif md:pb-3 text-left md:text-center">
          Experience the Finest Cuisine
        </h1>
        <p className="md:block hidden">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          suscipit exercitationem, a nostrum repellendus tempore, optio quis
          magni velit blanditiis minus labore, earum quas quam odit esse
          pariatur vel ea.
        </p>
      </div>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        {servicesCards.map((cards) => {
          return (
            <div
              className="relative bg-[#293914] rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-auto w-full max-w-2xl p-2.5"
              key={cards.id}
            >
              <div className="relative w-full h-56 sm:h-72 md:h-64 lg:h-56 xl:h-64">
                <Image
                  src={cards.imgUrl}
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
        })}
        {/* <div className="relative bg-[#293914] rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-auto w-full max-w-lg p-2.5">
          <div className="relative w-full h-56 sm:h-72 md:h-64 lg:h-56 xl:h-64">
            <Image
              src={cardsList.imgUrl}
              alt={cardsList.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-2xl"
            />
          </div>
          <div className="p-4">
            <h2 className="text-white text-lg font-semibold">
              {cardsList.title}
            </h2>
            <div className="flex justify-between items-center mt-2">
              <span className="bg-[#b28851] text-white text-sm px-4 py-1 rounded-full">
                {cardsList.tag}
              </span>
              <FaArrowRight className="text-white" />
            </div>
          </div>
        </div>
        <div className="relative bg-[#293914] rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-auto w-full max-w-lg p-2.5">
          <div className="relative w-full h-56 sm:h-72 md:h-64 lg:h-56 xl:h-64">
            <Image
              src={cardsList.imgUrl}
              alt={cardsList.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-2xl"
            />
          </div>
          <div className="p-4">
            <h2 className="text-white text-lg font-semibold">
              {cardsList.title}
            </h2>
            <div className="flex justify-between items-center mt-2">
              <span className="bg-[#b28851] text-white text-sm px-4 py-1 rounded-full">
                {cardsList.tag}
              </span>
              <FaArrowRight className="text-white" />
            </div>
          </div>
        </div>
        <div className="relative bg-[#293914] rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-auto w-full max-w-lg p-2.5">
          <div className="relative w-full h-56 sm:h-72 md:h-64 lg:h-56 xl:h-64">
            <Image
              src={cardsList.imgUrl}
              alt={cardsList.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-2xl"
            />
          </div>
          <div className="p-4">
            <h2 className="text-white text-lg font-semibold">
              {cardsList.title}
            </h2>
            <div className="flex justify-between items-center mt-2">
              <span className="bg-[#b28851] text-white text-sm px-4 py-1 rounded-full">
                {cardsList.tag}
              </span>
              <FaArrowRight className="text-white" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SectionServices;
