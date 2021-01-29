import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum SubBreedActionTypes {
    getPhotos = '[Subbreed] Get Photos',
    getPhotosSuccess = '[Subbreed] Get Photos Success',
    getPhotosFail = '[Subbreed] Get Photos Fail',
}

export class GetPhotos implements Action {
    readonly type = SubBreedActionTypes.getPhotos;
}

export class GetPhotosSuccess implements Action {
    readonly type = SubBreedActionTypes.getPhotosSuccess;

    constructor(public payload: string[]) {}
}

export class GetPhotosFail implements Action {
    readonly type = SubBreedActionTypes.getPhotosFail;

    constructor(public payload: HttpErrorResponse) {}
}

export type SubBreedAction
    = GetPhotos
    | GetPhotosSuccess
    | GetPhotosFail;
    