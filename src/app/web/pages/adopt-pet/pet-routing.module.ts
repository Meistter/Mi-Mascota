import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetComponent } from './pet/pet.component';

const routes: Routes = [
  {
    path: '',
    component: PetComponent,
    title: 'Mascota'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
