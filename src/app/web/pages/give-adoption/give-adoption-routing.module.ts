import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveAdoptionComponent } from './give-adoption/give-adoption.component';

const routes: Routes = [
  {
    path: '',
    component: GiveAdoptionComponent,
    title: 'Dar en Adopción'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiveAdoptionRoutingModule { }
