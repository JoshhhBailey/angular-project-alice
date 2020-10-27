import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-freeriderco',
  templateUrl: './freeriderco.component.html',
  styleUrls: ['./freeriderco.component.css']
})
export class FreeridercoComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Work - Freerider Co.");
    this.meta.addTags([
      { name: 'og:url', content: '/work/freeriderco' },
      { name: 'og:title', content: 'Work - Freerider Co.' },
      { name: 'og:description', content: 'Creating engaging social media animations and online advertisements for a maternity lifestyle brand.' },
      { name: 'og:image', content: 'https://i.imgur.com/dQvXu7H.jpg' },
      { name: 'twitter:card', content: 'summary' }
    ]);
  }

}
