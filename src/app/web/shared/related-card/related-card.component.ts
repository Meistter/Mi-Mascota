import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-related-card',
  templateUrl: './related-card.component.html',
  styleUrls: ['./related-card.component.scss']
})
export class RelatedCardComponent {
  @Input() pet : Pet = {
    id: 'string',
    name: 'string',
    owner_id: 'string',    
    age: 0,
    castrated: true,
    disease: true,    
    health: 'string',
    vaccinated: true,
    location: 'string',
    description: 'string',
    adoptionReason: 'string',
    remarks: 'string',
    photos: [{url_mobile:'', url_full:'',alt:''}],
    likes:0,
    category: '0'
  }
  @Input() urlRedirect : string = 'false'

  getUrl(){
    if (this.urlRedirect == 'pet'){
      return '/pet'
    }else{if(this.urlRedirect == 'rescue'){
      return '/pet-rescue'
    }else{if(this.urlRedirect == 'lost'){
      return '/pet-lost'
    }else{return 'not-found'}}
  }}
}
