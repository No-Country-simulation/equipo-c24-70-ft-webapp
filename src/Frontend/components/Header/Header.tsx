import LogoIcon from "../../../assets/logo.png";

const Header = () => {
  return (
    <header className="px-10 py-4 text-[20px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={LogoIcon} alt="" width={32} />
          <p>TrustLock</p>
        </div>

        <nav>
          <ul className="flex gap-4">
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
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
