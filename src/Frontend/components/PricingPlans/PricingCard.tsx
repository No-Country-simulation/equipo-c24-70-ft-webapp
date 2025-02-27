import { FaCheck } from "react-icons/fa";
import { PricingCardProps } from "../../Store/types";
import { FC } from "react";

import "./PricingCard.css";

export const PricingCard: FC<PricingCardProps> = ({
  category,
  img,
  price,
  list,
}) => {
  return (
    <a
      href="#"
      className="pricing-card__container rounded-lg py-8 px-8 xl:px-12"
      title="Ver detalles del plan"
    >
      <span className="pricing-card__category">{category}</span>
      <figure className="flex justify-center mb-4">
        <img src={img} alt="" />
      </figure>
      <div className="mb-4">
        <strong className="text-5xl">${price}</strong>
        <p className="font-semibold text-neutral-600">/ Al mes</p>
      </div>
      <div className="text-left">
        <ul className="pricing-card__list font-semibold text-neutral-600 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-3">
          {list.map((item: string, index: number) => (
            <li key={index}>
              <span className="text-black">
                <FaCheck size={14} />
              </span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};
