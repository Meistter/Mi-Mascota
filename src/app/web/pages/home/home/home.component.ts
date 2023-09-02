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
  emptyAdoptMessage = false
  emptyRescueMessage = false
  ngOnInit(): void {
    setTimeout(() => {
      
      
      this.locationService.location$.subscribe(location => {
        if (location) {
          this.pets = this.petService.getAdoptionPets() 
          this.petsRescue = this.petService.getRescuePets()
          if(this.pets.length == 0 ){
            this.emptyAdoptMessage = true
          }else{
            this.emptyAdoptMessage = false
          }
          if(this.petsRescue.length == 0 ){
            this.emptyRescueMessage = true
          }else{
            this.emptyRescueMessage = false
          }

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
