import "./style.scss";
import anime from "animejs";
import { useEffect, useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ onNavClick }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const anim = anime.timeline({
      loop: true,
      direction: "alternate",
    });

    anim
      .add({
        targets: "#hexagon path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuart",
        duration: 1500,
        delay: function (el, i) {
          return i * 250;
        },
      })
      .add({
        targets: "#hexagon #L",
        duration: 1000,
        opacity: 1,
        easing: "easeInOutQuart",
      });

    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <a href="/Portfolio/" className="container" aria-label="logo">
        <svg
          id="hexagon"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <g
              id="L"
              transform="translate(36, 33)"
              fill="#64FFDA"
              style={{ opacity: 0 }}
              fontFamily="'Anta', sans-serif"
              fontSize="50"
              fontWeight="400"
              letterSpacing="4.16666603"
            >
              <text>
                <tspan x="0.141666985" y="33">
                  L
                </tspan>
              </text>
            </g>
            <path
              stroke="#64FFDA"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 50, 5
                 L 11, 27
                 L 11, 72
                 L 50, 95
                 L 89, 73
                 L 89, 28 z"
            />
          </g>
        </svg>
      </a>
      {isMobile ? (
        <BurgerMenu onNavClick={onNavClick} />
      ) : (
        <nav className="nav-items">
          <a onClick={() => onNavClick("hero")}>Accueil</a>
          <a onClick={() => onNavClick("about")}>À propos</a>
          <a onClick={() => onNavClick("skills")}>Skills</a>
          <a onClick={() => onNavClick("projet")}>Mes projets</a>
          <a onClick={() => onNavClick("contact")}>Contact</a>
          <a
            href="https://cvdesignr.com/p/5cdbdb8b2bd8d"
            className="cv-nav"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mon CV
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
