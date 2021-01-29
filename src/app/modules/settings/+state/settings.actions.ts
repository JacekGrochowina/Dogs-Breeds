import { Action } from '@ngrx/store';

export enum SettingsActionTypes {
    setPhotoAmount = '[Settings] Set Number Photos',
    setLanguage = '[Settings] Set Language',
}

export class SetNumberPhotos implements Action {
    readonly type = SettingsActionTypes.setPhotoAmount;

    constructor(public payload: number) {}
}

export class SetLanguage implements Action {
    readonly type = SettingsActionTypes.setLanguage;

    constructor(public payload: string) {}
}

export type SettingsAction
    = SetNumberPhotos
    | SetLanguage;
