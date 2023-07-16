import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent implements OnInit{

  constructor(private petService: PetsService){}
  relatedPets : Pet[] = []
  related : Pet[] = []
  ngOnInit(): void {
    this.relatedPets = this.petService.getRelatedPet() //no estoy usando asincronismo
    this.related = [...this.relatedPets].reverse()
    
    
  }
}
