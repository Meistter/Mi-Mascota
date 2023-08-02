import { Component, Input } from '@angular/core';
import { PetRescue } from 'src/app/models/pet';

@Component({
  selector: 'app-rescue-cards',
  templateUrl: './rescue-cards.component.html',
  styleUrls: ['./rescue-cards.component.scss']
})
export class RescueCardsComponent {

  constructor(){}
  @Input() pets : PetRescue[] = []
  @Input() lostDetail : boolean = false
}
