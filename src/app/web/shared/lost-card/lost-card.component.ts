import { Component, Input } from '@angular/core';
import { PetRescue } from 'src/app/models/pet';

@Component({
  selector: 'app-lost-card',
  templateUrl: './lost-card.component.html',
  styleUrls: ['./lost-card.component.scss']
})
export class LostCardComponent {
  @Input() lostDetail : boolean = false
  @Input() pet : PetRescue = {
    id: 'string',    
    age: 0,
    health: 'string',
    location: 'string',
    description: 'string',
    photos: [{url_mobile:'', url_full:'',alt:''}],
    category: '0',
    disease: false,
    gps: '',
    remarks: 'string',
    address: ''
  }
  getUrl(){
    if (this.lostDetail){
      return '/pet-lost'
    }else{return '/pet-rescue'}
  }
  getCategory(){
    if(this.pet.category == '0'){
      return 'Perro'
    }else{
      if(this.pet.category == '1'){
        return 'Gato'
      }else{
        if(this.pet.category == '2'){
          return 'Ave'
        }else{
          if(this.pet.category == '3'){
            return 'Tortuga'
            
          } if(this.pet.category == '4'){
            return 'Conejo'            
          }else{
            return undefined
          }
        }
      }
    }
  }
}
