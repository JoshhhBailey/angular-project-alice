import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-its-your-time',
  templateUrl: './its-your-time.component.html',
  styleUrls: ['./its-your-time.component.css']
})
export class ItsYourTimeComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Work - It's YOUR time");
    this.meta.updateTag({ property: 'og:url', content: 'https://www.alicehodgedesign.com/work/its-your-time' });
    this.meta.updateTag({ property: 'og:title', content: "Work - It's YOUR time" });
    this.meta.updateTag({ property: 'og:description', content: "A project celebrating periods, using them to your advantage and tackling the stigma surrounding them." });
    this.meta.updateTag({ property: 'og:image', content: 'https://imgur.com/jp9OrWB.jpg' });
    this.meta.updateTag({ property: 'twitter:card', content: 'summary' });
  }

}
