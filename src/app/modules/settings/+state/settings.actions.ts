import { Action } from '@ngrx/store';

export enum SettingsActionTypes {
    getNumberPhotos = '[Settings] Get Number Photos',
    setNumberPhotos = '[Settings] Set Number Photos',
    getLanguage = '[Settings] Get Language',
    setLanguage = '[Settings] Set Language',
}

export class GetNumberPhotos implements Action {
    readonly type = SettingsActionTypes.getNumberPhotos;
}

export class SetNumberPhotos implements Action {
    readonly type = SettingsActionTypes.setNumberPhotos;

    constructor(public payload: number) {}
}

export class GetLanguage implements Action {
    readonly type = SettingsActionTypes.getLanguage;
} 

export class SetLanguage implements Action {
    readonly type = SettingsActionTypes.setLanguage;

    constructor(public payload: string) {}
}

export type SettingsAction
    = GetNumberPhotos
    | SetNumberPhotos
    | GetLanguage
    | SetLanguage;
