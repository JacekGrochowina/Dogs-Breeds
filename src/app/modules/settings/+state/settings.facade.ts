import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/+state/app-state.model';
import { SetLanguage, SetNumberPhotos } from './settings.actions';

@Injectable()
export class SettingsFacade {
    photoAmount$ = this.store.select(store => (store as any).settings.photoAmount);
    language$ = this.store.select(store => (store as any).settings.language);

    constructor(private store: Store<AppState>) {
    }

    setNumberPhotos(numberPhotos: number): void {
        this.store.dispatch(new SetNumberPhotos(numberPhotos));
    }

    setLanguage(language: string) {
        this.store.dispatch(new SetLanguage(language))
    }
}
