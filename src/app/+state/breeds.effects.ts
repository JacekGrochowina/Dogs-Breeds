import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators'

import { BreedsActionTypes, GetBreedsSuccess } from './breeds.actions';
import { BreedsService } from '../services/breeds.service';

@Injectable()
export class BreedsEffects {
    constructor(
        private actions$: Actions,
        private breedsService: BreedsService
    ) { }

    @Effect()
    getBreeds$ = this.actions$.pipe(
        ofType(BreedsActionTypes.getBreeds),
        switchMap(() => {
          return this.breedsService.getBreeds()
            .pipe(map(response => new GetBreedsSuccess(response)));
        })
    );
}
