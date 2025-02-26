import WhoWeAreImg from "../../../assets/who-we-are-banner.png";

function WhoWeAre() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2 py-12">
      <article>
        <small>Quiénes somos</small>
        <h2>Dedicamos 30,000 horas al año a combatir amenazas de virus</h2>
        <p>
          Nos especializamos en detectar y neutralizar amenazas digitales,
          asegurando protección constante. Con tecnología avanzada y
          experiencia, trabajamos incansablemente para mantener seguros tus
          dispositivos y datos frente a cualquier riesgo cibernético.
        </p>
        <footer className="flex gap-2">
          <div>
            <h3>
              2K<span>+</span>
            </h3>
            <p>Reseñas positivas</p>
          </div>
          <div>
            <h3>
              17M<span>+</span>
            </h3>
            <p>Dispositivos monitorizados</p>
          </div>
          <div>
            <h3>
              18K<span>+</span>
            </h3>
            <p>Sensores de red activos</p>
          </div>
        </footer>
      </article>
      <aside className="order-1 md:order-2 w-2/3 md:w-96 mx-auto">
        <img className="w-full object-cover" src={WhoWeAreImg} alt="" />
      </aside>
    </section>
  );
}

export default WhoWeAre;
