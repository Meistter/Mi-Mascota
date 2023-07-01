export interface Pet{
    name: string,
    description: string,
    age: number,
    health: string,
    vaccinated: boolean,
    location: string,
    photos: image[]
}
export interface image{
    url: string,
    alt: string
}