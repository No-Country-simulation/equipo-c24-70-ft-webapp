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
          <img className="w-full object-cover" src={img} alt="" />
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
          <h1 className="text-lg uppercase mb-2">Our Team</h1>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
            Expert Team Who are Behind the Security
          </h2>
          <div className="text-neutral-600 mb-6">
            <p>
              En LockKey, nos dedicamos a proporcionar soluciones de gestión de
              contraseñas que son seguras, fáciles de usar y accesibles desde
              cualquier lugar. Nuestro objetivo es proteger tu información
              personal y profesional con la tecnología más avanzada.
            </p>
            <p>
              Con nuestro gestor de contraseñas, puedes generar, almacenar y
              autocompletar contraseñas seguras para todas tus cuentas en línea.
              Nos esforzamos por ofrecer un servicio que no solo mejora tu
              seguridad, sino que también simplifica tu vida digital.
            </p>
          </div>
        </article>
        <aside className="grid grid-cols-2 gap-x-8 gap-y-4 mx-auto">
          {teamMembers.map((member) => {
            return <TeamCard key={member.id} {...member} />;
          })}
        </aside>
      </article>
    </section>
  );
}

export default OurTeam;
