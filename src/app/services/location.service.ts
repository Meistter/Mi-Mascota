import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }
  //Base de datos de Ubicaciones
  locations :  any =  ['Barquisimeto','Valencia','Caracas', 'Fort Worth']
  
  getLocations(){
    return this.locations
  }
}
