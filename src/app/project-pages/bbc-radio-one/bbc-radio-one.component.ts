import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bbc-radio-one',
  templateUrl: './bbc-radio-one.component.html',
  styleUrls: ['./bbc-radio-one.component.css']
})
export class BbcRadioOneComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Work - BBC Radio 1");
    this.meta.addTags([
      { name: 'og:url', content: '/work/bbc-radio-1' },
      { name: 'og:title', content: 'Work - BBC Radio 1' },
      { name: 'og:description', content: 'A stop motion animation illustrating the expectation vs. reality of dealing with a hangover.' },
      { name: 'og:image', content: 'https://imgur.com/UqzJxW8.jpg' },
      { name: 'twitter:card', content: 'summary' }
    ]);
  }

}
