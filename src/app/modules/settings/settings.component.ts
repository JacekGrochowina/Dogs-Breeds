import { Component, OnInit } from '@angular/core';

interface Range {
  min: number;
  max: number;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  range: Range = {
    min: 1,
    max: 100
  }
  numberPhoto: number = 5;
  language: string = 'pl';

  constructor() { }

  ngOnInit(): void {
  }

  checkValue(): void {
    if(this.numberPhoto <= this.range.min) {
      this.numberPhoto = 1;
    }
    if(this.numberPhoto > this.range.max) {
      this.numberPhoto = 100;
    }
  }

}
