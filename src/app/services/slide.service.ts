import { Injectable } from '@angular/core';
import { Slide } from '../models/slide';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor() { }
  //Base de datos de Slides para el Carrusel
  slides : Slide[] = 
  [{url_mobile: 'https://i.postimg.cc/BbzRfxdD/petheade4.webp', url_full:'https://i.postimg.cc/BbzRfxdD/petheade4.webp',alt:'pet-header-img'},   
   {url_mobile: 'https://i.postimg.cc/9FNS8RxF/Escritorio.jpg', url_full:'https://i.postimg.cc/9FNS8RxF/Escritorio.jpg',alt:'pet-header-img'},
   {url_mobile: 'https://i.postimg.cc/RV3jQDHT/mascotas-Header-min.jpg', url_full:'https://i.postimg.cc/RV3jQDHT/mascotas-Header-min.jpg',alt:'pet-header-img'},
   {url_mobile: 'https://i.postimg.cc/xjpwm2cC/pet2header-min.jpg', url_full:'https://i.postimg.cc/xjpwm2cC/pet2header-min.jpg',alt:'pet-header-img'},
   {url_mobile: 'https://i.postimg.cc/tJJ8crmp/gato.webp', url_full:'https://i.postimg.cc/tJJ8crmp/gato.webp',alt:'pet-header-img'}   
  ]
  
  getSlides(){
    return this.slides
  }
}
