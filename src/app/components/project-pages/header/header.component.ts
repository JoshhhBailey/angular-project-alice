import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#header-intro").hover(
      function() {
        $(this).parent().css('background', 'url(../../../../assets/header/scribbles/intro-scribble.svg) no-repeat')},
      function() {
        $(this).parent().css('background', 'none')
      }
    );
    $("#header-work").hover(
      function() {
        $(this).parent().css('background', 'url(../../../../assets/header/scribbles/work-scribble.svg) no-repeat')},
      function() {
        $(this).parent().css('background', 'none')
      }
    );
    $("#header-play").hover(
      function() {
        $(this).parent().css('background', 'url(../../../../assets/header/scribbles/play-scribble.svg) no-repeat')},
      function() {
        $(this).parent().css('background', 'none')
      }
    );
    $("#header-me").hover(
      function() {
        $(this).parent().css('background', 'url(../../../../assets/header/scribbles/me-scribble.svg) no-repeat')},
      function() {
        $(this).parent().css('background', 'none')
      }
    );
  }

}
