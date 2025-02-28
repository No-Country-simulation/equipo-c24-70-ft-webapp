import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./SocialIcons.css";

function SocialIcons() {
  return (
    <ul className="social-icons__container flex gap-3">
      <li>
        <a href="#" title="Linkedin">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="#" title="Facebook">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="#" title="Instagram">
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
}

export default SocialIcons;
