import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveRescueRoutingModule } from './give-rescue-routing.module';
import { GiveRescueComponent } from './give-rescue/give-rescue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    GiveRescueComponent
  ],
  imports: [
    CommonModule,
    GiveRescueRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class GiveRescueModule { }
