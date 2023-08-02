import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { PetRescueRoutingModule } from './pet-rescue-routing.module';
import { PetRescueComponent } from './pet-rescue/pet-rescue.component';
import { SharedModule } from '../../shared/shared.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    PetRescueComponent
  ],
  imports: [
    CommonModule,
    PetRescueRoutingModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    SwiperModule
  ]
})
export class PetRescueModule { }
