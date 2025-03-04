import AboutImg1 from "../../../../assets/about-page-img1.png";
import AboutImg2 from "../../../../assets/about-page-img2.png";
import AboutImg3 from "../../../../assets/about-page-img3.png";
import CheckIcon from "../../../components/CheckIcon/CheckIcon";

function AboutUs() {
  return (
    <section className="container">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-8">
        <article className="grid grid-cols-2 gap-8 mx-auto">
          <img className="col-span-2" src={AboutImg1} alt="" />
          <img className="hidden md:block" src={AboutImg2} alt="" />
          <img className="hidden md:block" src={AboutImg3} alt="" />
        </article>
        <aside>
          <h1 className="text-lg uppercase mb-2">Sobre Nosotros</h1>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
            Centro de Atención de Seguridad 24/7{" "}
          </h2>
          <div className="text-lg text-neutral-600 mb-6">
            <p className="mb-2">
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
          <ul className="grid grid-cols-1 sm:grid-cols-2 [&>li]:flex [&>li]:gap-3 [&>li]:mb-3 text-neutral-600">
            <li>
              <CheckIcon />
              Generación de Contraseñas
            </li>
            <li>
              <CheckIcon />
              Almacenamiento Encriptado
            </li>
            <li>
              <CheckIcon />
              Autocompletado de Contraseñas
            </li>
            <li>
              <CheckIcon />
              Acceso Multiplataforma
            </li>
            <li>
              <CheckIcon />
              Contraseñas Compartidas
            </li>
            <li>
              <CheckIcon />
              Autenticación de Dos Factores
            </li>
            <li>
              <CheckIcon />
              Monitoreo de Seguridad
            </li>
            <li>
              <CheckIcon />
              Soporte 24/7
            </li>
          </ul>
        </aside>
      </article>
    </section>
  );
}

export default AboutUs;
