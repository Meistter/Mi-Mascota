import { Component } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html', 
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  pets: Pet[] = [    
    {name:'Arturo el Canguro', 
    description: 'Es un conejito muy bien portado, le encanta jugar comer zanahoria y dormir por las tardes',
    age:2, health:'Buena', location:'Caracas', vaccinated:false,
    photos:[{url: 'https://mascotafiel.com/wp-content/uploads/2017/02/C%C3%B3mo-hacer-juguetes-para-conejos-1_opt.jpg', alt:''}]},
    {name:'Ramon el Loro', 
    description: 'Un ave muy noble sabe cantar opera y a veces se destaca con un rap',
    age:1, health:'Buena', location:'Valencia', vaccinated:false,
    photos:[{url: 'https://t1.ea.ltmcdn.com/es/posts/5/7/0/tipos_de_juguetes_para_loros_24075_2_600.jpg', alt:''}]},
    {name:'Kiara Renata', 
    description: 'Es una perrita muy consentida, solo come perrarina en la boca y una por una, no le gusta el pollo ni los gatos',
    age:3, health:'Buena', location:'Barquisimeto', vaccinated:true,
    photos:[{url: 'https://i.postimg.cc/YCtqMP6J/kiara.jpg', alt:''}]},
    {name:'Sofia Victoria', 
    description: 'Es una gata consentida y cariñosa, come como por 3 gatos y le encanta hacer popo por toda la casa',
    age:1, health:'Buena', location:'Barquisimeto', vaccinated:true,
    photos:[{url: 'https://i.postimg.cc/8PyHD2WY/sofia.jpg', alt:''}]},
    {name:'Max patitas cortas', 
    description: 'Es muy caprichoso y piqui para comer no come cualquier tipo de croqueta y le teme a la oscuridad, pero es bilingüe y es bonito',
    age:1, health:'Buena', location:'Texas', vaccinated:true,
    photos:[{url: 'https://i.postimg.cc/X7wy5ydp/max.jpg', alt:''}]},
    {name:'Kira', 
    description: 'Me gusta jugar con los calcetines de mis padres y morderme la cola una y otra vez hasta que mis padres tienen que separarme porque me puedo hacer daño, solo como gatarina CatShow',
    age:3, health:'Buena', location:'Maracaibo', vaccinated:false,
    photos:[{url: 'https://i.postimg.cc/JzMH545K/sofia.jpg', alt: ''}]},
    {name:'Pirata Sparrow', 
    description: 'Amigable, le gustan los niños y es super cariñoso, buena compañía para personas mayores',
    age:0.5, health:'Buena', location:'Texas', vaccinated:true,
    photos:[{url: 'https://i.postimg.cc/Cx7BPTv0/pirata.jpg', alt:''}]},
    
  ]
}
