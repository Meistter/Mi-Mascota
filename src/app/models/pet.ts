export interface Pet{
    id: string,
    name: string,
    owner_id: string,    
    age: number,
    castrated?: boolean,
    disease: boolean,    
    health: string,
    vaccinated?: boolean,
    location: string,
    description: string,
    adoptionReason?: string,
    size?: string,
    remarks: string,
    photos: image[],
    likes?: number,
    category: string,
    lastSeenAddress?: string
}
export interface image{
    url_mobile: string,
    url_full: string,
    alt: string
}
export interface PetRescue{
    id: string,      
    age: number,   
    name?: string,    
    health: string,    
    location: string,
    description: string,
    remarks: string,
    photos: image[],
    category: string,
    disease: boolean,
    gps: string,
    address: string
}