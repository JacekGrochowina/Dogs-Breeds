import { BreedsActionTypes } from "./breeds.actions";

const initialState = {};

export function BreedsReducer(
    state = initialState,
    action: any
) {
    switch(action.type) {
        case BreedsActionTypes.getBreeds:
            // console.log(action.type, action.payload);
            return action.payload;

        case BreedsActionTypes.getBreedsSuccess:
            // console.log(action.type, action.payload);
            return action.payload.message;

        case BreedsActionTypes.getBreedsFail:
            // console.log(action.type, action.payload);
            return state;

        default:
            return state;
    }
}
