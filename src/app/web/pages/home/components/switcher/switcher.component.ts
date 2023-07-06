import { Component } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {

  locations = [{value:'Barquisimeto'},{value: 'Valencia'},{value: 'Maracaibo'},{value: 'Caracas'}]
  selected = 'Barquisimeto';
}
