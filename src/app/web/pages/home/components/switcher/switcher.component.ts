import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent implements OnInit {

  constructor(private locationService: LocationService) { }
  locations = []
  ngOnInit(): void {
    this.locations = this.locationService.getLocations()
    this.locationService.location$.subscribe(location=>{if(location){this.locationList.setValue(location)}else{this.locationList.setValue('Cualquiera')}})
    
  }
  btnIzquierda: boolean = true
  btnDerecha: boolean = false

  locationList = new FormControl('')

  @Output() switcherEvent = new EventEmitter<string>();

  activarBtnIzquierda() {
    if (!this.btnIzquierda && this.btnDerecha) {
      this.sendSwitchMessage()
    }
    this.btnIzquierda = true
    this.btnDerecha = false

  }
  activarBtnDerecha() {
    if (!this.btnDerecha && this.btnIzquierda) {
      this.sendSwitchMessage()
    }
    this.btnIzquierda = false
    this.btnDerecha = true
  }

  sendSwitchMessage() {
    this.switcherEvent.emit();
  }
  sendSwitchLocationMessage() {
    if (this.locationList.value)
      this.locationService.location$.next(this.locationList.value)
  }

}
