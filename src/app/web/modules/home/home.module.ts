import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { MaterialModule } from 'src/app/material/material.module';


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
    MaterialModule
  ]
})
export class HomeModule { }
