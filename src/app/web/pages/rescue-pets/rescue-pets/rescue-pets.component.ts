import { Component, OnInit } from '@angular/core';
import { Pet, PetRescue } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-rescue-pets',
  templateUrl: './rescue-pets.component.html',
  styleUrls: ['./rescue-pets.component.scss']
})
export class RescuePetsComponent implements OnInit{
  constructor(private petService: PetsService){}
  pets : PetRescue[] = []
  ngOnInit(): void {
    this.pets = this.petService.getRescuePets()
  }
}
