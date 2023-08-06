import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategoryName(id: string) {
    if (id == '0') {
      return 'Perro'
    } else {
      if (id == '1') {
        return 'Gato'
      } else {
        if (id == '2') {
          return 'Ave'
        } else {
          if (id == '3') {
            return 'Tortuga'
          } if (id == '4') {
            return 'Conejo'
          } else {
            return undefined
          }
        }
      }
    }
    //la api me retorna el nombre basado en el id de la categoria
  }
}
