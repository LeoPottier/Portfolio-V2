import "./style.scss";
import ReactIcon from "../../assets/icon-react.svg";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <p>
          Designed & built by Léo Pottier.
          <br />
          <strong>Made with React.</strong>
          <img
            src={ReactIcon}
            className="footer-icon"
            alt="react footer icon"
          />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
