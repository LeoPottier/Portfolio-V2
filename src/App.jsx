import SocialMedia from './Components/SocialMedia/SocialMedia'
import Header from './Components/Header/Header'
import Skills from './Components/Skills/Skills';
import Presentation from './Components/Presentation/Presentation';
import MouseEffect from './Components/MouseEffect/MouseEffect';
import Project from './Components/Project/Project';
import WaveEffect from './Components/WaveEffect/WaveEffect';
import Contact from './Components/Contact/Contact';
import './App.scss'

function App() {
  return (
    <div>
      <Header />
      <div className='main'>
      <SocialMedia />
      <Presentation />
      <Skills />
      <Project />
      <Contact />
      <WaveEffect />
      <MouseEffect />
      </div>
    </div>
  )
}

export default App;
