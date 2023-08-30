import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  {
    path: '',
    component: ComingSoonComponent,
    title: 'En Desarrollo'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComingSoonRoutingModule { }
