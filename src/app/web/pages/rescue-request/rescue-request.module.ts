import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RescueRequestRoutingModule } from './rescue-request-routing.module';
import { RescueRequestComponent } from './rescue-request/rescue-request.component';


@NgModule({
  declarations: [
    RescueRequestComponent
  ],
  imports: [
    CommonModule,
    RescueRequestRoutingModule
  ]
})
export class RescueRequestModule { }
