import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

import { SubBreedActionTypes, GetBreedPhotos, GetBreedPhotosSuccess, GetSubBreedPhotos, GetSubBreedPhotosSuccess } from './subbreed.actions';
import { BreedsService } from 'src/app/services/breeds.service';

@Injectable()
export class SubBreedEffects {
    constructor(
        private actions$: Actions,
        private breedsService: BreedsService
    ) { }

    @Effect()
    getBreedPhotos$ = this.actions$.pipe(
        ofType(SubBreedActionTypes.getBreedPhotos),
        switchMap((action: GetBreedPhotos) => {
          return this.breedsService.getBreedPhotos(action.payload)
            .pipe(map(response => new GetBreedPhotosSuccess(response.message)));
        })
    );

    @Effect()
    getSubBreedPhotos$ = this.actions$.pipe(
        ofType(SubBreedActionTypes.getSubBreedPhotos),
        switchMap((action: GetSubBreedPhotos) => {
          return this.breedsService.getSubBreedPhotos(action.payload)
            .pipe(map(response => new GetSubBreedPhotosSuccess(response.message)));
        })
    );
}
