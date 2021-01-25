import { BreedsAction, BreedsActionTypes } from './breeds.actions';

const initialState = {};

export function BreedsReducer(
    state = initialState,
    action: BreedsAction
) {
    switch(action.type) {
        case BreedsActionTypes.getBreeds:
            return action.payload;

        case BreedsActionTypes.getBreedsSuccess:
            return action.payload.message;

        case BreedsActionTypes.getBreedsFail:
            return state;

        default:
            return state;
    }
}
