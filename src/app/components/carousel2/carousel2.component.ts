import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css']
})
export class Carousel2Component {

  logos = ["bt.png",
          "directline.png",
          "ee.png",
          "experian.png",
          "freeriderco.png",
          "kfc.png",
          "nationalgrid.png",
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
