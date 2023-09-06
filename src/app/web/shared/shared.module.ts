import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedComponent } from './related-cards/related.component';
import { RelatedCardComponent } from './related-card/related-card.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { RescueCardsComponent } from './rescue-cards/rescue-cards.component';
import { RescueCardComponent } from './rescue-card/rescue-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LostCardComponent } from './lost-card/lost-card.component';
import { LostCardsComponent } from './lost-cards/lost-cards.component';


@NgModule({
  declarations: [
    RelatedComponent,
    RelatedCardComponent,
    CardComponent,
    CardsComponent,
    RescueCardsComponent,
    RescueCardComponent,
    LostCardComponent,
    LostCardsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    RelatedComponent,
    CardComponent,
    CardsComponent,
    RescueCardsComponent,
    RescueCardComponent,
    LostCardComponent,
    LostCardsComponent
  ]
})
export class SharedModule { }
