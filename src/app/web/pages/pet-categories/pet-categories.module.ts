import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetCategoriesRoutingModule } from './pet-categories-routing.module';
import { PetCategoryComponent } from './pet-category/pet-category.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    PetCategoryComponent
  ],
  imports: [
    CommonModule,
    PetCategoriesRoutingModule,
    SharedModule
  ]
})
export class PetCategoriesModule { }
