import LogoIcon from "../../../assets/logo-icon.png";
import { MdMenu, MdClose, MdPerson } from "react-icons/md";
import HeaderNavBar from "./HeaderNavBar";
import "./Header.css";
import { useNavMenu } from "../../hooks/useNavMenu";
import { Link } from "react-router-dom";

function Header() {
  const { isMenuOpen, handleClick } = useNavMenu();

  return (
    <header className="px-4 md:px-10 py-6 text-[20px] font-[600]">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-10" title="Inicio">
          <img src={LogoIcon} alt="" width={36} />
          <p className="font-normal">
            Lock<strong>Key</strong>
          </p>
        </Link>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            <HeaderNavBar handleClick={handleClick} />
          </div>

          <button
            className="md:hidden text-3xl z-10"
            onClick={handleClick}
            title={`${isMenuOpen ? "Cerrar Menú" : "Abrir Menú"}`}
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>

          <Link
            to="/login"
            className="text-3xl hover:opacity-75 z-10"
            title="Iniciar Sesión"
          >
            <MdPerson />
          </Link>
        </div>

        <div
          className={`${
            isMenuOpen ? "active" : ""
          } header__hidden-menu__container md:hidden`}
        >
          <HeaderNavBar handleClick={handleClick} />
        </div>
      </div>
    </header>
  );
}

export default Header;
