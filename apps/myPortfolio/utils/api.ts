//Global
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const PUBLIC = '/public';
const PROTECTED = '/protected';

//Authorization
export const LOGIN_API = API_URL + PUBLIC + '/login';
export const LOGOUT_API = API_URL + PROTECTED + '/logout';
export const AUTH_DETAILS_API = API_URL + PROTECTED + '/user-details';

//Data
export const MAIN_PAGE_DATA_API = API_URL + PUBLIC + '/portfolio-data/';
//References
export const REFERENCES_API = API_URL + PUBLIC + '/portfolio-data/references';
//Case studies
export const PROJETS_API = API_URL + PUBLIC + '/portfolio-data/projects';

//Contact
export const CONTACT_API = API_URL + PUBLIC + '/contact/';
