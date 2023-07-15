import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LostPetsRoutingModule } from './lost-pets-routing.module';
import { LostPetsComponent } from './lost-pets/lost-pets.component';


@NgModule({
  declarations: [
    LostPetsComponent
  ],
  imports: [
    CommonModule,
    LostPetsRoutingModule
  ]
})
export class LostPetsModule { }
