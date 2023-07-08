import styles from "@/styles/Components/Global/Counter.module.scss"
import {useEffect, useState} from "react"


interface Props {
    preFix?: string
    to: number
    time: number
    suffix?: string
    finalSuffix?: string
    inView: boolean
}

function Counter(props: Props) {
    const [currentNumber, changeCurrentNumber] = useState<number|string>(0)

    useEffect(() => {
        if (!isNaN(currentNumber as number) && (currentNumber as number) <= props.to && props.inView){    
            const countInterval = setInterval(() => {
                changeCurrentNumber(Number(currentNumber)+1)
            }, props.time)
            return () => clearInterval(countInterval)
        }
        else if(props.inView){
            changeCurrentNumber(`${props.to} ${props.finalSuffix || ""}`)
        }
    }, [currentNumber, props.inView])
    return (
        <div className={styles.container}>
            {props.preFix} <span className={styles.number}>{currentNumber}</span> {props.suffix} 
        </div>
    );
}

export default Counter;