import { BreedsState } from '../resources/interfaces/breeds-state.interface';
import { SettingsState } from '../resources/interfaces/settings-state.interface';
import { SubBreedState } from '../resources/interfaces/subbreed-state.interface';

export interface AppState {
    breeds: BreedsState;
    subbreed: SubBreedState;
    settings: SettingsState;
}
