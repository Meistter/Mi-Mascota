import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './pet/pet.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    PetComponent
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    MaterialModule,
    SwiperModule,
    SharedModule
  ]
})
export class PetModule { }
