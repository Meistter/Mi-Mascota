import { Injectable } from '@angular/core';
import { Slide } from '../models/slide';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor() { }
  //Base de datos de Slides para el Carrusel
  slides : Slide[] = 
  [{url_mobile: 'https://i.postimg.cc/8z4n2gr8/mascotas-Header.jpg', url_full:'https://i.postimg.cc/8z4n2gr8/mascotas-Header.jpg',alt:'pet-header-img'},   
   {url_mobile: 'https://i.postimg.cc/7PV4xdzV/pet2header-min.jpg', url_full:'https://i.postimg.cc/7PV4xdzV/pet2header-min.jpg',alt:'pet-header-img'},
   {url_mobile: 'https://i.postimg.cc/N03sHXGk/gato.webp', url_full:'https://i.postimg.cc/N03sHXGk/gato.webp',alt:'pet-header-img'},
   {url_mobile: 'https://i.postimg.cc/mD7bNrtf/petheade4.webp', url_full:'https://i.postimg.cc/mD7bNrtf/petheade4.webp',alt:'pet-header-img'},
   {url_mobile: 'https://i.postimg.cc/50qksXZN/banner-notext-min.jpg', url_full:'https://i.postimg.cc/50qksXZN/banner-notext-min.jpg',alt:'pet-header-img'}
  ]
  
  getSlides(){
    return this.slides
  }
}
