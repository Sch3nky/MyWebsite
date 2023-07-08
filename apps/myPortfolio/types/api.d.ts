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

//Main page data
export interface Project{
    name:string,
    text:string,
    logo:string
}

export interface Reference{
    name:string,
    text:string,
}

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