import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Alice Hodge Design - Me");
    this.meta.updateTag({ property: 'og:url', content: 'https://www.alicehodgedesign.com/me' });
    this.meta.updateTag({ property: 'og:title', content: 'Alice Hodge Design - Me' });
    this.meta.updateTag({ property: 'og:description', content: "Hello, I’m Alice. I'm a Designer, Illustrator and Animator, specialising in creating gifs and branding." });
    this.meta.updateTag({ property: 'og:image', content: 'https://i.imgur.com/lLuOenb.jpg' });
    this.meta.updateTag({ property: 'twitter:card', content: 'summary' });

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
    $("#header-play").hover(
      function() {
        $(this).parent().css('background', 'url(../../assets/header/scribbles/play-scribble.svg) no-repeat')},
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
