import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }
  //Base de datos de Ubicaciones
  locations :  any =  ['Barquisimeto','Valencia','Caracas', 'Maracaibo', 'Maracay', 'Fort Worth', 'Dallas']
  
  getLocations(){
    return this.locations
  }
}
