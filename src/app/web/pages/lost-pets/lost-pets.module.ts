import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LostPetsRoutingModule } from './lost-pets-routing.module';
import { LostPetsComponent } from './lost-pets/lost-pets.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LostPetsComponent
  ],
  imports: [
    CommonModule,
    LostPetsRoutingModule,
    SharedModule
  ]
})
export class LostPetsModule { }
