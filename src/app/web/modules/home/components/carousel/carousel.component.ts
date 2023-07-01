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

slides = [{image:'https://i.postimg.cc/hGWrcgwK/banner-notext.jpg', url:''},
          // {image:'../../../../assets/logo.jpg', url:''}
         ]

  config: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: false,
    pagination: { clickable: false },
    scrollbar: { draggable: false },
    };

    automatico(swiper: Swiper) {
      const segundos = interval(60000);
      segundos.subscribe(() => {
      swiper.slideNext();
     });
 }
}
