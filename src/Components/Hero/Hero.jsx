import './style.scss'
import Corners from '../../assets/Corners.svg'


function Hero() {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1 className='hero-name'>Léo Pottier</h1>
        <h2 className='hero-profession'>Développeur web</h2>
      </div>
      <img src={Corners} className='corners' alt='svg-corners' />
    </section>
  );
}

export default Hero;