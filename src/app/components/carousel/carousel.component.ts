import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {name: "bt"},
    {name: "directline"},
    {name: "kfc"},
    {name: "experian"},
    {name: "ee"},
    {name: "freeriderco"},
    {name: "westfield"},
    {name: "nationalgrid"}
  ];

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "accessibility": false,
    "swipe": false
  };

}
