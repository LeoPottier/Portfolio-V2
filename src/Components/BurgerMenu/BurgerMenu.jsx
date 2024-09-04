import { useState, useEffect } from "react";
import "./style.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { SvgIcon } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const BurgerMenu = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Verrouille le défilement du corps de la page
    } else {
      document.body.style.overflow = "auto"; // Autorise le défilement du corps de la page
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (component) => {
    onNavClick(component);
    closeMenu();
  };

  return (
    <div className="burger-menu">
      <div className="burger-menu-icon" onClick={toggleMenu}>
        <SvgIcon component={isOpen ? CloseIcon : MenuIcon} />
      </div>
      <nav className={`burger-menu-items ${isOpen ? "open" : ""}`}>
        <div className="burger-menu-link">
          <a onClick={() => handleNavClick("hero")}>Accueil</a>
          <a onClick={() => handleNavClick("about")}>À propos</a>
          <a onClick={() => handleNavClick("skills")}>Skills</a>
          <a onClick={() => handleNavClick("projet")}>Mes projets</a>
          <a onClick={() => handleNavClick("contact")}>Contact</a>
          <a
            href="https://cvdesignr.com/p/5cdbdb8b2bd8d"
            className="cv-nav"
            target="_blank"
            onClick={closeMenu}
          >
            Mon CV
          </a>
          <div className="burger-menu-social">
            <a
              className="social-media-link"
              href="mailto:leorpottier@gmail.com"
              rel="noreferrer"
              aria-label="link-email"
              target="_blank"
              onClick={closeMenu}
            >
              <EmailIcon
                className="social-media-icon"
                sx={{ width: "40px", fontSize: "2em" }}
              />
            </a>
            <a
              className="social-media-link"
              href="https://www.linkedin.com/in/l%C3%A9o-pottier-0436612bb/"
              aria-label="link-linkedin"
              rel="noreferrer"
              target="_blank"
              onClick={closeMenu}
            >
              <LinkedInIcon
                className="social-media-icon"
                sx={{ width: "40px", fontSize: "2em" }}
              />
            </a>
            <a
              className="social-media-link"
              href="https://github.com/LeoPottier"
              rel="noreferrer"
              aria-label="link-github"
              target="_blank"
              onClick={closeMenu}
            >
              <GitHubIcon
                className="social-media-icon"
                sx={{ width: "40px", fontSize: "2em" }}
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BurgerMenu;
