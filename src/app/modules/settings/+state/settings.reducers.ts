import { SettingsState } from './../../../resources/interfaces/settings-state.interface';
import { SettingsAction, SettingsActionTypes } from './settings.actions';

import { Languages } from './../../../resources/enum/languages.enum';

const settingsInitialState: SettingsState = {
    numberPhotos: 5,
    language: Languages.pl
}

export function SettingsReducer(
    state = settingsInitialState,
    action: SettingsAction
): SettingsState {
    switch (action.type) {
        case SettingsActionTypes.getNumberPhotos: {
            return {
                ...state
            }
        }

        case SettingsActionTypes.setNumberPhotos: {
            return {
                ...state,
                numberPhotos: action.payload
            }
        }

        case SettingsActionTypes.getLanguage: {
            return {
                ...state
            }
        }

        case SettingsActionTypes.setLanguage: {
            console.log(action.payload)
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
