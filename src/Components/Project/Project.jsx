import  { useState, useRef, useEffect } from 'react';
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

    const [isVisible, setIsVisible] = useState(false)
    const projectRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        if (projectRef.current) {
            const { top } = projectRef.current.getBoundingClientRect();
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
        <section id="projet" className='projet' ref={projectRef}>
            <h2 className={`projet-title ${isVisible ? 'opacity' : ''}`}>Projets</h2>
            {Data.map((project, index) => (
                <div className={`projet-card ${isVisible ? 'slide-from-bottom' : ''}`} key={index}>
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