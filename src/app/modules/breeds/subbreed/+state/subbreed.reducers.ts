import { SubBreedAction, SubBreedActionTypes } from './subbreed.actions';
import { SubBreedState } from 'src/app/resources/interfaces/subbreed-state.interface';

const subBreedInitialState: SubBreedState = {
    photos: []
};

export function SubBreedReducer(
    state = subBreedInitialState,
    action: SubBreedAction
): SubBreedState {
    switch (action.type) {
        case SubBreedActionTypes.getPhotos: {
            return {
                ...state
            };
        }

        case SubBreedActionTypes.getPhotosSuccess: {
            return {
                ...state,
                photos: action.payload
            };
        }

        case SubBreedActionTypes.getPhotosFail: {
            return {
                ...state
            };
        }

        default:
            return {
                ...state
            };
    }
}
