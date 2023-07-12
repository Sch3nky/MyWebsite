import styles from "@/styles/Components/CaseStudy/technologies.module.scss"
import { ProjectTechnology } from "@/types/api";

function TechnologiesCaseStudy({technologies}:{technologies:ProjectTechnology[]}) {
    return (
        <section className={styles.container}>
            {
                technologies.map((technology:ProjectTechnology, key:number) => 
                <div key={key} className={styles.item}>
                    <div className={styles.headline}>
                        <h2>{technology.name}</h2>
                    </div>
                    <div className={styles.content}>
                        <ul>
                            {technology.items.map((item:string, key:number) => 
                            <li key={key}>
                                {item}
                            </li>)}
                        </ul>
                    </div>
                </div>
                )
            }
        </section>
    );
}

export default TechnologiesCaseStudy;