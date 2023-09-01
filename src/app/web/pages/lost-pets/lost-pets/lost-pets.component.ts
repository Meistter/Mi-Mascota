import { Component, OnInit } from '@angular/core';
import { Pet, PetRescue } from 'src/app/models/pet';
import { LocationService } from 'src/app/services/location.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-lost-pets',
  templateUrl: './lost-pets.component.html',
  styleUrls: ['./lost-pets.component.scss']
})
export class LostPetsComponent implements OnInit{
  constructor(private petService: PetsService, private locationService: LocationService){}
  lostDetail = true
  pets : PetRescue[] = []
  petForFilter : PetRescue[] = []
  emptyMessage = false
  ngOnInit(): void {
    setTimeout(() => {
      this.pets = this.petService.getLostPets()
      this.locationService.location$.subscribe(location => {
        if (location) {
          this.pets = this.petService.getLostPets()
          if(this.pets.length == 0){
            this.emptyMessage = true
          }else{
            this.emptyMessage = false
          }
        }})
    }, 1000);
    
  }
}
