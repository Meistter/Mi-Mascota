import { Component, OnInit } from '@angular/core';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { interval } from 'rxjs';
import { SlideService } from 'src/app/services/slide.service';
import { Slide } from 'src/app/models/slide';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

  constructor(private slideService: SlideService){}

  slides: Slide[] = []
  ngOnInit(): void {
    this.slides = this.slideService.getSlides()
  }
  config: SwiperOptions = {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    };

    automatico(swiper: Swiper) {
      const segundos = interval(60000);
      segundos.subscribe(() => {
      swiper.slideNext();    
     });
 }
}
