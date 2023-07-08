import styles from "@/styles/Components/Main/kontakt.module.scss"
import useContact from "@/hooks/contact/useContact";
import { ContactMessage } from "@/types/api";
import { useState } from "react";

function Kontakt() {
    const emptyMessage:ContactMessage = {
        email:"",
        first_name: "",
        surname: "",
        message: ""
    }

    const [message, changeMessage] = useState<ContactMessage>(emptyMessage)
    const {send_message} = useContact()

    const handleInput = (name: string, value:string) => {
        changeMessage((prevState) => ({ ...prevState, [name]: value }));
    }

    const sendForm = (message:ContactMessage) => {
        send_message(message).then(
            res => {if(res) changeMessage(emptyMessage)}
        )
    }
    return (
        <div id="Contact" className={styles.formContainer}>
            <h1>Kontaktujte mě</h1>
            <form className={styles.form} onSubmit={event => {sendForm(message); event.preventDefault()}}>
                <div className={styles.nameContainer}>
                    <div className={styles.input_container}>
                        <input value={message.first_name} type="text" placeholder="Jan" id="FirstName" name="first_name" autoComplete="given-name" onChange={(e) => handleInput(e.target.name, e.target.value)} required/>
                        <label htmlFor="FirstName">Jméno</label>
                    </div>
                    <div className={styles.input_container}>
                        <input value={message.surname}  type="text" placeholder="Novák" id="LastName" name="surname" autoComplete="family-name" onChange={(e) => handleInput(e.target.name, e.target.value)} required/>
                        <label htmlFor="LastName">Přijmení</label>
                    </div>
                </div>
                
                <div className={styles.input_container}>
                    <input value={message.email} type="email" placeholder="email@exaple.com" id="email" name="email" onChange={(e) => handleInput(e.target.name, e.target.value)} autoComplete="email" required/>
                    <label htmlFor="email">E-Mail</label>
                </div>

                <div className={styles.input_container}>
                    <textarea value={message.message} placeholder="Vaše zpráva" id="message" name="message" onChange={(e) => handleInput(e.target.name, e.target.value)} required></textarea>
                    <label htmlFor="message">Zpráva</label>
                </div>

                <div className={styles.submitContainer}>
                    <button type="submit" className={styles.submit}>
                        <div className={styles.button_mask}>

                        </div>
                        <p>Odeslat</p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Kontakt;