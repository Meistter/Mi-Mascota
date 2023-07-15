import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from '../pages/pet/pet/pet.component';
import { RelatedComponent } from './related/related.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RelatedCardComponent } from './related-card/related-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RelatedComponent,
    RelatedCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule 
  ],
  exports: [
    RelatedComponent
  ]
})
export class SharedModule { }
