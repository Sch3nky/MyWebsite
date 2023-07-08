import styles from "@/styles/Components/Main/companies.module.scss"

const firms:{photo: string, name:string, url:string}[] = [
    {
        photo: "/images/logos/inoprint.svg",
        name: "Inoprint.cz",
        url: ""
    },
    {
        photo: "/images/logos/Sentiscrape.svg",
        name: "Sentiscrape",
        url: ""
    },
    {
        photo: "/images/logos/erant.svg",
        name: "Erant",
        url: ""
    }
]

function CompaniesSlideShow(data: {companies: {photo: string, name:string}[]}) {
    return (
        <div className={styles.container}>
            <h1>Spolupracoval jsem s firmami:</h1>
            <div className={styles.companiesSlide}>
                {firms.map((company:{photo: string, name:string, url:string}, index:number) =>
                    <div className={styles.company} key={index} title={company.name}>
                        <img src={company.photo} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default CompaniesSlideShow;