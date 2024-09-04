import { useState, useEffect, useRef } from "react";
import Data from "../../Data/Projet.json";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./style.scss";
import { SvgIcon } from "@mui/material";
import Tags from "../Tags/Tags";
import Carrousel from "../Carrousel/Carrousel";
import Modal from "../Modal/Modal";

function DesktopProject() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (Data.length > 0) {
      setSelectedProject(Data[0]);
    }
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projet" className="projet">
      <div className="projet-list">
        {Data.map((project, index) => (
          <div className="projet-card" key={index}>
            <a onClick={() => handleProjectClick(project)} rel="nofollow">
              <div className="projet-card-link">
                <h3 className="projet-card-title">{project.title}</h3>
                <SvgIcon
                  component={ArrowOutwardIcon}
                  className="projet-card-icon"
                />
              </div>
              <span className="projet-card-description">
                {project.description}
              </span>
              <Tags tags={project.tags} />
            </a>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="details open">
          <h1 className="details-title">{selectedProject.title}</h1>
          <div className="details-project">
            <Carrousel slides={selectedProject.slides} />
            <div className="details-container-info">
              <p className="details-description">
                <strong>Contexte : </strong>
                {selectedProject.presentation}
              </p>
              <p className="details-description">
                <strong>Acquis : </strong>
                {selectedProject.acquired}
              </p>
              <Tags tags={selectedProject.tags} />
              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  className="details-github"
                  rel="noopener noreferrer"
                >
                  <SvgIcon component={GitHubIcon} />
                  <p>Voir le code sur GitHub</p>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function MobileProject() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectRef = useRef(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projet-mobile" ref={projectRef}>
      {Data.map((project, index) => (
        <div className="projet-mobile-card" key={index}>
          <a onClick={() => handleProjectClick(project)} rel="nofollow">
            <div className="projet-mobile-card-link">
              <h3 className="projet-mobile-card-title">{project.title}</h3>
              <SvgIcon
                component={ArrowOutwardIcon}
                className="projet-mobile-card-icon"
              />
            </div>
            <span className="projet-mobile-card-description">
              {project.description}
            </span>
            <Tags tags={project.tags} />
          </a>
        </div>
      ))}
      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
}

function Project() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile ? <MobileProject /> : <DesktopProject />;
}

export default Project;
