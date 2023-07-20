import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private petService: PetsService){}
  pets : Pet[] = []
  ngOnInit(): void {
    this.pets = this.petService.getAdoptionPets()
  }
}
