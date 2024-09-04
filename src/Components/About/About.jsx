/* eslint-disable react/no-unescaped-entities */
import "./style.scss";
import PhotoDeProfil from "../../assets/PhotoDeProfilRr.webp";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h2>Hi there !</h2>
        <p>
          Je m'appelle <strong>Léo</strong> et je suis un{" "}
          <strong>développeur fullstack</strong>. Basé dans le nord de la
          France, j'ai toujours été passionné par l'informatique. Après avoir
          accumulé de l'expérience en autodidacte, j'ai découvert une véritable{" "}
          <strong>passion</strong> pour ce domaine, ce qui m'a conduit à décider
          d'en faire ma <strong>profession</strong>.
        </p>

        <p>
          J'ai suivi avec succès la formation de développeur chez{" "}
          <strong>Openclassrooms</strong>, ce qui m'a permis d'acquérir une base
          solide dans le domaine du développement web ainsi que dans la gestion
          de projet.
        </p>

        <p>
          Je suis particulièrement attiré par le <strong>frontend</strong> et
          tout ce qui l'entoure, notamment l'UI et l'UX. J'apprécie créer des{" "}
          <strong>interfaces utilisateurs</strong> à la fois fonctionnelles et
          modernes, cherchant constamment à améliorer la manière dont les
          utilisateurs interagissent avec les applications.
        </p>

        <p>
          Je suis convaincu que mon <strong>engagement</strong>, ma passion pour
          le frontend, ainsi que mes <strong>compétences</strong> en
          développement fullstack et en gestion de projet font de moi un atout
          précieux pour toute équipe de développement. Je suis désireux de
          continuer à <strong>apprendre</strong> et à contribuer à des{" "}
          <strong>projets innovants</strong>.
        </p>
      </div>
      <div className="about-cover">
        <img
          className="about-cover-photo"
          src={PhotoDeProfil}
          alt="Photo de profil"
        />
      </div>
    </section>
  );
}

export default About;
