import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiveAdoptionRoutingModule } from './give-adoption-routing.module';
import { GiveAdoptionComponent } from './give-adoption/give-adoption.component';


@NgModule({
  declarations: [
    GiveAdoptionComponent
  ],
  imports: [
    CommonModule,
    GiveAdoptionRoutingModule
  ]
})
export class GiveAdoptionModule { }
