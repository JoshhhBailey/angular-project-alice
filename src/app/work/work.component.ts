import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Alice Hodge Design - Work");
    this.meta.updateTag({ property: 'og:url', content: 'https://www.alicehodgedesign.com/work' });
    this.meta.updateTag({ property: 'og:title', content: 'Alice Hodge Design - Work' });
    this.meta.updateTag({ property: 'og:description', content: "A collection of my latest design projects, surrounding branding identity, animation and collaborative briefs." });
    this.meta.updateTag({ property: 'og:image', content: 'https://i.imgur.com/vcahDrG.jpeg' });
    this.meta.updateTag({ property: 'twitter:card', content: 'summary' });

    // Header
    $("#header-intro").hover(
      function() {
        $(this).parent().css('background', 'url(../../assets/header/scribbles/intro-scribble.svg) no-repeat')},
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

  /*hyphenateURL(str: string) {
    str = str.replace(/'/g, "");  // remove apostrophies
    str = str.replace(/[^A-Z0-9]+/ig, "-").toLowerCase();  // remove symbols
    if (str.endsWith("-")) {
      return str.slice(0, -1);  // remove trailing hyphen
    }
    return str;
  }*/

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
