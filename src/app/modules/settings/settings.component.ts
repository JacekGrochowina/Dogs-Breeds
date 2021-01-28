import { Component } from '@angular/core';
import { SettingsFacade } from './+state/settings.facade';

interface Range {
  min: number;
  max: number;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  range: Range = {
    min: 1,
    max: 100
  }
  numberPhotos: number = this.settingsFacade.getNumberPhotos();
  language: string = this.settingsFacade.getLanguage();

  constructor(private settingsFacade: SettingsFacade) { }

  changeNumberPhotos(): void {
    this.checkValue();
    if(this.isCorrect()) {
      this.settingsFacade.setNumberPhotos(this.numberPhotos);
    }
  }

  checkValue(): void {
    if(this.isTooLow()) {
      this.numberPhotos = 1;
    }
    if(this.isTooHigh()) {
      this.numberPhotos = 100;
    }
  }

  isTooLow(): boolean {
    return this.numberPhotos < this.range.min;
  }

  isTooHigh(): boolean {
    return this.numberPhotos > this.range.max;
  }

  isCorrect(): boolean {
    return this.numberPhotos >= this.range.min || this.numberPhotos <= this.range.max;
  }

  changeLanguage(): void {
    this.settingsFacade.setLanguage(this.language);
  }
}
