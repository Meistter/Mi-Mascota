import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Pet } from 'src/app/models/pet';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // standalone: true,
  // imports: [MatCardModule, MatButtonModule]
})
export class CardComponent {

@Input() pet : Pet = {
    name: 'string',
    description: 'string',
    age: 0,
    health: 'string',
    vaccinated: false,
    location: 'string',
    photos: [{url:'',alt:''}]
}
}
