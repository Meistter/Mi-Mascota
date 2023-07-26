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
  petsRescue : PetRescue[] = []
  switcher = false
  ngOnInit(): void {
    this.pets = this.petService.getAdoptionPets()
    this.petsRescue = this.petService.getRescuePets()
  }
  switchComponents(){
    this.switcher = !this.switcher
  }
}
