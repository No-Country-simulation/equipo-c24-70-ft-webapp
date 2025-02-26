import LogoIcon from "../../../assets/logo.png";
import { MdMenu, MdClose, MdPerson } from "react-icons/md";
import HeaderNavBar from "./HeaderNavBar";
import "./Header.css";
import { useNavMenu } from "../../hooks/useNavMenu";

function Header() {
  const { isMenuOpen, handleClick } = useNavMenu();

  return (
    <header className="px-4 md:px-10 py-6 text-[20px] font-[600]">
      <div className="flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 z-10">
          <img src={LogoIcon} alt="" width={32} />
          <p className="font-normal">
            Trust<span className="font-[600]">Lock</span>
          </p>
        </a>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            <HeaderNavBar />
          </div>

          <button
            className="md:hidden text-3xl z-10"
            onClick={handleClick}
            title="Abrir Menú"
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>

          <button className="text-3xl hover:opacity-75" title="Iniciar Sesión">
            <MdPerson />
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "active" : ""
          } header__hidden-menu__container md:hidden`}
        >
          <HeaderNavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
