import { FC } from "react";
import { ServicesCardProps } from "../../../Store/types";
import "./ServicesCard.css";

export const ServicesCard: FC<ServicesCardProps> = ({
  title,
  img,
  paragraph,
}) => {
  return (
    <article className="services-card__container rounded-lg py-8 px-8 xl:px-12">
      <figure className="flex justify-center mb-4">
        <img src={img} alt="" />
      </figure>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-lg">{paragraph}</p>
      </div>
    </article>
  );
};
