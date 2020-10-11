import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css']
})
export class BurgerMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Burger Menu
    $("#burger-intro-text").hover(
      function() {
        $(this).parent().css('background', 'url(../../../../assets/burger-menu/scribbles/intro-scribble.svg) no-repeat')},
      function() {
        $(this).parent().css('background', 'none')
      }
    );
    $("#burger-work-text").hover(
      function() {
        $(this).parent().css('background', 'url(../../../../assets/burger-menu/scribbles/work-scribble.svg) no-repeat')},
      function() {
        $(this).parent().css('background', 'none')
      }
    );
    $("#burger-play-text").hover(
      function() {
        $(this).parent().css('background', 'url(../../../../assets/burger-menu/scribbles/play-scribble.svg) no-repeat')},
      function() {
        $(this).parent().css('background', 'none')
      }
    );
    $("#burger-me-text").hover(
      function() {
        $(this).parent().css('background', 'url(../../../../assets/burger-menu/scribbles/me-scribble.svg) no-repeat')},
      function() {
        $(this).parent().css('background', 'none')
      }
    );
    $("#scribble5 a").hover(
      function() {
        $(this).parent().css('background', 'url(../../../../assets/burger-menu/scribbles/email-line-wiggle.svg) no-repeat')
        if ($(window).width() < 768) {
          $(this).parent().css('background-position-y', '4.5vw');
        }
        else {
          $(this).parent().css('background-position-y', '35px');
        }
      },
      function() {
        $(this).parent().css('background', 'none')
      }
    );
  }

  // When burger menu open
  hideOverflow(): void {
    if ($("#check").is(':checked')) {
      $('#viewport').css('overflowY', 'hidden');
    }
    else {
      $('#viewport').css('overflowY', 'visible');
    }
  }

}
