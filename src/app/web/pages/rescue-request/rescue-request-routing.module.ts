import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RescueRequestComponent } from './rescue-request/rescue-request.component';

const routes: Routes = [
  {
    path: '',
    component: RescueRequestComponent,
    title: 'Solicitar Rescate'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RescueRequestRoutingModule { }
