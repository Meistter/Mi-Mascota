import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent{

  @Input() related : any = []
  @Input() lostDetail : boolean = false
  
}
