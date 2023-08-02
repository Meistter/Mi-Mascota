import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LostPetRoutingModule } from './lost-pet-routing.module';
import { LostPetComponent } from './lost-pet/lost-pet.component';


@NgModule({
  declarations: [
    LostPetComponent
  ],
  imports: [
    CommonModule,
    LostPetRoutingModule
  ]
})
export class LostPetModule { }
