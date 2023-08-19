import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  location$ = new BehaviorSubject<string | null>(null)
  constructor() { }
  //Base de datos de Ubicaciones
  locations :  any =  ['Cualquiera','Barquisimeto','Valencia','Caracas', 'Maracaibo', 'Maracay', 'Fort Worth', 'Dallas']
  
  getLocations(){
    return this.locations
  }
}
