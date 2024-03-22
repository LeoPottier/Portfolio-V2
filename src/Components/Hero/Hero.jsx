/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './style.scss'
import Corners from '../../assets/Corners.svg'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { SvgIcon } from '@mui/material';


function Hero() {

  useEffect(() => {
    const heroGuide = document.querySelector('.hero-guide');

    // Anime.js animation
    const animation = anime({
      targets: heroGuide,
      translateY: ['-10px', '10px'],
      duration: 2000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuad'
    });

    // Clean up the animation on component unmount
    return () => {
      animation.pause();
    };
  }, []);

  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1 className='hero-name'>Léo Pottier</h1>
        <h2 className='hero-profession'>Développeur web</h2>
      </div>
      <img src={Corners} className='corners' alt='svg-corners' />
      <a href='#projet' className='hero-guide'>
        <span>Let's see my work !</span>
        <SvgIcon component={KeyboardDoubleArrowDownIcon} className='hero-guide-arrow'/>
      </a>
    </section>
  );
}

export default Hero;