import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveLostComponent } from './give-lost/give-lost.component';

const routes: Routes = [
  {
    path: '',
    component: GiveLostComponent,
    title: 'Mascota Extraviada'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiveLostRoutingModule { }
