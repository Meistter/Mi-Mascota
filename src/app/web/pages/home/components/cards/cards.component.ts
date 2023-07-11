import { Component } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html', 
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  pets: Pet[] = [    
    {id:0,name:'Arturo el Canguro', 
    description: 'Es un conejito muy bien portado, le encanta jugar comer zanahoria y dormir por las tardes',
    age:2, health:'Buena', location:'Caracas', vaccinated:false,
    photos:[{url_mobile: 'https://i.postimg.cc/nhzfJByN/conejo.jpg', url_full:'', alt:''}]},
    {id:1,name:'Ramon el Loro', 
    description: 'Un ave muy noble sabe cantar opera y a veces se destaca con un rap',
    age:1, health:'Buena', location:'Valencia', vaccinated:false,
    photos:[{url_mobile: 'https://i.postimg.cc/Tw4JKyQ7/loro-min.jpg', url_full:'', alt:''}]},
    {id:2,name:'Kiara Renata', 
    description: 'Es una perrita muy consentida, solo come perrarina en la boca y una por una, no le gusta el pollo ni los gatos',
    age:3, health:'Buena', location:'Barquisimeto', vaccinated:true,
    photos:[{url_mobile: 'https://i.postimg.cc/ZRRLYPPv/kiara-min.jpg', url_full:'', alt:''}]},
    {id:3,name:'Sofia Victoria', 
    description: 'Es una gata consentida y cariñosa, come como por 3 gatos y le encanta hacer popo por toda la casa',
    age:1, health:'Buena', location:'Barquisimeto', vaccinated:true,
    photos:[{url_mobile: 'https://i.postimg.cc/23pdxPsn/sofiareal-min.jpg', url_full:'', alt:''}]},
    {id:4,name:'Max patitas cortas', 
    description: 'Es muy caprichoso y piqui para comer no come cualquier tipo de croqueta y le teme a la oscuridad, pero es bilingüe y es bonito',
    age:1, health:'Buena', location:'Texas', vaccinated:true,
    photos:[{url_mobile: 'https://i.postimg.cc/fWV6BY4b/max-min.jpg', url_full:'', alt:''}]},
    {id:5,name:'Kira', 
    description: 'Me gusta jugar con los calcetines de mis padres y morderme la cola una y otra vez hasta que mis padres tienen que separarme porque me puedo hacer daño, solo como gatarina CatShow',
    age:3, health:'Buena', location:'Maracaibo', vaccinated:false,
    photos:[{url_mobile: 'https://i.postimg.cc/rsRCx8P8/sofia-min.jpg', url_full:'', alt:''}]},
    {id:6,name:'Pirata Sparrow', 
    description: 'Amigable, le gustan los niños y es super cariñoso, buena compañía para personas mayores',
    age:0.5, health:'Buena', location:'Texas', vaccinated:true,
    photos:[{url_mobile: 'https://i.postimg.cc/Vs22T51W/pirata-min.jpg', url_full:'', alt:''}]},    
  ]
}
