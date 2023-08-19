import { Component, OnInit } from '@angular/core';
import { Pet, PetRescue } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-lost-pets',
  templateUrl: './lost-pets.component.html',
  styleUrls: ['./lost-pets.component.scss']
})
export class LostPetsComponent implements OnInit{
  constructor(private petService: PetsService){}
  lostDetail = true
  pets : PetRescue[] = []
  ngOnInit(): void {
    setTimeout(() => {
      this.pets = this.petService.getLostPets()
    }, 1000);
    
  }
}