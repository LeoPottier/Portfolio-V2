import { useForm } from "react-hook-form";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './style.scss'
import { SvgIcon } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import emailjs from 'emailjs-com';

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

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // Envoyer les données du formulaire par e-mail
        emailjs.send('service_9vzjb58', 'template_vct6yk8', data, 'wnl4Uacfok5elEhVC')
            .then((response) => {
                alert("Votre message a été envoyé avec succès!");
                console.log('E-mail envoyé avec succès!', response.status, response.text);
            }, (error) => {
                console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
                alert("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.");
            });
    };

    return (
        <section id="contact" className="contact" ref={contactRef}>
            <h2 className={`contact-title ${isVisible ? 'opacity' : ''}`}>Contact</h2>
            <div className="contact-container">
                <div className={`contact-content ${isVisible ? 'slide-from-left' : ''}`}>
                    <div className="content-animation">
                        <SvgIcon component={MailOutlineIcon} className="icon1"/>
                    </div>
                </div>
                <form className={`form ${isVisible ? 'slide-from-right' : ''}`} onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-name">
                        <div className="form-group">
                            <label>Nom:</label>
                            <input className="form-name-input" {...register("Nom")} placeholder="Nom"/>
                        </div>
                        <div className="form-group">
                            <label>Téléphone:</label>
                            <input className="form-name-input" {...register("Telephone")} placeholder="Téléphone"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className="form-subject-input" {...register("Email")} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label>Sujet:</label>
                        <input className="form-subject-input" {...register("Sujet")} placeholder="Sujet"/>
                    </div>
                    <div className="form-group">
                        <label>Message:</label> 
                        <input className="form-message-input" {...register("Message")} placeholder="Message"/> 
                    </div>
                    <button className="form-submit" type="submit">Envoyer</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;