"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { ImArrowRight2 } from "react-icons/im";

const SectionBookGeneral = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of cards to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Breakpoint for large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024, // Breakpoint for laptop screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Breakpoint for medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Breakpoint for small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="container mx-auto px-6 md:px-24 lg:px-32 pt-9">
      <div className="text-left flex flex-col justify-center items-start gap-y-3">
        <h1 className="text-5xl font-medium font-serif pb-3 lg:max-w-2xl">
          Book General Access ticket and enjoy the attractions for free
        </h1>
        <button className="rounded-2xl bg-gradient-to-t from-[#cfb37b] to-[#B28C4E] px-12 py-3.5 text-md text-gray-100 hover:from-[#c8a55f] hover:to-[#a37935] flex items-center justify-center">
          Book General Access Ticket &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ImArrowRight2 />
        </button>
      </div>

      <div className="mx-auto my-10">
        <Slider {...settings}>
          {/* Card 1 */}
          <div className="relative bg-transparent overflow-hidden pr-6 md:pr-0">
            <div className="w-full">
              <Image
                src="/slider1.jpeg"
                alt="Little Krazy"
                width={400}
                height={240}
                className="object-cover w-full h-96 rounded-2xl"
              />
              <div className="p-4 text-center font-serif text-2xl tracking-wider">
                Little Krazy
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-transparent overflow-hidden pr-6 md:pr-0">
            <div className="md:mx-auto md:mt-9 md:w-3/4 w-full">
              <Image
                src="/slider2.jpg"
                alt="Hawanin Groves City"
                width={400}
                height={240}
                className="object-cover w-full md:h-64 h-96 rounded-2xl"
              />
              <div className="p-4 text-center font-serif text-2xl tracking-wider">
                Hawanim Groves City
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-transparent overflow-hidden pr-6 md:pr-0">
            <div className="w-full">
              <Image
                src="/slider3.jpg"
                alt="Little Krazy"
                width={400}
                height={240}
                className="object-cover w-full h-96 rounded-2xl"
              />
              <div className="p-4 text-center font-serif text-2xl tracking-wider">
                Little Krazy
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative bg-transparent overflow-hidden pr-6 md:pr-0">
            <div className="md:mx-auto md:mt-9 md:w-3/4 w-full">
              <Image
                src="/slider2.jpg"
                alt="Hawanin Groves City"
                width={400}
                height={240}
                className="object-cover w-full md:h-64 h-96 rounded-2xl"
              />
              <div className="p-4 text-center font-serif text-2xl tracking-wider">
                Hawanim Groves City
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default SectionBookGeneral;
