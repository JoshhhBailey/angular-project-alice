import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-freeriderco',
  templateUrl: './freeriderco.component.html',
  styleUrls: ['./freeriderco.component.css']
})
export class FreeridercoComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Work - Freerider Co.");
  }

}
