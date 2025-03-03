import TeamImg1 from "../../../../assets/teams-img1.png";
import TeamImg2 from "../../../../assets/teams-img2.png";
import TeamImg3 from "../../../../assets/teams-img3.png";
import TeamImg4 from "../../../../assets/teams-img4.png";
import SocialIcons from "../../../components/SocialIcons/SocialIcons";

const TeamCard = () => {
  return (
    <article className="text-center">
      <header className="relative mb-8">
        <img className="" src={TeamImg1} alt="" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <SocialIcons borderRadius={true} />
        </div>
      </header>
      <h2>Morgan Cooper</h2>
      <p className="uppercase">CEO & Founder</p>
    </article>
  );
};

function OurTeam() {
  return (
    <section className="container">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-8">
        <article>
          <h1 className="text-lg uppercase mb-2">Out Team</h1>
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
        <aside className="grid grid-cols-2 gap-8 mx-auto">
          <TeamCard />
          <img className="" src={TeamImg2} alt="" />
          <img className="" src={TeamImg3} alt="" />
          <img className="" src={TeamImg4} alt="" />
        </aside>
      </article>
    </section>
  );
}

export default OurTeam;
