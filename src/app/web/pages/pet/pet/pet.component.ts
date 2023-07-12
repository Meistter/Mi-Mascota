import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { Pet } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit{

  constructor(private route: ActivatedRoute, private petService:PetsService){}

  petId: string | null = null
  //quitar el undefined al usar API
  pet :Pet | undefined = {
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

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.petId = params.get('id')
    })
    if(this.petId){
    this.pet = this.petService.getAdoptionPet(this.petId)
    }    
  }
  config: SwiperOptions = {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    };  
 
}
