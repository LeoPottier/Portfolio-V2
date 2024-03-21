import { useState, useEffect } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './style.scss';
import { SvgIcon } from '@mui/material';



function Carrousel({ slides }) {
  
  const [currentImage, setCurrentImage] = useState(0);
  const length = slides.length;
  
  useEffect(() => {
    const interval = setInterval(() => {
        showNextImage();
    }, 5000);

    return () => clearInterval(interval); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);

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