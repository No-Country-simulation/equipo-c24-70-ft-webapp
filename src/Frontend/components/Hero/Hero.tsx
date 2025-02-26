import HeroBanner from "../../../assets/hero-banner.png";
import "./Hero.css";

function Hero() {
  return (
    <main
      className="hero container grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2"
      id="hero"
    >
      <section className="order-2 md:order-1">
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6">
          Todos tus{" "}
          <span className="text__accent-purple">inicios de sesión</span> en un
          solo lugar
        </h1>
        <p className="text-xl font-[400] leading-[33px] mb-6">
          Simplifique su vida digital con un gestor de contraseñas que crea,
          guarda y rellena contraseñas seguras automáticamente.
        </p>
        <div className="flex gap-4 mb-5">
          <button className="btn__primary btn__lime">Business</button>
          <button className="btn__primary">Personal</button>
        </div>
        <p className="text-sm text-neutral-600">
          Prueba gratuita para todos los planes disponibles. Sin tarjeta de
          crédito.
        </p>
      </section>
      <figure className="order-1 md:order-2 w-2/3 md:w-96 mx-auto">
        <img className="w-full object-cover" src={HeroBanner} alt="" />
      </figure>
    </main>
  );
}

export default Hero;
