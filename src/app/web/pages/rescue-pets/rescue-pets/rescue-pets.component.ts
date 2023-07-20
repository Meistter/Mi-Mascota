import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-rescue-pets',
  templateUrl: './rescue-pets.component.html',
  styleUrls: ['./rescue-pets.component.scss']
})
export class RescuePetsComponent implements OnInit{
  constructor(private petService: PetsService){}
  pets : Pet[] = []
  ngOnInit(): void {
    this.pets = this.petService.getRescuePets()
  }
}
