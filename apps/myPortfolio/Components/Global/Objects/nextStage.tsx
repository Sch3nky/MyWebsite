import styles from "@/styles/Components/Global/NextStage.module.scss"

interface Props {
    to:string
    name: string
    scroll: Function
    time: number
}

function NextStage(data:Props) {
    return (
        <button className={styles.nextStage} onClick={() => data.scroll(data.to, data.time)}>
            <p>{data.name}</p>
            <span className={styles.arrow}></span>
        </button>
    );
}

export default NextStage;