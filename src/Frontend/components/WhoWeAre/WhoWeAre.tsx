import WhoWeAreImg from "../../../assets/who-we-are-banner.png";
import { CounterItem } from "./CounterItem";

function WhoWeAre() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2 py-12">
      <article className="order-2 md:order-1 text-center md:text-left">
        <p className="text-lg uppercase mb-2">Quiénes somos</p>
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
          Dedicamos 30,000 horas al año a combatir amenazas de virus
        </h2>
        <p className="text-lg mb-5">
          Nos especializamos en detectar y neutralizar amenazas digitales,
          asegurando protección constante. Con tecnología avanzada y
          experiencia, trabajamos incansablemente para mantener seguros tus
          dispositivos y datos frente a cualquier riesgo cibernético.
        </p>
        <footer className="flex flex-col md:flex-row gap-4">
          <CounterItem count="2K" text="Reseñas positivas" />
          <CounterItem count="17M" text="Dispositivos monitorizados" />
          <CounterItem count="18K" text="Sensores de red activos" />
        </footer>
      </article>
      <aside className="order-1 md:order-2 w-2/3 md:w-96 mx-auto">
        <img className="w-full object-cover" src={WhoWeAreImg} alt="" />
      </aside>
    </section>
  );
}

export default WhoWeAre;
