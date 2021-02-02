import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/+state/app-state.model';
import { GetBreedPhotos, GetSubBreedPhotos } from './subbreed.actions';

@Injectable()
export class SubBreedFacade {
    photos$ = this.store.select(store => (store as any).subbreed.photos);

    constructor(private store: Store<AppState>) {
    }
    
    getBreedPhotos(breed: string): void {
        this.store.dispatch(new GetBreedPhotos(breed));
    }

    getSubBreedPhotos(breed: string, subbreed: string): void {
        const params: string[] = [breed, subbreed];
        this.store.dispatch(new GetSubBreedPhotos(params));
    }
}
