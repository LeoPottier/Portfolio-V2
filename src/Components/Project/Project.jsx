import Data from '../../Data/Projet.json';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import './style.scss';
import { SvgIcon } from '@mui/material';

function Project() {
    return (
        <section className='projet'>
            <h2 className='projet-title'>Projets</h2>
            {Data.map((project, index) => (
                <a href="#" className='projet-card' key={index}>
                    <div className='projet-card-link'>
                        <h3 className='projet-card-title'>{project.title}</h3>
                        <SvgIcon component={ArrowOutwardIcon} className='projet-card-icon'/>
                    </div>
                    <span className='projet-card-description'>{project.description}</span>
                    <div className='tags-container'>
                        {project.tags.map((tag, tagIndex) => (
                            <span className='projet-card-tags' key={tagIndex}>
                                <img className="projet-card-tag-logo" src={`/logos/${tag.logo}`} alt={tag.name} />
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </a>
            ))}
        </section>
    );
}

export default Project;