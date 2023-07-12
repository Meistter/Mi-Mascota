import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'], 
})
export class CardComponent {

@Input() pet : Pet = {
  id: 'string',
  name: 'string',
  owner_name: 'string',    
  age: 0,
  castrated: true,
  disease: true,    
  health: 'string',
  vaccinated: true,
  location: 'string',
  description: 'string',
  adoptionReason: 'string',
  remarks: 'string',
  photos: [{url_mobile:'', url_full:'',alt:''}]
}
}
