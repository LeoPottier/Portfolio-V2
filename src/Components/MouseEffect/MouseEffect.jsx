import { useEffect } from "react";
import './style.scss'

function MouseEffect() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const circle = document.querySelector(".effects");
            const height = circle.offsetHeight;
            const width = circle.offsetWidth;

            // Ajouter le décalage de défilement à la position de la souris
            const mouseX = e.clientX + window.scrollX;
            const mouseY = e.clientY + window.scrollY;

            circle.style.left = `${mouseX - width / 2}px`;
            circle.style.top = `${mouseY - height / 2}px`;
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // useEffect ne doit pas retourner d'éléments JSX
    return (
        <div className="effects"></div>
    );
}

export default MouseEffect;