import React from "react";
import { ImArrowRight2 } from "react-icons/im";

const SectionVideo = () => {
  return (
    <section className="text-center container mx-auto px-6 md:px-24 lg:px-32">
      <div className="md:max-w-3xl w-full mx-auto py-12 lg:px-5 px-0">
        <h1 className="lg:text-7xl text-5xl font-medium font-serif pb-3">
          Mall Of: Endless Possibilities
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          suscipit exercitationem, a nostrum repellendus tempore, optio quis
          magni velit blanditiis minus labore, earum quas quam odit esse
          pariatur vel ea.
        </p>
      </div>
      <div className="max-w-3xl lg:max-w-5xl mx-auto">
        <video controls poster="/slider1.jpeg">
          <source src="/main-video-eng3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mx-auto py-12 flex flex-wrap items-center md:justify-between justify-end rounded-3xl bg-[#293914] my-12 lg:max-w-6xl px-7">
        <div className="text-left flex flex-col items-start justify-center gap-y-3 max-w-[36rem]">
          <h5 className="text-xs -tracking-tighter">25 SR/GUEST</h5>
          <h3 className="text-3xl font-serif">
            Get your General Access Ticket
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            numquam in harum at sequi aliquam recusandae!
          </p>
        </div>
        <div className="w-10">
          <span>
            {" "}
            <ImArrowRight2 className="text-2xl" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default SectionVideo;
