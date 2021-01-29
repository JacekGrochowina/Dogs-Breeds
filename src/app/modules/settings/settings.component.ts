import { Component, OnInit } from '@angular/core';
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

export class SettingsComponent implements OnInit {

  range: Range = {
    min: 1,
    max: 100
  }
  photoAmount!: number;
  language!: string;

  constructor(private settingsFacade: SettingsFacade) { }

  ngOnInit() {
    this.handlePhotoAmount();
    this.handleLanguage();
  }

  handlePhotoAmount(): void {
    this.settingsFacade.photoAmount$
      .subscribe((photoAmount: number) => {
        this.photoAmount = photoAmount;
      });
  }

  handleLanguage(): void {
    this.settingsFacade.language$
      .subscribe((language: string) => {
        this.language = language;
      });
  }

  onChangePhotoAmount(): void {
    this.checkValue();
    this.settingsFacade.setNumberPhotos(this.photoAmount);
  }

  checkValue(): void {
    if(this.isTooLow()) {
      this.photoAmount = 1;
    } else if(this.isTooHigh()) {
      this.photoAmount = 100;
    }
  }

  isTooLow(): boolean {
    return this.photoAmount < this.range.min;
  }

  isTooHigh(): boolean {
    return this.photoAmount > this.range.max;
  }

  changeLanguage(): void {
    this.settingsFacade.setLanguage(this.language);
  }
}
