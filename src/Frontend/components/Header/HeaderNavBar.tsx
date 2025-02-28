import "./HeaderNavBar.css";

function HeaderNavBar() {
  return (
    <nav className="header__navbar">
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
        <li className="border border-black px-2 py-1 rounded-md hover:bg-black hover:text-white">
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavBar;
