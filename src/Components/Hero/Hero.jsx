/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./style.scss";
import SocialMedia from "../SocialMedia/SocialMedia";

function Hero() {
  useEffect(() => {
    const heroGuide = document.querySelector(".hero-guide");

    // Anime.js animation
    const animation = anime({
      targets: heroGuide,
      translateY: ["-10px", "10px"],
      duration: 2000,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad",
    });

    // Clean up the animation on component unmount
    return () => {
      animation.pause();
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-name">Léo Pottier</h1>
        <h2 className="hero-profession">Développeur web</h2>
      </div>
      <SocialMedia />
    </section>
  );
}

export default Hero;
