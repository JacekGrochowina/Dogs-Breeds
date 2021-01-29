import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

import { SubBreedActionTypes, GetPhotosSuccess } from './subbreed.actions';
import { BreedsService } from 'src/app/services/breeds.service';

@Injectable()
export class SubBreedEffects {
    constructor(
        private actions$: Actions,
        private breedsService: BreedsService
    ) { }

    @Effect()
    getPhotos$ = this.actions$.pipe(
        ofType(SubBreedActionTypes.getPhotos),
        switchMap(() => {
          return this.breedsService.getBreedImg('akita')
            .pipe(map(response => new GetPhotosSuccess(response.message)));
        })
    );
}
