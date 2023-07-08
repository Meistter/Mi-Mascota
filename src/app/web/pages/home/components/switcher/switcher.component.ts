import { Component } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {

  locations = [{value:'Barquisimeto'},{value: 'Valencia'},{value: 'Maracaibo'},{value: 'Caracas'}]
  selected = 'Barquisimeto';

  btnIzquierda : boolean = false
  btnDerecha : boolean = true

  activarBtnIzquierda(){
    this.btnIzquierda = true
    this.btnDerecha = false
  }
  activarBtnDerecha(){
    this.btnIzquierda = false
    this.btnDerecha = true
  }

}
