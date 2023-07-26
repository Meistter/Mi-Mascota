import { Component, Input } from '@angular/core';
import { PetRescue } from 'src/app/models/pet';

@Component({
  selector: 'app-rescue-card',
  templateUrl: './rescue-card.component.html',
  styleUrls: ['./rescue-card.component.scss']
})
export class RescueCardComponent {
  @Input() pet : PetRescue = {
    id: 'string',    
    age: 0,
    health: 'string',
    location: 'string',
    description: 'string',
    photos: [{url_mobile:'', url_full:'',alt:''}],
    category: 0,
    address: ''
  }
  
  getCategory(){
    if(this.pet.category == 0){
      return 'Perro'
    }else{
      if(this.pet.category == 1){
        return 'Gato'
      }else{
        if(this.pet.category == 2){
          return 'Ave'
        }else{
          if(this.pet.category == 3){
            return 'Tortuga'
            
          } if(this.pet.category == 4){
            return 'Conejo'            
          }else{
            return undefined
          }
        }
      }
    }
  }
}
