import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state/app-state.model';
import { GetBreeds } from './breeds.actions';

@Injectable()
export class BreedsFacade {
    constructor(private store: Store<AppState>) { }

    getBreeds(): void {
        this.store.dispatch(new GetBreeds());
    }
}
