import './style.scss';
import  anime from 'animejs';
import { useEffect, useState } from 'react';

function Header() {
  const [scrollPos, setScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <a href="#" className="container">
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
      <nav>
        <a href="">À propos</a>
        <a href="">Mes projets</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
}

export default Header;