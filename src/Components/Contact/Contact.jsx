import { useForm } from "react-hook-form";
import './style.scss'

function Contact() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (d) =>
        alert(JSON.stringify(d))

    return (
        <section id="contact" className="contact">
            <h2 className="contact-title">Contact</h2>
            <div className="contact-container">
                <div className="contact-content">
                    <div className="content-animation"></div>
                </div>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-name">
                            <div className="form-group">
                                <label>Nom:</label>
                                <input className="form-name-input" {...register("Nom")} placeholder="Nom"/>
                            </div>
                            <div className="form-group">
                                <label>Prénom:</label>
                                <input className="form-name-input" {...register("Prénom")} placeholder="Prénom"/>
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