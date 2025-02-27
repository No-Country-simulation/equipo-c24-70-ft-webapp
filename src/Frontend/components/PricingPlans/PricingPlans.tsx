import { FaCheck } from "react-icons/fa";
import PricingPlanIcon1 from "../../../assets/pricing-plan-icon1.png";
import PricingPlanIcon2 from "../../../assets/pricing-plan-icon2.png";
import PricingPlanIcon3 from "../../../assets/pricing-plan-icon3.png";

import "./PricingCard.css";
import { FC } from "react";

const pricingCardData = [
  {
    id: 1,
    category: "Personal",
    img: PricingPlanIcon1,
    price: 120,
    list: [
      "10 días de prueba",
      "Carpetas compartidas",
      "Eliminación de Malware",
      "Escaneo cada 08 Hrs",
    ],
  },
  {
    id: 2,
    category: "Business",
    img: PricingPlanIcon2,
    price: 180,
    list: [
      "1GB de almacenamiento",
      "Uso compartido",
      "Acceso a multiples dispositivos",
      "Escaneo cada 1 Hr",
    ],
  },
  {
    id: 3,
    category: "Premium",
    img: PricingPlanIcon3,
    price: 200,
    list: [
      "Sin límite de contraseñas",
      "Usuarios ilimitados",
      "Panel de seguridad de equipo",
      "Asistencia técnica 24/7",
    ],
  },
];

interface PricingCardProps {
  category: string;
  img: string;
  price: number;
  list: string[];
}

const PricingCard: FC<PricingCardProps> = ({ category, img, price, list }) => {
  return (
    <a
      href="#"
      className="pricing-card__container rounded-lg py-8 px-8 xl:px-12"
    >
      <span className="pricing-card__category">{category}</span>
      <figure className="flex justify-center mb-4">
        <img src={img} alt="" />
      </figure>
      <div className="mb-4">
        <strong className="text-5xl">${price}</strong>
        <p>/ Al mes</p>
      </div>
      <div className="text-left">
        <ul className="pricing-card__list [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-3">
          {list.map((item: string, index: number) => (
            <li key={index}>
              <span>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
          {pricingCardData.map((item) => (
            <PricingCard key={item.id} {...item} />
          ))}
        </div>
      </article>
    </section>
  );
}

export default PricingPlans;
