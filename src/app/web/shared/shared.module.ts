import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedComponent } from './related/related.component';
import { RelatedCardComponent } from './related-card/related-card.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    RelatedComponent,
    RelatedCardComponent,
    CardComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatCardModule 
  ],
  exports: [
    RelatedComponent
  ]
})
export class SharedModule { }
