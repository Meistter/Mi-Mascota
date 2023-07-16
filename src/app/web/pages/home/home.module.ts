import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    SwitcherComponent,
    CardComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,    
    MatIconModule,    
    MatCardModule,  
    MatSelectModule,
    
  ]
})
export class HomeModule { }
