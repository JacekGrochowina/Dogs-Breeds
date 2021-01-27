import { BreedsState } from '../resources/interfaces/breeds-state.interface';
import { SettingsState } from '../resources/interfaces/settings-state.interface';

export interface AppState {
    // breeds: any;
    breeds: BreedsState;
    settings?: SettingsState;
}
