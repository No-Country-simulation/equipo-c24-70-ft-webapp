import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex justify-between items-center py-4 px-12">
      <a
        className="text-3xl"
        href="https://github.com/No-Country-simulation/equipo-c24-70-ft-webapp"
        target="blank"
        rel="noopener noreferrer"
        title="Repositorio de GitHub"
      >
        <FaGithub />
      </a>
      <p>TrustLock copyright © 2025. All Rights Reserved.</p>
      <span className="w-[30px]"></span>
    </footer>
  );
}

export default Footer;
