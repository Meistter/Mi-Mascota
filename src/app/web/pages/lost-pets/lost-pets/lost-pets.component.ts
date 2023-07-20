import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-lost-pets',
  templateUrl: './lost-pets.component.html',
  styleUrls: ['./lost-pets.component.scss']
})
export class LostPetsComponent implements OnInit{
  constructor(private petService: PetsService){}
  pets : Pet[] = []
  ngOnInit(): void {
    this.pets = this.petService.getLostPets()
  }
}
