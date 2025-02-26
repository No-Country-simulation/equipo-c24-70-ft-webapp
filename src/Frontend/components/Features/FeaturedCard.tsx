import { FC } from "react";
import { FeatureCardProps } from "../../Store/types";

export const FeaturedCard: FC<FeatureCardProps> = ({
  img,
  title,
  paragraph,
}) => {
  return (
    <article className="w-11/12 mx-auto md:w-auto">
      <figure className="flex justify-center mb-4">
        <img className="w-full max-w-28" src={img} alt="" />
      </figure>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-lg">{paragraph}</p>
    </article>
  );
};
