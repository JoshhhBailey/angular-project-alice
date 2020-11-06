import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-all-different-all-normal',
  templateUrl: './all-different-all-normal.component.html',
  styleUrls: ['./all-different-all-normal.component.css']
})
export class AllDifferentAllNormalComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Work - All Different. All Normal.");
    this.meta.updateTag({ property: 'og:url', content: 'https://www.alicehodgedesign.com/work/all-different-all-normal' });
    this.meta.updateTag({ property: 'og:title', content: "Work - All Different. All Normal." });
    this.meta.updateTag({ property: 'og:description', content: "An integrated campaign aiming to increase the attendance rate of cervical screenings." });
    this.meta.updateTag({ property: 'og:image', content: 'https://i.imgur.com/gZlyQ9u.jpg' });
    this.meta.updateTag({ property: 'twitter:card', content: 'summary' });
  }

}
