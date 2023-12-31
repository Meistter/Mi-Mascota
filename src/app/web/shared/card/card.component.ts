import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'], 
})
export class CardComponent {

@Input() pet : Pet = {
  id: '-1',
  name: '',
  owner_id: '',    
  age: 0,
  castrated: true,
  disease: true,    
  health: '',
  vaccinated: true,
  location: '',
  description: '',
  adoptionReason: '',
  remarks: '',
  photos: [{url_mobile:'', url_full:'',alt:''}],
  likes:0,
  category: '0',
  size: ''
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
