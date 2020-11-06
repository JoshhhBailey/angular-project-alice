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
    this.meta.updateTag({ property: 'og:url', content: 'https://www.alicehodgedesign.com/work/freeriderco' });
    this.meta.updateTag({ property: 'og:title', content: "Work - Freerider Co." });
    this.meta.updateTag({ property: 'og:description', content: "Creating engaging social media animations and online advertisements for a maternity lifestyle brand." });
    this.meta.updateTag({ property: 'og:image', content: 'https://i.imgur.com/dQvXu7H.jpg' });
    this.meta.updateTag({ property: 'twitter:card', content: 'summary' });
  }

}
