import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor() { }

  //Base de datos de las mascotas
  adoptionPets: Pet[] = [
    {id:'1',name:'Ramon el Loro', 
description: 'Un ave muy noble sabe cantar opera y a veces se destaca con un rap',
age:1, health:'Buena', location:'Valencia', vaccinated:false, 
owner_id:'Rebeca Rodriguez',
castrated:false,disease:false,
adoptionReason:'No tengo dinero para mantenerlo',
remarks:'Es jugueton y muerde todo',
photos:[{url_mobile: 'https://i.postimg.cc/g25MpVHt/loro-min.jpg', url_full:'', alt:''}],
likes:6},

{id:'4',name:'Max patitas cortas', 
description: 'Es muy caprichoso y piqui para comer no come cualquier tipo de croqueta y le teme a la oscuridad, pero es bilingüe y es bonito',
age:1, health:'Buena', location:'Texas', vaccinated:true,
owner_id:'Josue Perez',
castrated:true,disease:false,
adoptionReason:'Hemos tenido dias dificiles y actualmente no tenemos dinero para mantenerlo y no queremos dejarlo en un refugio',
remarks:'En el pasado Max ha tenido episodios ansiedad por el calor donde es necesario llevarlo a un lugar fresco y tener cuidado con el calor en sus patitas',
photos:[{url_mobile: 'https://i.postimg.cc/TwjQnZMB/max-min.jpg', url_full:'', alt:''},{url_mobile: 'https://i.postimg.cc/3RFqhQD1/max2-min.jpg', url_full:'', alt:'max-photo2'},{url_mobile: 'https://i.postimg.cc/T124YNV6/max3-min.jpg', url_full:'', alt:'max-photo3'},{url_mobile: 'https://i.postimg.cc/jqZPLHBv/max4.jpg', url_full:'', alt:'max-photo4'},{url_mobile: 'https://i.postimg.cc/cL8n9VC5/max5.jpg', url_full:'', alt:'max-photo5'}],
likes:23},
    
{id:'2',name:'Kiara Renata', 
description: 'Es una perrita muy consentida, solo come perrarina en la boca y una por una, no le gusta el pollo ni los gatos',
age:3, health:'Buena', location:'Barquisimeto', vaccinated:true,
owner_id:'Cristal Quintero',
castrated:false,disease:false,
adoptionReason:'No tengo dinero para mantenerlo',
remarks:'Es jugueton y muerde todo',
photos:[{url_mobile: 'https://i.postimg.cc/sfwppfSZ/kiara2-min.jpg', url_full:'', alt:''}],
likes:0},

{id:'3',name:'Sofia Victoria', 
description: 'Es una gata consentida y cariñosa, come como por 3 gatos y le encanta hacer popo por toda la casa',
age:1, health:'Buena', location:'Barquisimeto', vaccinated:true,
owner_id:'Jorge Gomez',
castrated:false,disease:false,
adoptionReason:'No tengo dinero para mantenerlo',
remarks:'Es jugueton y muerde todo',
photos:[{url_mobile: 'https://i.postimg.cc/3wvtxkL8/sofiareal-min.jpg', url_full:'', alt:''}],
likes:7},
    
{id:'6',name:'Pirata Sparrow', 
description: 'Amigable, le gustan los niños y es super cariñoso, buena compañía para personas mayores',
age:0.5, health:'Buena', location:'Texas', vaccinated:true,
owner_id:'Abigail Paredes',
castrated:false,disease:false,adoptionReason:'Hemos tenido dias dificiles y actualmente no tenemos dinero para mantenerlo y no queremos dejarlo en un refugio',remarks:'En el pasado Max ha tenido episodios ansiedad por el calor donde es necesario llevarlo a un lugar fresco y tener cuidado con el calor en sus patitas',
photos:[{url_mobile: 'https://i.postimg.cc/sxVmmw3x/pirata-min.jpg', url_full:'', alt:''}],
likes:9},
    
{id:'5',name:'Kira', 
description: 'Me gusta jugar con los calcetines de mis padres y morderme la cola una y otra vez hasta que mis padres tienen que separarme porque me puedo hacer daño, solo como gatarina CatShow',
age:3, health:'Buena', location:'Maracaibo', vaccinated:false,
owner_id:'Yolanda Torres',
castrated:false,disease:false,
adoptionReason:'No tengo dinero para mantenerlo',
remarks:'Es jugueton y muerde todo',
photos:[{url_mobile: 'https://i.postimg.cc/ZRzVBJgr/sofia-min.jpg', url_full:'', alt:''}],
likes:4},
    
{id:'0',name:'Arturo el Canguro', 
description: 'Es un conejito muy bien portado, le encanta jugar comer zanahoria y dormir por las tardes',
age:2, health:'Buena', location:'Caracas', vaccinated:false,
owner_id:'Daniel Dhers',
castrated:true,disease:false,
adoptionReason:'No tengo dinero para mantenerlo',
remarks:'Es jugueton y muerde todo',
photos:[{url_mobile: 'https://i.postimg.cc/nhzfJByN/conejo.jpg', url_full:'', alt:'conejo-photo1'}],
likes:2}
  ]
  rescuePets: Pet[] = []

  //Funciones a usar mientras no exista backend
  getAdoptionPet(id:string){
    return this.adoptionPets.find(rsp=> rsp.id == id)
  }
  getAdoptionPets(){
    return this.adoptionPets
  }
  getRescuePet(id:string){
    return this.rescuePets.find(rsp=> rsp.id == id)
  }
  getRescuePets(){
    return this.rescuePets
  }

}
