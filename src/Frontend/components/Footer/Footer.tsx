import LogoIcon from "../../../assets/logo-icon.png";
import { FaGithub, FaPalette } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-black text-white py-4" id="footer">
      <section className="grid grid-cols-4 mb-5 py-5 border-b border-neutral-700 px-12">
        <article className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img
              src={LogoIcon}
              alt="Logo de LockKey, un candado con una serpiente"
              width={56}
            />
            <h2 className="font-normal text-3xl">
              Lock<strong>Key</strong>
            </h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            eligendi nisi cum enim error nulla laudantium reprehenderit
            cupiditate ipsa voluptas?
          </p>
        </article>
        <article>
          <h2>About Us</h2>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </article>
        <article>
          <h2>Contact Info</h2>
          <ul>
            <li>
              <a href="#">+61 3 8376 6284</a>
            </li>
            <li>
              <a href="#">info@lockkey.com</a>
            </li>
            <li>
              <a href="#">21 King Street Melbourne, 3000, Australia</a>
            </li>
          </ul>
        </article>
        <article>
          <h2>Sign up for Newsletter</h2>
          <form className="flex flex-col gap-4" action="">
            <input
              name="email"
              id="email"
              className="p-4 rounded-md"
              type="email"
              placeholder="Correo electrónico"
              autoComplete="email"
              required
            />
            <button className="btn__primary btn__purple" type="submit">
              Enviar
            </button>
          </form>
        </article>
      </section>
      <article className="flex justify-between items-center px-12">
        <a
          className="text-3xl"
          href="https://github.com/No-Country-simulation/equipo-c24-70-ft-webapp"
          target="_blank"
          rel="noopener noreferrer"
          title="Repositorio de GitHub"
        >
          <FaGithub />
        </a>
        <p>
          LockKey copyright © 2025. Todos los derechos{" "}
          <a
            href="https://html.designingmedia.com/whizcyber/index.html"
            target="_blank"
          >
            reservados
          </a>
          .
        </p>
        <a
          className="text-3xl"
          href="https://www.formfrom.design/illustration-pack/moneyfly"
          target="_blank"
          rel="noopener noreferrer"
          title="Paleta de colores"
        >
          <FaPalette />
        </a>
      </article>
    </footer>
  );
}

export default Footer;
