import { FaGithub, FaPalette } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex justify-between items-center py-4 px-12">
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
    </footer>
  );
}

export default Footer;
