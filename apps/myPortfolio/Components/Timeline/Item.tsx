import styles from "@/styles/Components/Timeline/Item.module.scss"
import { useRef, useEffect } from "react";

interface Props {
    side: "left"|"right",
    data: {
        index: string
        name: string
        description: string
        image: string
    },
    action: Function

}

function TimelineItem(data:Props) {
    const elementRef = useRef<HTMLDivElement>(null);
    const content = useRef<HTMLDivElement>(null);

    function scroll(element:HTMLDivElement|null){
        if (element === null || content.current === null){
            return
        }
        const height = (element.getBoundingClientRect().bottom - element.getBoundingClientRect().height/4) - (element.getBoundingClientRect().top + element.getBoundingClientRect().height/4)
        var percentage:number = (window.innerHeight- (element.getBoundingClientRect().top + element.getBoundingClientRect().height/4))/height
        if (percentage<0) {
            percentage=0
            content.current.style.opacity = `${0}%`
        }
        else if (percentage > 0.5){
            var contentPercentage = (percentage - 1)*100

            if (contentPercentage > 100) contentPercentage = 100
            else if (contentPercentage < 0) contentPercentage = 0

            content.current.style.opacity = `${contentPercentage}%`
        }
        else if (percentage>1) {
            percentage=1
        }
        else {
            content.current.style.opacity = `${0}%`
        }

        element.style.boxShadow = `10px 15px 20px hsl(210, 40%, 14%, ${ 1*percentage}),-10px -10px 26px hsla(209, 40%, 25%, ${1*percentage})`
    }

    useEffect(() => {
        
        const element = elementRef.current;
        const handleScroll = () => {
            scroll(element);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div ref={elementRef} className={[styles.timeline_item, (data.side === "left" ? styles.left:styles.right)].join(" ")}>
            <div ref={content} className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.index}>
                        {data.data.index}
                    </div>
                    <h2 className={styles.name}>
                        {data.data.name}
                    </h2>
                </div>
                <div className={styles.project_content}>
                    <p className={styles.description}>
                        {data.data.description}
                    </p>
                    <img className={styles.image} src={data.data.image} />
                    <button className={styles.actionButton} >
                        <div className={styles.button_mask}>

                        </div>
                        <p>Více o projektu</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TimelineItem;