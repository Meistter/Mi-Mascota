import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet, PetRescue } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { interval } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-pet-rescue',
  templateUrl: './pet-rescue.component.html',
  styleUrls: ['./pet-rescue.component.scss']
})
export class PetRescueComponent {

  
  constructor(private route: ActivatedRoute, private petService:PetsService, private categoryService: CategoryService){}
  relatedPets : Pet[]= []
  petId: string | null = null
  categoryName : string | undefined = ''
  //quitar el undefined al usar API
  pet :PetRescue | undefined = {
    id: 'string',   
    age: 0, 
    health: 'string',
    location: 'string',
    description: 'string',
    photos: [{url_mobile:'', url_full:'',alt:''}],
    address: '',
    disease: true,
    gps: '',
    category: '0'
  }   

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.petId = params.get('id')
      if(this.petId){
        this.pet = this.petService.getRescuePet(this.petId)
        if(this.pet?.category)
        this.categoryName = this.categoryService.getCategoryName(this.pet?.category)         
      if(this.pet?.category){
        this.relatedPets = this.petService.getRelatedPet(this.pet.category)
      }
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
    const segundos = interval(30000);
    segundos.subscribe(() => {
    swiper.slideNext(850);    
    })
  }
 
  
}
