import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbuseReportComponent } from './abuse-report/abuse-report.component';

const routes: Routes = [
  {
    path: '',
    component: AbuseReportComponent,
    title: 'Reportar Abuso'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbuseReportRoutingModule { }
