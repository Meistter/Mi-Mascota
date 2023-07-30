import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { CategoryService } from 'src/app/services/category.service';
import { LocationService } from 'src/app/services/location.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pet-category',
  templateUrl: './pet-category.component.html',
  styleUrls: ['./pet-category.component.scss']
})
export class PetCategoryComponent {

  constructor(private locationService: LocationService, private petService: PetsService, private route: ActivatedRoute,private router: Router, private categoryService: CategoryService){}
  
  pets : Pet[] = []
  MainPets : Pet[] = []
  locations = []
  statusMenu = false
  statusCategoryMenu = false
  statusSizeMenu = false
  categoryName : string | undefined= undefined
  categoryId : string | null = null
  sizeFilter: string |null = null
  breed = 'Perro'
  location = 'Cualquiera'
  size = 'Pequeño'
  i = 0
  
  ngOnInit(): void {

   this.locations = this.locationService.getLocations()

    this.route.paramMap.subscribe(params=>{
      this.categoryId = params.get('id')           
      if(this.categoryId){
        this.MainPets = this.petService.getPetsByCategory(this.categoryId) 
        this.pets = this.MainPets
        this.categoryName = this.categoryService.getCategoryName(this.categoryId)    
                      
      }
      
      if(this.categoryName == undefined){
        this.router.navigate(['/none'])
      }

      this.route.queryParamMap.subscribe(params => {
        this.sizeFilter = params.get('filter')    
        if(this.sizeFilter !== 'all')
        this.pets = this.MainPets.filter(rsp=> rsp.size == this.sizeFilter)  
        else{this.pets = this.MainPets}
      }) 
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
        }else{return 'Todos'}
      }
    }
  }
  changeStatusMenu(){
    this.statusMenu = !this.statusMenu  
  }
  changeStatusCategoryMenu(){
    this.statusCategoryMenu = !this.statusCategoryMenu  
  }
  changeStatusSizeMenu(){
    this.statusSizeMenu = !this.statusSizeMenu  
  }
  updateLocation(){
    this.location = this.locations[0]
  }
 
}
