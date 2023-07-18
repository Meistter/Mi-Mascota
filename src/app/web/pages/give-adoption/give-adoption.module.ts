import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiveAdoptionRoutingModule } from './give-adoption-routing.module';
import { GiveAdoptionComponent } from './give-adoption/give-adoption.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    GiveAdoptionComponent
  ],
  imports: [
    CommonModule,
    GiveAdoptionRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class GiveAdoptionModule { }
