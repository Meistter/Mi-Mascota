import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html', 
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  constructor(){}
  @Input() pets : Pet[] = []
  numbers = [1,2,3,4,5,6]
 
}
