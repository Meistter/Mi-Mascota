import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostPetsComponent } from './lost-pets/lost-pets.component';

const routes: Routes = [
  {
    path: '',
    component: LostPetsComponent,
    title: 'Mascotas Perdidas'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LostPetsRoutingModule { }
