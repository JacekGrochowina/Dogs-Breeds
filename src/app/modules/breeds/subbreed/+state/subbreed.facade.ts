import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/+state/app-state.model';
import { GetPhotos } from './subbreed.actions';

@Injectable()
export class SubBreedFacade {
    constructor(private store: Store<AppState>) {
    }
    
    // getPhotos(breed: string, subbreed?: string): void {
    getPhotos(): void {
        this.store.dispatch(new GetPhotos());
    }
}
