import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-VE'},
  ],
})
export class RegisterModule { }
