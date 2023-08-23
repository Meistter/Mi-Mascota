import { Injectable } from '@angular/core';
import { Pet, PetRescue } from '../models/pet';
import adopt_pets from '../../assets/json/adopt_pets.json';
import rescue_pets from '../../assets/json/rescue_pets.json';
import lost_pets from '../../assets/json/lost_pets.json';
import search_pets from '../../assets/json/search_pets.json';
import { HttpClient } from '@angular/common/http';
import { LocationService } from './location.service';
@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http: HttpClient, private locationService: LocationService) { }
  //Base de datos de las mascotas
  adoptionPets: Pet[] = adopt_pets
  rescuePets: PetRescue[] = rescue_pets
  lostPets: PetRescue[] = lost_pets
  searchPets: Pet[] = search_pets
  category_dog_pets: Pet[] = adopt_pets
  //Funciones a usar mientras no exista backend
  getAdoptionPet(id: string) {
    return this.adoptionPets.find(rsp => rsp.id == id)
  }
  getAdoptionPets() {
    if (this.location() != 'Cualquiera') {
      return this.adoptionPets.filter(rsp => rsp.location == this.location())
    } else { return this.adoptionPets }

  }
  getRescuePet(id: string) {
    return this.rescuePets.find(rsp => rsp.id == id)
  }
  getRescuePets() {
    if (this.location() != 'Cualquiera') {
      return this.rescuePets.filter(rsp => rsp.location == this.location())
    } else { return this.rescuePets }
  }
  getRelatedPets(categoryId: string) {
    const categoryFiltered = this.adoptionPets.filter(rsp => rsp.category == categoryId)

    if (this.location() != 'Cualquiera') {
      return categoryFiltered.filter(rsp => rsp.location == this.location())
    } else {
      return categoryFiltered
    }

  }
  getRelatedRescuePets(categoryId: string) { //debemos filtrar por categoria antes de retornar   
    const filtered = this.rescuePets.filter(rsp => rsp.category == categoryId)
    if (this.location() != 'Cualquiera') {
      return filtered.filter(rsp => rsp.location == this.location())
    } else {
      return filtered
    }
  }
  getRelatedLostPets(categoryId: string) { //debemos filtrar por categoria antes de retornar  
    const filtered = this.lostPets.filter(rsp => rsp.category == categoryId)
    if (this.location() != 'Cualquiera') {
      return filtered.filter(rsp => rsp.location == this.location())
    } else {
      return filtered
    }
  }
  getLostPets() {
    if (this.location() != 'Cualquiera') {
      return this.lostPets.filter(rsp => rsp.location == this.location())
    } else { return this.lostPets }
  }
  getLostPet(id: string) {
    return this.lostPets.find(rsp => rsp.id == id)
  }
  getSearch(query: string) {
    if (this.location() != 'Cualquiera') {
      return this.searchPets.filter(rsp => rsp.location == this.location())
    } else {
      return this.searchPets
    }
  }
  getPetsByCategory(id: string) {//ejemplo aqui deberia usar el id, enviarlo al back y obtener la categoria
    const filtered = this.category_dog_pets.filter(rsp => rsp.category == id)
    if (this.location() != 'Cualquiera') {
      return filtered.filter(rsp => rsp.location == this.location())
    } else {
      return filtered
    }
  }
  private location() {
    return this.locationService.location$.getValue()
  }
}
