import './style.scss'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { useEffect, useRef, useState } from "react";


function Form() {

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

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
            reset();
    };

    return (
        <form className={`form ${isVisible ? 'slide-from-right' : ''}`} ref={contactRef} onSubmit={handleSubmit(onSubmit)}>
            <div className="form-name">
                <div className="form-group">
                    <label>Nom:</label>
                    <input className="form-name-input" {...register("Nom", {required: true})} placeholder="Nom"/>
                    {errors.Nom && <span className="error-message">Ce champ est requis.</span>}
                </div>
                <div className="form-group">
                    <label>Téléphone:</label>
                    <input className="form-name-input" {...register("Telephone", {required: true})} placeholder="Téléphone"/>
                    {errors.Telephone && <span className="error-message">Ce champ est requis.</span>}
                </div>
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input className="form-subject-input" {...register("Email", {required: true})} placeholder="Email"/>
                {errors.Email && <span className="error-message">Ce champ est requis.</span>}
            </div>
            <div className="form-group">
                <label>Sujet:</label>
                <input className="form-subject-input" {...register("Sujet", {required: true})} placeholder="Sujet"/>
                {errors.Sujet && <span className="error-message">Ce champ est requis.</span>}
            </div>
            <div className="form-group">
                <label>Message:</label> 
                <input className="form-message-input" {...register("Message", {required: true})} placeholder="Message"/> 
                {errors.Message && <span className="error-message">Ce champ est requis.</span>}
            </div>
            <button className="form-submit" type="submit">Envoyer</button>
        </form>
    )
}

export default Form;