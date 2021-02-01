import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { SettingsFacade } from './+state/settings.facade';
import { Range } from './../../resources/interfaces/range.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  
  range: Range = {
    min: 1,
    max: 100
  }
  photoAmount!: number;
  language!: string;
  
  settingsFormGroup = this.fb.group({
    photoAmount: ['', [
      Validators.min(1),
      Validators.max(100)
    ]],
    language: [''],
  })

  private language$!: Subscription;
  private photoAmount$!: Subscription;
  private unsubscribeSubject = new Subject<void>();

  constructor(
    private settingsFacade: SettingsFacade,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.handlePhotoAmount();
    this.handleLanguage();
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();

    this.photoAmount$.unsubscribe();
    this.language$.unsubscribe();
  }

  onChangePhotoAmount(): void {
    this.checkValue();
    this.settingsFacade.setPhotoAmount(this.settingsFormGroup.value.photoAmount);
  }

  selectLanguage(): void {
    this.settingsFacade.setLanguage(this.language);
  }

  private handlePhotoAmount(): void {
    this.photoAmount$ = this.settingsFacade.photoAmount$
      .subscribe((photoAmount: number) => {
        this.settingsFormGroup.patchValue({
          photoAmount: photoAmount,
        });
      });
  }

  private handleLanguage(): void {
    this.language$ = this.settingsFacade.language$
      .subscribe((language: string) => {
        this.settingsFormGroup.patchValue({
          language: language,
        })
      });
  }

  private checkValue(): void {
    if(this.isTooLow()) {
      this.settingsFormGroup.patchValue({
        photoAmount: this.range.min,
      })
    } else if(this.isTooHigh()) {
      this.settingsFormGroup.patchValue({
        photoAmount: this.range.max,
      })
    }
  }

  private isTooLow(): boolean {
    return this.settingsFormGroup.value.photoAmount < this.range.min;
  }

  private isTooHigh(): boolean {
    return this.settingsFormGroup.value.photoAmount > this.range.max;
  }
}
