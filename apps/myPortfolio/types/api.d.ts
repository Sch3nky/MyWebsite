export interface CodeResponse {
    message: string;
    ok: boolean;
}

//Contact
export interface ContactMessage {
    email: string,
    first_name: string,
    surname: string,
    message: string
}

/* 
    Project data types
*/
export interface ProjectTechnology {
    name: string,
    items: string[]
}

export interface SimpleProject{
    id: number, 
    short_description: string, 
    name: string, 
    project_page: string, 
    image: string
}

export interface Project{
    id: number,
    name: string,
    image: string,
    project_page: string,
    url:string,
    short_description: string,
    description: string,
    period: string,
    role: string,
    colors: string[],
    technologies: ProjectTechnology[]
}


/* 
    Home page types
*/
export interface Cooperation{
    name:string,
    logo:string
}

export interface Experience{
    name:string,
    items: string[]
}

export interface MainPageData{
    name: string,
    about: string,
    cooperation: Cooperation[],
    experience: Experience[]
}

export interface Reference{
    name:string,
    text:string,
}