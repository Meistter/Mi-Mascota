import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RescuePetsComponent } from './rescue-pets/rescue-pets.component';

const routes: Routes = [
  {
    path: '',
    component: RescuePetsComponent,
    title: 'Rescatar Mascotas'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RescuePetsRoutingModule { }
