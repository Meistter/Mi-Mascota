import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit{

  constructor(private route: ActivatedRoute, private petService:PetsService){}

  petId: string | null = null
  pet :any={}
  // : Pet = {id: '0',
  // name: 'string',
  // description: 'string',
  // age: 0,
  // health: 'string',
  // vaccinated: false,
  // location: 'string',
  // photos: [{url_mobile:'', url_full:'',alt:''}]
  // }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.petId = params.get('id')
    })
    if(this.petId){
    this.pet = this.petService.getAdoptionPet(this.petId)
    }
    
  }
}
