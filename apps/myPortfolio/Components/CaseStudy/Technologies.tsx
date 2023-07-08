import styles from "@/styles/Components/CaseStudy/technologies.module.scss"

function TechnologiesCaseStudy() {
    return (
        <section className={styles.container}>
            <div className={styles.item}>
                <div className={styles.headline}>
                    <h2>Frontend</h2>
                </div>
                <div className={styles.content}>
                    <ul>
                        <li>
                            Next.js
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Html
                        </li>
                        <li>
                            Scss
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.headline}>
                    <h2>Backend</h2>
                </div>
                <div className={styles.content}>
                    <ul>
                        <li>
                            Python
                        </li>
                        <li>
                            Flask
                        </li>
                        <li>
                            REST API
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.headline}>
                    <h2>Server</h2>
                </div>
                <div className={styles.content}>
                    <ul>
                        <li>
                            Ubuntu
                        </li>
                        <li>
                            NGINX
                        </li>
                        
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TechnologiesCaseStudy;