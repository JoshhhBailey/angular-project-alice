import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-its-your-time',
  templateUrl: './its-your-time.component.html',
  styleUrls: ['./its-your-time.component.css']
})
export class ItsYourTimeComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Work - It's YOUR time");
  }

}
