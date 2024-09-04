"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { ImArrowRight2 } from "react-icons/im";
import { heroSectionData } from "@/lib/data";

const Hero = () => {
  return (
    <div>
      <Carousel
        animationHandler="fade"
        swipeable={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        stopOnHover={true}
        autoPlay={true}
      >
        {heroSectionData.map((items) => {
          return (
            <div className="h-screen lg:h-auto" key={items.id}>
              <Image
                src={items.imageUrl}
                alt={items.tag}
                width={1024}
                height={45}
                className="w-full overflow-hidden h-full object-cover"
              />
              <div className="absolute left-0 top-0 w-full xl:w-2/4 lg:w-2/3 h-full bg-[#0000007a] lg:px-32 px-6 flex flex-col md:justify-center z-50">
                <div className="pt-40 md:pt-0 flex flex-col items-start justify-center xl:gap-y-12  mx-auto lg:mb-10 px-1 gap-y-9">
                  <p className="uppercase text-xs tracking-[.20em] text-white">
                    {items.tag}
                  </p>
                  <h1 className="lg:text-7xl text-5xl font-medium font-serif text-left">
                    {items.title}
                  </h1>
                  <p className="text-left">{items.description}</p>
                  <button className="rounded-2xl bg-gradient-to-t from-[#cfb37b] to-[#B28C4E] px-12 py-3.5 text-md text-gray-100 hover:from-[#c8a55f] hover:to-[#a37935]  flex items-center justify-center">
                    Book reservation now &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <ImArrowRight2 />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
