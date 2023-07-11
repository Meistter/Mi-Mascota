import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'], 
})
export class CardComponent {

@Input() pet : Pet = {
    id: 0,
    name: 'string',
    description: 'string',
    age: 0,
    health: 'string',
    vaccinated: false,
    location: 'string',
    photos: [{url_mobile:'', url_full:'',alt:''}]
}
}
