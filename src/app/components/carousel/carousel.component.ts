import { Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {

  logos = ["bt.png",
          "directline.png",
          "ee.png",
          "experian.png",
          "freeriderco.png",
          "kfc.png",
          "nationalgrid.png",
          "westfield.png"];

  responsiveOptions;

  constructor(public router: Router) {
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
