import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bbc-radio-one',
  templateUrl: './bbc-radio-one.component.html',
  styleUrls: ['./bbc-radio-one.component.css']
})
export class BbcRadioOneComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Work - BBC Radio 1");
  }

}
