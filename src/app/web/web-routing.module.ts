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
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'location',       
        loadChildren: () => import('./pages/location/location.module').then((m) => m.LocationModule),
      },
      {
        path: 'terms',       
        loadChildren: () => import('./pages/terms/terms.module').then((m) => m.TermsModule),
      },
      {
        path: 'pet/:id',       
        loadChildren: () => import('./pages/pet/pet.module').then((m) => m.PetModule),
      },
      {
        path: 'auth',  
        loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
      }  
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
