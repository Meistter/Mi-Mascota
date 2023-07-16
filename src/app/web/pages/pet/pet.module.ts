import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './pet/pet.component';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    PetComponent
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    SwiperModule,
    SharedModule,
    MatIconModule,
    MatCardModule
  ]
})
export class PetModule { }
