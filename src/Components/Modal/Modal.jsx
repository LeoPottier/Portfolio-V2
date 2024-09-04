import "./style.scss";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Modal, SvgIcon } from "@mui/material";
import Carrousel from "../Carrousel/Carrousel";
import Tags from "../Tags/Tags";

function ProjectModal({ project, onClose }) {
  const [closing, setClosing] = useState(false); // État pour indiquer si la modal est en train de se fermer

  const handleClose = () => {
    setClosing(true); // Définir l'état de fermeture sur true
    setTimeout(() => {
      onClose(); // Appel de la fonction onClose après une certaine durée pour laisser le temps à l'animation de se terminer
    }, 500); // Modifier 500ms en fonction de la durée de votre animation
  };

  return (
    <Modal
      open={!!project}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={`modal${closing ? " closing" : ""}`}>
        {" "}
        {/* Utilisez la classe 'closing' pour déclencher l'animation */}
        <h1 className="modal-title">{project.title}</h1>
        <div className="modal-project">
          <Carrousel slides={project.slides} />
          <div className="modal-container-info">
            <p className="modal-description">
              {" "}
              <strong>Contexte : </strong>
              {project.presentation}
            </p>
            <p className="modal-description">
              <strong>Acquis : </strong>
              {project.acquired}
            </p>
            <Tags tags={project.tags} />
            {project.url && (
              <a href={project.url} target="_blank" className="modal-github">
                <SvgIcon component={GitHubIcon} />
                <p>Voir le code sur GitHub</p>
              </a>
            )}
          </div>
        </div>
        <SvgIcon
          component={CloseIcon}
          className="modal-close"
          onClick={handleClose}
        />
      </div>
    </Modal>
  );
}

export default ProjectModal;
