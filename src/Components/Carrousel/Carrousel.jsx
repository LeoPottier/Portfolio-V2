import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './style.scss';
import { SvgIcon } from '@mui/material';



function Carrousel({ slides }) {
  
    // useState est un hook d'état. Il permet aux composants React de déclarer et de gérer leur propre état interne. 
    const [currentImage, setCurrentImage] = useState(0);
    const length = slides.length;
  

    const showPreviousImage = () => setCurrentImage((currentImage - 1 + length) % length);

    const showNextImage = () => setCurrentImage((currentImage + 1) % length);
  
    return (
      <section className='carrousel'>
        {slides.map((image, index) => (
          <div key={index} className={index === currentImage ? "carrousel-slider active" : "carrousel-slider"}>
            {index === currentImage && ( // Si l'index correspond à l'image actuelle, afficher l'image
              <>
                <img src={image} className="carrousel-cover" alt="screen-site" />
                {length > 1 && <span className="carrousel-number">{currentImage + 1}/{length}</span>}
              </>
            )}
          </div>
        ))}
        {length > 1 && (
          <div className='carroussel-arrow'>
            <SvgIcon component={KeyboardArrowLeftIcon} className="left-arrow" onClick={showPreviousImage} />
            <SvgIcon component={KeyboardArrowRightIcon} className="right-arrow" onClick={showNextImage} />
          </div>
        )}
      </section>
    );
}
  
export default Carrousel;