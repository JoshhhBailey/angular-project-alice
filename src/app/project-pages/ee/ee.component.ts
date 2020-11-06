import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ee',
  templateUrl: './ee.component.html',
  styleUrls: ['./ee.component.css']
})
export class EeComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Work - EE Future Mobile");
    this.meta.updateTag({ property: 'og:url', content: 'https://www.alicehodgedesign.com/work/ee' });
    this.meta.updateTag({ property: 'og:title', content: "Work - EE Future Mobile" });
    this.meta.updateTag({ property: 'og:description', content: "Storyboarding and asset design for an EE branded animation, via working for The Sideshow Agency." });
    this.meta.updateTag({ property: 'og:image', content: 'https://i.imgur.com/SrdIcaw.jpg' });
    this.meta.updateTag({ property: 'twitter:card', content: 'summary' });
  }

}
