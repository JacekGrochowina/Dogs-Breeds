import { AppState } from './app-state.model';
import { BreedsAction, BreedsActionTypes } from './breeds.actions';
import { BreedsState } from './../resources/interfaces/breeds-state.interface';

const breedsInitialState: BreedsState = {
  // breeds: [
  //   ["rasa", ["podrasa1", "podrasa2"]],
  //   ["rasa", ["podrasa1", "podrasa2"]],
  // ]
  breeds: []
};

export function BreedsReducer(
  state = breedsInitialState,
  action: BreedsAction
): AppState {
  switch (action.type) {
    case BreedsActionTypes.getBreeds: {
      return {
        ...state
      };
    }

    case BreedsActionTypes.getBreedsSuccess: {
      return {
        ...state,
        breeds: Object.entries(action.payload.message)
      };
    }

    case BreedsActionTypes.getBreedsFail: {
      // return state;
      return {
        ...state
      };
    }

    default:
      // return state;
      return {
        ...state
      };
  }
}
