import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveLostRoutingModule } from './give-lost-routing.module';
import { GiveLostComponent } from './give-lost/give-lost.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    GiveLostComponent
  ],
  imports: [
    CommonModule,
    GiveLostRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class GiveLostModule { }
