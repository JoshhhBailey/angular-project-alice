import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  /*hyphenateURL(str: string) {
    str = str.replace(/'/g, "");  // remove apostrophies
    str = str.replace(/[^A-Z0-9]+/ig, "-").toLowerCase();  // remove symbols
    if (str.endsWith("-")) {
      return str.slice(0, -1);  // remove trailing hyphen
    }
    return str;
  }*/

  // When burger menu open
  hideOverflow(): void {
    if ($("#check").is(':checked')) {
      $('#viewport').css('overflowY', 'hidden');
    }
    else {
      $('#viewport').css('overflowY', 'visible');
    }
  }
}
