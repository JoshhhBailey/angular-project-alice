import { Component, OnInit } from '@angular/core';

import { PROJECTS } from '../project'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  projects = PROJECTS;

  constructor() { }

  ngOnInit(): void { }

  hyphenateURL(str: string) {
    str = str.replace(/'/g, "");  // remove apostrophies
    str = str.replace(/[^A-Z0-9]+/ig, "-").toLowerCase();  // remove symbols
    if (str.endsWith("-")) {
      return str.slice(0, -1);  // remove trailing hyphen
    }
    return str;
  }
}
