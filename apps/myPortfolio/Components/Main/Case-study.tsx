import styles from '@/styles/Components/Main/case-study.module.scss'
import TimelineItem from '../Timeline/Item';
import { SimpleProject } from '@/types/api';
import { useRouter } from 'next/router';

interface Props {
    id: string,
    projects: SimpleProject[]
}

function CaseStudy(data:Props) {
    const router = useRouter()

    const formatIndex = (index: number) => {
        if (index >= 10) return index.toString()
        else return `0${index}`

    }
    return (
        <div id={data.id} className={styles.container}>
            <div className={styles.navigation_line}>
                
            </div>
            <h1 className={styles.headline}>
                Ukázka mé práce
            </h1>

            <div className={styles.timeline}>
                {
                    data.projects.map((project:SimpleProject, key:number) => 
                        <TimelineItem key={key} side={(key+1)%2 != 0?"left":"right"} data={{index:formatIndex(key+1), name:project.name, image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/13F00/production/_95146618_bills.jpg", description:project.short_description}} action={() => {router.push("/case-study/"+project.project_page)}}/>
                    )
                }
            </div>
            <div hidden>
                <button>
                    Chci vidět více
                </button>
            </div>
        </div>
    );
}



export default CaseStudy;