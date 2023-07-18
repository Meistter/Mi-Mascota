import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbuseReportRoutingModule } from './abuse-report-routing.module';
import { AbuseReportComponent } from './abuse-report/abuse-report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AbuseReportComponent
  ],
  imports: [
    CommonModule,
    AbuseReportRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class AbuseReportModule { }
