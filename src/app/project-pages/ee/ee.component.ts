import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ee',
  templateUrl: './ee.component.html',
  styleUrls: ['./ee.component.css']
})
export class EeComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Work - EE Future Mobile");
  }

}
