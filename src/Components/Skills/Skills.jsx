import './style.scss'
import js from '../../assets/icon-javascript.svg'
import react from '../../assets/icon-react.svg'
import sass from '../../assets/icon-sass.svg'
import nodejs from '../../assets/icon-nodejs.svg'
import mongodb from '../../assets/icon-mongodb.svg'
import api from '../../assets/icon-api.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import { SvgIcon } from '@mui/material'

function Skills() {
    return (
      <section className="skill">
        <h2>Skills</h2>
        <div>
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
        <div>
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
        <div>
          <h3>Autres</h3>
          <ul className="skill-list">
            <li>
              <SvgIcon component={GitHubIcon} className='projet-card-icon' />Git & Github
            </li>
          </ul>
        </div>
      </section>
    );
}

export default Skills;