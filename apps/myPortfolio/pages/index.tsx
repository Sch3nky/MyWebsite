import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Top from '@/Components/Main/Top'
import About from '@/Components/Main/About'
import Kontakt from '@/Components/Main/Kontakt'
import Skills from '@/Components/Main/Skills'
import CaseStudy from '@/Components/Main/Case-study'
import CompaniesSlideShow from '@/Components/Main/Companies'
import Coments from '@/Components/Main/Coments'

import { MAIN_PAGE_DATA_API, REFERENCES_API, SIMPLE_PROJECT_API} from '@/utils/api'
import { MainPageData, Project, Reference, SimpleProject } from '@/types/api'

export default function Home({ data, projects, references }:{data:MainPageData, projects: SimpleProject[], references: Reference[]}) {

  function smoothScroll(id:string, duration:any) {
    const element = document.getElementById(id) as HTMLElement
    const start = window.pageYOffset;
    const end = element.getBoundingClientRect().top + window.pageYOffset;
    const distance = end - start;
    let startTime:any = null;
    
    function animation(currentTime:any) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t:any, b:any, c:any, d:any) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
  }

  return (
    <div className={styles.main}>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content={data.about}/>
      </Head>

      {/* Main page */}
      <Top id='Top' nextStage_scroll={smoothScroll} name={data.name} />

      {/*Companies*/}
      <CompaniesSlideShow companies={[]} />

      <div className={styles.hide_overflow}>
        {/* About me */}
        <About id="About" scollFunction={smoothScroll} about={data.about} />
      </div>

      {/* Case study */}
      <CaseStudy id="CaseStudy" projects={projects}/>

      {/* My skills */}
      <Skills skills={data.experience} />

      {/* Stats - <Stats /> */}

      {/* Coments  */}
      <Coments references={references} />
      
      {/* Kontakt */}
      <Kontakt />
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const data_response = await fetch(MAIN_PAGE_DATA_API)
  const data = await data_response.json()

  const reference_response = await fetch(REFERENCES_API)
  const references = await reference_response.json()

  const simple_projects_response = await fetch(SIMPLE_PROJECT_API)
  const simple_projects = await simple_projects_response.json()
 
  // Pass data to the page via props
  return { props: { data, projects:simple_projects, references:references } }
}