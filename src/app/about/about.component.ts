import { Component, OnInit, } from '@angular/core';
@Component({
  templateUrl: './about.component.html',
  
})
export class AboutComponent implements OnInit {

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  slides = [
    'URL_IMAGEN_1',
    'URL_IMAGEN_2',
    'URL_IMAGEN_3',
    // Agrega más URLs según sea necesario
  ];


  constructor() {
  }

  ngOnInit(): void {
      
  }

}
