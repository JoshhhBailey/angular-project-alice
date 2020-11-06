import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import * as $ from 'jquery';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Alice Hodge Design - Intro");
    this.meta.updateTag({ property: 'og:url', content: 'https://www.alicehodgedesign.com/intro' });
    this.meta.updateTag({ property: 'og:title', content: 'Alice Hodge Design - Intro' });
    this.meta.updateTag({ property: 'og:description', content: "Hello, I’m Alice. I'm a Designer, Illustrator and Animator, specialising in creating gifs and branding." });
    this.meta.updateTag({ property: 'og:image', content: 'https://i.imgur.com/XaMlaYV.png' });
    this.meta.updateTag({ property: 'twitter:card', content: 'summary' });

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

  // Scroll when arrow is clicked
  scrollTo(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
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
