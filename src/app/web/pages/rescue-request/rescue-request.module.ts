import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RescueRequestRoutingModule } from './rescue-request-routing.module';
import { RescueRequestComponent } from './rescue-request/rescue-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    RescueRequestComponent
  ],
  imports: [
    CommonModule,
    RescueRequestRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class RescueRequestModule { }
