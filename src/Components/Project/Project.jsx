import  { useState } from 'react';
import Data from '../../Data/Projet.json';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import './style.scss';
import { SvgIcon } from '@mui/material';
import Modal from '../Modal/Modal'; 
import Tags from '../Tags/Tags';

function Project() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projet" className='projet'>
            <h2 className='projet-title'>Projets</h2>
            {Data.map((project, index) => (
                <div className='projet-card' key={index}>
                    <a onClick={() => handleProjectClick(project)}>
                        <div className='projet-card-link'>
                            <h3 className='projet-card-title'>{project.title}</h3>
                            <SvgIcon component={ArrowOutwardIcon} className='projet-card-icon'/>
                        </div>
                        <span className='projet-card-description'>{project.description}</span>
                        <Tags tags={project.tags} />
                    </a>
                </div>
            ))}
            {selectedProject && <Modal project={selectedProject} onClose={handleCloseModal} />}
        </section>
    );
}

export default Project;