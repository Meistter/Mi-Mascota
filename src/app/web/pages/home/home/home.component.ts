import { Component, OnInit } from '@angular/core';
import { Pet, PetRescue } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private petService: PetsService){}
  pets : Pet[] = []
  petForFilter : Pet[] = []
  petsRescue : PetRescue[] = []
  petsRescueForFilter : PetRescue[] = []
  switcher = true
  ngOnInit(): void {
    this.pets = this.petService.getAdoptionPets() //al usar api no debo hacer 4 solicitudes de la misma información
   
    setTimeout(() => {
      this.petForFilter = this.petService.getAdoptionPets()
    }, 10000);
    this.petsRescue = this.petService.getRescuePets()
    this.petsRescueForFilter = this.petService.getRescuePets()
  }
  switchComponents(){
    this.switcher = !this.switcher
  }
  switchLocation($event : string){
    this.petForFilter = this.pets.filter(rsp=> rsp.location == $event)    
    this.petsRescueForFilter = this.petsRescue.filter(rsp=> rsp.location == $event)   
  }
}
