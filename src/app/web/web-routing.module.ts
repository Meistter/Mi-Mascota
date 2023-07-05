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
      {
        path: 'location',
       
        loadChildren: () => import('./modules/location/location.module').then((m) => m.LocationModule),
      },
      {
        path: 'terms',
       
        loadChildren: () => import('./modules/terms/terms.module').then((m) => m.TermsModule),
      }, 
       {
        path: '**',
       
        loadChildren: () => import('../not-found/not-found.module').then((m) => m.NotFoundModule),
      },    
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
