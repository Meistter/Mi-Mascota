export interface Pet{
    id: number,
    name: string,
    description: string,
    age: number,
    health: string,
    vaccinated: boolean,
    location: string,
    photos: image[]
}
export interface image{
    url_mobile: string,
    url_full: string,
    alt: string
}