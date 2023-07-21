import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pet-category',
  templateUrl: './pet-category.component.html',
  styleUrls: ['./pet-category.component.scss']
})
export class PetCategoryComponent {

  constructor(private petService: PetsService, private route: ActivatedRoute){}
  
  pets : Pet[] = []
  breed = 'Perro'
  location = 'Barquisimeto'
  size = 'Pequeño'
  petSearchQuery : any 

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.petSearchQuery = params.get('query')
      
        // this.petService.getSearch(this.searchQuery).subscribe(data=>{this.finishPage = data.total_pages,this.resultados = data.results})
    })        
    this.pets = this.petService.getSearch(this.petSearchQuery) //ejemplo, aqui deberia traer lo q me retorna el back al mandarle el query
  }
}
