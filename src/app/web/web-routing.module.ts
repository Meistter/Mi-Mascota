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
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'report',  
        loadChildren: () => import('./pages/abuse-report/abuse-report.module').then((m) => m.AbuseReportModule),
      },
      {
        path: 'contact',  
        loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'give-adoption',  
        loadChildren: () => import('./pages/give-adoption/give-adoption.module').then((m) => m.GiveAdoptionModule),
      },
      {
        path: 'give-rescue',  
        loadChildren: () => import('./pages/give-rescue/give-rescue.module').then((m) => m.GiveRescueModule),
      },
      {
        path: 'lost',  
        loadChildren: () => import('./pages/lost-pets/lost-pets.module').then((m) => m.LostPetsModule),
      },
      {
        path: 'rescue',  
        loadChildren: () => import('./pages/rescue-pets/rescue-pets.module').then((m) => m.RescuePetsModule),
      },
      {
        path: 'rescue-request',  
        loadChildren: () => import('./pages/rescue-request/rescue-request.module').then((m) => m.RescueRequestModule),
      },
      {
        path: 'search',  
        loadChildren: () => import('./pages/search/search.module').then((m) => m.SearchModule),
      },
      {
        path: 'pet-category/:id',  
        loadChildren: () => import('./pages/pet-categories/pet-categories.module').then((m) => m.PetCategoriesModule),
      },
      {
        path: 'pet-rescue/:id',  
        loadChildren: () => import('./pages/rescue-pet/pet-rescue.module').then((m) => m.PetRescueModule),
      },

    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
