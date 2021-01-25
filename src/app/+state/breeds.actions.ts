import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { GetBreedsSuccess as _GetBreedsSuccess } from 'src/app/resources/interfaces/GetBreedsSuccess';
import { BreedsList } from '../resources/interfaces/BreedsList';

export enum BreedsActionTypes {
    getBreeds = '[Breeds] Get Breeds',
    getBreedsSuccess = '[Breeds] Get Breeds Success',
    getBreedsFail = '[Breeds] Get Breeds Fail',
}

export class GetBreeds implements Action {
    readonly type = BreedsActionTypes.getBreeds;

    payload!: BreedsList;
}

export class GetBreedsSuccess implements Action {
    readonly type = BreedsActionTypes.getBreedsSuccess;

    constructor(public payload: _GetBreedsSuccess) {}
}

export class GetBreedsFail implements Action {
    readonly type = BreedsActionTypes.getBreedsFail;

    constructor(public payload: HttpErrorResponse) {}
}

export type BreedsAction
  = GetBreeds
  | GetBreedsSuccess
  | GetBreedsFail;
