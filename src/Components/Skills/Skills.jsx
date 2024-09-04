import "./style.scss";
import js from "../../assets/icon-javascript.svg";
import react from "../../assets/icon-react.svg";
import tailwind from "../../assets/icon-tailwind.svg";
import typescript from "../../assets/icon-typescript.svg";
import nextjs from "../../assets/icon-nextjs.svg";
import sass from "../../assets/icon-sass.svg";
import nodejs from "../../assets/icon-nodejs.svg";
import mongodb from "../../assets/icon-mongodb.svg";
import api from "../../assets/icon-api.svg";
import docker from "../../assets/icon-docker.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SvgIcon } from "@mui/material";

function Skills() {
  return (
    <section id="skills" className="skill">
      <div className="skill-block">
        <div className="skill-container">
          <h3>Front-end</h3>
          <ul className="skill-list">
            <li>
              <img src={js} alt="JavaScript-icon" />
              Javascript
            </li>
            <li>
              <img src={typescript} alt="Typescript-icon" />
              Typescript
            </li>
            <li>
              <img src={react} alt="React-icon" />
              React
            </li>
            <li>
              <img src={nextjs} alt="Nextjs-icon" />
              NextJS
            </li>
            <li>
              <img src={sass} alt="Sass-icon" />
              Sass
            </li>
            <li>
              <img src={tailwind} alt="Tailwind-icon" />
              Tailwind
            </li>
          </ul>
        </div>
        <div className="skill-container">
          <h3>Back-end</h3>
          <ul className="skill-list">
            <li>
              <img src={nodejs} alt="Nodejs-icon" />
              NodeJs
            </li>
            <li>
              <img src={mongodb} alt="Mongodb-icon" />
              MongoDb
            </li>
            <li>
              <img src={api} alt="API-icon" />
              Création/Utilisation API
            </li>
          </ul>
        </div>
        <div className="skill-container">
          <h3>Autres</h3>
          <ul className="skill-list">
            <li>
              <SvgIcon
                component={GitHubIcon}
                className="skill-icon-git"
                alt="icon-git"
              />
              Git & Github
            </li>
            <li>
              <img src={docker} alt="icon-docker" />
              Docker
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
