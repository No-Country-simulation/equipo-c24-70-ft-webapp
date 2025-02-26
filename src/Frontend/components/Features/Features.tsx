import { FC } from "react";
import PersonIcon from "../../../assets/person-icon.png";
import HandIcon from "../../../assets/hand-icon.png";
import LockIcon from "../../../assets/lock-icon.png";
import ScreensIcon from "../../../assets/screens-icon.png";

const items = [
  {
    id: 1,
    img: PersonIcon,
    title: "Descubra el poder de la automatización",
    paragraph:
      "Cree, guarde y rellene las contraseñas automáticamente, y dedique su atención a lo importante de verdad.",
  },
  {
    id: 2,
    img: HandIcon,
    title: "Comparta más fácilmente",
    paragraph:
      "Con un clic puede compartir contraseñas con compañeros de trabajo o familiares. Nunca había sido tan fácil colaborar o dar acceso.",
  },
  {
    id: 3,
    img: LockIcon,
    title: "Evite las contraseñas poco seguras y reutilizadas",
    paragraph:
      "Nuestro gestor genera contraseñas seguras para todas sus cuentas y las guarda para que no tenga que memorizarlas.",
  },
  {
    id: 4,
    img: ScreensIcon,
    title: "Nunca vuelva a quedarse fuera",
    paragraph:
      "Acceda a sus contraseñas desde cualquier sitio y en cualquier dispositivo para entrar en sus cuentas importantes siempre que lo necesite.",
  },
];

interface FeatureCardProps {
  img: string;
  title: string;
  paragraph: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ img, title, paragraph }) => {
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

function Features() {
  return (
    <section className="features container py-12" id="features">
      <article className="flex flex-col items-center gap-10">
        <h2 className="font-semibold text-4xl lg:text-6xl text-center">
          Adiós a las frustraciones con las contraseñas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item) => (
            <FeatureCard key={item.id} {...item} />
          ))}
        </div>
      </article>
    </section>
  );
}

export default Features;
