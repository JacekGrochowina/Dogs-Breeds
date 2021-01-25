import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state/app-state.model';
import { GetBreeds } from './breeds.actions';

import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BreedsList } from '../resources/interfaces/BreedsList';

@Injectable()
export class BreedsFacade {
    constructor(private store: Store<AppState>) { }

    getBreeds(): void {
        this.store.dispatch(new GetBreeds());
    }

    breedsResponse(): Observable<BreedsList> {
        return this.store.select(store => store.breeds).pipe(
            filter(breeds => !!breeds),
        );
    }
}
