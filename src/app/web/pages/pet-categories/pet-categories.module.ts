import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetCategoriesRoutingModule } from './pet-categories-routing.module';
import { PetCategoryComponent } from './pet-category/pet-category.component';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PetCategoryComponent
  ],
  imports: [
    CommonModule,
    PetCategoriesRoutingModule,
    SharedModule,
    MatIconModule
  ]
})
export class PetCategoriesModule { }
