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
        case SubBreedActionTypes.getBreedPhotos: {
            return {
                ...state
            };
        }

        case SubBreedActionTypes.getBreedPhotosSuccess: {
            return {
                ...state,
                photos: action.payload
            };
        }

        case SubBreedActionTypes.getBreedPhotosFail: {
            return {
                ...state
            };
        }

        case SubBreedActionTypes.getSubBreedPhotos: {
            return {
                ...state
            };
        }

        case SubBreedActionTypes.getSubBreedPhotosSuccess: {
            return {
                ...state,
                photos: action.payload
            };
        }

        case SubBreedActionTypes.getSubBreedPhotosFail: {
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
