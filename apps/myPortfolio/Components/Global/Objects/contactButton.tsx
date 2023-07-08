import styles from "@/styles/Components/Global/ContactMeButton.module.scss"

interface Props {
    scroll: Function
    time: number
}

function ContactMeButton(props:Props) {
    return (
        <button onClick={() => props.scroll("contact", props.time)} className={styles.button}>
            <div className={styles.button_mask}>

            </div>
            <p>Napište mi</p>
        </button>
    );
}

export default ContactMeButton;