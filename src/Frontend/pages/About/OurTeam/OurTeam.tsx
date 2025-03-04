import { FC } from "react";
import TeamImg1 from "../../../../assets/teams-img1.png";
import TeamImg2 from "../../../../assets/alexander-castillo.jpg";
import TeamImg3 from "../../../../assets/emmanuel-cruz.jpg";
import TeamImg4 from "../../../../assets/antonella-heimen.jpg";
import SocialIcons from "../../../components/SocialIcons/SocialIcons";

interface TeamCardProps {
  img: string;
  name: string;
  occupation: string;
}

const teamMembers = [
  {
    id: 1,
    img: TeamImg1,
    name: "Nataly Castañeda",
    occupation: "Fullstack Developer",
  },
  {
    id: 2,
    img: TeamImg2,
    name: "Alexander Castillo",
    occupation: "Fullstack Developer",
  },
  {
    id: 3,
    img: TeamImg3,
    name: "Emmanuel Cruz",
    occupation: "Frontend Developer",
  },
  {
    id: 4,
    img: TeamImg4,
    name: "Antonella Heimen",
    occupation: "QA Tester",
  },
];

const TeamCard: FC<TeamCardProps> = ({ img, name, occupation }) => {
  return (
    <article className="text-center">
      <header className="relative mb-8">
        <figure className="rounded-lg overflow-hidden">
          <img
            className="w-full object-cover"
            src={img}
            alt={`${name}, ${occupation}.`}
            width={472}
            height={440}
          />
        </figure>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <SocialIcons borderRadius={true} />
        </div>
      </header>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="uppercase text-neutral-600">{occupation}</p>
    </article>
  );
};

function OurTeam() {
  return (
    <section className="container">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-8">
        <article>
          <h1 className="text-lg uppercase mb-2">Nuestro Equipo</h1>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
            Expertos Detrás de la Seguridad
          </h2>
          <div className="text-lg text-neutral-600">
            <p className="mb-4">
              En LockKey, contamos con un equipo de profesionales altamente
              capacitados y dedicados a proporcionar las mejores soluciones de
              gestión de contraseñas. Nuestro equipo está compuesto por expertos
              en seguridad, desarrolladores y especialistas en soporte al
              cliente.
            </p>
            <p className="mb-4">
              Cada miembro de nuestro equipo aporta una vasta experiencia y
              conocimientos en sus respectivos campos, asegurando que nuestros
              productos y servicios sean de la más alta calidad. Nos esforzamos
              por mantenernos a la vanguardia de la tecnología y las mejores
              prácticas de seguridad.
            </p>
          </div>
        </article>
        <aside className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mx-auto">
          {teamMembers.map((member) => {
            return <TeamCard key={member.id} {...member} />;
          })}
        </aside>
      </article>
    </section>
  );
}

export default OurTeam;
