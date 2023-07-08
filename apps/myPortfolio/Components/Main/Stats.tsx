import styles from "@/styles/Components/Main/stats.module.scss"

import { useState, useEffect, useRef } from "react";
import Counter from "../Global/Objects/counter";


function Stats() {
    const elementRef = useRef<HTMLDivElement>(null);
    const [inView, changeInView] = useState<boolean>(false)
    
    function scroll_move(element:HTMLDivElement|null){
        if (element === null){
            return
        }
        if(element.getBoundingClientRect().bottom - window.innerHeight - (element.getBoundingClientRect().height/2)<0 && !inView){
            changeInView(true)
        }
    }

    useEffect(() => {
        const element = elementRef.current;
        const handleScroll = () => {
            scroll_move(element);
        };
        handleScroll()
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <div ref={elementRef} className={styles.container}>
            <div className={styles.stats}>
                <div className={styles.counter}>
                    <h3>Počet projektů:</h3>
                    <Counter inView={inView} to={8} time={150} />
                </div>
                <div className={styles.counter}>
                    <h3>Zkušenost:</h3>
                    <Counter inView={inView} to={6} time={150} suffix="Let"  />
                </div>
            </div>
        </div>
    );
}

export default Stats;