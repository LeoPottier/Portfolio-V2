import './style.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function SocialMedia() {
    return (
      <section className="social-media">
        <div className="social-media-box">
          <a className="social-media-link" href="https://github.com/LeoPottier" rel="noreferrer" target="_blank">
            <GitHubIcon  className="social-media-icon" sx= {{width:'40px', fontSize:'2em'}} />
          </a>
        </div>
        <div className="social-media-box">
          <a className="social-media-link" href="https://www.linkedin.com/in/l%C3%A9o-pottier-0436612bb/" rel="noreferrer" target="_blank">
            <LinkedInIcon  className="social-media-icon" sx= {{width:'40px', fontSize:'2em'}} />
          </a>
        </div>
        <div className="social-media-box">
          <a className="social-media-link" href="mailto:leorpottier@gmail.com" rel="noreferrer" target="_blank">
            <EmailIcon  className="social-media-icon" sx= {{width:'40px', fontSize:'2em'}} />
          </a>
        </div>
      </section>
    );
}

export default SocialMedia;