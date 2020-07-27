import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
