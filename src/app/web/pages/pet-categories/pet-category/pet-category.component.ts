import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { CategoryService } from 'src/app/services/category.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pet-category',
  templateUrl: './pet-category.component.html',
  styleUrls: ['./pet-category.component.scss']
})
export class PetCategoryComponent {

  constructor(private petService: PetsService, private route: ActivatedRoute,private router: Router, private categoryService: CategoryService){}
  
  pets : Pet[] = []
  categoryName : string | undefined= undefined
  categoryId : string | null = null
  sizeFilter: string |null = null
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
      
      if(this.categoryName == undefined){
        this.router.navigate(['/none'])
      }
    }) 
    this.route.queryParamMap.subscribe(params => {
      this.sizeFilter = params.get('filter')
      if(this.categoryId)
      this.pets = this.petService.getPetsByCategory(this.categoryId) 
    })   
  }
  getFilterName(){
    if(this.sizeFilter == 'big'){
      return 'Grande'
    }else{
      if(this.sizeFilter == 'regular'){
        return 'Mediano'
      }else{
        if(this.sizeFilter == 'small'){
          return 'Pequeño'
        }else{return false}
      }
    }
  }
}
