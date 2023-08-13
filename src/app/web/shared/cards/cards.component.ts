import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html', 
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{

  constructor(){}
  @Input() pets : Pet[] = []
  numbers = [1,2,3,4,5,6]
  
  ngOnInit(): void {
    console.log(this.pets.length);
    
  }
}
