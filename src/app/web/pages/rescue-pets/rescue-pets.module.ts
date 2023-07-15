import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RescuePetsRoutingModule } from './rescue-pets-routing.module';
import { RescuePetsComponent } from './rescue-pets/rescue-pets.component';


@NgModule({
  declarations: [
    RescuePetsComponent
  ],
  imports: [
    CommonModule,
    RescuePetsRoutingModule
  ]
})
export class RescuePetsModule { }
