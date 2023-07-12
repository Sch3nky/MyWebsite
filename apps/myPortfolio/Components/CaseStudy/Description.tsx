import styles from "@/styles/Components/CaseStudy/description.module.scss"

function DescriptionCaseStudy({description}:{description: string}) {
    return (
        <section className={styles.container}>
            <h2>Projekt</h2>
            <p dangerouslySetInnerHTML={{__html: description.replaceAll("\n", "<br/>")}}></p>
        </section>
    );
}

export default DescriptionCaseStudy;