import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state/app-state.model';
import { GetBreeds } from './breeds.actions';

import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Breeds } from '../resources/interfaces/Breeds';

@Injectable()
export class BreedsFacade {   
    constructor(private store: Store<AppState>) { }

    getBreeds(): void {
        this.store.dispatch(new GetBreeds());
    }

    breedsResponse(): Observable<Breeds> {
        return this.store.select(store => store.state.breeds).pipe(
            filter(breeds => !!breeds),
        );
    }
}
