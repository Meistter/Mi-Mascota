import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {

  locations = [{value:'Barquisimeto'},{value: 'Valencia'},{value: 'Maracaibo'},{value: 'Caracas'},{value: 'Texas'}]
  selected = 'Barquisimeto';

  btnIzquierda : boolean = false
  btnDerecha : boolean = true

  @Output() switcherEvent = new EventEmitter<string>();

  activarBtnIzquierda(){
    this.btnIzquierda = true
    this.btnDerecha = false
    this.sendSwitchMessage()
  }
  activarBtnDerecha(){
    this.btnIzquierda = false
    this.btnDerecha = true
    this.sendSwitchMessage()
  }

  sendSwitchMessage() {
    this.switcherEvent.emit();
  }

}
