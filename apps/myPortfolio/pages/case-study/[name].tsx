import { useRouter } from "next/router";
import Head from "next/head";
import TopCaseStudy from "@/Components/CaseStudy/Top";
import BasicInformationCaseStudy from "@/Components/CaseStudy/BasicInformation";
import DescriptionCaseStudy from "@/Components/CaseStudy/Description";

import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
  } from 'next'
import { Project, SimpleProject } from "@/types/api";
import { PROJET_API, SIMPLE_PROJECT_API } from "@/utils/api";


function CaseStudy({project}: {project:Project}) {
    const router = useRouter()
    
    return (
        <>
            <Head>
                <title>{project.name}</title>
                <meta name="description" content={project.short_description}/>
            </Head>

            <TopCaseStudy name={project.name} technologie={project.technologies} url={project.url} />

            <DescriptionCaseStudy description={project.description}/>

            <BasicInformationCaseStudy period={project.period} role={project.role} colors={project.colors} />
        </>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    const simple_projects_response = await fetch(SIMPLE_PROJECT_API)
    const simple_projects = await simple_projects_response.json()

    const paths = simple_projects.map((project:SimpleProject) => ({
        params: { name: project.project_page},
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async ({ params }:any) => {
    const project_response = await fetch(PROJET_API + params.name)
    const project = await project_response.json()
    return { props: {project:project} }
}


export default CaseStudy;