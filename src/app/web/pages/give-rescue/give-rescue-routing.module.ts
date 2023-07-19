import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveRescueComponent } from './give-rescue/give-rescue.component';

const routes: Routes = [
  {
    path: '',
    component: GiveRescueComponent,
    title: 'Mascota Callejera'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiveRescueRoutingModule { }
