import styles from "@/styles/Components/CaseStudy/basicInformation.module.scss"

function BasicInformationCaseStudy() {
    return (
        <section className={styles.container}>
            <div className={styles.item}>
                <div className={styles.headline}>
                    <h2>Období</h2>
                </div>
                <div className={styles.content}>
                    Konec 2022 - Březen 2023
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.headline}>
                    <h2>Barvy</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.colors}>
                        <div className={styles.color}>
                            <div style={{backgroundColor: "#fffFFF"}}>

                            </div>
                            <p>
                                #fffFFF
                            </p>
                        </div>
                        <div className={styles.color}>
                            <div style={{backgroundColor: "#000000"}}>

                            </div>
                            <p>
                                #000000
                            </p>
                        </div>
                        <div className={styles.color}>
                            <div style={{backgroundColor: "#F000F0"}}>

                            </div>
                            <p>
                                #F000F0
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.headline}>
                    <h2>Moje Role</h2>
                </div>
                <div className={styles.content}>
                    Full-Stack developer
                </div>
            </div>
        </section>
    );
}

export default BasicInformationCaseStudy;