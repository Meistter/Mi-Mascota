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
  ngOnInit(): void {
    setTimeout(() => {
      this.pets = this.petService.getLostPets()
      this.locationService.location$.subscribe(location => {
        if (location) {
          this.pets = this.petService.getLostPets()
        }})
    }, 1000);
    
  }
}
