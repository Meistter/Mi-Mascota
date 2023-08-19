import { Component, OnInit } from '@angular/core';
import { Pet, PetRescue } from 'src/app/models/pet';
import { LocationService } from 'src/app/services/location.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-rescue-pets',
  templateUrl: './rescue-pets.component.html',
  styleUrls: ['./rescue-pets.component.scss']
})
export class RescuePetsComponent implements OnInit{
  constructor(private petService: PetsService, private locationService: LocationService){}
  pets : PetRescue[] = []
  petForFilter : PetRescue[] = []
  ngOnInit(): void {    
    //solo para pruebas
    setTimeout(() => {
      this.pets = this.petService.getRescuePets()
      this.locationService.location$.subscribe(location => {
        if (location) {
          if (location == 'Cualquiera') {
            this.petForFilter = this.pets            
          } else {            //   // this.getLocation(location)
            this.petForFilter = this.pets.filter(rsp => rsp.location == location)            
          }
        } else {
          this.petForFilter = this.pets          
        }})
    }, 1000);
  }
}
