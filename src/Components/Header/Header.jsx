import './style.scss';
import anime from 'animejs';
import { useEffect, useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header() {
  const [scrollPos, setScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const anim = anime.timeline({
      loop: true,
      direction: 'alternate',
    });

    anim
      .add({
        targets: '#hexagon path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuart',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
      })
      .add({
        // Correction de la cible pour l'élément "L" dans le SVG
        targets: '#hexagon #L',
        duration: 1000,
        opacity: 1,
        easing: 'easeInOutQuart'
      });

    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(scrollPos > currentScrollPos || currentScrollPos < 100);
      setScrollPos(currentScrollPos);
    }

    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Check initial window size

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollPos]);

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <a href="/" className="container">
        <svg id="hexagon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g>
            <g id="L" transform="translate(36, 33)" fill="#64FFDA" style={{ opacity: 0 }} fontFamily="'Anta', sans-serif" fontSize="50" fontWeight="400" letterSpacing="4.16666603">
              <text>
                <tspan x="0.141666985" y="33">L</tspan>
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
        <BurgerMenu />
      ) : (
        <nav className='nav-items'>
          <a href="#about">À propos</a>
          <a href="#skills">Skills</a>
          <a href="#projet">Mes projets</a>
          <a href="#contact">Contact</a>
          <a href="https://cvdesignr.com/p/5cdbdb8b2bd8d" className='cv-nav'>Mon CV</a>
        </nav>
      )}
    </header>
  );
}

export default Header;