import { SettingsState } from './../../../resources/interfaces/settings-state.interface';
import { SettingsAction, SettingsActionTypes } from './settings.actions';

import { Languages } from './../../../resources/enum/languages.enum';

const settingsInitialState: SettingsState = {
    photoAmount: 6,
    language: Languages.en
}

export function SettingsReducer(
    state = settingsInitialState,
    action: SettingsAction
): SettingsState {
    switch (action.type) {
        case SettingsActionTypes.setPhotoAmount: {
            return {
                ...state,
                photoAmount: action.payload
            }
        }

        case SettingsActionTypes.setLanguage: {
            return {
                ...state,
                language: action.payload
            }
        }

        default:
            return {
              ...state
            };
    }
}
