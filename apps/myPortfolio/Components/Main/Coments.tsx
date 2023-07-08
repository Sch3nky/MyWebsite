import styles from "@/styles/Components/Main/coments.module.scss"
import { Reference } from "@/types/api";


function Coments({references}:{references:Reference[]}) {
    return (
        <div className={styles.container}>
            <h1>
                Reference
            </h1>
            <div className={styles.comentsContainter}>
                {
                    references.map((reference:Reference, key:number) => 
                    <div key={key} className={styles.coment}>
                        <p className={styles.name}>{reference.name}</p>
                        <p className={styles.text}>{reference.text}</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default Coments;