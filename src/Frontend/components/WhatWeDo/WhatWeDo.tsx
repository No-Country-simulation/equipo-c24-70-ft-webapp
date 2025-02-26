import WhatWeDoImg from "../../../assets/what-we-do-banner.png";
import ShieldIcon from "../../../assets/shield-icon.png";

const ShieldItem = () => {
  return (
    <div className="flex items-center gap-2">
      <figure>
        <img src={ShieldIcon} alt="" />
      </figure>
      <div>
        <h3>Cyber Solutions</h3>
        <p>Ruis autem vel eum rui inea elit niau.</p>
      </div>
    </div>
  );
};

function WhatWeDo() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2 py-12">
      <figure className="w-2/3 md:w-96 mx-auto">
        <img className="w-full object-cover" src={WhatWeDoImg} alt="" />
      </figure>
      <article className="text-center md:text-left">
        <p className="text-lg uppercase mb-2">Nuestra misión</p>
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
          Seguridad integral para una defensa digital sin límites.
        </h2>
        <p className="text-lg mb-5">
          Protegemos tu entorno digital con estrategias efectivas, brindando
          confianza y tranquilidad ante cualquier amenaza en línea.
        </p>
        <footer className="grid grid-cols-2">
          <ShieldItem />
          <ShieldItem />
          <ShieldItem />
          <ShieldItem />
        </footer>
      </article>
    </section>
  );
}

export default WhatWeDo;
