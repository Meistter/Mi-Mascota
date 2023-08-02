import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostPetComponent } from './lost-pet/lost-pet.component';

const routes: Routes = [
  {
    path: '',
    component: LostPetComponent,
    title: 'Busqueda'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LostPetRoutingModule { }
