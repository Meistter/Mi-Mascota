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
    health: string,    
    location: string,
    description: string,
    photos: image[],
    category: string,
    address: string
}