import { Component } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

 images = [{url: '../../../../assets/banner_notext.jpg', indice: 0},
           {url: '../../../../assets/bandera.jpg', indice: 1}]

   
}
