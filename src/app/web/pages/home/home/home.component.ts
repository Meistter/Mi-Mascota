import { Component, OnInit } from '@angular/core';
import { Pet, PetRescue } from 'src/app/models/pet';
import { LocationService } from 'src/app/services/location.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private petService: PetsService, private locationService: LocationService) { }
  pets: Pet[] = []
  petsRescue: PetRescue[] = []
  switcher = true

  ngOnInit(): void {
    setTimeout(() => {
      
      this.petsRescue = this.petService.getRescuePets()
      this.locationService.location$.subscribe(location => {
        if (location) {
          this.pets = this.petService.getAdoptionPets() 
        }
      })
    }, 700);

  }
  switchComponents() {
    this.switcher = !this.switcher
  }
  getLocation(location: string | null) {
    if (location) {

    }

  }
}
