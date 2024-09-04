import { finestCuisine } from "@/lib/data";
import ServiceCard from "@/childreusablecomponents/ServiceCard";

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
        {finestCuisine.map((cards) => {
          return <ServiceCard cards={cards} key={cards.id} />;
        })}
      </div>
    </section>
  );
};

export default SectionServices;
