import { Component, OnInit } from '@angular/core';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{
  constructor(private locationService: LocationService){}
  location : string | null = ''
  ngOnInit(): void {
   this.location =  this.locationService.getLocation()
   if(this.location){
    this.locationService.location$.next(this.location)
   }
  }
}
//* Estamos Cargando la ubicación almacenada en Local storage a la APP
