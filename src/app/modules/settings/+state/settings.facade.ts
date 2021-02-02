import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/+state/app-state.model';
import { SetLanguage, SetPhotoAmount } from './settings.actions';

@Injectable()
export class SettingsFacade {
    photoAmount$ = this.store.select(store => (store as any).settings.photoAmount);
    language$ = this.store.select(store => (store as any).settings.language);

    constructor(private store: Store<AppState>) {
    }

    setPhotoAmount(numberPhotos: number): void {
        this.store.dispatch(new SetPhotoAmount(numberPhotos));
    }

    setLanguage(language: string): void {
        this.store.dispatch(new SetLanguage(language))
    }
}
