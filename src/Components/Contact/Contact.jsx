import './style.scss'
import { useEffect, useRef, useState } from "react";
import Form from './Form/Form';
import AnimationContact from './AnimationContact/AnimationContact';

function Contact() {
    const [isVisible, setIsVisible] = useState(false)
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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="contact" className="contact" ref={contactRef} >
            <h2 className={`contact-title ${isVisible ? 'opacity' : ''}`}>Contact</h2>
            <div className="contact-container">
                <AnimationContact />
                <Form />
            </div>
        </section>
    )
}

export default Contact;