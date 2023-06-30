import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
       },
      // {
      //   path: 'products',
      //   loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      // },      
    ]
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }