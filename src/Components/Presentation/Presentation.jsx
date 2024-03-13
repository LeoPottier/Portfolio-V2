import './style.scss'
import Pdp from '../../assets/Photo.jpg'

function Presentation() {
    return (
      <section className="presentation">
        <h1 className="presentation-nom">Léo Pottier</h1>
        <span className="presentation-description">Développeur full-stack</span>
        <span className="presentation-descriptions">Recherche stage/emploi</span>
        <div className="presentation-photo">
          <img src={Pdp} alt="Photo de profil" />
        </div>
      </section>
    );
}

export default Presentation;