import HeroBanner from "../../../assets/hero-banner.png";

function Hero() {
  return (
    <main className="grid grid-flow-col items-center px-20">
      <section>
        <h1>Organiza tus contraseñas y protégelas en un solo lugar</h1>
        <p>
          Simplifique su vida digital con un gestor de contraseñas que crea,
          guarda y rellena contraseñas seguras automáticamente.
        </p>
        <div>
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
