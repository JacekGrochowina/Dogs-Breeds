import { AppState } from './app-state.model';
import { BreedsAction, BreedsActionTypes } from './breeds.actions';

const initialState: AppState = {
    breeds: {}
};

export function BreedsReducer(
    state = initialState,
    action: BreedsAction
) {
    switch(action.type) {
        case BreedsActionTypes.getBreeds:
            return {
                ...state
            }

        case BreedsActionTypes.getBreedsSuccess:
            const data = action.payload.message;

            // const breeds = Object.keys(data).map(key => [key, data[key]]);
            // const breeds = Object.entries(data);
            // console.log(Object.entries(data))

            // const breeds = Object.keys(data).map(key => ({breed: key, subBreeds: data[key]}));
            // const breeds = Object.keys(data).map(key => console.log(typeof key));
            // const breeds = Object.keys(data).map(key => console.log(typeof data));
            // const breeds = Object.keys(data).map(key => console.log(data[key]));

            return {
                ...state,
                // breeds
                breeds: Object.entries(data)
            }
            // return {
            //     ...state,
            //     breeds: action.payload.message
            // }

        case BreedsActionTypes.getBreedsFail:
            return state;

        default:
            return state;
    }
}
