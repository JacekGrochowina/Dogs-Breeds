import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/+state/app-state.model';
import { SetLanguage, SetNumberPhotos } from './settings.actions';

@Injectable()
export class SettingsFacade {
    numberPhotos$ = this.store.select(store => (store as any).settings.numberPhotos);
    language$ = this.store.select(store => (store as any).settings.language);

    constructor(private store: Store<AppState>) {
    }

    getNumberPhotos(): number {
        let state: number = 0;
        this.numberPhotos$.subscribe(numberPhotos => state = numberPhotos);
        return state;
    }

    setNumberPhotos(numberPhotos: number): void {
        this.store.dispatch(new SetNumberPhotos(numberPhotos));
    }

    getLanguage() {
        let state: string = '';
        this.language$.subscribe(language => state = language);
        return state;
    }

    setLanguage(language: string) {
        this.store.dispatch(new SetLanguage(language))
    }
}
