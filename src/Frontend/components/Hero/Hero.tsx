import HeroBanner from "../../../assets/hero-banner.png";
import "./Hero.css";

function Hero() {
  return (
    <main
      className="hero grid grid-flow-col items-center gap-2 px-20"
      id="hero"
    >
      <section>
        <h1 className="text-[75px] font-bold leading-[64px] mb-5">
          Todos tus{" "}
          <span className="text__accent-purple">inicios de sesión</span> en un
          solo lugar
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
        <img src={HeroBanner} alt="" width={360} />
      </figure>
    </main>
  );
}

export default Hero;
