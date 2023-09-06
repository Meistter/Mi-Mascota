import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  location$ = new BehaviorSubject<string | null>('Cualquiera')
  constructor() { }
  //Base de datos de Ubicaciones
  locations :  any =  ['Cualquiera','Barquisimeto','Valencia','Caracas', 'Maracaibo', 'Maracay', 'Fort Worth', 'Dallas']
  
  getLocations(){
    return this.locations
  }

  setLocation(location: string){
    localStorage.setItem('mi-mascota-location',location)
    this.location$.next(location)
  }
  getLocation(){
    const location = localStorage.getItem('mi-mascota-location')
    if(location){
      return location
    }else{
      return this.location$.getValue()
    }
  }
}
