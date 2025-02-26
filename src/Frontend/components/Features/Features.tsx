import { FeaturedCard } from "./FeaturedCard";
import { featuresItems } from "../../mocks/features";

function Features() {
  return (
    <section className="features container py-12" id="features">
      <article className="flex flex-col items-center gap-10">
        <h2 className="font-semibold text-4xl lg:text-6xl text-center">
          Adiós a las frustraciones con tus contraseñas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuresItems.map((item) => (
            <FeaturedCard key={item.id} {...item} />
          ))}
        </div>
      </article>
    </section>
  );
}

export default Features;
