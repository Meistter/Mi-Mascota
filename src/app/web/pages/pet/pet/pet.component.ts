import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { interval } from 'rxjs';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit{

  constructor(private route: ActivatedRoute, private petService:PetsService){}

  relatedPets : Pet[]= []
  petId: string | null = null
  liked: boolean = false
  likeCount: number = 1
  urlRedirect = 'pet'
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
    category: '0'
  }   

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.petId = params.get('id')
      if(this.petId){
        this.pet = this.petService.getAdoptionPet(this.petId)        
        } 

        if(this.pet?.category){
          this.relatedPets = this.petService.getRelatedPets(this.pet.category)
        }
        
    })
  }
  getSize(){
    if(this.pet?.size == 'Big'){
      return 'Grande'
    }else{
      if(this.pet?.size == 'Regular'){
        return 'Mediano'
      }else{
        return 'Pequeño'}
    }
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
  changeLiked(){
    this.liked = !this.liked
    if(this.likeCount == 2){this.likeCount--}else{this.likeCount++}
  }
 
}