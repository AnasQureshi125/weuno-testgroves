import Image from "next/image";
import React from "react";

const SectionFindPlace = () => {
  return (
    <section className="container mx-auto px-6 md:px-24 lg:px-32 md:pt-9 pt-36">
      <div className="lg:inline-flex block w-full overflow-hidden">
        <div className="lg:w-2/4 w-full hidden md:block">
          <Image
            src="/map.png"
            alt="mapImg"
            width={400}
            height={400}
            className="w-full h-full"
          />
        </div>
        <div className="lg:w-2/4 w-full flex flex-col items-start justify-center gap-y-9 mx-auto mb-10 md:px-2 px-0">
          <p className="uppercase text-xs tracking-[.20em] text-white">
            Experience The Groves
          </p>
          <h1 className="text-5xl font-medium font-serif text-left">
            Find your place
          </h1>
          <p className="text-left">
            Our interactive map will show you the way to the shops and
            restaurants that you want to see
          </p>
          <button className="rounded-2xl bg-gradient-to-t from-[#cfb37b] to-[#B28C4E] pl-4 pr-9 py-3.5 text-md text-gray-100 hover:from-[#c8a55f] hover:to-[#a37935] text-left">
            Open the map
          </button>
        </div>
        <div className="lg:w-2/4 w-full md:hidden block">
          <Image
            src="/map.png"
            alt="mapImg"
            width={400}
            height={400}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionFindPlace;
