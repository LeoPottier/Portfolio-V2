import { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js"; // Importer anime.js
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { SvgIcon } from "@mui/material";
import "./style.scss";

function AnimationContact() {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contactRef.current) {
        const { top } = contactRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateIcons();
    }
  }, [isVisible]);

  const animateIcons = () => {
    const icons = document.querySelectorAll(".mail-icon, .star");

    icons.forEach((icon) => {
      anime({
        targets: icon,
        translateX: [
          () => -50,
          () => Math.random() * (window.innerWidth - icon.clientWidth + 50),
        ], // Position de départ en dehors de la fenêtre
        translateY: [
          () => Math.random() * window.innerHeight,
          () => Math.random() * window.innerHeight,
        ], // Position de départ aléatoire
        duration: 3000,
        loop: true,
        direction: "alternate", // Animation alternate
        easing: "easeInOutQuad",
      });
    });
  };

  return (
    <div
      className={`contact-content ${isVisible ? "slide-from-left" : ""}`}
      ref={contactRef}
    >
      <div className="content-animation">
        <SvgIcon component={MailOutlineIcon} className="mail-icon" />
        <SvgIcon component={MailOutlineIcon} className="mail-icon" />
        <SvgIcon component={MailOutlineIcon} className="mail-icon" />
        <SvgIcon component={MailOutlineIcon} className="mail-icon" />
        <SvgIcon
          component={FiberManualRecordIcon}
          sx={{ fontSize: "0.5rem" }}
          className="star1"
        />
        <SvgIcon
          component={FiberManualRecordIcon}
          sx={{ fontSize: "0.5rem" }}
          className="star2"
        />
        <SvgIcon
          component={FiberManualRecordIcon}
          sx={{ fontSize: "0.5rem" }}
          className="star3"
        />
        <SvgIcon
          component={FiberManualRecordIcon}
          sx={{ fontSize: "0.5rem" }}
          className="star4"
        />
        <SvgIcon
          component={FiberManualRecordIcon}
          sx={{ fontSize: "0.5rem" }}
          className="star5"
        />
        <SvgIcon
          component={FiberManualRecordIcon}
          sx={{ fontSize: "0.5rem" }}
          className="star6"
        />
        <SvgIcon
          component={FiberManualRecordIcon}
          sx={{ fontSize: "0.5rem" }}
          className="star11"
        />
        <SvgIcon
          component={FiberManualRecordIcon}
          sx={{ fontSize: "0.5rem" }}
          className="star7"
        />
        <SvgIcon
          component={FiberManualRecordIcon}
          sx={{ fontSize: "0.5rem" }}
          className="star8"
        />
        <SvgIcon
          component={FiberManualRecordIcon}
          sx={{ fontSize: "0.5rem" }}
          className="star9"
        />
        <SvgIcon
          component={FiberManualRecordIcon}
          sx={{ fontSize: "0.5rem" }}
          className="star10"
        />
      </div>
    </div>
  );
}

export default AnimationContact;
