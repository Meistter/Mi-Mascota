import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { CategoryService } from 'src/app/services/category.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pet-category',
  templateUrl: './pet-category.component.html',
  styleUrls: ['./pet-category.component.scss']
})
export class PetCategoryComponent {

  constructor(private petService: PetsService, private route: ActivatedRoute, private categoryService: CategoryService){}
  
  pets : Pet[] = []
  categoryName : string = ''
  categoryId : string | null = null
  breed = 'Perro'
  location = 'Barquisimeto'
  size = 'Pequeño'
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.categoryId = params.get('id')
      if(this.categoryId){
        this.pets = this.petService.getPetsByCategory(this.categoryId) 
        this.categoryName = this.categoryService.getCategoryName(this.categoryId)       
        } 
    }) 
  }
}
