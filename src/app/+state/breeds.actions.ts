import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { GetBreedsSuccessPayload } from 'src/app/resources/action-payloads/get-breeds-success.payload';

export enum BreedsActionTypes {
    getBreeds = '[Breeds] Get Breeds',
    getBreedsSuccess = '[Breeds] Get Breeds Success',
    getBreedsFail = '[Breeds] Get Breeds Fail',
}

export class GetBreeds implements Action {
    readonly type = BreedsActionTypes.getBreeds;
}

export class GetBreedsSuccess implements Action {
    readonly type = BreedsActionTypes.getBreedsSuccess;

    constructor(public payload: GetBreedsSuccessPayload) {}
}

export class GetBreedsFail implements Action {
    readonly type = BreedsActionTypes.getBreedsFail;

    constructor(public payload: HttpErrorResponse) {}
}

export type BreedsAction
  = GetBreeds
  | GetBreedsSuccess
  | GetBreedsFail;
