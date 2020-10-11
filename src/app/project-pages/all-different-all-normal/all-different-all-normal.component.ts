import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-all-different-all-normal',
  templateUrl: './all-different-all-normal.component.html',
  styleUrls: ['./all-different-all-normal.component.css']
})
export class AllDifferentAllNormalComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Work - All Different. All Normal.");
  }

}
