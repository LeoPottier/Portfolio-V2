import './style.scss'
import LinkedinIcon from '../../assets/icon-linkedin.svg'
import GithubIcon from '../../assets/icon-github.svg'
import EmailIcon from '../../assets/icon-email.svg'

function SocialMedia() {
    return (
      <section className="social-media">
        <div className="social-media-box">
          <a className="social-media-link" href="https://github.com/LeoPottier" rel="noreferrer" target="_blank">
            <img className="social-media-icon" src={GithubIcon} alt="GitHub Icon" />
          </a>
        </div>
        <div className="social-media-box">
          <a className="social-media-link" href="https://github.com/LeoPottier" rel="noreferrer" target="_blank">
            <img className="social-media-icon" src={LinkedinIcon} alt="LinkedIn Icon" />
          </a>
        </div>
        <div className="social-media-box">
          <a className="social-media-link" href="https://github.com/LeoPottier" rel="noreferrer" target="_blank">
            <img className="social-media-icon" src={EmailIcon} alt="Email Icon" />
          </a>
        </div>
      </section>
    );
}

export default SocialMedia;