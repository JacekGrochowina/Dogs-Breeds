import { BreedsState } from '../resources/interfaces/breeds-state.interface';
import { SettingsState } from '../resources/interfaces/settings-state.interface';

export interface AppState {
    breeds: BreedsState;
    settings: SettingsState;
}
