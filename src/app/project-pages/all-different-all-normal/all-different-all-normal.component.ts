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
    this.meta.addTags([
      { name: 'og:url', content: '/work/all-different-all-normal' },
      { name: 'og:title', content: 'Work - All Different. All Normal.' },
      { name: 'og:description', content: 'An integrated campaign aiming to increase the attendance rate of cervical screenings.' },
      { name: 'og:image', content: 'https://i.imgur.com/gZlyQ9u.jpg' },
      { name: 'twitter:card', content: 'summary' }
    ]);
  }

}
