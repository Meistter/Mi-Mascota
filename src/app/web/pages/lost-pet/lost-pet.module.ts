import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LostPetRoutingModule } from './lost-pet-routing.module';
import { LostPetComponent } from './lost-pet/lost-pet.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../../shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    LostPetComponent
  ],
  imports: [
    CommonModule,
    LostPetRoutingModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    SwiperModule,
    NgxSkeletonLoaderModule
  ]
})
export class LostPetModule { }
