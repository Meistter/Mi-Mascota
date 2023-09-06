import { Component, Input } from '@angular/core';
import { PetRescue } from 'src/app/models/pet';

@Component({
  selector: 'app-lost-cards',
  templateUrl: './lost-cards.component.html',
  styleUrls: ['./lost-cards.component.scss']
})
export class LostCardsComponent {

  constructor(){}
  @Input() pets : PetRescue[] = []
  @Input() lostDetail : boolean = false
  numbers = [1,2,3,4,5,6]
}