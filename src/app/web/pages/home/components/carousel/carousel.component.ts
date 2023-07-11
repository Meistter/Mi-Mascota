import { Component } from '@angular/core';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { interval } from 'rxjs';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

slides = [{image:'https://i.postimg.cc/XN8Z32ns/banner-notext.jpg', url:''},
          // {image:'https://i.postimg.cc/Hx34wMLL/logo.jpg', url:''}
         ]

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
