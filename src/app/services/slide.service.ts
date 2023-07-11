import { Injectable } from '@angular/core';
import { Slide } from '../models/slide';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor() { }
  //Base de datos de Slides para el Carrusel
  slides : Slide[] = [{url_mobile: 'https://i.postimg.cc/50qksXZN/banner-notext-min.jpg', url_full:'https://i.postimg.cc/50qksXZN/banner-notext-min.jpg',alt:'purina-header-img'}]
  
  getSlides(){
    return this.slides
  }
}
