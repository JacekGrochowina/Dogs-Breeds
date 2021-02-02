import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum SubBreedActionTypes {
    getBreedPhotos = '[Breed] Get Breed Photos',
    getBreedPhotosSuccess = '[Breed] Get Breed Photos Success',
    getBreedPhotosFail = '[Breed] Get Breed Photos Fail',
    getSubBreedPhotos = '[Subbreed] Get SubBreed Photos',
    getSubBreedPhotosSuccess = '[Subbreed] Get SubBreed Photos Success',
    getSubBreedPhotosFail = '[Subbreed] Get SubBreed Photos Fail'
}

export class GetBreedPhotos implements Action {
    readonly type = SubBreedActionTypes.getBreedPhotos;

    constructor(public payload: string) {}
}

export class GetBreedPhotosSuccess implements Action {
    readonly type = SubBreedActionTypes.getBreedPhotosSuccess;

    constructor(public payload: string[]) {}
}

export class GetBreedPhotosFail implements Action {
    readonly type = SubBreedActionTypes.getBreedPhotosFail;

    constructor(public payload: HttpErrorResponse) {}
}

export class GetSubBreedPhotos implements Action {
    readonly type = SubBreedActionTypes.getSubBreedPhotos;

    constructor(public payload: string[]) {}
}

export class GetSubBreedPhotosSuccess implements Action {
    readonly type = SubBreedActionTypes.getSubBreedPhotosSuccess;

    constructor(public payload: string[]) {}
}

export class GetSubBreedPhotosFail implements Action {
    readonly type = SubBreedActionTypes.getSubBreedPhotosFail;

    constructor(public payload: HttpErrorResponse) {}
}

export type SubBreedAction
    = GetBreedPhotos
    | GetBreedPhotosSuccess
    | GetBreedPhotosFail
    | GetSubBreedPhotos
    | GetSubBreedPhotosSuccess
    | GetSubBreedPhotosFail;
    