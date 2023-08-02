import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetRescueComponent } from './pet-rescue/pet-rescue.component';

const routes: Routes = [
  {
    path: '',
    component: PetRescueComponent,
    title: 'Rescatar Mascota'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRescueRoutingModule { }
