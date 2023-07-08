import styles from '@/styles/Components/Main/case-study.module.scss'
import TimelineItem from '../Timeline/Item';

interface Props {
    id: string
}

function CaseStudy(data:Props) {
    return (
        <div id={data.id} className={styles.container}>
            <div className={styles.navigation_line}>
                
            </div>
            <h1 className={styles.headline}>
                Ukázka mé práce
            </h1>

            <div className={styles.timeline}>
                <TimelineItem side='left' data={{index:"01", name:"Inoprint.cz", image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/13F00/production/_95146618_bills.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}} action={() => {}}/>
                <TimelineItem side='right' data={{index:"02", name:"Inoprint.cz", image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/13F00/production/_95146618_bills.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}} action={() => {}}/>
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