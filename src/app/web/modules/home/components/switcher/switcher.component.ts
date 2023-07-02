import { Component } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {

  locations = [{value:'Barquisimeto'},{value: 'Texas'}]
  selected = 'Barquisimeto';
}
