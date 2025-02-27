import { FaCheck } from "react-icons/fa";
import PricingPlanIcon1 from "../../../assets/pricing-plan-icon1.png";
import PricingPlanIcon2 from "../../../assets/pricing-plan-icon2.png";
import PricingPlanIcon3 from "../../../assets/pricing-plan-icon3.png";

import "./PricingCard.css";

const pricingCardData = [
  {
    id: 1,
    category: "Beginner",
    img: PricingPlanIcon1,
    price: 120,
    list: [
      "10 Days Product Testing",
      "Upgrade Anytime Protection",
      "100 Malware Removal",
      "Scan Every 08 Hrs",
    ],
  },
  {
    id: 2,
    category: "Business",
    img: PricingPlanIcon2,
    price: 180,
    list: [
      "30 Days Product Testing",
      "Upgrade Anytime Protection",
      "200 Malware Removal",
      "24/7 Live Assistance",
    ],
  },
  {
    id: 3,
    category: "Professional",
    img: PricingPlanIcon3,
    price: 200,
    list: [
      "50 Days Product Testing",
      "Upgrade Anytime Protection",
      "500 Malware Removal",
      "Scan Every 1 Hr",
    ],
  },
];

const PricingCard = ({ category, img, price, list }) => {
  return (
    <a
      href="#"
      className="pricing-card__container rounded-lg py-8 px-8 xl:px-14"
    >
      <span className="pricing-card__category">{category}</span>
      <figure className="flex justify-center mb-4">
        <img src={img} alt="" />
      </figure>
      <div className="mb-4">
        <strong className="text-5xl">${price}</strong>
        <p>/ Per Month</p>
      </div>
      <div className="text-left">
        <ul className="pricing-card__list [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-2">
          {list.map((item: string, index: number) => (
            <li key={index}>
              <span>
                <FaCheck />
              </span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

function PricingPlans() {
  return (
    <section
      className="container pricing-plans flex flex-col gap-2 py-12"
      id="pricing-plans"
    >
      <article className="text-center lg:col-span-3">
        <p className="text-lg uppercase mb-2">Elige tu nivel de seguridad</p>
        <h2 className="md:w-9/12 text-3xl xl:text-5xl font-bold mb-12 mx-auto">
          Planes de protección diseñados para cada necesidad.
        </h2>

        <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingCardData.map((item) => (
            <PricingCard key={item.id} {...item} />
          ))}
        </footer>
      </article>
    </section>
  );
}

export default PricingPlans;
