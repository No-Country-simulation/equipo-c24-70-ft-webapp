import HeroBanner from "../../../assets/hero-banner.png";
import "./Hero.css";

function Hero() {
  return (
    <main className="hero grid grid-flow-col items-center px-20" id="hero">
      <section>
        <h1 className="text-[75px] font-bold leading-[60px] mb-3">
          Todos tus inicios de sesión en un solo lugar
        </h1>
        <p className="text-[22px] font-[400] leading-[33px] mb-3">
          Simplifique su vida digital con un gestor de contraseñas que crea,
          guarda y rellena contraseñas seguras automáticamente.
        </p>
        <div className="flex gap-2">
          <button>Business</button>
          <button>Personal</button>
        </div>
      </section>
      <figure>
        <img src={HeroBanner} alt="" width={320} />
      </figure>
    </main>
  );
}

export default Hero;
