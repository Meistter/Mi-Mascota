import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetCategoryComponent } from './pet-category/pet-category.component';

const routes: Routes = [
  {
    path: '',
    component: PetCategoryComponent,
    title: 'Categoria'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetCategoriesRoutingModule { }
