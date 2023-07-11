import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit{

  constructor(private route: ActivatedRoute,){}

  petId: string | null = null

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.petId = params.get('id')
    })
     
  }
}
