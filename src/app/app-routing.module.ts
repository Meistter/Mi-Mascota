import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./web/web.module').then((m) => m.WebModule),
  },
  {
    path: 'admin',
   // canActivate: [ RedirectGuard ],
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
