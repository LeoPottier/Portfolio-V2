import { useState, useEffect } from 'react';
import './style.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { SvgIcon } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-opened');
    } else {
      document.body.classList.remove('menu-opened');
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="burger-menu">
      <div className="burger-menu-icon" onClick={toggleMenu}>
        <SvgIcon component={isOpen ? CloseIcon : MenuIcon} />
      </div>
      <nav className={`burger-menu-items ${isOpen ? 'open' : 'closed'}`}>
        <a href="#about" onClick={closeMenu}>À propos</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projet" onClick={closeMenu}>Mes projets</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="https://cvdesignr.com/p/5cdbdb8b2bd8d" className='cv-nav' onClick={closeMenu}>Mon CV</a>
      </nav>
    </div>
  );
};

export default BurgerMenu;