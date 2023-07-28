import { Injectable } from '@angular/core';
import { Pet, PetRescue } from '../models/pet';
import adopt_pets from '../../assets/json/adopt_pets.json';
import rescue_pets from '../../assets/json/rescue_pets.json';
import lost_pets from '../../assets/json/lost_pets.json';
import search_pets from '../../assets/json/search_pets.json';
import category_dog_pets from '../../assets/json/category_dog_pets.json';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PetsService{

  constructor(private http:HttpClient) { }
  
  //Base de datos de las mascotas
  adoptionPets: Pet[] = adopt_pets
  rescuePets: PetRescue[] = rescue_pets
  lostPets: Pet[] = lost_pets
  searchPets: Pet[] = search_pets
  category_dog_pets: Pet[] = category_dog_pets
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
  getRelatedPets(categoryId: string){ //debemos filtrar por categoria antes de retornar
    // return this.adoptionPets
    return this.adoptionPets.filter(rsp=> rsp.category == categoryId)
  }
  getRelatedRescuePets(categoryId: string){ //debemos filtrar por categoria antes de retornar
    // return this.adoptionPets
    return this.rescuePets.filter(rsp=> rsp.category == categoryId)
  }
  getLostPets(){
    return this.lostPets
  }

  getSearch(query : string){
    return this.searchPets //ejemplo aqui deberia usar el query, enviarlo al back
  }
  getPetsByCategory(id : string){
    return this.category_dog_pets //ejemplo aqui deberia usar el id, enviarlo al back y obtener la categoria
  }

}
