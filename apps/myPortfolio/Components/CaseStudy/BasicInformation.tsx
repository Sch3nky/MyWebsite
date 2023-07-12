import styles from "@/styles/Components/CaseStudy/basicInformation.module.scss"

function BasicInformationCaseStudy({period, colors, role}:{period:string, colors:string[], role:string}) {
    return (
        <section className={styles.container}>
            <div className={styles.item}>
                <div className={styles.headline}>
                    <h2>Období</h2>
                </div>
                <div className={styles.content} dangerouslySetInnerHTML={{__html:period.replaceAll("\n", "<br/>")}}>
                </div>
            </div>

            <div className={[styles.item, styles.colors].join(" ")}>
                <div className={styles.headline}>
                    <h2>Barvy</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.colors}>
                        {colors.map((color:string, key:number) => 
                        <div className={styles.color}>
                            <div style={{backgroundColor: color}}>

                            </div>
                            <p>
                                {color.toUpperCase()}
                            </p>
                        </div>
                        )}
                        
                    </div>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.headline}>
                    <h2>Moje Role</h2>
                </div>
                <div className={styles.content}>
                    {role}
                </div>
            </div>
        </section>
    );
}

export default BasicInformationCaseStudy;