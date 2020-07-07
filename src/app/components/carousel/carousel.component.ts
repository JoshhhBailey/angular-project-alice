import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class CarouselComponent {

  logos = ["bt.png",
          "direct-line.png",
          "ee.png",
          "experian.png",
          "freeriderco.png",
          "kfc.png",
          "national-grid.png",
          "westfield.png"];

  responsiveOptions;

  constructor() {
    /*this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];*/
  }
}