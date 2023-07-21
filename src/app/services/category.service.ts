import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService{

  constructor(private http:HttpClient) { }
  
  getCategoryName(id: string){
    if(id == '1'){
      return 'Perro'
    }else{
      if(id == '2'){
        return 'Gato'
      }else{
        if(id == '3'){
          return 'Ave'
        }else{
          if(id == '4'){
            return 'Tortuga'
          }else{
            return 'Conejo'
          }
        }
      }
    }
     //la api me retorna el nombre basado en el id de la categoria
  }

}
