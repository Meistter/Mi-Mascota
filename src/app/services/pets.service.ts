import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';
import adopt_pets from '../../assets/json/adopt_pets.json';
import rescue_pets from '../../assets/json/rescue_pets.json';
import lost_pets from '../../assets/json/lost_pets.json';
import search_pets from '../../assets/json/search_pets.json';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PetsService{

  constructor(private http:HttpClient) { }
  
  //Base de datos de las mascotas
  adoptionPets: Pet[] = adopt_pets
  rescuePets: Pet[] = rescue_pets
  lostPets: Pet[] = lost_pets
  searchPets: Pet[] = search_pets

  //Funciones a usar mientras no exista backend
  getAdoptionPet(id:string){    
    return this.adoptionPets.find(rsp=> rsp.id == id)
  }
  getAdoptionPets(){   
    return this.adoptionPets
  }
  getRescuePet(id:string){
    return this.rescuePets.find(rsp=> rsp.id == id)
  }
  getRescuePets(){
    return this.rescuePets
  }
  //devolemos el objeto completo como ejemplo
  getRelatedPet(){ //debemos filtrar por categoria antes de retornar
    return this.adoptionPets
  }
  getLostPets(){
    return this.lostPets
  }

  getSearch(query : string){
    return this.searchPets //ejemplo aqui deberia usar el query, enviarlo al back
  }

}
