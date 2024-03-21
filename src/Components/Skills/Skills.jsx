import './style.scss'
import js from '../../assets/icon-javascript.svg'
import react from '../../assets/icon-react.svg'
import sass from '../../assets/icon-sass.svg'
import nodejs from '../../assets/icon-nodejs.svg'
import mongodb from '../../assets/icon-mongodb.svg'
import api from '../../assets/icon-api.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import { SvgIcon } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const skillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
    if (skillRef.current) {
      const { top } = skillRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        setIsVisible(true);
      }
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
  }, []);

    return (
      <section id="skills" className="skill" ref={skillRef}>
        <h2 className={`skill-title ${isVisible ? 'opacity' : ''}`}>Skills</h2>
        <div className='skill-block'>
        <div className={`skill-container ${isVisible ? 'slide-from-left' : ''}`}>
          <h3>Front-end</h3>
          <ul className="skill-list">
            <li>
              <img src={js} alt="JavaScript-icon" />Javascript
            </li>
            <li>
              <img src={react} alt="React-icon" />React
              </li>
            <li>
              <img src={sass} alt="Sass-icon" />Sass
            </li>
          </ul>
        </div>
        <div className={`skill-container ${isVisible ? 'slide-from-bottom' : ''}`}>
          <h3>Back-end</h3>
          <ul className="skill-list">
            <li>
              <img src={nodejs} alt="Nodejs-icon" />NodeJs
            </li>
            <li>
              <img src={mongodb} alt="Mongodb-icon" />MongoDb
            </li>
            <li>
              <img src={api} alt="API-icon" />Création/Utilisation API
            </li>
          </ul>
        </div>
        <div className={`skill-container ${isVisible ? 'slide-from-right' : ''}`}>
          <h3>Autres</h3>
          <ul className="skill-list">
            <li>
              <SvgIcon component={GitHubIcon} className='skill-icon-git' />Git & Github
            </li>
          </ul>
        </div>
        </div>
      </section>
    );
}

export default Skills;