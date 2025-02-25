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
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavBar;
