import styles from '@/styles/Components/Main/home.module.scss'
import NextStage from '../Global/Objects/nextStage';
import ContactMeButton from '../Global/Objects/contactButton';

interface Props{
    id:string,
    nextStage_scroll:Function,
    name: string    
}

function Top({id, nextStage_scroll, name}:Props) {
    return (
        
        <div id={id} className={styles.container}>
            <div className={styles.content}>
                <h1>
                    {name}
                </h1>
                <h3></h3>
                <ContactMeButton scroll={nextStage_scroll} time={1600} />
            </div>
            <NextStage name='O Mně' scroll={nextStage_scroll} to="About" time={800} />
        </div>
    );
}

export default Top;