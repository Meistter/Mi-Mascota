import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {

  locations = [{value:'Barquisimeto'},{value: 'Valencia'},{value: 'Caracas'},{value: 'Texas'}]
  selected = 'Barquisimeto';
  btnIzquierda : boolean = false
  btnDerecha : boolean = true

  locationList = new FormControl('')  
  
  @Output() switcherEvent = new EventEmitter<string>();
  @Output() switcherLocationEvent = new EventEmitter<string>();

  activarBtnIzquierda(){
    if(!this.btnIzquierda && this.btnDerecha){
      this.sendSwitchMessage()
    }
    this.btnIzquierda = true
    this.btnDerecha = false
    
  }
  activarBtnDerecha(){
    if(!this.btnDerecha && this.btnIzquierda){
      this.sendSwitchMessage()
    }
    this.btnIzquierda = false
    this.btnDerecha = true
  }

  sendSwitchMessage() {
    this.switcherEvent.emit();
  }
  sendSwitchLocationMessage() {
    if(this.locationList.value)    
    this.switcherLocationEvent.emit(this.locationList.value);
  }

}
