import { Component } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html', 
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  pets: Pet[] = [
    {name:'Sofia Victoria', 
    description: 'Me gusta jugar con los calcetines de mis padres y morderme la cola',
    age:3, health:'Buena', location:'Barquisimeto', vaccinated:true,
    photos:[{url: 'https://i.postimg.cc/JzMH545K/sofia.jpg', alt: ''}]},
    {name:'Pirata Sparrow', 
    description: 'Amigable, le gustan los niños y es super cariñoso, buena compañía para personas mayores',
    age:0.5, health:'Buena', location:'Alamo, Texas', vaccinated:true,
    photos:[{url: 'https://i.postimg.cc/Cx7BPTv0/pirata.jpg', alt:''}]},
    {name:'Max patitas cortas', 
    description: 'Es muy caprichoso y piqui para comer no come cualquier tipo de croqueta y le teme a la oscuridad, pero es bilingüe y es bonito',
    age:1, health:'Buena', location:'Alamo, Texas', vaccinated:true,
    photos:[{url: 'https://i.postimg.cc/X7wy5ydp/max.jpg', alt:''}]}
    
  ]
}
