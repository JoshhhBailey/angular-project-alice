import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import * as $ from 'jquery';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Alice Hodge Design - Play");

    // Header
    $("#header-intro").hover(
      function() {
        $(this).parent().css('background', 'url(../../assets/header/scribbles/intro-scribble.svg) no-repeat')},
      function() {
        $(this).parent().css('background', 'none')
      }
    );
    $("#header-work").hover(
      function() {
        $(this).parent().css('background', 'url(../../assets/header/scribbles/work-scribble.svg) no-repeat')},
      function() {
        $(this).parent().css('background', 'none')
      }
    );
    $("#header-me").hover(
      function() {
        $(this).parent().css('background', 'url(../../assets/header/scribbles/me-scribble.svg) no-repeat')},
      function() {
        $(this).parent().css('background', 'none')
      }
    );

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
