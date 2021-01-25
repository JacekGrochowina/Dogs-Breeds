import { Action } from '@ngrx/store';

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

    constructor(public payload: any) {}
}

export class GetBreedsFail implements Action {
    readonly type = BreedsActionTypes.getBreedsFail;

    constructor(public payload: any) {}
}

export type BreedsAction
  = GetBreeds
  | GetBreedsSuccess
  | GetBreedsFail;
