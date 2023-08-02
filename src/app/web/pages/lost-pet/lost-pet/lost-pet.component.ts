import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetRescue } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { interval } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-lost-pet',
  templateUrl: './lost-pet.component.html',
  styleUrls: ['./lost-pet.component.scss']
})
export class LostPetComponent {

  constructor(private route: ActivatedRoute, private petService: PetsService, private categoryService: CategoryService) { }
  relatedPets: PetRescue[] = []
  lostDetail = true
  petId: string | null = null
  categoryName: string | undefined = ''
  //quitar el undefined al usar API
  pet: PetRescue | undefined = {
    id: 'string',
    age: 0,
    health: 'string',
    location: 'string',
    description: 'string',
    photos: [{ url_mobile: '', url_full: '', alt: '' }],
    address: '',
    disease: true,
    gps: '',
    category: '0',
    remarks: 'string',
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.petId = params.get('id')
      if (this.petId) {
        this.pet = this.petService.getLostPet(this.petId)
        if (this.pet?.category)
          this.categoryName = this.categoryService.getCategoryName(this.pet?.category)
        if (this.pet?.category) {
          this.relatedPets = this.petService.getRelatedLostPets(this.pet.category)
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
