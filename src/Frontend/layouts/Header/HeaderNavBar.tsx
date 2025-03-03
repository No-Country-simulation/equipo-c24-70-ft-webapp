import { Link } from "react-router-dom";
import "./HeaderNavBar.css";

function HeaderNavBar() {
  return (
    <nav className="header__navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/services">Servicios</Link>
        </li>
        <li className="border border-black px-2 py-1 rounded-md hover:bg-black hover:text-white">
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavBar;
