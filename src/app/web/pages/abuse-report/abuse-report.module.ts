import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbuseReportRoutingModule } from './abuse-report-routing.module';
import { AbuseReportComponent } from './abuse-report/abuse-report.component';


@NgModule({
  declarations: [
    AbuseReportComponent
  ],
  imports: [
    CommonModule,
    AbuseReportRoutingModule
  ]
})
export class AbuseReportModule { }
