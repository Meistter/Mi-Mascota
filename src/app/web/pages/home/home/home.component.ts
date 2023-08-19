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
  petForFilter: Pet[] = []
  petsRescue: PetRescue[] = []
  petsRescueForFilter: PetRescue[] = []
  switcher = true

  ngOnInit(): void {
    setTimeout(() => {
      this.pets = this.petService.getAdoptionPets() //al usar api no debo hacer 4 solicitudes de la misma información   
      this.petsRescue = this.petService.getRescuePets()
      this.locationService.location$.subscribe(location => {
        if (location) {
          if (location == 'Cualquiera') {
            this.petForFilter = this.pets
            this.petsRescueForFilter = this.petsRescue
          } else {            //   // this.getLocation(location)
            this.petForFilter = this.pets.filter(rsp => rsp.location == location)
            this.petsRescueForFilter = this.petsRescue.filter(rsp => rsp.location == location)
          }
        } else {
          this.petForFilter = this.pets
          this.petsRescueForFilter = this.petsRescue
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
