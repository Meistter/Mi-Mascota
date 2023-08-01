import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { LocationService } from 'src/app/services/location.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private locationService: LocationService, private petService: PetsService, private route: ActivatedRoute){}
  
  pets : Pet[] = [] 
  searchQuery : any  
  locations = []
  location = 'Cualquiera'
  statusMenu = false
  i = 0
  ngOnInit(): void {
    this.locations = this.locationService.getLocations()
    this.route.queryParamMap.subscribe(params => {
      this.searchQuery = params.get('query')      
        // this.petService.getSearch(this.searchQuery).subscribe(data=>{this.finishPage = data.total_pages,this.resultados = data.results})
    })        
    this.pets = this.petService.getSearch(this.searchQuery) //ejemplo, aqui deberia traer lo q me retorna el back al mandarle el query
  }

  changeStatusMenu(){
    this.statusMenu = !this.statusMenu  
  }

  updateLocation(){
    // this.location = this.locations[0]
  }
}
