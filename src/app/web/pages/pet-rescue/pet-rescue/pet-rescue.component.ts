import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { interval } from 'rxjs';

@Component({
  selector: 'app-pet-rescue',
  templateUrl: './pet-rescue.component.html',
  styleUrls: ['./pet-rescue.component.scss']
})
export class PetRescueComponent {

  
  constructor(private route: ActivatedRoute, private petService:PetsService){}

  petId: string | null = null
  //quitar el undefined al usar API
  pet :Pet | undefined = {
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
    likes: 0,
    category: 0
  }   

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.petId = params.get('id')
      if(this.petId){
        this.pet = this.petService.getAdoptionPet(this.petId)        
        } 
    })
       
    
  }
  config: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    };  
  automatico(swiper: Swiper) {
    const segundos = interval(10000);
    segundos.subscribe(() => {
    swiper.slideNext(850);    
    })
  }
 
  
}
